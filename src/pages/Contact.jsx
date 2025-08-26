import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-white">
      <Header />
      
      {/* Hero Section with Mountain Background */}
      <div className="relative h-80 bg-gradient-to-br from-teal-900 to-teal-700 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/mountain-pattern.svg')] opacity-10"></div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-teal-50 to-transparent"></div>
        
        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <div className="relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact Us</h1>
            <p className="text-xl text-teal-100 max-w-2xl mx-auto">
              Get in touch with us about the conference on mountain sustainability
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
      
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-teal-800 mb-4">Get In Touch</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Have questions about the conference on Climate Change and Environmental Sustainability 
            in Mountainous and Hilly Landscapes? We're here to help.
          </p>
        </div>

        {/* Contact Information Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Email Card */}
          <div className="bg-white rounded-xl p-6 shadow-md border border-teal-100 hover:shadow-lg transition-shadow duration-300">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-teal-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-teal-800 mb-2">Email Us</h3>
              <p className="text-gray-600 mb-4">For general inquiries and information</p>
              <a href="mailto:cs.aus.silverjubilee@gmail.com" className="text-teal-700 hover:text-teal-900 font-medium">
                cs.aus.silverjubilee@gmail.com
              </a>
            </div>
          </div>

          {/* Phone Card */}
          <div className="bg-white rounded-xl p-6 shadow-md border border-teal-100 hover:shadow-lg transition-shadow duration-300">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-teal-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-teal-800 mb-2">Call Us</h3>
              <p className="text-gray-600 mb-4">For immediate assistance</p>
              <a href="tel:+917002816218" className="text-teal-700 hover:text-teal-900 font-medium">
                +91 70028 16218
              </a>
            </div>
          </div>

          {/* Address Card */}
          <div className="bg-white rounded-xl p-6 shadow-md border border-teal-100 hover:shadow-lg transition-shadow duration-300">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-teal-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-teal-800 mb-2">Visit Us</h3>
              <p className="text-gray-600 mb-4">Assam University, Silchar</p>
              <p className="text-gray-700">
                Dorgakona<br />
                Cachar, Assam, India – 788011
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form and Map Section */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-xl p-8 shadow-md border border-teal-100">
            <h2 className="text-2xl font-bold text-teal-800 mb-6">Send Us a Message</h2>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Your name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors duration-300"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors duration-300"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  placeholder="What's this about?"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors duration-300"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Your message here..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors duration-300"
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-teal-700 hover:bg-teal-800 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-colors duration-300 flex items-center justify-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
                Send Message
              </button>
            </form>
          </div>

          {/* Map */}
          <div>
            <h2 className="text-2xl font-bold text-teal-800 mb-6">Find Us</h2>
            <div className="rounded-xl overflow-hidden shadow-md">
              <iframe
                title="Assam University, Silchar - Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4677.70563434429!2d92.75009531324625!3d24.688956137035863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x374e37211d005ab7%3A0x245535539b56a844!2sAssam%20University%20Gate!5e1!3m2!1sen!2sin!4v1756175836732!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-xl"
              />
            </div>
            
            <div className="mt-6 bg-teal-50 rounded-xl p-6">
              <h3 className="font-semibold text-teal-800 mb-3">Conference Venue</h3>
              <p className="text-gray-700">
                The conference will be held at Assam University, Silchar, nestled in the beautiful landscapes of Northeast India, providing the perfect backdrop for our discussions on mountain sustainability.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}