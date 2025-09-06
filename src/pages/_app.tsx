import type { AppProps } from "next/app";
import { icons } from "@/utils/icons";
import Image from "next/image";
import restaurantMovingImg from "@/assets/restaurant-moving.avif";
import "@/styles/globals.css";
import Layout from "@/components/Layout";
import { LocationProvider } from "@/context/LocationContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LocationProvider>
      <main className="flex flex-col min-h-screen">
        <Layout>
          <Component {...pageProps} />
        </Layout>
        {/* <div className="h-screen w-full bg-purple-200 flex flex-col items-center  p-24">
        <div className="flex flex-row">
        <Image className="h-36 w-36" src={icons.announcement} alt=""  />
        <div className="flex flex-col ml-8 leading-10">
          <h2 className="font-bold text-2xl text-purple-600">Thank you for your support</h2>
          <p className="font-medium text-lg mt-4"> We are in process of reloacating our restaurant to a new place.</p>
          <p className="font-medium text-md mt-4"> New information coming soon...</p>
        </div>
        </div>
      </div> */}
      </main>
    </LocationProvider>
  );
}
