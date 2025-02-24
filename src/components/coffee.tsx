import Link from "next/link";
import { tw } from "@/helper/tw";
import { Headline } from "./headline";

export const CoffeeTime = () => {
  return (
    <div className={"text-center pb-16"}>
      <Headline
        className={tw(
          "max-w-lg",
          "max-w-[500px]",
          "md:max-w-[600px]",
          "lg:max-w-[800px]",
          "xl:max-w-[1100px]",
          "mb-16"
        )}
        primary="Coffee time!"
      />

      <p className={"mb-16"}>
        Interested in learning more about Untameable and how we work?
        <br className="hidden sm:block" />
        Reach out and let&apos;s discover how to become Untameable together
      </p>

      <h4>
        Call us: <Link href={"tel:+31627311410"}>+31 627 311 410</Link>
      </h4>
      <h4>
        Email us:{" "}
        <Link href={"mailto:info@untameable.io"}>info@untameable.io</Link>
      </h4>
      <h4>
        <span className="inline-block gutterBottom">Follow us: </span>{" "}
        <Link href={"https://www.linkedin.com/company/untameable"}>
          LinkedIn
        </Link>
      </h4>
    </div>
  );
};
