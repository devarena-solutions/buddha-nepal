import { Language } from "@/utils/site";
import { drinks, menu } from "@/utils/translations";
import Head from "next/head";
import { useRouter } from "next/router";

export default function Drinks() {
  const router = useRouter();

  const t = router.locale as Language;

  return (
    <div>
      <Head>
        <title>BUDDHA - Drinks</title>
      </Head>

      <div className="flex justify-center my-[100px]">
        <div className="w-[350px] md:w-[700px] lg:w-[1000px] xl:w-[1200px]">
          <div
            className="flex items-center gap-5"
            id={drinks.bottle_beer.name.en}
          >
            <h1 className="text-[27px] md:text-[40px] font-bold text-primary">
              {drinks.bottle_beer.name[t]}
            </h1>
            <hr className="flex-1 border-[1px] border-primary" />
          </div>
          <div className="w-full grid lg:grid-cols-1">
            {drinks.bottle_beer.items.map((item, index) => (
              <div className="w-full mt-5" key={index}>
                <div className="flex font-bold text-primary justify-between text-[15px] md:text-[23px]">
                  <h2>{item.name[t]}</h2> {item.price && <p>{item.price} kr</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-center my-[100px]">
        <div className="w-[350px] md:w-[700px] lg:w-[1000px] xl:w-[1200px]">
          <div className="flex items-center gap-5" id={drinks.juice.name.en}>
            <h1 className="text-[27px] md:text-[40px] font-bold text-primary">
              {drinks.juice.name[t]}
            </h1>
            <hr className="flex-1 border-[1px] border-primary" />
          </div>
          <div className="w-full grid lg:grid-cols-1">
            {drinks.juice.items.map((item, index) => (
              <div className="w-full mt-5" key={index}>
                <div className="flex font-bold text-primary justify-between text-[15px] md:text-[23px]">
                  <h2>{item.name[t]}</h2> {item.price && <p>{item.price} kr</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-center my-[100px]">
        <div className="w-[350px] md:w-[700px] lg:w-[1000px] xl:w-[1200px]">
          <div
            className="flex items-center gap-5"
            id={drinks.hot_beverage.name.en}
          >
            <h1 className="text-[27px] md:text-[40px] font-bold text-primary">
              {drinks.hot_beverage.name[t]}
            </h1>
            <hr className="flex-1 border-[1px] border-primary" />
          </div>
          <div className="w-full grid lg:grid-cols-1">
            {drinks.hot_beverage.items.map((item, index) => (
              <div className="w-full mt-5" key={index}>
                <div className="flex font-bold text-primary justify-between text-[15px] md:text-[23px]">
                  <h2>{item.name[t]}</h2> {item.price && <p>{item.price} kr</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-center my-[50px]">
        <div className="w-[350px] md:w-[700px] lg:w-[1000px] xl:w-[1200px]">
          <div className="flex items-center gap-5" id={drinks.drinks.name.en}>
            <h1 className="text-[27px] md:text-[40px] font-bold text-primary">
              {drinks.drinks.name[t]}
            </h1>
            <hr className="flex-1 border-[1px] border-primary" />
          </div>
          <h2 className="text-primary text-[20px] font-semibold">
            {drinks.drinks.description[t]}
          </h2>
          <div className="w-full grid lg:grid-cols-1">
            {drinks.drinks.items.map((item, index) => (
              <div className="w-full mt-5" key={index}>
                <div className="flex font-bold text-primary justify-between text-[15px] md:text-[23px]">
                  <h2>{item.name[t]}</h2> {item.price && <p>{item.price} kr</p>}
                </div>
                <h1>{item.description && item.description[t]}</h1>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-center my-[100px]">
        <div className="w-[350px] md:w-[700px] lg:w-[1000px] xl:w-[1200px]">
          <div className="flex items-center gap-5" id={drinks.red_wine.name.en}>
            <h1 className="text-[27px] md:text-[40px] font-bold text-primary">
              {drinks.red_wine.name[t]}
            </h1>
            <hr className="flex-1 border-[1px] border-primary" />
          </div>
          <div className="w-full grid lg:grid-cols-1 gap-7">
            {drinks.red_wine.items.map((item, index) => (
              <div className="mt-5" key={index}>
                <h2 className="text-[25px] md:text-[32px] text-primary font-bold">
                  {item.name[t]}
                </h2>
                <div>
                  {item.sub?.map((sub) => (
                    <div key={sub.name[t]} className="grid gap-3 ml-3 mt-5">
                      <div className="flex gap-5 text-[18px] font-semibold text-primary">
                        <div className="flex items-center gap-1">
                          <>•</>
                          <h1>{sub.name[t]}</h1>
                        </div>
                        {sub.price && <p>{sub.price} kr</p>}
                      </div>
                      {/* <h2>{sub.name && sub.name[t]}</h2> */}
                      <h2>{sub.description && sub.description[t]}</h2>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
