import Navbar from "./navbar";
import Footer from "@/components/footer";
import { icons } from "@/utils/icons";
import Image from "next/image";
import { useRouter } from "next/router";
import { ReactNode, useEffect, useRef, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as gtag from "@/utils/gtag";
import Head from "next/head";
import Script from "next/script";

type PropsWithChildren = { children?: ReactNode };

export default function Layout({ children }: PropsWithChildren) {
  const [scrollTopButton, setScrollTopButton] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setScrollTopButton(
        lastScrollY.current > currentScroll && lastScrollY.current > 100
      );
      lastScrollY.current = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', '${gtag.GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </Head>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Navbar id="navbar" />
      <div
        onClick={() =>
          document
            .getElementById("navbar")!
            .scrollIntoView({ behavior: "smooth" })
        }
        className={`fixed bottom-0 right-0 mb-[25px] mr-[25px] lg:mb-[50px] lg:mr-[50px] border border-white p-3 rounded-lg bg-primary ${
          scrollTopButton ? "scale-100" : "scale-0"
        }`}
      >
        <Image src={icons.arrow_top} width={20} alt="arrow" />
      </div>
      {children}
      <Footer />
    </>
  );
}
