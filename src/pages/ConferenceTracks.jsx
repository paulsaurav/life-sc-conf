import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";

const ConferenceTracks = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Conference Tracks - Climate Change & Sustainability in Mountain Landscapes</title>
        <link rel="canonical" href="/conference-tracks" />
        <meta
          name="description"
          content="Explore conference tracks focusing on Environmental Sustainability, Agricultural Development, and Climate Change in mountainous and hilly regions."
        />
      </Helmet>
      <Header />
      
      {/* Hero Section with Mountain Illustration */}
      <section className="relative bg-gradient-to-b from-teal-50 to-white pt-32 pb-20 px-4">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute left-0 right-0 bottom-0 h-48 bg-gradient-to-t from-white to-transparent z-10"></div>
          <div className="absolute left-0 right-0 bottom-0 h-64 opacity-10">
            <svg viewBox="0 0 1200 400" className="w-full h-full">
              <path d="M0,320 L200,280 L400,320 L600,220 L800,320 L1000,240 L1200,320 L1200,400 L0,400 Z" fill="#2C5F5F" />
              <path d="M0,340 L200,300 L400,340 L600,240 L800,340 L1000,260 L1200,340 L1200,400 L0,400 Z" fill="#2C5F5F" opacity="0.7" />
            </svg>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-20">
          <h1 className="text-4xl md:text-5xl font-bold text-teal-900 mb-6">Conference Tracks</h1>
          <p className="text-xl text-teal-700 max-w-3xl mx-auto">
            Climate Change and Environmental Sustainability in Mountainous and Hilly Landscapes - 2025
          </p>
        </div>
      </section>
      
      {/* Introduction Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="w-20 h-1 bg-teal-600 mx-auto mb-6"></div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Call For Papers</h2>
            <p className="text-lg text-gray-600">
              Authors are invited to submit full papers 
              in the following thematic areas which include (but are not limited to):
            </p>
          </div>
        </div>
      </section>
      
      {/* Tracks Section */}
      <section className="py-12 px-4 bg-teal-50">
        <div className="max-w-6xl mx-auto">
          <div className="overflow-x-auto z-50">
  <table className="table text-gray-800">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th>TRACK: 1</th>
        <td>Biodiversity, conservation, and ecological security</td>
      </tr>
      {/* row 2 */}
      <tr>
        <th>TRACK: 2</th>
        <td>Soil and water conservation, including wetlands</td>
      </tr>
      {/* row 3 */}
      <tr>
        <th>TRACK: 3</th>
        <td>Land use, land degradation, forest restoration, and protected areas</td>
      </tr>

      <tr>
        <th>TRACK: 4</th>
        <td>Carbon dynamics and sequestration</td>
      </tr>

      <tr>
        <th>TRACK: 5</th>
        <td>Food and energy security, including wind and solar energy</td>
      </tr>
      <tr>
        <th>TRACK: 6</th>
        <td>Climate finance</td>
      </tr>
      <tr>
        <th>TRACK: 7</th>
        <td>Gender equality</td>
      </tr>
      <tr>
        <th>TRACK: 8</th>
        <td>Common Property Resource dependent communities</td>
      </tr>
      <tr>
        <th>TRACK: 9</th>
        <td>Economics, value chain analysis in agricultural, veterinary, fisheries and allied sectors</td>
      </tr>
      <tr>
        <th>TRACK: 10</th>
        <td>Ecosystem services, natural resources, natural resources-based livelihood, and integrated rural development</td>
      </tr>
      <tr>
        <th>TRACK: 11</th>
        <td>Invasive alien species</td>
      </tr>
      <tr>
        <th>TRACK: 12</th>
        <td>Landscape dynamics, mapping, and monitoring</td>
      </tr>
      <tr>
        <th>TRACK: 13</th>
        <td>Environmental monitoring of biological markers in plants, animals and microrganisms with regard to mitigation and adaptation measures</td>
      </tr>
      <tr>
        <th>TRACK: 14</th>
        <td>Natural hazards and disasters including droughts, floods, heat waves, and wildfires</td>
      </tr>
      <tr>
        <th>TRACK: 15</th>
        <td>Ecosystem-based adaptation and resilience, and nature-based solutions to protect and restore ecosystems</td>
      </tr>
      <tr>
        <th>TRACK: 16</th>
        <td>Regional cooperation and trans boundary governance</td>
      </tr>
      <tr>
        <th>TRACK: 17</th>
        <td>Key roles for civil society for environmental sustainability</td>
      </tr>
      <tr>
        <th>TRACK: 18</th>
        <td>Farm mechanization, Farm management, agri-horticulture, plantation crops, food processing, value addition and post-harvest management</td>
      </tr>
      <tr>
        <th>TRACK: 19</th>
        <td>Traditional crops and value addition</td>
      </tr>
      <tr>
        <th>TRACK: 20</th>
        <td>Protection of Plant Varieties and Farmers’ Rights (PVR)</td>
      </tr>
      <tr>
        <th>TRACK: 21</th>
        <td>Innovative adaptive technologies for climate-smart agriculture and sustainability</td>
      </tr>
      <tr>
        <th>TRACK: 22</th>
        <td>Impact of climate change on agricultural, veterinary, fisheries and allied sectors and management</td>
      </tr>
      <tr>
        <th>TRACK: 23</th>
        <td>Entrepreneuship, start-up, government policies, flagship programmes and success stories in climate resilient agriculture</td>
      </tr>
      <tr>
        <th>TRACK: 24</th>
        <td>Emerging disease/pests and their management in agricultural , veterinary & fisheries and allied sectors under changing climate</td>
      </tr>
      <tr>
        <th>TRACK: 25</th>
        <td>Organic farming, natural farming and indigenous technical knowledge</td>
      </tr>
      <tr>
        <th>TRACK: 26</th>
        <td>Bioresource management for sustainable agriculture</td>
      </tr>
    </tbody>
  </table>
</div>
          {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8"> */}

            
            
            {/* Track 1 Card */}
            {/* <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="bg-teal-700 text-white py-4 px-6">
                <h3 className="text-xl font-bold">Environmental Sustainability</h3>
                <p className="text-teal-100 text-sm mt-1">In Mountanous Ecosystems</p>
              </div>
              <div className="p-6">
                <ol className="list-decimal pl-5 space-y-3 text-gray-700">
                  <li>Biodiversity, conservation, and ecological security in mountainous regions</li>
                  <li>Soil and water conservation in hilly landscapes, wetlands, and protected areas</li>
                  <li>Carbon dynamics and sequestration in mountain ecosystems</li>
                  <li>Food and energy security, including wind and solar energy in remote areas</li>
                  <li>Climate finance for mountain communities</li>
                  <li>Gender equality in natural resource management</li>
                  <li>Common Property Resource dependent communities in hilly regions</li>
                  <li>Economics, value chain analysis in agricultural and allied sectors</li>
                  <li>Ecosystem services and natural resources-based livelihood in mountains</li>
                </ol>
              </div>
            </div> */}
            
            {/* Track 2 Card */}
            {/* <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="bg-amber-600 text-white py-4 px-6">
                <h3 className="text-xl font-bold">Agricultural & Rural Development</h3>
                <p className="text-amber-100 text-sm mt-1">In Hilly Terrains</p>
              </div>
              <div className="p-6">
                <ol className="list-decimal pl-5 space-y-3 text-gray-700">
                  <li>Farm mechanization and management in sloped landscapes</li>
                  <li>Traditional crops and value addition</li>
                  <li>Protection of Plant Varieties and Farmers' Rights in remote areas</li>
                  <li>Innovative adaptive technologies for climate smart agriculture in hills</li>
                  <li>Key roles for civil society for environmental sustainability</li>
                  <li>Landscape dynamics, mapping, and monitoring of mountainous regions</li>
                  <li>Natural hazards and disasters in hilly areas including landslides, droughts</li>
                  <li>Ecosystem-based adaptation and resilience in mountain communities</li>
                  <li>Impact of climate change on agricultural and allied sectors in high-altitude areas</li>
                </ol>
              </div>
            </div> */}
            
            {/* Track 3 Card */}
            {/* <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="bg-emerald-700 text-white py-4 px-6">
                <h3 className="text-xl font-bold">Climate Innovation & Action</h3>
                <p className="text-emerald-100 text-sm mt-1">For Resilience</p>
              </div>
              <div className="p-6">
                <ol className="list-decimal pl-5 space-y-3 text-gray-700">
                  
                  <li>Entrepreneurship, start-up, and policies for climate resilient agriculture</li>
                  <li>Emerging diseases/pests and their management under changing climates</li>
                  <li>Organic farming, natural farming, and indigenous technical knowledge in hills</li>
                  <li>Bioresources management for sustainable agriculture & allied activities</li>
                  <li>Environmental monitoring of biological markers in plants and animals with regard to mitigation and adaption measures</li>
                  <li>Regional cooperation and trans boundary governance of mountain resources</li>
                  <li>Farm management in sloped landscapes and post-harvest management</li>
                  <li>Invasive alien species in mountainous ecosystems</li>
                </ol>
              </div>
            </div> */}
            
          </div>
          
          {/* Additional Information */}
          {/* <div className="mt-16 bg-white rounded-xl p-8 shadow-md">
            <h3 className="text-2xl font-bold text-teal-900 mb-4 text-center">Submission</h3>
            <p className="text-gray-700 mb-4 text-center">
              Papers should specifically address challenges and solutions relevant to mountainous and hilly landscapes.
            </p>
            <div className="flex justify-center mt-6">
              <button className="bg-teal-700 hover:bg-teal-800 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300">
                Submit Your Paper
              </button>
            </div>
          </div> */}
        {/* </div> */}
      </section>
      
      <Footer />
    </>
  );
};

export default ConferenceTracks;