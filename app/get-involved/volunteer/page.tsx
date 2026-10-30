"use client";

import Form from "@/app/ui/Form";

export default function Page() {
  return (
    <>
      <div
        className={
          " flex-col lg:flex-row p-20 bg-[url('./../public/images/cat4.jpg')] bg-center bg-cover"
        }
      >
        <div className="bg-white/75 rounded-lg p-5 w-100">
          <h1 className="text-5xl text-center font-bold">Volunteer</h1>

          <p className="py-4 text-center lg:max-w-9/10 m-auto ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p className="text-center m-3">
            <a
              className="bg-brand box-border border  shadow-xs font-medium text-sm px-4 py-2.5"
              href="https://www.idealist.org/en/nonprofit/1b630a449bf042898e7781c8b74b682d-beloveds-animal-rescue-relief-foundation-seattle"
            >
              View Current Roles on Volunteer Match
            </a>
          </p>
        </div>
      </div>
      <hr className="border border-custom m-10 w-full" />

      <div
        className={
          "hero-content flex-col items-center justify-center justify-items-center "
        }
      >
        <h1 className="text-5xl text-center font-bold">Volunteer Form</h1>

        <p className="py-4 text-center lg:max-w-9/10 m-auto ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>

        <Form />
        <hr className="border border-custom m-10 w-full" />
      </div>
    </>
  );
}
