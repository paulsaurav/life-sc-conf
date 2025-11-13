import React from "react";

const RegistrationSection = () => {
  return (
    <section className="bg-white text-gray-800 py-12 px-4">
      <div className="max-w-[1175px] mx-auto text-center">
        <h2 className="text-2xl font-bold mt-2 text-gray-900 mb-6">
          REGISTER HERE
        </h2>
        <div className="flex flex-col items-center gap-6">
          <div className="max-w-md">
            <img
              src="/qr.jpeg"
              alt="Registration QR Code"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <p className="text-gray-700 text-md font-medium">
            Scan QR code or click the button below
          </p>
          <a
            href="https://share.google/mII6UzJ3gbRvd2gNY"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-lg"
          >
            Register Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default RegistrationSection;

