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
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";

const navItems = ["Dashboard", "Team", "Projects", "Calendar"];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const [active, setActive] = useState("Dashboard");

  return (
    <Disclosure as="nav" className="bg-gray-900 shadow-md">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* Tombol Mobile */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <DisclosureButton className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-800 hover:text-white focus:outline-none">
              <Bars3Icon aria-hidden="true" className="block size-6 data-[open]:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden size-6 data-[open]:block" />
            </DisclosureButton>
          </div>

          {/* NAVBAR */}
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-center">
            {/* Logo */}
            <div className="flex shrink-0 items-center mr-6">
              <img
                alt="Your Company"
                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                className="h-8 w-auto"
              />
            </div>

            {/* Menu Tengah */}
            <div className="hidden sm:block">
              <div className="flex space-x-6">
                {navItems.map((item) => (
                  <button
                    key={item}
                    onClick={() => setActive(item)}
                    className={classNames(
                      active === item
                        ? "bg-indigo-500 text-white"
                        : "text-gray-300 hover:bg-gray-800 hover:text-white",
                      "rounded-md px-4 py-2 text-sm font-medium transition-all"
                    )}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Kanan */}
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:ml-6 sm:pr-0">
            <button
              type="button"
              className="relative rounded-full p-1 text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none"
            >
              <BellIcon aria-hidden="true" className="size-6" />
            </button>

            {/* Profile Dropdown */}
            <Menu as="div" className="relative ml-3">
              <MenuButton className="relative flex rounded-full focus:outline-none">
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
                  className="size-8 rounded-full bg-gray-800"
                />
              </MenuButton>
              <MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-gray-900 py-1 shadow-lg ring-1 ring-black ring-opacity-5">
                <MenuItem>
                  <a className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-white" href="#">
                    Your Profile
                  </a>
                </MenuItem>
                <MenuItem>
                  <a className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-white" href="#">
                    Settings
                  </a>
                </MenuItem>
                <MenuItem>
                  <a className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-white" href="#">
                    Sign out
                  </a>
                </MenuItem>
              </MenuItems>
            </Menu>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {navItems.map((item) => (
            <DisclosureButton
              key={item}
              as="a"
              href="#"
              onClick={() => setActive(item)}
              className={classNames(
                active === item
                  ? "bg-indigo-500 text-white"
                  : "text-gray-300 hover:bg-gray-800 hover:text-white",
                "block rounded-md px-3 py-2 text-base font-medium"
              )}
            >
              {item}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
