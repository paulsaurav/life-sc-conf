import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Archive() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-white">
      <Header />
      
      {/* Hero Section with Mountain Background */}
      <div className="relative h-80 bg-gradient-to-br from-teal-900 to-teal-700 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/mountain-pattern.svg')] opacity-10"></div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-teal-50 to-transparent"></div>
        
        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <div className="relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Conference Archive</h1>
            <p className="text-xl text-teal-100 max-w-2xl mx-auto">
              Historical records of our mountain sustainability conferences
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
      
      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Coming Soon Section */}
        <div className="bg-white rounded-xl p-12 shadow-lg text-center border border-teal-100">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-teal-100 rounded-full mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-teal-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-teal-800 mb-4">Archive Coming Soon</h2>
            <p className="text-lg text-gray-600 max-w-xl mx-auto">
              We're currently compiling historical conference materials, proceedings, and resources from past events.
            </p>
          </div>
          
          <div className="bg-teal-50 rounded-lg p-6 max-w-md mx-auto">
            <h3 className="font-semibold text-teal-800 mb-3">What to expect in our archive:</h3>
            <ul className="text-left text-gray-700 space-y-2">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-teal-600 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Past conference proceedings
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-teal-600 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Photo galleries from previous events
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-teal-600 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Presentation slides and materials
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-teal-600 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Historical conference reports
              </li>
            </ul>
          </div>
          
          <div className="mt-10">
            <p className="text-gray-600 mb-6">Check back soon for access to our historical materials</p>
            <div className="inline-flex items-center bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 01118 0z" />
              </svg>
              Content will be updated after the conference
            </div>
          </div>
        </div>

        {/* Mountain Illustration */}
        <div className="text-center mt-16">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-40 mx-auto text-teal-300">
            <path fill="currentColor" d="M23,20H1a1,1,0,0,1-.85-1.53L4.47,10.7A3,3,0,0,1,7.24,9H8.76a3,3,0,0,1,2.77,1.7L11.15,12h1.7l2.13-4.3A3,3,0,0,1,17.76,7h1.1a2.93,2.93,0,0,1,2.6,1.6l2.62,5.69A1,1,0,0,1,23,20ZM2.87,18H21.13l-2.12-4.59a.94.94,0,0,0-.85-.53H17.76a1,1,0,0,0-.92.57L15.15,15H8.85L7.16,13.43A1,1,0,0,0,6.24,13H5.84a.94.94,0,0,0-.85.53Z"/>
          </svg>
          <p className="text-teal-700 font-medium mt-4">Exploring past journeys in mountain sustainability</p>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}