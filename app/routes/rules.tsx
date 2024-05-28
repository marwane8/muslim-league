import Container from "~/components/container";
import court from "~/assets/court.jpg";
import BasketballPolicy from "~/assets/documents/BASKETBALLPOLICY.pdf";
import BasketballRules from "~/assets/documents/BASKETBALLRULES.pdf";
import { Link } from "@remix-run/react";

export default function Rules() {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${court})` }}
        className="flex h-64 bg-neutral-500  bg-[length:1500px] bg-center bg-no-repeat text-white  xl:bg-[length:3000px]"
      >
        <Container className="flex flex-col justify-center">
          <h1 className="text-center text-5xl font-bold">POLICY AND RULES</h1>
        </Container>
      </div>
      <Container>
        <article className="lg:prose-lg prose m-auto my-5 max-w-screen-md py-4">
          <h3 className="text-primary">General</h3>
          <p className="my-0">
            by registering for any of our leagues, you agree to the following policies.
          </p>
          <ul className="list-none text-xl">
            <Link to="/terms-of-service">
              <li className="link link-neutral font-semibold">Data Terms of Service</li>
            </Link>
          </ul>
          <h3 className="text-primary">Muslim Basketball League </h3>
          <p className="my-0">
            The following policiy and rules apply to the Muslim Basketball League seasons.
          </p>
          <ul className="list-none text-xl">
            <a
              href={BasketballPolicy}
              rel="noreferrer"
              target="_blank"
            >
              <li className="link link-neutral font-semibold">Basketball Policy</li>
            </a>
            <a
              href={BasketballRules}
              rel="noreferrer"
              target="_blank"
            >
              <li className="link link-neutral font-semibold">Basketball Rules</li>
            </a>
          </ul>
          <h3 className="text-primary">Muslim Soccer League </h3>
          <p className="my-0">
            The following policiy and rules apply to the Muslim Soccer League seasons.
          </p>
          <ul className="list-none text-xl">
            <a
              href={BasketballPolicy}
              rel="noreferrer"
              target="_blank"
            >
              <li className="link link-neutral font-semibold">Soccer Policy</li>
            </a>
          </ul>
        </article>

        <div className="h-14" />
      </Container>
    </>
  );
}
