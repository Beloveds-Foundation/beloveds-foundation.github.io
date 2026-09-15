"use client";

export default function Home() {
  return (
    <div className={"hero-content flex-col"}>
      <div className="flex lg:flex-row md:flex-col sm:flex-col xsm:flex-col md:items-center">
        <div>
          <img
            alt={"a photo of an orange cat looking happy"}
            src={"/images/happy-cat.png"}
            className="lg:max-w-sm  object-contain  rounded-lg shadow-2xl"
          />
        </div>
        <div className="m-10 mt-20">
          <h1 className="text-5xl text-center font-bold">
            Beloveds Animal Relief Rescue Foundation
          </h1>
          <p className="py-4 text-center lg:max-w-9/10 m-auto ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
      <hr className="border border-custom m-10 w-full" />

      <div className="flex lg:flex-row md:flex-col sm:flex-col">
        <div className="m-10">
          <h1 className="text-5xl text-center font-bold">Who We Serve</h1>
          <p className="py-4 text-center lg:max-w-9/10 m-auto ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <img
              alt={"a photo of an orange cat looking happy"}
              src={"/images/happy-cat.png"}
              className="rounded-lg shadow-2xl"
            />
          </div>
          <div>
            <img
              alt={"a photo of an orange cat looking happy"}
              src={"/images/happy-cat.png"}
              className="rounded-lg shadow-2xl"
            />
          </div>
          <div>
            <img
              alt={"a photo of an orange cat looking happy"}
              src={"/images/happy-cat.png"}
              className="rounded-lg shadow-2xl "
            />
          </div>
          <div>
            <img
              alt={"a photo of an orange cat looking happy"}
              src={"/images/happy-cat.png"}
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
      <hr className="border border-custom m-10 w-full" />

      <div className="flex flex-col">
        <h1 className="text-5xl text-center font-bold m-3">Get Involved</h1>

        <div className="flex lg:flex-row md:flex-col sm:flex-col gap-10">
          <div className="flex flex-col">
            <img
              alt={"a photo of an orange cat looking happy"}
              src={"/images/happy-cat.png"}
              className="lg:max-w-sm md:max-w-sm object-contain md:object-cover rounded-lg shadow-2xl m-5 h-75"
            />
            <a className="btn m-3 btn-custom" href="/get-involved/donate">
              Volunteer
            </a>
          </div>
          <div className="flex flex-col">
            <img
              alt={"a photo of an orange cat looking happy"}
              src={"/images/happy-cat.png"}
              className="lg:max-w-sm md:max-w-sm object-contain md:object-cover rounded-lg shadow-2xl m-5 h-75"
            />
            <a className="btn m-3 btn-custom" href="/get-involved/donate">
              Give Supplies
            </a>
          </div>
          <div className="flex flex-col">
            <img
              alt={"a photo of an orange cat looking happy"}
              src={"/images/happy-cat.png"}
              className="lg:max-w-sm md:max-w-sm object-contain md:object-cover rounded-lg shadow-2xl m-5 h-75"
            />
            <a
              className="btn m-3 btn-custom center"
              href="/get-involved/donate"
            >
              Donate
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
