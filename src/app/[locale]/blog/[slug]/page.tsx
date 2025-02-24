import { Headline } from "@/components/hero";
import { Logo } from "@/components/logo";
import { TLDR } from "@/components/tldr";
import { LogoIcon } from "@/app/[locale]/decoration/logo-icon";
import { StripedOverlay } from "@/app/[locale]/decoration/overlay-stripes";
import { Spotlight } from "@/app/[locale]/decoration/spotlight";
import { tw } from "@/app/[locale]/helper/tw";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Untameable - User & Developer experiences",
  description:
    "Build great Developer and User Experiences for digital products",
  openGraph: {
    title: "Untameable - User & Developer experiences",
    description:
      "Build great Developer and User Experiences for digital products",
    type: "website",
    url: "https://untameable.io",
    locale: "en_US",
  },
};

export default function BlogItem() {
  return (
    <main
      className={tw("relative", "text-white", "text-opacity-80", "text-lg")}
    >
      <Spotlight
        className={tw(
          "top-[5%]",
          "lg:top-[-8%]",
          "translate-y-[-50%]",
          "sm:translate-y-[-50%]",
          "lg:translate-y-[-50%]",
          "xl:translate-y-[-60%]",
          "lg:hidden"
        )}
      />

      <Spotlight
        followMouse
        className={tw(
          "top-[5%]",
          "lg:top-[-8%]",
          "opacity-50",
          "hidden",
          "lg:block"
        )}
      />

      <LogoIcon
        className={tw(
          "absolute",
          "w-[50%]",
          "left-[50%]",
          "translate-x-[-50%]",
          "translate-y-[-10%]",
          "opacity-80"
        )}
      />

      <StripedOverlay />
      <div
        className={tw(
          "relative",
          "max-w-full",
          "flex",
          "flex-col",
          "items-center",
          "min-h-svh",
          "p-10"
        )}
      >
        <Logo />
        <article
          className={tw(
            "relative",
            "prose prose-invert prose-md md:prose-lg",
            "max-w-screen-lg"
          )}
        >
          <div className={tw("pt-[12vw] pb-[5vw]", "max-w-screen-lg")}>
            <Headline
              className={tw(
                "text-[6vw]",
                "md:text-5xl",
                "lg:text-6xl",
                "xl:text-7xl",
                "whitespace-normal",
                "text-center",
                "text-balance"
              )}
              primary={
                <>
                  <span className="whitespace-nowrap">
                    Developer Experience
                  </span>{" "}
                  and why it matters
                </>
              }
            />

            <div className="p-12 flex justify-center items-center gap-10">
              <p className=" text-center">March 10, 2024</p>
              <div className="flex items-center gap-3">
                <div className="rounded-full">
                  <Image
                    src="/edgar.png"
                    alt="Avatar Edgar Ravenhorst"
                    width={45}
                    height={45}
                  />
                </div>
                <p className="leading-none">
                  by: <strong>Edgar Ravenhorst</strong>
                </p>
              </div>
            </div>

            {/* <BlogApprover blogId={'8d436b4a-d3a6-4934-b93f-56e88a00b878'} /> */}
          </div>

          <div className=" max-w-screen-md mx-auto">
            <TLDR>
              Developer Experience or DX is about enjoyment through efficiency
              while creating software and making the work for developers easier
              so they can be more productive.
              <br />
              <br />
              It&apos;s important for developers, businesses, and the tech
              industry because it can lead to increased productivity and higher
              quality products, Developers spend less time troubleshooting and
              more time focusing on creative solutions and innovation. It also
              boosts morale and job satisfaction, which are crucial for
              retaining top talent and fostering a collaborative and innovative
              work environment.
            </TLDR>

            <h3>What is Developer Experience (DX)</h3>
            <p>
              For people who write software, DX is about making the work for
              developers easier and more enjoyable. DX is similar to User
              Experience (UX), but it focuses on the experience of developers
              rather than end users. It&apos;s about improving the process
              creating software, so developers can get in their{" "}
              <Link
                target="_blank"
                href="https://en.wikipedia.org/wiki/Flow_(psychology)"
              >
                flow
              </Link>{" "}
              where they will be more productive or creative and deliver
              higher-quality products.
            </p>

            <h3>What makes a good Developer Experience</h3>
            <p>
              <strong>Quick Start:</strong> Developers should be able to jump
              into a project without lengthy setups. The faster they can start,
              the quicker they can deliver.
            </p>
            <p>
              <strong>Clear Documentation:</strong> Like a good map,
              documentation should guide developers, helping them understand and
              use your technology efficiently.
            </p>
            <p>
              <strong>Helpful Tools: </strong> The right tools can make a big
              difference. They should fit seamlessly into the developers&apos;
              workflow and make their tasks easier, not harder.
            </p>
            <p>
              <strong>Intuitive APIs:</strong> When developers work with APIs,
              they should feel like they&apos;re having a conversation, not
              cracking a code. Good API design is clear and logical.
            </p>
            <p>
              <strong>Community and Support:</strong> A supportive community and
              accessible help can turn frustrating problems into shared
              solutions and learning opportunities.
            </p>

            <h3>Why Does DX Matter?</h3>
            <h4>For Developers</h4>
            <p>
              Better DX means more motivated developers. When developers can
              work efficiently and painlessly, they can innovate, solve
              problems, and produce quality work much faster. This not only
              makes them happier but also more productive.
            </p>
            <h4>For Businesses</h4>
            <p>
              Good DX is like a domino effect: it starts with happy developers
              and leads to faster development times, higher-quality products,
              and ultimately, satisfied customers. It also makes your team or
              platform more attractive to talented developers, which can be a
              huge advantage in today&apos;s competitive tech landscape.
            </p>
            <h4>For the Tech Industry</h4>
            <p>
              By improving DX, we can make the tech industry more inclusive and
              accessible. When we make it easier for developers to create
              software, we open the door to more diverse voices and ideas. This
              can lead to more innovative and impactful products that benefit
              everyone.
            </p>
            <h3>Conclusion</h3>
            <p>
              Investing in good Developer Experience isn&apos;t just a
              nice-to-have; it&apos;s a must for any business that relies on
              technology. It affects everything from your team&apos;s daily mood
              to your product&apos;s success in the market. By focusing on DX,
              you&apos;re not just investing in your developers; you&apos;re
              investing in the future of your company and the technology
              landscape as a whole.
            </p>
          </div>
        </article>
      </div>
    </main>
  );
}
