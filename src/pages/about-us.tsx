import { galleryArray, icons } from "@/utils/icons";
import { Language } from "@/utils/site";
import { about_us, homepage } from "@/utils/translations";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";

export default function AboutUs() {
  const router = useRouter();

  const t = router.locale as Language;

  return (
    <div className="">
      <Head>
        <title>Buddha Nepal - About Us</title>
      </Head>
      <div className="flex justify-center py-[50px]">
        <div className="w-[350px] md:w-[700px] mb-[25px] lg:mb-[100px] lg:w-[1000px] xl:w-[1200px] flex items-start flex-col justify-center gap-10">
          <div className="grid place-content-center max-w-[450px] flex-1">
            <div className="flex flex-col lg:text-start text-center gap-5">
              <h1 className="text-[38px] font-semibold text-primary">
                {about_us.about_us[t]}
              </h1>
              <p>{about_us.first_description[t]}</p>
              <div className="flex mt-5 justify-between">
                <div className="flex flex-col items-center gap-3">
                  <Image src={icons.speed} alt="speed" />
                  <h2>{about_us.fast_service[t]}</h2>
                </div>
                <hr className="h-full border" />
                <div className="flex flex-col items-center gap-3">
                  <Image src={icons.grape} alt="speed" />
                  <h2>{about_us.fresh_food[t]}</h2>
                </div>
                <hr className="h-full border" />
                <div className="flex flex-col items-center gap-3">
                  <Image src={icons.headphones} alt="speed" />
                  <h2>{about_us.fast_support[t]}</h2>
                </div>
              </div>
            </div>
          </div>
{/*           <div className="bg-restaurant bg-cover bg-center flex-none h-[300px] lg:h-[750px] w-full rounded"></div>
 */}        </div>
      </div>

      <div className="flex justify-center pb-[150px] lg:pb-[100px] text-center lg:text-start">
        <div className="w-[350px] md:w-full md:mx-[50px] lg:mx-0 lg:w-[1000px] xl:w-[1200px] flex items-center flex-col-reverse lg:flex-row justify-center gap-10">
          <div className="bg-cover flex flex-col items-center gap-5 lg:flex-row lg:items-end h-fit -z-10">
            <Image
              src={icons.food_one}
              width={450}
              alt="food"
              className="rounded lg:-translate-y-[75px]"
            />
            <Image
              src={icons.food_two}
              alt="food"
              height={270}
              className="rounded lg:-translate-x-[50px] w-full lg:w-[175px] object-fill "
            />
          </div>

          <div className="grid w-full lg:max-w-[450px] flex-1">
            <div className="flex flex-col gap-3">
              <h2 className="text-[23px] font-semibold text-primary">
                {about_us.about_us[t]}
              </h2>
              <h1 className="text-[38px] font-semibold">
                {about_us.second_title[t]}
              </h1>
              <p>{about_us.second_description[t]}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center lg:my-[75px] lg:text-start text-center">
        <div className="w-[350px] md:w-[700px] mb-[0px] lg:w-[1000px] xl:w-[1200px]">
          <div>
            <h2 className="text-primary text-[29px] font-bold">
              {about_us.featured_food[t]}
            </h2>
            <h1 className="text-[30px] lg:text-[45px] font-semibold lg:w-[13ch]">
              {about_us.featured_food_info[t]}
            </h1>
          </div>
          <div className="grid mt-[50px] grid-cols-1 gap-14 text-start lg:gap-1 lg:grid-cols-3 justify-between">
            {/* {homepage.dishes.slice(3, 6).map((item) => (
              <div
                key={item.name.en}
                className="h-[500px] lg:w-[300px] xl:w-[350px] lg:h-[450px] xl:h-[500px] bg-cover bg-no-repeat bg-center flex items-end"
                style={{ backgroundImage: `url(${item.source})` }}
              ></div>
            ))} */}
            {galleryArray.map((item, index) => (
              <Image
                key={index}
                src={item.src}
                alt="images"
                className={`object-cover h-[300px] w-full ${
                  [4, 5].includes(index) ? "object-left" : "object-center"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-[50px]">
        <div className="w-[350px] md:w-[700px] mb-[100px] lg:w-[1000px] xl:w-[1200px]">
          <iframe
            title="map"
            className="w-full h-[400px]"
            loading="lazy"
            src={`https://www.google.com/maps/embed/v1/place?key=${
              process.env.NEXT_PUBLIC_GOOGLE_API
            }&q=cumin+stockholm&language=${t === "en" ? "en" : "sv"}`}
          ></iframe>
        </div>
      </div>
    </div>
  );
}
