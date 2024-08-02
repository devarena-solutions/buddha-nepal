import { useState } from "react";
import { catering, homepage } from "@/utils/translations";
import { useRouter } from "next/router";
import { Language } from "@/utils/site";
import Image from "next/image";
import { toast } from "react-toastify";
import { icons } from "@/utils/icons";
import Head from "next/head";

export default function Catering() {
  const [categoryIndex, setCategoryIndex] = useState(0);

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [time, setTime] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [guests, setGuests] = useState<string>("");

  const [isLoading, setIsLoading] = useState(false);

  async function formHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setIsLoading(true);

    const res = await fetch("/api/catering", {
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
        theme: "light",
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
        theme: "light",
      });

      setIsLoading(false);
    }
  }

  const t = useRouter().locale as Language;

  return (
    <div className="flex justify-center">
      <Head>
        <title>The Table Himalaya - Catering</title>
      </Head>
      <div className="w-[350px] md:w-[700px] mb-[100px] lg:w-[1000px] xl:w-[1200px] flex flex-col items-center">
        <div className="mt-[50px]">
          <h1 className="text-center text-[32px] md:text-left md:w-full md:text-[45px] font-semibold">
            Catering & Event Service
          </h1>
          <p className="text-[17px] md:text-left text-center md:text-[23px] mt-5">
            {catering.description[t]}
          </p>
        </div>

        <div className="mt-[50px] rounded w-full p-10 bg-primary">
          <h1 className="text-white text-center text-lg lg:text-[23px]">
            NOTE: Please call us at 0760353799/+4686123780 for special catering
            requests !!
          </h1>
        </div>

        <form
          id="form"
          onSubmit={formHandler}
          className=" md:mx-0 bg-white rounded-lg md:w-full h-[550px] lg:h-full py-[30px] px-4 md:px-7 gap-5 flex flex-col items-center"
        >
          <h1 className="text-[28px] font-bold">Catering Reservation</h1>
          <div className="w-full grid grid-cols-2 flex-1 [&>input]:border [&>input]:rounded [&>input]:py-4 [&>input]:px-2 md:[&>input]:px-5 [&>input]:border-[#ddd] gap-3">
            <input
              type="text"
              className="focus:border-primary border outline-none"
              placeholder={`${homepage.name[t]}*`}
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
            />
            <input
              type="email"
              className="focus:border-primary border outline-none"
              placeholder={`${homepage.mail[t]}*`}
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />
            <input
              type="text"
              className="focus:border-primary border outline-none"
              placeholder={`${homepage.phone_number[t]}*`}
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
              required
            />
            <input
              type="number"
              className="focus:border-primary border outline-none"
              placeholder={`${homepage.guests[t]}*`}
              onChange={(e) => setGuests(e.target.value)}
              value={guests}
              required
            />
            <input
              type="date"
              className="focus:border-primary border outline-none"
              placeholder={`${homepage.date[t]}*`}
              onChange={(e) => setDate(e.target.value)}
              value={date}
              required
            />
            <input
              type="time"
              className="focus:border-primary border outline-none"
              placeholder={`${homepage.time[t]}*`}
              onChange={(e) => setTime(e.target.value)}
              value={time}
              required
            />
          </div>
          <textarea
            placeholder={`${homepage.message[t]}`}
            className="focus:border-primary border outline-none w-full border-[#ddd] rounded pl-5 pt-3 h-[150px]"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />
          <button
            disabled={isLoading}
            className="bg-primary w-full text-white font-semibold py-3 rounded "
          >
            {homepage.reservation_button[t]}
          </button>
        </form>

        <div className="mt-[50px] w-full md:w-[500px] lg:w-[700px] flex justify-between">
          {catering.category.map((item, index) => (
            <div
              key={index}
              onClick={() => setCategoryIndex(index)}
              className="flex-none cursor-pointer w-[20%] md:w-fit flex flex-col gap-3 items-center text-center"
            >
              <p
                className={`w-fit rounded-xl p-5 ${
                  categoryIndex === index ? "bg-primary" : "bg-primary-blur"
                }`}
              >
                <Image src={item.source} alt="image" width={50} height={50} />
              </p>{" "}
              <p
                className={`text-[20px] font-semibold ${
                  categoryIndex === index ? "text-primary" : "text-black"
                }`}
              >
                {catering.category[index].name[t]}
              </p>
            </div>
          ))}
        </div>
        <h1 className="mt-[35px] md:mt-[50px] text-center text-[32px] text-primary font-bold">
          {catering.category[categoryIndex].description?.[t] ? (
            <p>{catering.category[categoryIndex].description?.[t]}</p>
          ) : (
            <div>
              <h1>{catering.category[categoryIndex].price}</h1>
              <h1>{catering.category[categoryIndex].delivery?.[t]}</h1>
            </div>
          )}
        </h1>

     
      </div>
    </div>
  );
}
