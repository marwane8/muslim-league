import Container from "~/components/container";
import court from "~/assets/court.jpg";
import { Link } from "@remix-run/react";

export default function Waivers() {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${court})` }}
        className="flex h-64 bg-neutral-500  bg-[length:1500px] bg-center bg-no-repeat text-white  xl:bg-[length:3000px]"
      >
        <Container className="flex flex-col justify-center">
          <h1 className="text-center text-5xl font-bold">WAIVERS AND REGISTRATION</h1>
        </Container>
      </div>
      <Container className="min-h-[490px]">
        <article className="lg:prose-lg prose m-auto my-5 max-w-screen-md py-4">
          <p className="my-0">
            Please fill out the following waivers and registration forms before participating in any
            of our leagues. Additionally please also review our league{" "}
            <Link to="/rules">
              <span className="link link-primary italic">rules and policies.</span>
            </Link>
          </p>

          <h3 className="text-primary">Muslim Basketball League </h3>
          <p className="my-0">
            Click the following link for the lastest basketball season registration forms.
          </p>
          <ul className="list-none text-xl">
            <a
              href="https://forms.gle/vTcFHhcBnkEqKL8x9"
              rel="noreferrer"
              target="_blank"
            >
              <li className="link link-neutral font-semibold">
                Summer 2024 Basketball Team Registration
              </li>
            </a>

            <a
              href="https://forms.gle/FrCtLLDyQsWZRqbX7"
              rel="noreferrer"
              target="_blank"
            >
              <li className="link link-neutral font-semibold">
                Summer 2024 Basketball Player Waiver
              </li>
            </a>
          </ul>
          <h3 className="text-primary">Muslim Soccer League </h3>
          <p className="my-0">
            Click the following link for the lastest basketball season registration forms.
          </p>

          <ul className="list-none text-xl">
            <a
              href="https://forms.gle/QLH8PRHsa6zEzu3R8"
              rel="noreferrer"
              target="_blank"
            >
              <li className="link link-neutral font-semibold">Summer 2024 Soccer Waiver </li>
            </a>
          </ul>
        </article>

        <div className="h-14" />
      </Container>
    </>
  );
}
