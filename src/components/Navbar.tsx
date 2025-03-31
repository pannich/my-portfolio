// src/components/Navbar.tsx
"use client";

import { useState } from "react";
import {
  Dialog,
  Popover,
  PopoverButton,
  PopoverPanel,
  PopoverGroup,
} from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";

const projects = [
  { name: "Belay", href: "https://github.com/pannich/Belay" },
  { name: "FaaS", href: "https://github.com/pannich/FaaS" },
  {
    name: "Parallel Image Processing",
    href: "https://github.com/pannich/proj3-parallel-img-steal/tree/main",
  },
  {
    name: "Genomic Annotation Service (GAS)",
    href: "https://github.com/pannich/MPCS51083_Cloud/tree/main/final-project-pannich",
  },
  { name: "MoodyPy", href: "https://github.com/pannich/MoodyPyapp" },
  {
    name: "Trading Engine",
    href: "https://github.com/pannich/proj_TradingEngine",
  },
  { name: "Unix shell", href: "https://github.com/pannich/unix-like-shell" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img alt="" src="/logo.png" className="h-8 w-auto" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold text-gray-900">
              Projects
              <ChevronDownIcon
                aria-hidden="true"
                className="h-5 w-5 flex-none text-gray-400"
              />
            </PopoverButton>

            <PopoverPanel className="absolute top-full -left-8 z-30 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white ring-1 shadow-lg ring-gray-900/5">
              <div className="p-4">
                {projects.map((project) => (
                  <a
                    key={project.name}
                    href={project.href}
                    className="block rounded-lg p-4 text-sm font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    {project.name}
                  </a>
                ))}
              </div>
            </PopoverPanel>
          </Popover>
          <a href="#about" className="text-sm font-semibold text-gray-900">
            About Me
          </a>
          <a href="#contact" className="text-sm font-semibold text-gray-900">
            Contact
          </a>
        </PopoverGroup>

      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt=""
                src="/logo.png"
                className="h-8 w-auto"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Popover className="relative">
                  <PopoverButton className="group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base font-semibold text-gray-900 hover:bg-gray-50">
                    Projects
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="h-5 w-5 flex-none group-data-open:rotate-180"
                    />
                  </PopoverButton>
                  <PopoverPanel className="mt-2 space-y-2">
                    {projects.map((project) => (
                      <a
                        key={project.name}
                        href={project.href}
                        className="block rounded-lg py-2 pr-3 pl-6 text-sm font-semibold text-gray-900 hover:bg-gray-50"
                      >
                        {project.name}
                      </a>
                    ))}
                  </PopoverPanel>
                </Popover>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Features
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Marketplace
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Company
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
