"use client";

export default function Page() {
  return (
    <>
      <div className={"hero-content flex-col lg:flex-row"}>
        <img
          alt={"a photo of an orange cat looking happy"}
          src={"/images/happy-cat.png"}
          className="lg:max-w-sm md:max-w-sm object-contain md:object-cover rounded-lg shadow-2xl"
        />

        <div>
          <h1 className="text-5xl text-center font-bold">Donate</h1>

          <p className="py-4 text-center lg:max-w-9/10 m-auto ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>

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

      <div>
        <h1 className="text-5xl text-center font-bold">Give Monthly</h1>

        <p className="py-4 text-center lg:max-w-9/10 m-auto ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p>give butter here</p>
      </div>
      <hr className="border border-custom m-10 w-full" />

      <div>
        <h1 className="text-5xl text-center font-bold">One Time Donations</h1>

        <p className="py-4 text-center lg:max-w-9/10 m-auto ">
          Our partner organizations needs fluctuate through the year, and so do
          everyone else's. For a commitment-free way to help, select one of the
          options below! The animals appreciate every dollar.
        </p>
        <div className=" text-center mb-5 mt-3">
          <a
            className="bg-brand box-border border shadow-xs font-medium text-sm px-4 py-2.5 m-3"
            href="#venmo"
          >
            Venmo
          </a>
          <a
            className="bg-brand box-border border shadow-xs font-medium text-sm px-4 py-2.5 m-3"
            href="#paypal"
          >
            Pay Pal
          </a>
          <a
            className="bg-brand box-border border shadow-xs font-medium text-sm px-4 py-2.5 m-3"
            href="#benevity"
          >
            Benevity
          </a>
        </div>
        <p className="py-4 text-center lg:max-w-9/10 m-auto ">
          Want to donate but online donations don't work for you? We also accept
          checks and money orders. Donations may be mailed and made payable to:
        </p>
        <p className="py-4 text-center lg:max-w-9/10 m-auto ">
          Beloveds Animal Rescue Relief Foundation c/o Rachael Morris 5218{" "}
          <br />
          Fauntleroy Way SW #4 Seattle, WA 98136
        </p>
      </div>

      <hr className="border border-custom m-10 w-full" />

      <div>
        <h1 className="text-5xl text-center font-bold">Amazon Wish List</h1>

        <p className="py-4 text-center lg:max-w-9/10 m-auto ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>

        <div className=" text-center mb-5 mt-3">
          <a
            className="bg-brand box-border border shadow-xs font-medium text-sm px-4 py-2.5 m-3"
            href="https://www.amazon.com/hz/wishlist/ls/38FCC9KVI044C?ref_=wl_share"
          >
            Amazon Wish list
          </a>
        </div>
      </div>

      <hr className="border border-custom m-10 w-full" />

      <div>
        <h1 className="text-5xl text-center font-bold">In-Kind Donations</h1>

        <p className="py-4 text-center lg:max-w-9/10 m-auto ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>

        <div className=" text-center mb-5 mt-3">
          <a
            className="bg-brand box-border border shadow-xs font-medium text-sm px-4 py-2.5 m-3"
            href="give-supplies"
          >
            What We Accept
          </a>
        </div>
      </div>

      <hr className="border border-custom m-10 w-full" />
    </>
  );
}
