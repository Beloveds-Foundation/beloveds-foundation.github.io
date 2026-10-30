"use client";

export default function Home() {
  return (
    <div className={"  flex-col"}>
      <div className="flex lg:flex-row flex-col md:items-center sm:items-center lg:p-20 bg-[url('./../public/images/kittens2.jpg')] bg-center bg-cover">
        <div></div>
        <div className="m-10 mt-20 bg-white/75 rounded-lg p-5 w-100">
          <h1 className="text-5xl text-center font-bold">
            Beloveds Animal Relief Rescue Foundation
          </h1>
          <p className="py-4 text-center lg:max-w-9/10 m-auto ">
            Leading the way in supporting the mission of animal relief rescues.
            Any support makes a difference in the lives of animals.
          </p>
        </div>
      </div>
      <hr className="border border-custom m-10 w-full" />

      <div className="flex lg:flex-row flex-col purple">
        <div className="m-10">
          <h1 className="text-5xl text-center font-bold">Our Mission</h1>
          <p className="py-4 text-center lg:max-w-9/10 m-auto ">
            We collect pet supplies from the community, businesses and
            distributors, then provide these donations directly to pet rescues,
            shelters, food banks, community outreach groups and feral cat colony
            caretakers, depending on urgency of need and specialty of service.
            This allows the pet organizations to focus on their animals clients,
            paying for medical needs, transportation and other urgent services.
          </p>
        </div>

        <img
          alt={"a photo of an orange cat looking happy"}
          src={"/images/dog4.jpg"}
          className="lg:max-w-sm  object-contain  rounded-lg "
        />
      </div>
      <hr className="border border-custom m-10 w-full" />

      <div className="flex flex-col">
        <h1 className="text-5xl text-center font-bold m-3">Get Involved</h1>

        <div
          className="flex lg:flex-row flex-col gap-10 justify-center justify-items-center justify-items-center

"
        >
          <div className="flex flex-col">
            <img
              alt={"a photo of an orange cat looking happy"}
              src={"/images/dog.jpg"}
              className="lg:max-w-sm md:max-w-sm object-contain md:object-cover rounded-lg  m-5 h-75 "
            />
            <div className=" text-center">
              <a className="btn m-3 btn-custom " href="/get-involved/donate">
                Volunteer
              </a>
            </div>
          </div>
          <div className="flex flex-col">
            <img
              alt={"a photo of an orange cat looking happy"}
              src={"/images/donations.png"}
              className="lg:max-w-sm md:max-w-sm object-contain md:object-cover rounded-lg  m-5 h-75"
            />
            <div className=" text-center">
              <a className="btn m-3 btn-custom" href="/get-involved/donate">
                Give Supplies
              </a>
            </div>
          </div>
          <div className="flex flex-col">
            <img
              alt={"a photo of an orange cat looking happy"}
              src={"/images/poppy.jpg"}
              className="lg:max-w-sm md:max-w-sm object-contain md:object-cover rounded-lg  m-5 h-75"
            />
            <div className=" text-center">
              <a className="btn m-3 btn-custom" href="/get-involved/donate">
                Donate
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
