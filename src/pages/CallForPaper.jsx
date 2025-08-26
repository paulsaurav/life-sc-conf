export default function CallForPapers() {
  const track1 = [
    "Biodiversity, conservation, and ecological security",
    "Soil and water conservation, including wetlands, land use, land degradation, forest restoration, and protected areas",
    "Carbon dynamics and sequestration",
    "Food and energy security, including wind and solar energy",
    "Climate finance",
    "Gender equality",
    "Common Property Resource dependent communities",
    "Economics, value chain analysis in agricultural and allied sectors",
    "Ecosystem services, natural resources, natural resources-based livelihood, and integrated rural development",
    "Invasive alien species",
  ];

  const track2 = [
    "Landscape dynamics, mapping, and monitoring",
    "Environmental monitoring of biological markers in plants and animals with regard to mitigation and adaptation measures",
    "Natural hazards and disasters including droughts, floods, heat waves, and wildfires",
    "Ecosystem-based adaptation and resilience, and nature-based solutions to protect and restore ecosystems",
    "Regional cooperation and trans boundary governance",
    "Key roles for civil society for environmental sustainability",
    "Farm mechanization, Farm management, Agri-horticulture, plantation crops, food processing, value addition, and post-harvest management",
    "Traditional crops and value addition",
    "Protection of Plant Varieties and Farmers' Rights, and Intellectual Property Rights",
    "Innovative adaptive technologies for climate smart agriculture and sustainability",
  ];

  const track3 = [
    "Impact of climate change on agricultural, veterinary, and fisheries sectors and management",
    "Entrepreneurship, start-up, government policies, flagship programmes and success stories in climate resilient agriculture",
    "Emerging diseases/pests and their management in agricultural, veterinary & fisheries sectors under changing climate",
    "Organic farming, natural farming and indigenous technical knowledge",
    "Bioresources management for sustainable agriculture",
  ];

  return (
    <section className="py-14">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-center text-2xl md:text-3xl font-extrabold tracking-wide uppercase">
          Conference Themes
        </h2>

        <p className="mt-6 text-center text-base opacity-80 max-w-3xl mx-auto">
          Authors are invited to submit research papers that present original
          and unpublished research in the following theme areas which include
          and are not limited to:
        </p>

        <div className="overflow-x-auto mt-10">
          <table className="table w-full bg-base-100 rounded-box">
            <thead>
              <tr className="border-0">
                <th className="w-12"></th>
                <th className="uppercase font-extrabold text-sm tracking-wider">
                  Track1: Environmental Sustainability
                </th>
                <th className="uppercase font-extrabold text-sm tracking-wider">
                  Track2: Agricultural and Rural Development
                </th>
                <th className="uppercase font-extrabold text-sm tracking-wider">
                  Track3: Climate Change and Innovation
                </th>
              </tr>
            </thead>

            <tbody>
              {track1.map((_, i) => (
                <tr key={i} className="hover:bg-base-200/40">
                  <td className="align-top font-semibold text-base-content/70">
                    {i + 1}
                  </td>
                  <td className="align-top">{track1[i]}</td>
                  <td className="align-top">{track2[i]}</td>
                  <td className="align-top">{track3[i]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
