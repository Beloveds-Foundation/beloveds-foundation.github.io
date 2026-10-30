"use client";

export default function Page() {
  return (
    <div>
      <div className={"hero-content flex-col lg:flex-row"}>
        <img
          alt={"a photo of an orange cat looking happy"}
          src={"/images/happy-cat.png"}
          className="lg:max-w-sm md:max-w-sm object-contain md:object-cover rounded-lg shadow-2xl"
        />

        <div>
          <h1 className="text-5xl text-center font-bold"> Who We Are</h1>

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

      <div className={"hero-content flex-col lg:flex-row-reverse"}>
        <img
          alt={"a photo of an orange cat looking happy"}
          src={"/images/dog2.jpg"}
          className="lg:max-w-sm md:max-w-sm object-contain md:object-cover rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl text-center font-bold">
            {" "}
            Mission And Values
          </h1>

          <p className="py-4 text-center lg:max-w-9/10 m-auto ">
            Lorem! ipsum dolor sit amet, consectetur adipiscing elit, sed do
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

      <div className="flex flex-col ">
        <h1 className="text-5xl text-center font-bold m-3">Our Impact</h1>

        <div className="flex lg:flex-row md:flex-col sm:flex-col gap-10 justify-center">
          <div className="flex flex-col items-center ">
            <img
              alt={"a photo of an orange cat looking happy"}
              src={"/images/dog-bowl-icon.png"}
              className="lg:max-w-sm md:max-w-sm object-contain md:object-cover m-5 h-30 p-2"
            />
            <div>X pounds of food</div>
          </div>
          <div className="flex flex-col items-center">
            <img
              alt={"a photo of an orange cat looking happy"}
              src={"/images/paw-icon.png"}
              className="lg:max-w-sm md:max-w-sm object-contain md:object-cover  m-5 h-30 p-5"
            />
            <div>X pets served</div>
          </div>
          <div className="flex flex-col items-center">
            <img
              alt={"a photo of an orange cat looking happy"}
              src={"/images/handshake-icon.png"}
              className="lg:max-w-sm md:max-w-sm object-contain md:object-cover  m-5 h-30"
            />
            <div>X organizations served</div>
          </div>
        </div>
      </div>

      <hr className="border border-custom m-10 w-full" />

      <div className="flex flex-col  mb-10 justify-center">
        <h1 className="text-5xl text-center font-bold m-3">Our Partners</h1>
        <div className="flex flex-row items-center">
          <div>
            <img
              alt={"a photo of an orange cat looking happy"}
              src={"/images/west-seattle-foodbank.png"}
              className=" object-scale-down h-50"
            />
          </div>
          <div>
            <img
              alt={"a photo of an orange cat looking happy"}
              src={"/images/One-Health-Clinic-logo.jpg"}
              className="  object-scale-down h-50"
            />
          </div>
          <div>
            <h1 className="text-center text-lg ">
              Washington Animal Rescue Alliance{" "}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
