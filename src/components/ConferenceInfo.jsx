export default function ConferenceInfo() {
  return (
    <section className="bg-white text-center py-12 px-4">
      <div className="max-w-[1175px] mx-auto">
        {/* Logos row */}
        {/* <div className="flex items-center justify-around mb-6">
          <img src="/springer.jpg" alt="Springer" className="h-12 md:h-16" />
          <img src="/ccis.png" alt="CCIS" className="h-10 md:h-14" />
        </div> */}

        {/* Conference Text */}
        <h2 className="text-blue-600 sm:text-sm md:text-lg font-bold uppercase leading-snug tracking-wide">
          2nd International Conference on Climate Change and Environmental Sustainability
        </h2>

        <p className="text-xl font-bold mt-2 text-gray-900">(CCESMHL-2025)</p>

        <p className="text-blue-600 text-lg font-semibold mt-1 ">
          28-29 Nov, 2025
        </p>

        <hr className="w-24 border-t-2 border-gray-400 mx-auto my-4" />

        <div className="text-sm md:text-lg leading-relaxed text-gray-800 font-bold">
          <p>Hybrid Mode</p>
          {/* <p>Department of Life Sciences and Bioinformatics</p> */}
          <p>Assam University, Silchar</p>
          <p>Assam, India</p>
        </div>

      </div>
    </section>
  );
}
