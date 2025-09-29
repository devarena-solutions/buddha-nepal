import { icons } from "@/utils/icons";
import { sacredImages } from "@/utils/sacredImages";
import { type Language, homepage } from "@/utils/translations";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { toast } from "react-toastify";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {
  useLocation,
  DEFAULT_LOCATION,
  type LocationKey,
} from "@/context/LocationContext";
import { useTheme } from "@/context/ThemeContext";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export default function Homepage() {
  const router = useRouter();
  const { location, locations } = useLocation();

  const t = router.locale as keyof Language;

  const activeLocationKey = (location ?? DEFAULT_LOCATION) as LocationKey;
  const activeLocation = locations[activeLocationKey];
  const mapSrc = activeLocation.mapSrc;
  const contactNumbers = activeLocation.phones;

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [time, setTime] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [guests, setGuests] = useState<string>("");

  const [isLoading, setIsLoading] = useState(false);
  const { theme } = useTheme();

  async function formHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setIsLoading(true);

    const res = await fetch("/api/mail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        guests,
        email,
        date,
        phone,
        time,
        message,
      }),
    });
    const data = await res.json();
    console.log(data);

    if (res.ok) {
      toast.success("Reservation mail sent", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme,
      });
      setIsLoading(false);
    }

    if (!res.ok) {
      toast.error("Could not be sent, please try again later", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme,
      });

      setIsLoading(false);
    }
  }

  return (
    <div>
      <Head>
        <title>BUDDHA</title>
      </Head>
      <div className="slider-container">
        <Carousel
          responsive={responsive}
          itemClass="slider-image"
          infinite
          autoPlay
          autoPlaySpeed={3000}
        >
          <Image src={icons.homeSlider1} alt="Food-1" />
          <Image src={icons.homeSlider2} alt="Food-2" />
          <Image src={icons.homeSlider3} alt="Food-2" />
        </Carousel>

        <div className="slider-message">
          <h1 className="text-[23px] lg:text-[32px] font-bold text-white dark:text-slate-100">
            BUDDHA
          </h1>

          <h1 className="mt-6 text-[23px] lg:text-[25px] text-white dark:text-slate-200">
            {homepage.title[t]}
          </h1>

          <div className="relative inline-flex  group">
            <div className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
            <button
              onClick={() =>
                document.getElementById("form")?.scrollIntoView({
                  behavior: "smooth",
                  block: "center",
                  inline: "end",
                })
              }
              title="Get quote now"
              className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 dark:bg-slate-100/10 dark:text-emerald-100 dark:focus:ring-emerald-200/40 dark:focus:ring-offset-slate-950/60"
              role="button"
            >
              {homepage.reservation_button[t]}
            </button>
          </div>
        </div>
      </div>

      {/* <div className="flex flex-col lg:flex-row bg-cover px-2 h-fit lg:h-[70vh]">
        <div className="w-full md:h-[50%] py-[50px] lg:w-[35%] lg:h-[70vh] bg-primary grid place-content-center text-white">
          <div className="flex flex-col items-center gap-4">
            <Image
              src={icons.namaste}
              alt="namaste"
              className="namaste-image"
            />
            <Image
              src={icons.swagatam}
              alt="swagatam"
              className="welcome-image"
            />

            <h1 className="text-[23px] lg:text-[32px] font-bold">
              BUDDHA
            </h1>

            <h1 className="text-[23px] lg:text-[25px]">{homepage.title[t]}</h1>
            <button
              onClick={() =>
                document.getElementById("form")?.scrollIntoView({
                  behavior: "smooth",
                  block: "center",
                  inline: "end",
                })
              }
              className="text-2xl bg-white text-primary font-semibold px-5 py-3 rounded mt-2 "
            >
              {homepage.reservation_button[t]}
            </button>
          </div>
        </div>
        <div className="bg-wallpaper2 bg-cover bg-center lg:flex lg:flex-1 h-[300px] md:h-[600px] lg:h-full "></div>
      </div> */}

      <div className="flex justify-center bg-white/80 text-slate-900 transition-colors text-center md:text-start dark:bg-slate-900/60 dark:text-slate-100">
        <div className="w-[350px] md:w-[700px] lg:w-[1000px] xl:w-[1200px] grid grid-cols-1 lg:grid-cols-1 gap-4 lg:gap-7 my-[50px] ">
          <div className="flex flex-col gap-7">
            <h2 className="text-[23px] text-primary dark:text-emerald-200">{homepage.intro[t]}</h2>
            <h1 className="text-[32px] text-primary font-bold dark:text-emerald-200">
              {homepage.intro_header[t]}
            </h1>
            <p className="text-lg">{homepage.intro_description_one[t]}</p>
            <p className="text-lg">{homepage.intro_description_two[t]}</p>
            <div className="grid w-full grid-cols-1 gap-5 pt-2 sm:grid-cols-3">
              {sacredImages.map((item) => (
                <figure
                  key={item.key}
                  className="flex flex-col items-center gap-3 text-center"
                >
                  <div
                    className="relative w-full overflow-hidden rounded-xl border border-primary/20 bg-white/80 shadow-sm dark:border-emerald-200/30 dark:bg-slate-900/70"
                    style={{ aspectRatio: "1 / 1" }}
                  >
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      sizes="(min-width: 1024px) 280px, (min-width: 768px) 220px, 90vw"
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="text-base font-semibold text-primary dark:text-emerald-200">
                    {item.label}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
          {/*           <div className="bg-snow bg-cover w-full h-[200px] lg:h-[600px] rounded-lg"></div>
           */}{" "}
        </div>
      </div>

      <div className=" w-full flex flex-col items-center gap-10 bg-primary-blur px-3 py-[75px] text-white text-center transition-colors md:text-start dark:bg-emerald-900/30 dark:text-slate-200">
        <div className="w-[350px] md:w-[700px] lg:w-[1000px] xl:w-[1200px]">
          <h2 className="text-[23px] font-semibold text-primary dark:text-emerald-200">
            {homepage.menu_title[t]}
          </h2>
          <h1 className="text-[32px] font-bold text-slate-900 dark:text-slate-100">
            {homepage.menu_description[t]}
          </h1>
        </div>
        <div className="food-scroll w-full pb-2 flex flex-row gap-5 overflow-x-auto">
          {homepage.dishes.map((item) => (
            <div
              key={item.name.en}
              className="food-banner relative rounded-2xl flex-none overflow-hidden w-[250px] h-[300px] md:w-[300px] md:h-[400px] flex flex-col justify-end bg-cover bg-center shadow-xl shadow-black/10 ring-1 ring-white/10"
              style={{ backgroundImage: `url(${item.source})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="relative w-full p-5 text-left text-white flex flex-col gap-2 dark:text-slate-200">
                <h2 className="text-lg font-semibold md:text-xl lg:text-2xl">
                  {item.name[t]}
                </h2>
                <p className="text-sm md:text-base leading-relaxed opacity-90">
                  {item.description[t]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-reservation bg-cover h-fit py-[75px] flex justify-center text-center md:text-start">
        <div className="w-[350px] lg:w-[1000px] xl:w-[1200px] md:w-[700px] flex items-center flex-col lg:grid grid-cols-2 gap-14">
          <div className="flex items-center">
            <div className="text-white h-fit grid gap-10 dark:text-slate-200">
              <h2 className="text-[18px]">{homepage.contact_us[t]}</h2>
              <h1 className="text-[28px] font-bold">
                {homepage.contact_description_one[t]}
              </h1>
              <p>{homepage.contact_description_two[t]}</p>
              <div className="flex gap-10 items-center md:gap-4 flex-col md:flex-row [&>div]:rounded-md justify-between text-slate-900 dark:text-slate-100">
                <div className="w-[250px] h-[175px] bg-white/95 dark:bg-slate-900/80 flex flex-col items-center shadow-lg shadow-black/10">
                  <div className="bg-primary p-5 w-fit rounded-full mt-[-30px] shadow-lg shadow-primary/30">
                    <Image src={icons.phone} alt="phone" className="invert" />
                  </div>

                  <h1 className="text-[23px] mt-3 font-semibold">
                    {homepage.phone[t]}
                  </h1>
                  <p className="text-sm text-primary mt-1 uppercase tracking-wide dark:text-emerald-200">
                    {activeLocation.shortName}
                  </p>
                  <div className="flex flex-col items-center gap-2">
                    {contactNumbers.map((phoneNumber) => {
                      const sanitized = phoneNumber.replace(/\s+/g, "");
                      return (
                        <Link key={sanitized} href={`tel:${sanitized}`}>
                          <h1 className="mt-[10px]">{phoneNumber}</h1>
                        </Link>
                      );
                    })}
                  </div>
                  {/* <h1 className="">093 234 34324</h1> */}
                </div>
                <div className="w-[250px] h-[175px] bg-white/95 dark:bg-slate-900/80 flex flex-col items-center shadow-lg shadow-black/10">
                  <div className="bg-primary p-5 w-fit rounded-full mt-[-30px] shadow-lg shadow-primary/30">
                    <Image src={icons.mail} alt="phone" className="invert" />
                  </div>

                  <h1 className="text-[23px] mt-3 font-semibold">
                    {homepage.email[t]}
                  </h1>
                  <Link href={"mailto:buddhanepal0707@gmail.com"}>
                    <h1 className="mt-[20px]">buddhanepal0707@gmail.com</h1>
                  </Link>
                  {/* <h1 className="">test@gmail.com</h1> */}
                </div>
              </div>
            </div>
          </div>
          <form
            id="form"
            onSubmit={formHandler}
            className=" md:mx-0 bg-white/95 text-slate-900 dark:bg-slate-900/80 dark:text-slate-100 rounded-lg md:w-full h-[550px] lg:h-full py-[30px] px-4 md:px-7 gap-5 flex flex-col items-center shadow-xl shadow-black/10"
          >
            <h1 className="text-[28px] font-bold">
              {homepage.table_reservation_title[t]}
            </h1>
            <div className="w-full grid grid-cols-2 flex-1 [&>input]:border [&>input]:rounded [&>input]:px-2 md:[&>input]:px-5 [&>input]:border-[#ddd] gap-3">
              <input
                type="text"
                className="focus:border-primary border outline-none dark:border-slate-700 dark:bg-slate-800/60"
                placeholder={`${homepage.name[t]}*`}
                onChange={(e) => setName(e.target.value)}
                value={name}
                required
              />
              <input
                type="email"
                className="focus:border-primary border outline-none dark:border-slate-700 dark:bg-slate-800/60"
                placeholder={`${homepage.mail[t]}*`}
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
              />
              <input
                type="tel"
                className="focus:border-primary border outline-none dark:border-slate-700 dark:bg-slate-800/60"
                placeholder={`${homepage.phone_number[t]}*`}
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
                required
              />
              <input
                type="number"
                className="focus:border-primary border outline-none dark:border-slate-700 dark:bg-slate-800/60"
                placeholder={`${homepage.guests[t]}*`}
                onChange={(e) => setGuests(e.target.value)}
                value={guests}
                required
              />
              <input
                type="date"
                className="focus:border-primary border outline-none dark:border-slate-700 dark:bg-slate-800/60"
                placeholder={`${homepage.date[t]}*`}
                onChange={(e) => setDate(e.target.value)}
                value={date}
                required
              />
              <input
                type="time"
                className="focus:border-primary border outline-none dark:border-slate-700 dark:bg-slate-800/60"
                placeholder={`${homepage.time[t]}*`}
                onChange={(e) => setTime(e.target.value)}
                value={time}
                required
              />
            </div>
            <textarea
              placeholder={`${homepage.message[t]}`}
              className="focus:border-primary border outline-none w-full border-[#ddd] rounded pl-5 pt-3 h-[150px] dark:border-slate-700 dark:bg-slate-800/60"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            />
            <button
              disabled={isLoading}
              className="bg-primary w-full text-white font-semibold py-3 rounded transition hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-80 dark:bg-emerald-200/20 dark:text-emerald-100 dark:hover:bg-emerald-200/30"
            >
              {homepage.reservation_button[t]}
            </button>
          </form>
        </div>
      </div>

      <div className="flex justify-center mt-[50px]">
        <div className="w-[350px] md:w-[700px] mb-[100px] lg:w-[1000px] xl:w-[1200px]">
          <iframe
            title="map"
            className="w-full h-[500px]"
            loading="lazy"
            src={mapSrc}
          ></iframe>
        </div>
      </div>
    </div>
  );
}
