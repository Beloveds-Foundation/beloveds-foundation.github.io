"use client";
import websiteData from "./websiteData";
import { MenuItems, MoblieMenuItems } from "./MenuItems";

export function Menu() {
  return (
    <div className="max-lg:collapse bg-base-200  shadow-sm w-full rounded-md ">
      <input id="navbar-1-toggle" className="peer hidden" type="checkbox" />
      <label
        htmlFor="navbar-1-toggle"
        className="fixed inset-0 hidden max-lg:peer-checked:block"
      ></label>
      <div className="collapse-title navbar menu-custom">
        <div className="navbar-start">
          <label htmlFor="navbar-1-toggle" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <a href="./">
            <img
              alt={"a cute little oranage"}
              src={"/images/beloveds-logo.png"}
              className="h-15 m-2"
            />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <div
            className="megamenu max-sm:megamenu-vertical"
            id="my-megamenu-1"
            popover={"auto"}
          >
            <span className="megamenu-active"></span>
            <MenuItems items={websiteData.pages} />
          </div>
        </div>
        <div className="navbar-end">
          <a className="btn m-3 btn-custom" href="/get-involved/donate">
            Donate
          </a>
        </div>
      </div>

      <div className=" lg:hidden z-1 m-2">
        <MoblieMenuItems items={websiteData.pages} />
      </div>
    </div>
  );
}
