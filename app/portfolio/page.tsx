"use client";

export default function Page() {
  return (
    <div className="flex flex-col justify-center">
      <h1 className={"text-6xl text-center"}>Portfolio</h1>
      <p className="py-4 text-center lg:max-w-7/10 m-auto ">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et aliqua.
      </p>
      <hr className="border border-custom mb-3" />
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
        {/* using an array to build out an example grid with one image. Remove if you would like 
         different images. */}
        {Array.from({ length: 9 }, (_, i) => (
          <img
            key={i}
            alt={
              "an orange on an orange background with purple star next to it"
            }
            src={"./images/image2.png"}
            className={"rounded-lg shadow-2xl"}
          />
        ))}
      </div>
    </div>
  );
}
