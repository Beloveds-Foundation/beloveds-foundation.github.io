"use client";

import Form from "@/app/ui/Form";

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
          <h1 className="text-5xl text-center font-bold">Give Supplies</h1>

          <p className="py-4 text-center lg:max-w-9/10 m-auto ">
            Do you have gently used or new pet supplies that you no longer need?
            Maybe your finicky feline doesn’t like that particular brand/flavor
            of food. Maybe your pup has grown out of their toys and beds. We can
            take anything cat or dog related!
          </p>
        </div>
      </div>
      <hr className="border border-custom m-10 w-full" />
      <div className={"hero-content flex-col items-center "}>
        <h1 className="text-5xl text-center font-bold">What We Accept</h1>

        <p>
          Items Accepted We accept ANY dog or cat related items, that are
          usable. This includes but is not limited to open bags of food,
          medication, used items and more…. Here are some of the items that we
          accept and distribute to our partners:
        </p>

        <ul className="list-disc md:columns-2 lg:columns-3">
          <li>Dog crates w/ pans</li>
          <li>Cat beds</li>
          <li>Harnesses, leashes and collars</li>
          <li>Sweaters, pajamas and costumes</li>
          <li>Medication – flea and tick</li>
          <li>Grooming products</li>
          <li>Carriers – plastic/cloth</li>
          <li>Carriers – backpacks and strollers</li>
          <li>Open bags of food</li>
          <li>Closed bags of food</li>
          <li>Automated litter boxes</li>
          <li>Training tools</li>
          <li>Puzzle/slow feeders</li>
          <li>Dog beds</li>
          <li>Dog crate liners</li>
          <li>Dog crate liners</li>
          <li>Dog crate liners</li>
          <li>Wet food of all kinds</li>
          <li>Prescription food</li>
          <li> Bowls/feeders/fountains</li>
          <li>Cat scratchers</li>
          <li>Cat trees</li>
          <li>Belly straps</li>
          <li>Guinea pig supplies – polar fleece, hay, food, etc</li>
          <li>Bunny supplies – Timothy hay, treats, feeders</li>
          <li>Used animal wheelchairs</li>
          <li>Medications (exceptions apply)</li>
          <li>Bailey chairs</li>
        </ul>

        <p>
          We are constantly working to distribute every single donation that is
          provided to us and place it with a pet organization. Sometimes this
          means taking scraps of Astro turf, breaking apart tired cat trees or
          repurposing fabric. It is our mission to upcycle anything that cannot
          be used for its original purpose so if you have questions on what we
          accept, please submit an inquiry below. We would be happy to discuss
          if we can accept your donations.
        </p>
      </div>
      <hr className="border border-custom m-10 w-full" />

      <div
        className={
          "hero-content flex-col items-center justify-center justify-items-center "
        }
      >
        <h1 className="text-5xl text-center font-bold">
          Have Something To Donate?
        </h1>

        <p className="py-4 text-center lg:max-w-9/10 m-auto ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <Form />

      <hr className="border border-custom m-10 w-full" />
    </>
  );
}
