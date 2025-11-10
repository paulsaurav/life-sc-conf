import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const KeynoteSpeakers = () => {
  const speakers = [
    {
      name: "Kamal Malla Bujarbaruah",
      title: "Former VC, Assam Agricultural University",
      subtitle: "Former Deputy Director General, ICAR, New Delhi",
      photo: "/speakers/Picture1.jpg"
    },
    {
      name: "Prof. Akshay Talukdar",
      title: "In-Charge, National Phytotron Facility",
      subtitle: "ICAR – IARI, New Delhi",
      photo: "/speakers/Picture2.jpg"
    },
    {
      name: "Dr. Sathish B. Shivachandra",
      title: "Principal Scientist",
      subtitle: "ICAR–National Institute of Veterinary Epidemiology and Disease Informatics, Bengaluru",
      photo: "/speakers/Picture3.jpg"
    },
    {
      name: "Dr. Mohd. Mudassar Chanda",
      title: "Senior Scientist",
      subtitle: "ICAR–National Institute of Veterinary Epidemiology and Disease Informatics, Bengaluru",
      photo: "/speakers/Picture4.png"
    },
    {
      name: "Dr. Mohd. Hussain",
      title: "Dean of Science",
      subtitle: "University of Ladakh, Ladakh",
      photo: "/speakers/Picture5.jpg"
    },
    {
      name: "Prof. Giuseppe Maiorano",
      title: "Department of Agricultural, Environmental and Food Sciences",
      subtitle: "University of Molise, Campobasso, Italy",
      photo: "/speakers/Picture6.png"
    },
    {
      name: "Prof. Angel Antonio Carbonell Barrachina",
      title: "Vice-Rector for Investigation & Transfer",
      subtitle: "Miguel Hernandez University, Elche, Spain",
      photo: "/speakers/Picture7.jpg"
    },
    {
      name: "Dr. Israel Maldonado Rosas",
      title: "Citmer Reproductive Medicine",
      subtitle: "Mexico City, Mexico",
      photo: "/speakers/Picture8.png"
    },
    {
      name: "Dr. Manesh K. Panner-Selvam",
      title: "Tulane University Health Sciences Center",
      subtitle: "New Orleans, USA",
      photo: "/speakers/Picture9.jpg"
    },
    {
      name: "Dr. Susmita Dey",
      title: "Department of Biomedical Engineering and Interventional Radiology",
      subtitle: "Cleveland Clinic, Cleveland, USA",
      photo: "/speakers/Picture10.jpg"
    },
    {
      name: "Dr. Artan Qineti",
      title: "Department of Economic Policy",
      subtitle: "Slovak University of Agriculture in Nitra, Slovakia",
      photo: "/speakers/Picture11.png"
    },
    {
      name: "Prof. Lucia Rocco",
      title: "Department of Environmental, Biological and Pharmaceutical Science and Technologies",
      subtitle: "University of Campania Luigi Vanvitelli, Caserta, Italy",
      photo: "/speakers/Picture12.jpg"
    },
    {
      name: "Dr. Filomena Mottola",
      title: "Department of Environmental, Biological and Pharmaceutical Science and Technologies",
      subtitle: "University of Campania Luigi Vanvitelli, Caserta, Italy",
      photo: "/speakers/Picture13.png"
    },
    {
      name: "Dr. Katarina Michalcova",
      title: "Head, Department of Laboratory Diagnostic Methods in Healthcare",
      subtitle: "Slovak Health University, Banska Bystrica, Slovakia",
      photo: "/speakers/Picture14.jpg"
    },
    {
      name: "Dr. Francesco Vizzarri",
      title: "Editor-in-Chief, Slovak Journal of Animal Science",
      subtitle: "Nitra, Slovakia",
      photo: "/speakers/Picture15.png"
    },
    {
      name: "Dr. Pallav Sengupta",
      title: "College of Medicine",
      subtitle: "Gulf Medical University, Ajman, UAE",
      photo: "/speakers/Picture16.jpg"
    },
    {
      name: "Dr. Sulagna Dutta",
      title: "College of Medicine",
      subtitle: "Ajman University, Ajman, UAE",
      photo: "/speakers/Picture17.jpg"
    },
    {
      name: "Dr. Manoj Kumar Shah",
      title: "Coordinator, National Swine Research Programme",
      subtitle: "Nepal Agricultural Research Council, Pakhribas, Nepal",
      photo: "/speakers/Picture18.jpg"
    },
    {
      name: "Dr. Anjay Kumar Sah",
      title: "National Swine Research Programme",
      subtitle: "Nepal Agricultural Research Council, Pakhribas, Nepal",
      photo: "/speakers/Picture19.jpg"
    },
    {
      name: "Prof. Sukalyan Kumar Kundu",
      title: "Department of Pharmacy",
      subtitle: "Jahangirnagar University, Dhaka, Bangladesh",
      photo: "/speakers/Picture20.png"
    },
    {
      name: "Dr. Shuvra Kanti Dey",
      title: "Department of Microbiology",
      subtitle: "Jahangirnagar University, Dhaka, Bangladesh",
      photo: "/speakers/Picture21.jpg"
    },
    {
      name: "Dr. Pradip Debnath",
      title: "Department of Pharmacy",
      subtitle: "Comilla University, Cumilla, Dhaka, Bangladesh",
      photo: "/speakers/Picture22.png"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-teal-600 to-teal-800 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 uppercase tracking-wide">
            Eminent Speakers
          </h1>
          <p className="text-xl text-teal-100 max-w-2xl mx-auto">
            Distinguished experts and researchers from around the world
          </p>
        </div>
        
        {/* Wave SVG */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg
            className="relative block w-full h-[100px]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 100"
            preserveAspectRatio="none"
          >
            <path
              fill="#ffffff"
              d="M0,40 C480,120 960,0 1440,60 L1440,100 L0,100 Z"
            ></path>
          </svg>
        </div>
      </section>
      
      {/* Speakers Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {speakers.map((speaker, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-200"
              >
                {/* Photo Section */}
                <div className="relative w-full h-80 bg-gradient-to-br from-teal-100 to-teal-200 flex items-center justify-center">
                  {speaker.photo ? (
                    <img
                      src={speaker.photo}
                      alt={speaker.name}
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <div className="text-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-24 w-24 text-teal-400 mx-auto mb-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                      <p className="text-sm text-teal-600 font-medium">Photo Coming Soon</p>
                    </div>
                  )}
                </div>
                
                {/* Speaker Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {speaker.name}
                  </h3>
                  <p className="text-sm font-semibold text-teal-700 mb-1">
                    {speaker.title}
                  </p>
                  <p className="text-sm text-gray-600">
                    {speaker.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  )
}

export default KeynoteSpeakers
