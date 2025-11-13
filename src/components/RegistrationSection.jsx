import React from "react";

const RegistrationSection = () => {
  return (
    <section className="bg-white text-gray-800 py-12 px-4">
      <div className="max-w-[1175px] mx-auto text-center">
        <h2 className="text-2xl font-bold mt-2 text-gray-900 mb-6">
          REGISTER HERE
        </h2>
        <div className="flex justify-center items-center">
          <div className="max-w-md">
            <img
              src="/qr.jpeg"
              alt="Registration QR Code"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationSection;

