import { useState } from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const navItems = [
  { name: "Dashboard", href: "#dashboard" },
  { name: "About", href: "/Hero" },
  { name: "Skills", href: "#skills" },
  { name: "Image", href: "#img" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [active, setActive] = useState("Dashboard");

  return (
    <Disclosure
      as="nav"
      className="fixed top-0 z-50 w-full bg-gray-900/70 backdrop-blur-lg shadow-md"
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">

              {/* Tombol Mobile */}
              <div className="flex sm:hidden">
                <DisclosureButton className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-800 hover:text-white focus:outline-none">
                  <Bars3Icon aria-hidden="true" className={`${open ? "hidden" : "block"} size-6`} />
                  <XMarkIcon aria-hidden="true" className={`${open ? "block" : "hidden"} size-6`} />
                </DisclosureButton>
              </div>

              {/* Menu Tengah (Desktop) */}
              <div className="hidden sm:flex flex-1 justify-center">
                <div className="flex space-x-8">
                  {navItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={() => setActive(item.name)}
                      className={classNames(
                        active === item.name
                          ? "text-indigo-400 border-b-2 border-indigo-400"
                          : "text-gray-300 hover:text-white hover:border-b-2 hover:border-indigo-400",
                        "px-3 py-2 text-sm font-medium transition-all"
                      )}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          <DisclosurePanel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navItems.map((item) => (
                <DisclosureButton
                  key={item.name}
                  as="a"
                  href={item.href}
                  onClick={() => setActive(item.name)}
                  className={classNames(
                    active === item.name
                      ? "bg-indigo-500 text-white"
                      : "text-gray-300 hover:bg-gray-800 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                >
                  {item.name}
                </DisclosureButton>
              ))}
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}
