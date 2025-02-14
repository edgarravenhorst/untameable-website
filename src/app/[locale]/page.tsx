import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FullScreenContainer } from "./components/fullscreen-container";
import { Headline } from "./components/headline";
import { Logo } from "./components/logo";
import { Divider } from "./decoration/divider";
import { LogoIcon } from "./decoration/logo-icon";
import { StripedOverlay } from "./decoration/overlay-stripes";
import { Spotlight } from "./decoration/spotlight";
import { tw } from "./helper/tw";
import { NavBar } from "./components/nav-bar";
import { Hero } from "./components/hero";
import { HowWeHelp } from "./components/how-we-help";
import { WeConnect } from "./components/we-connect";
import { GetStarted } from "./components/get-started";
import TranslationsProvider from "./translations-provider";
import initTranslations from "../i18n";

export const metadata: Metadata = {
  title: "Untameable - Elevate user & developer experiences",
  description:
    "A reliable partner for elevating user and developer experiences in software application development.",
  openGraph: {
    title: "Untameable - Elevate user & developer experiences",
    description:
      "A reliable partner for elevating user and developer experiences in software application development.",
    type: "website",
    url: "https://untameable.io",
    locale: "en_US",
  },
};

type HomeProps = {
  params: { locale: string };
};

// Translation files to consider for this page
const i18nNamespaces = ["home", "common"];

export default async function Home({ params: { locale } }: HomeProps) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <TranslationsProvider
      resources={resources}
      locale={locale}
      namespaces={i18nNamespaces}
    >
      <div className="relative text-white text-opacity-80 text-lg">
        <Spotlight
          className={tw(
            "top-[5%]",
            "lg:top-[-8%]",
            "translate-y-[-50%]",
            "sm:translate-y-[-50%]",
            "lg:translate-y-[-50%]",
            "xl:translate-y-[-60%]"
          )}
        />

        <Spotlight className={tw("top-[35%]", "left-[75vw]", "sm:hidden")} />
        <Spotlight className={tw("top-[70%]", "left-[-10%]")} />

        <Spotlight
          followMouse
          className={tw("opacity-50", "hidden", "lg:block")}
        />

        <LogoIcon
          className={tw(
            "absolute",
            "w-[50%]",
            "left-[50%]",
            "translate-x-[-50%]",
            "translate-y-[-10%]"
          )}
        />

        <StripedOverlay />
        <div
          className={tw(
            "relative",
            "prose prose-invert",
            "prose-md",
            "md:prose-xl",
            "max-w-full",
            "p-8",
            "w-svw"
          )}
        >
          <header>
            <NavBar />
          </header>

          <div
            className={tw(
              "max-w-lg",
              "max-w-[500px]",
              "md:max-w-[600px]",
              "lg:max-w-[800px]",
              "xl:max-w-[1250px]",
              "mx-auto"
            )}
          >
            <main>
              <Hero />
              <HowWeHelp />
              <WeConnect />

              <section>
                <h2 className="text-center not-prose text-5xl mb-8">
                  Truly helping people & organizations move forward
                </h2>
                <p className="text-center text-2xl font-normal">
                  <span className="block">
                    By removing obstacles and deliver solutions that work,{" "}
                  </span>
                  <span className="block">
                    so you can focus on what really matters.
                  </span>
                </p>
                <Divider
                  orientation="vertical"
                  className={"h-10 mx-auto mt-[7.5rem] mb-[3.75rem]"}
                />
              </section>

              <GetStarted />
            </main>
          </div>

          <footer>
            <div className="not-prose flex items-center justify-end text-sm relative p-9">
              <Link href="">Terms of service</Link>
              <Divider
                orientation="vertical"
                className="h-3 mx-2 border-white"
              />
              <Link href="">privacy policy</Link>
            </div>
          </footer>
        </div>

        <div className={"flex justify-end"}>
          <LogoIcon
            className={tw(
              "fill-[#0A0E14]",
              "w-[40vw]",
              "h-[50vw]",
              "-mt-[35vw]",
              "opacity-40"
            )}
          />
        </div>
      </div>
    </TranslationsProvider>
  );
}
