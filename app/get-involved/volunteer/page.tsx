"use client";

import { Form, VOLUNTEER_ACCESS_KEY } from "@/app/ui/Form";

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
            We’re grateful for everyone interested in supporting our mission and
            welcome you to get involved! To explore opportunities with our
            organization, please visit our current listings on Idealist.
          </p>
          <p className="py-4 text-center lg:max-w-9/10 m-auto ">
            For those in the greater Seattle area, we’re always looking for
            volunteers to help with community outreach sorting events and
            donation deliveries. Whether you can lend a hand on-site or help
            transport donations, your support makes a difference!
          </p>
          <p className="text-center m-3">
            <a
              className="bg-brand box-border border   font-medium text-sm px-4 py-2.5"
              href="https://www.idealist.org/en/nonprofit/1b630a449bf042898e7781c8b74b682d-beloveds-animal-rescue-relief-foundation-seattle"
            >
              View Current Roles on Idealist
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
          If you’re interested in volunteering or would like to learn more about
          how you can help, please fill out the Volunteer Form below. We’d love
          to hear from you!
        </p>

        <div className="lg:hero-content w-full">
          <Form formName="volunteer" access_key={VOLUNTEER_ACCESS_KEY} />
        </div>
        <hr className="border border-custom m-10 w-full" />
      </div>
    </>
  );
}
