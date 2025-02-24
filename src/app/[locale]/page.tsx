import { Metadata } from "next";
import { FullScreenContainer } from "../../components/fullscreen-container";
import { Logo } from "../../components/logo";
import { NavBar } from "../../components/nav-bar";
import { HowWeHelp } from "../../components/how-we-help";
import { WeConnect } from "../../components/we-connect";
import { GetStarted } from "../../components/get-started";
import TranslationsProvider from "../../translations-provider";
import initTranslations from "../../i18n";
import { Hero } from "../../components/hero";
import { Services } from "../../components/services";
import { Footer } from "@/components/footer";
import { Spotlight } from "@/app/[locale]/decoration/spotlight";
import { LogoIcon } from "@/app/[locale]/decoration/logo-icon";
import { StripedOverlay } from "@/app/[locale]/decoration/overlay-stripes";
import { Divider } from "@/app/[locale]/decoration/divider";
import { tw } from "@/helper/tw";

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
      <div className="relative text-white text-opacity-80 text-lg h-fit">
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
            // "2xl:w-[80%]",
            "left-[70%]",
            "translate-x-[-50%]",
            "translate-y-[-10%]"
          )}
        />

        <StripedOverlay />
        <div
          className={tw(
            "prose prose-invert",
            "prose-md",
            "md:prose-xl",
            "max-w-full"
          )}
        >
          <header>
            <FullScreenContainer className="pb-0 md:pb-0">
              <NavBar />
              <Hero />
              <Services />
            </FullScreenContainer>
          </header>

          <main
            className={tw(
              "relative",
              "p-8",
              "md:p-16",
              "pt-0",
              "md:pt-0",
              "max-w-lg",
              "max-w-[500px]",
              "md:max-w-[600px]",
              "lg:max-w-[800px]",
              "xl:max-w-[1251px]",

              "mx-auto"
            )}
          >
            <Divider
              orientation="vertical"
              className={"h-10 mx-auto my-[3.75rem]"}
            />
            <HowWeHelp />
            <WeConnect />

            <section>
              <h2 className="font-extrabold text-center not-prose text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 md:mb-8">
                {t("home:trulyHelpPeople", {
                  defaultValue:
                    "Truly helping people & organizations move forward",
                })}
              </h2>
              <p className="text-center text-base  sm:text-lg md:text-xl lg:text-2xl font-normal">
                <span className="block">
                  {t("home:byRemovingObstacles.firstPart", {
                    defaultValue:
                      "We nemen obstakels weg en bieden oplossingen die werken,",
                  })}
                </span>
                <span className="block">
                  {t("home:byRemovingObstacles.secondPart", {
                    defaultValue:
                      "zodat jij je kunt richten op wat er écht toe doet.",
                  })}
                </span>
              </p>
            </section>
            <Divider
              orientation="vertical"
              className={"h-10 mx-auto my-[3.75rem]"}
            />
            <GetStarted />
          </main>

          <Footer />
        </div>

        <div className={"flex justify-end absolute bottom-0 right-0"}>
          <LogoIcon
            className={tw(
              "fill-[#0A0E14]",
              "w-[40vw]",
              // "2xl:w-[60vw]",
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
