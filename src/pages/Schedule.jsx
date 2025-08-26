import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Schedule() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-white">
      <Header />
      
      {/* Hero Section with Mountain Background */}
      <div className="relative h-80 bg-gradient-to-br from-teal-900 to-teal-700 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/mountain-pattern.svg')] opacity-10"></div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-teal-50 to-transparent"></div>
        
        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <div className="relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Programme Schedule</h1>
            <p className="text-xl text-teal-100 max-w-2xl mx-auto">
              Join us for two days of discussions on mountain sustainability
            </p>
          </div>
        </div>
        
        {/* Mountain Silhouette */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" className="w-full h-20 text-teal-50">
            <path fill="currentColor" d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" />
            <path fill="currentColor" d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" />
            <path fill="currentColor" d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" />
          </svg>
        </div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-teal-800 mb-4">Tentative Programme Schedule</h2>
          <p className="text-lg text-gray-600">
            November 28-29, 2025 | Focusing on Mountain Sustainability
          </p>
        </div>

        {/* Day 1 Schedule */}
        <div className="mb-16">
          <div className="bg-teal-700 text-white rounded-t-xl p-4 text-center">
            <h3 className="text-2xl font-bold">DAY 1: 28 November, 2025</h3>
            <p className="text-teal-100">Mountain Ecosystems & Sustainability</p>
          </div>
          
          <div className="bg-white rounded-b-xl shadow-md overflow-hidden">
            <div className="divide-y divide-teal-100">
              <div className="p-6 flex items-start">
                <div className="bg-teal-100 text-teal-800 rounded-lg p-3 mr-4 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-teal-800">Inaugural Session</h4>
                  <p className="text-gray-600">10:00 AM IST</p>
                  <p className="text-sm text-gray-500 mt-1">Opening remarks and conference inauguration</p>
                </div>
              </div>
              
              <div className="p-6 flex items-start">
                <div className="bg-teal-100 text-teal-800 rounded-lg p-3 mr-4 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-teal-800">Keynote Address 1</h4>
                  <p className="text-gray-600">11:00 AM IST</p>
                  <p className="text-sm text-gray-500 mt-1">Climate challenges in mountainous regions</p>
                </div>
              </div>
              
              <div className="p-6 flex items-start">
                <div className="bg-teal-100 text-teal-800 rounded-lg p-3 mr-4 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-teal-800">Poster Presentation</h4>
                  <p className="text-gray-600">12:00 Noon IST</p>
                  <p className="text-sm text-gray-500 mt-1">Research posters on mountain sustainability</p>
                </div>
              </div>
              
              <div className="p-6 bg-amber-50 flex items-start">
                <div className="bg-amber-100 text-amber-800 rounded-lg p-3 mr-4 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-amber-800">LUNCH BREAK</h4>
                  <p className="text-amber-600">1:00 PM IST</p>
                  <p className="text-sm text-amber-500 mt-1">Networking and refreshments</p>
                </div>
              </div>
              
              <div className="p-6 flex items-start">
                <div className="bg-teal-100 text-teal-800 rounded-lg p-3 mr-4 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-teal-800">Invited Talk 1</h4>
                  <p className="text-gray-600">2:00 PM IST</p>
                  <p className="text-sm text-gray-500 mt-1">Innovations in mountain agriculture</p>
                </div>
              </div>
              
              <div className="p-6 flex items-start">
                <div className="bg-teal-100 text-teal-800 rounded-lg p-3 mr-4 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-teal-800">Technical Session 1</h4>
                  <p className="text-gray-600">3:00 PM–5:00 PM IST</p>
                  <p className="text-sm text-gray-500 mt-1">Environmental sustainability in hilly landscapes</p>
                </div>
              </div>
              
              <div className="p-6 flex items-start">
                <div className="bg-teal-100 text-teal-800 rounded-lg p-3 mr-4 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-teal-800">Technical Session 2</h4>
                  <p className="text-gray-600">3:00 PM–5:00 PM IST</p>
                  <p className="text-sm text-gray-500 mt-1">Climate change adaptation strategies</p>
                </div>
              </div>
              
              <div className="p-6 flex items-start">
                <div className="bg-teal-100 text-teal-800 rounded-lg p-3 mr-4 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-teal-800">Cultural Programme</h4>
                  <p className="text-gray-600">5:00 PM–6:00 PM IST</p>
                  <p className="text-sm text-gray-500 mt-1">Celebrating mountain cultures and traditions</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Day 2 Schedule */}
        <div className="mb-16">
          <div className="bg-teal-700 text-white rounded-t-xl p-4 text-center">
            <h3 className="text-2xl font-bold">DAY 2: 29 November, 2025</h3>
            <p className="text-teal-100">Climate Innovation & Future Directions</p>
          </div>
          
          <div className="bg-white rounded-b-xl shadow-md overflow-hidden">
            <div className="divide-y divide-teal-100">
              <div className="p-6 flex items-start">
                <div className="bg-teal-100 text-teal-800 rounded-lg p-3 mr-4 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-teal-800">Keynote Address 2</h4>
                  <p className="text-gray-600">11:00 AM IST</p>
                  <p className="text-sm text-gray-500 mt-1">Future of sustainable mountain development</p>
                </div>
              </div>
              
              <div className="p-6 flex items-start">
                <div className="bg-teal-100 text-teal-800 rounded-lg p-3 mr-4 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-teal-800">Invited Talk 2</h4>
                  <p className="text-gray-600">12:00 Noon IST</p>
                  <p className="text-sm text-gray-500 mt-1">Policy frameworks for mountain conservation</p>
                </div>
              </div>
              
              <div className="p-6 flex items-start">
                <div className="bg-teal-100 text-teal-800 rounded-lg p-3 mr-4 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-teal-800">Poster Presentation</h4>
                  <p className="text-gray-600">1:00 PM IST</p>
                  <p className="text-sm text-gray-500 mt-1">Research posters on climate innovation</p>
                </div>
              </div>
              
              <div className="p-6 bg-amber-50 flex items-start">
                <div className="bg-amber-100 text-amber-800 rounded-lg p-3 mr-4 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-amber-800">LUNCH BREAK</h4>
                  <p className="text-amber-600">2:00 PM IST</p>
                  <p className="text-sm text-amber-500 mt-1">Networking and refreshments</p>
                </div>
              </div>
              
              <div className="p-6 flex items-start">
                <div className="bg-teal-100 text-teal-800 rounded-lg p-3 mr-4 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 01118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-teal-800">Valedictory Session</h4>
                  <p className="text-gray-600">3:00 PM IST</p>
                  <p className="text-sm text-gray-500 mt-1">Conference conclusions and way forward</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="bg-white rounded-xl p-8 shadow-md border border-teal-100">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-teal-800 mb-2">Important Notes</h3>
            <div className="h-1 w-16 bg-amber-500 rounded mx-auto"></div>
          </div>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>All times are in Indian Standard Time (IST)</li>
            <li>Parallel sessions may be subject to change based on final paper selections</li>
            <li>Detailed program with specific paper presentations will be shared closer to the conference dates</li>
            <li>Cultural program will showcase traditions from mountainous regions</li>
          </ul>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}