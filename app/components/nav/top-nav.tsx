import { Bars3Icon } from "@heroicons/react/24/outline";
import { useNavigate } from "@remix-run/react";

import Container from "~/components/container";
import { classNames } from "~/utils/js.util";

import MuslimLeagueLogo from "~/assets/muslim-league-logo.png";
import { navLinks, useNavContext } from "./nav-context";

export default function TopNav() {
  const navigate = useNavigate();
  const { path, setPath, setOpen } = useNavContext();

  const handleNavClick = (name: string) => {
    setPath(name);
    navigate(`/${name}`);
    setOpen(false);
  };

  return (
    <nav className="flex h-12 items-center bg-gray-900 text-gray-300">
      <Container className="px-5">
        <div className="w-content  my-auto flex justify-between">
          <div className="flex ">
            <button
              className="mr-2 rounded-sm  focus:bg-neutral-50 focus:bg-opacity-20 focus:ring-2"
              onClick={() => {
                setOpen(true);
              }}
            >
              <Bars3Icon className="w-7" />
            </button>
            <button
              onClick={() => {
                setPath("");
                navigate("/");
              }}
              className="ml-5 flex w-7 items-center font-bold"
            >
              <img
                className="inline w-7"
                src={MuslimLeagueLogo}
                alt="Muslim League Logo"
              />
            </button>
          </div>

          <ul className="ml-3 flex w-full items-center">
            {navLinks.map((item, index) => (
              <li
                key={index}
                className={classNames(
                  "mx-1  py-1 text-lg font-normal",
                  item.name === path
                    ? "fill-primary text-primary"
                    : "fill-gray-300 text-gray-300 hover:fill-gray-400 hover:text-gray-400",
                )}
                onClick={() => handleNavClick(item.name)}
                aria-hidden="true"
              >
                <item.icon className="mx-1 w-8" />
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </nav>
  );
}
