import Container from "~/components/container";
import court from "~/assets/court.jpg";
import { Link } from "@remix-run/react";
import { captialCase, classNames } from "~/utils/js.util";
import { useState } from "react";
import ZellePayment from "~/assets/documents/ZELLEPAYMENTLINK.pdf";

export default function Waivers() {
  const [activeTab, setActiveTab] = useState("basketball");
  const tabs = ["basketball", "soccer"];

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
        <article className="prose m-auto my-5 max-w-screen-md py-4 lg:prose-lg">
          <p className="my-0">
            Please fill out the following waivers and registration forms before participating in any
            of our leagues. Additionally please also review our league{" "}
            <Link to="/rules">
              <span className="link link-primary italic">rules and policies.</span>
            </Link>
          </p>

          <ul
            role="tablist"
            className="tabs-boxed tabs !px-2"
          >
            {tabs.map((tab, i) => (
              <li
                key={i}
                role="tab"
                className={classNames(
                  "tab !my-1 text-base",
                  activeTab === tab && "tab-active font-semibold !text-white",
                )}
                onClick={() => setActiveTab(tab)}
                aria-hidden
              >
                {captialCase(tab)}
              </li>
            ))}
          </ul>
          {activeTab === "basketball" && <RegisterBasketball />}
          {activeTab === "soccer" && <RegisterSoccer />}
        </article>
      </Container>
    </>
  );
}

function RegisterBasketball() {
  return (
    <>
      <h3 className="text-primary"> 2024 Basketball League Registration </h3>
      <p>
        To register your team for the upcoming basketball season, go through the following steps.
        Registration for the 2024 season will be $1100 per team.
      </p>

      <ul className="steps steps-vertical">
        <li className="step step-primary !my-0">
          <div className="flex h-48 flex-col justify-center text-left">
            <div>
              <span className="font-semibold">Complete team registration form</span>
              <br />
              <span className="text-base italic">* 1 per team</span>
            </div>
            <a
              href="https://forms.gle/vTcFHhcBnkEqKL8x9"
              rel="noreferrer"
              target="_blank"
            >
              <span className="link link-neutral font-semibold">
                Summer 2024 Basketball Team Registration Form
              </span>
            </a>
          </div>
        </li>
        <li className="step step-primary !my-0">
          <div className="flex flex-col justify-center text-left">
            <div>
              <span className="font-semibold">Pay the 250$ team deposit. </span> <br />{" "}
              <span className="text-base italic">* Pay with zelle to avoid fees</span>
            </div>
            <a
              href="https://square.link/u/uGNyDviJ"
              rel="noreferrer"
              target="_blank"
            >
              <span className="btn-primary btn my-2">PAY DEPOSIT</span>
            </a>
            <a
              href={ZellePayment}
              rel="noreferrer"
              target="_blank"
            >
              <li className="link link-primary list-none font-semibold">PAY WITH ZELLE</li>
            </a>
          </div>
        </li>

        <li className="step step-primary !my-0">
          <div className="flex h-48 flex-col justify-center text-left">
            <div>
              <span className="font-semibold">Sign player liability waivers</span>
              <br />
              <span className="text-base italic">* 1 per player</span>
            </div>

            <a
              href="https://forms.gle/FrCtLLDyQsWZRqbX7"
              rel="noreferrer"
              target="_blank"
            >
              <li className="link link-neutral list-none font-semibold">
                Summer 2024 Basketball Player Waiver
              </li>
            </a>
          </div>
        </li>
        <li className="step step-primary !my-0">
          <div className="flex flex-col justify-center text-left">
            <div>
              <span className="font-semibold">
                Complete the remaining payment of 850$ team payment.{" "}
              </span>
              <br />
              <span className="text-base italic">* Pay with zelle to avoid fees</span>
            </div>
            <a
              href="https://square.link/u/jcqOkHd6"
              rel="noreferrer"
              target="_blank"
            >
              <span className="btn-primary btn my-2">PAY TEAM REGISTRAION</span>
            </a>
            <a
              href={ZellePayment}
              rel="noreferrer"
              target="_blank"
            >
              <li className="link link-primary list-none font-semibold">PAY WITH ZELLE</li>
            </a>
          </div>
        </li>
      </ul>
    </>
  );
}

function RegisterSoccer() {
  return (
    <>
      <h3 className="text-primary"> 2024 Soccer League Registration </h3>
      <p>
        To register your team for the upcoming soccer season, go through the following steps.
        Registration for the 2024 season will be $1150 per team.
      </p>

      <ul className="steps steps-vertical">
        <li className="step step-primary !my-0">
          <div className="flex h-48 flex-col justify-center text-left">
            <div>
              <span className="font-semibold">Complete team registration form</span>
              <br />
              <span className="text-base italic">* 1 per team</span>
            </div>
            <a
              href="https://forms.gle/vTcFHhcBnkEqKL8x9"
              rel="noreferrer"
              target="_blank"
            >
              <span className="link link-neutral font-semibold">
                Spring 2024 Soccer Team Registration Form
              </span>
            </a>
          </div>
        </li>
        <li className="step step-primary !my-0">
          <div className="flex flex-col justify-center text-left">
            <div>
              <span className="font-semibold">Pay the 250$ team deposit. </span> <br />{" "}
              <span className="text-base italic">* Pay with zelle to avoid fees</span>
            </div>
            <a
              href="https://square.link/u/uGNyDviJ"
              rel="noreferrer"
              target="_blank"
            >
              <span className="btn-primary btn my-2">PAY DEPOSIT</span>
            </a>
            <a
              href={ZellePayment}
              rel="noreferrer"
              target="_blank"
            >
              <li className="link link-primary list-none font-semibold">PAY WITH ZELLE</li>
            </a>
          </div>
        </li>

        <li className="step step-primary !my-0">
          <div className="flex h-48 flex-col justify-center text-left">
            <div>
              <span className="font-semibold">Sign player liability waivers</span>
              <br />
              <span className="text-base italic">* 1 per player</span>
            </div>

            <a
              href="https://forms.gle/FrCtLLDyQsWZRqbX7"
              rel="noreferrer"
              target="_blank"
            >
              <li className="link link-neutral list-none font-semibold">
                Summer 2024 Soccer Player Waiver
              </li>
            </a>
          </div>
        </li>
        <li className="step step-primary !my-0">
          <div className="flex flex-col justify-center text-left">
            <div>
              <span className="font-semibold">
                Complete the remaining payment of 850$ team payment.
              </span>
              <br />
              <span className="text-base italic">* Pay with zelle to avoid fees</span>
            </div>
            <a
              href="https://square.link/u/jcqOkHd6"
              rel="noreferrer"
              target="_blank"
            >
              <span className="btn-primary btn my-2">PAY TEAM REGISTRAION</span>
            </a>
            <a
              href={ZellePayment}
              rel="noreferrer"
              target="_blank"
            >
              <li className="link link-primary list-none font-semibold">PAY WITH ZELLE</li>
            </a>
          </div>
        </li>
      </ul>
    </>
  );
}
