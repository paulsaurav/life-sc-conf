import React from "react";
import NoticesPanel from "./NoticesPanel";

const AboutConference = () => {
  return (
    <section className="bg-white text-gray-800 py-12 px-4">
      <div className="max-w-[1175px] mx-auto flex flex-col md:flex-row gap-8">
        {/* LEFT: About the Conference */}
        <div className="w-full md:w-[70%]">
          <h2 className="text-2xl font-bold mt-2 text-gray-900">
            ABOUT THE CONFERENCE
          </h2>
          <p className="text-gray-800 text-md font-medium mt-1 text-justify">
            To be updated
          </p>
        </div>

        {/* RIGHT: Notices */}
         <div className="w-full md:w-[30%]">
          <NoticesPanel />
        </div>
      </div>
    </section>
  );
};

export default AboutConference;
