import Footer from "../components/Footer";
import Header from "../components/Header";

const people = [
  {
    role: "Chief Patron",
    name: "Prof. Rajive Mohan Pant",
    title: "Vice-Chancellor, Assam University, Silchar",
    img: "/committee/vc.webp",
    profileHref: "#",
  },
  {
    role: "Co-Patron",
    name: "Prof. Niranjan Roy",
    title: "Vice-Chancellor, Gurucharan University",
    img: "/committee/0HKYchFK_400x400.jpg",
    profileHref: "#",
  },
  {
    role: "Chairman",
    name: "Prof. Molankal Gangashushan Mallesham",
    title: "Director, Centre for Indian Knowledge Systems, AUS",
    img: "/committee/2x5VykVu_400x400.jpg",
    profileHref: "#",
  },
  {
    role: "Vice Chairman",
    name: "Prof. Anup Kumar Dey",
    title: "Dean Students' Welfare, AUS & Regional Joint Secretary, BVP NE",
    img: "/committee/ahsdnalsdnlasd.jpg",
    profileHref: "#",
  },
  {
    role: "Organising Secretary",
    name: "Dr. Shubhadeep Roychoudhury",
    title: "Assoc. Professor, Dept. of Life Science & Bioinformatics, AUS",
    img: "/committee/aksjdnasdnasd.jpg",
    profileHref: "#",
  },
  {
    role: "Convenor",
    name: "Dr. Yogisharadhya Revanaiah",
    title: "Sr. Scientist & Head, ICAR-KVK Hailakandi",
    img: "/committee/no-avatar.webp",
    profileHref: "#",
  },
  {
    role: "Coordinator",
    name: "Sri Biswajyoti Dey",
    title: "Regional Convenor – Sampark, BVP NE",
    img: "/committee/no-avatar.webp",
    profileHref: "#",
  },
  {
    role: "Treasurer",
    name: "Dr. Amit Das",
    title: "Assoc. Professor, Dept. of Business Administration, AUS",
    img: "/committee/asnd.jpg",
    profileHref: "#",
  }
];

const lists = {
  patrons: [
    "Prof. Rajive Mohan Pant, VC, AUS",
    "Prof. Niranjan Roy, VC, Gurucharan University",
    "Dr. Bibhas Deb, VC, Maharaja Bir Bikram University",
    "Prof. Debabrata Das, Advisor to Higher Education, Govt. of Assam",
    "Prof. Dilip Kumar Baidya, Director, NIT Silchar",
    "Prof. Kamal Malla Bujarbaruah, Former VC, AAU & Former DDG, ICAR",
    "Shri. Angshuman Dey, Joint Secretary, Ministry of DoNER, Govt. of India",
    "Dr. Samarendra Hazarika, Director i/c, ICAR RC for NEH Region",
    "Prof. M. Premjit Singha, Former VC, CAU Imphal & Regional President, BVP NE",
    "Prof. Sunil Nautiyal, Former Director, NIHE"

  ],
  coPatrons: [
    "Dr. Pradosh Kiran Nath, Registrar, AUS",
    "Dr. Bidyut Kanti Paul, Registrar, Gurucharan University",
    "Dr. Subhadeep Dhar, Finance Officer i/c, AUS",
    "Dr. Kadirvel Govindasamy, Director, ICAR – ATARI, Guwahati",
    "Sri Subhash Chandra Keyal, Asst. Solicitor General & National Member - Sampark, BVP",
    "Dr. Sunil Doley, Head, ICAR RC for Mizoram Centre",
    "Sri Tanung Jamoh, Director Science & Technology, NEC",
    "Sri Mangsatabam Iboyaima Meitei, Advisor NEC",
    "Dr. Girish Patil, Director, ICAR NRC on Mithun",
    "Prof. Akshay Talukdar, In-Charge, National Phytotron Facility, ICAR – IARI",
    "Dr. Ram Pratim Deka, Senior RMC & Country Representative India, ILRI, Kenya",
    "Dr. Bijay Kumar Behera, Chief Executive, NFDB",
    "Prof. Chira Ranjan Bhattacharjee, Dean Academics, AUS",
    "Prof. Piyush Pandey, Dean Research & Consultancy, AUS",
    "Prof. Prasanna Kumar Pathak, Dean, Faculty of Agriculture, AAU",
    "Dr. Sathish B. Shivachandra, CEO NaaViC, ICAR-NIVEDI",
    "Dr. Sandeep Ghatak, Head, DAFS, ICAR RC for NEH Region",
    "Dr. Pallabh Choudhury, Joint Director, ICAR – IVRI RS",
    "Dr. Abdur Rezzak Ahmed, Joint Director (Agriculture), Govt. of Assam",
    "Dr. Rajesh Joshi, NIHE"

  ],
  chairman: [
    "Prof. Molankal Gangashushan Mallesham, Director, Centre for Indian Knowledge Systems, AUS",
  ],
  viceChairmen: [
    "Prof. Anup Kumar Dey, Dean Students' Welfare, AUS & Regional Joint Secretary, BVP NE",
    "Sri Jagadindu Deb, Regional General Secretary, BVP NE",
  ],
  organisingSecretary: [
    "Dr. Shubhadeep Roychoudhury, Assoc. Professor, Dept. of Life Science & Bioinformatics, AUS",
  ],
  convenor: [
    "Dr. Yogisharadhya Revanaiah, Sr. Scientist & Head, ICAR-KVK Hailakandi",
  ],
  coordinator: [
    "Sri Biswajyoti Dey, Regional Convenor – Sampark, BVP NE",
  ],
  treasurer: [
    "Dr. Amit Das, Assoc. Professor, Dept. of Business Administration, AUS",
  ],
  members: [
    "Prof. Suparna Roy, Head, Dept. of History, AUS",
    "Prof. Debotosh Chakraborty, Head, Dept. of Political Science, AUS",
    "Dr. Suresh Chandra Biswas, Sr. Scientist & Head, KVK Cachar",
    "Dr. Pulakabha Chowdhury, Sr. Scientist & Head, KVK Sribhumi",
    "Prof. Mahuya Sengupta, Head, Dept. of Biotechnology, AUS",
    "Prof. Himadri Sekhar Das, Head, Dept. of Political Science, AUS",
    "Dr. Darshana Patoa, Chief Medical Officer, AUS",
    "Dr. Kingshuk Adhikari, Dept. of Commerce, AUS",
    "Dr. Debasish Chakraborty, Dept. of Visual Arts, AUS",
    "Dr. Gautam Dutta, Dept. of Visual Arts, AUS",
    "Dr. Apratim Nag, Principal, Cachar College",
    "Dr. Ratan Kumar, Principal, Srikishan Sarda College",
    "Prof. Prodipto Das, Head, Dept. of Computer Science, AUS",
    "Dr. Sujit Kumar Ghosh, Head, Dept. of Performing Arts, AUS",
    "Dr. Ajita Tiwari, Head, Dept. of Agricultural Engineering, AUS",
    "Dr. Soumendra Bhattacharjee, Head, Dept. of Commerce, AUS",
    "Prof. Sudip Choudhury, Dept. of Chemistry, AUS",
    "Prof. Barunjyoti Choudhury, Dept. of Bengali, AUS",
    "Prof. Tapati Das, Dept. of Ecology & Environmental Science, AUS",
    "Prof. Arun Jyoti Nath, Dept. of Ecology & Environmental Science, AUS",
    "Prof. Paromita Das, Dept. of Mass Communication, AUS",
    "Prof. Govind Sharma, Dept. of Sanskrit, AUS",
    "Dr. Tushar Kanti Deb Kanunjna, Ecologist & Civil Society Activist",
    "Dr. Niharendu Dhar, Deputy Registrar, NIT Silchar",
    "Dr. Mrityunjay Kumar Singh, Dept. of Social Work, AUS",
    "Dr. Chetan Baliram Khobragade, Dept. of Agricultural Engineering, AUS",
    "Dr. Sumit Saha, Dept. of Mathematics, AUS",
    "Dr. Sangharsh Mishra, Science communication, AUS",
    "Dr. Kalyan Das, Dept. of Business Administration, AUS",
    "Dr. Dristirupa Patgiri, Dept. of Law, AUS",
    "Dr. Kollol Das Talukdar, Rabindra Library, AUS",
    "Dr. Pranesh Debnath, Dept. of Commerce, AUS",
    "Dr. Joyashree Dey, Dept. of Social Work, AUS",
    "Dr. Sanjoy Sinha, Dept. of Economics, AUS",
    "Dr. Sarbani Dey Roy, Dept. of Pharmaceutical Sciences, AUS",
    "Dr. Biswa Ranjan Roy, Dept. of Computer Science, AUS",
    "Dr. Munmun Chakraborty, Dept. of Philosophy, AUS",
    "Dr. Ruma Debnath, Dept. of Sociology, AUS",
    "Er. Debanon Dey Purkayastha, Engineering Section, AUS",
    "Er. Partha Pratim Dey, Engineering Section, AUS",
    "Ranjit Das, Finance Section, AUS",
    "Alok Chakraborty, Finance Section, AUS",
    "Anup Verma, Research & Fellowship Section, AUS",
    "Sandeep Dey, Research & Fellowship Section, AUS",
    "Nazrul Islam Barbhuiya, Finance Section, AUS",
    "Ramakanta Rajkumar, Academic Section, AUS",
  ],
  localOrganising: [
    "Dr. Ramanjum E., Dept. of Computer Science & Engineering, NIT Silchar",
    "Dr. Santosh Kumar, Dept. of Mechanical Engineering, NIT Silchar",
    "Dr. Bijoy Chhetri, ICAR-KVK Hailakandi",
    "Dr. Saurabh Sarma, ICAR-KVK Hailakandi",
    "Mr. Angom Baleshwor Singh, ICAR KVK Hailakandi",
    "Dr. Samik Chowdhury, ICAR RC for NEH Region, Mizoram Centre",
    "Dr. Himangsu Misra, KVK Cachar",
    "Dr. Joyshikh Sonowal, KVK Karimganj",
    "Dr. Soumitra Nath, Dept. of Biotechnology, Gurucharan College Silchar",
    "Dr. Surojit Sen, Mariani College, Mariani",
    "Dr. Binoy Paul, Dept. of History, AUS",
    "Dr. Madhumita Roy, Bir Bikram Institution, Dharmanagar",
    "Dr. Rinku Saha, Mediland Hospital & Research Centre, Silchar",
    "Dr. Mitrajit Deb, Sparsh, Dharmanagar",
    "Mr. Raja Ram Bunker, ICAR KVK Hailakandi",
    "Mrs. Kabita C. Sarma, ICAR-KVK Hailakandi, Assam",
    "Mr. Arindam Choudhury, ICAR-KVK Hailakandi, Assam",
    "Subrata Sinha, Estate Section, AUS",
    "Birupakshya Paul Choudhury, Cachar College",
    "Simmee Das, Cluster Resource Centre Coordinator, Hailakandi",
    "Pranab Bhattacharjee, Dept. of Mass Communication, AUS",
    "Arindom Sarkar, Dept. of Mass Communication, AUS",
    "Kutub Uddin Ansari, Dept. of Mass Communication, AUS",
    "Tara Shankar Goswami, Estate Dept., AUS",
    "Sucharita Roy, Finance Dept., AUS",
    "Kaberi Nag, Establishment Dept., AUS",
    "Bhaskar Goswami, Dept. of Physics, AUS",
    "Jayita Das, Dept. of Pharmaceutical Sciences, AUS",
    "Abhideep Roy, Dept. of Life Science & Bioinformatics, AUS",
    "Saurav Paul, Dept. of Computer Science, AUS",
    "Tanmoy Acharjee, Dept. of Business Administration, AUS",
    "Sandipan Das, Dept. of Life Science & Bioinformatics, AUS",
    "Utsav Singh Thakur, Dept. of Social Work, AUS",
    "Sarada Singha, Dept. of Political Science, AUS",
    "Rupankar Bhattacharjee, Help Earth, Guwahati",
    "Somir Das, Dept. of Computer Science & Engineering, AUS",
    "Subrajyoti Dey, Dept. of Social Work, AUS",
    "Pritam Acharjee, Dept. of Computer Science & Engineering, AUS",
    "Bipasha Rajak, Dept. of Social Work, AUS",
    "Rajkinkar Chakraborty, Dept. of Social Work, AUS",
    "Hrishab Chakraborty, Dept. of Social Work, AUS",
    "Mukund Kumar, Dept. of Law, AUS",
    "Sayani Paul, Dept. of Social Work, AUS",
    "Pita Ghosh, Vocational Education Dept., AUS",
    "Harshiv Bhar, Vocational Education Dept., AUS",
    "Swapneel Choudhury, Vocational Education Dept., AUS",
    "Mousumi Rajbongshi, National Service Scheme, AUS",
    "Reshmi Ghosh, Dept. of Social Work, AUS",
    "Tanish Kashyap, Dept. of English, AUS",
    "Pallabi Roy, Dept. of Life Science & Bioinformatics, AUS",
    "Bhrigu Kashyap, Dept. of Sanskrit, AUS",
    "Sanku Paul, Dept. of Economics, AUS",
    "Debojit Chowdhury, Dept. of Economics, AUS",
    "Jayoshree Das, Dept. of Economics, AUS",
    "Debajit Biswas, Dept. of Education, AUS",
    "Rituparna Roy, Dept. of History, AUS",
    "Bedshankar Das, Dept. of Computer Science, AUS",
    "Pallabi Das, Dept. of Social Work, AUS",
    "Tanish Das Kashyap, Dept. of English, AUS",
    "Ratul Roy, Dept. of Physics, AUS",
    "Bedopriya Chakraborty, Dept. of Agricultural Engineering, AUS",
    "Rupam Dutta, Dept. of Education, AUS",
    "Shubham Dey, Dept. of Agricultural Engineering, AUS",
    "Mohit Chanda, Dept. of Agricultural Engineering, AUS",
    "Raj Kishore Das, Dept. of Life Science & Bioinformatics, AUS",
    "Rima Chakraborty, Dept. of Life Science & Bioinformatics, AUS",
    "Dalia Sinha, Dept. of Life Science & Bioinformatics, AUS",
    "Snygdha Purkayastha, Dept. of Life Science & Bioinformatics, AUS",
    "Ng. Ankita Singha, Dept. of Life Science & Bioinformatics, AUS",

  ],
  internationalAdvisory: [
    "Prof. Robert Stawaz, Vice-Rector for Educational Affairs and DevelopmentUniversity of the National Education Commission, Krakow, Poland",
    "Prof. Mahadeb Pal, Maryland State Dept. of Health & Mental Hygiene, Maryland, USA",
    "Prof. Giuseppe Maiorano, Dept. of Agricultural, Environmental & Food Sciences, University of Molise, Campobasso, Italy",
    "Prof. Angel Antonio Carbonell Barrachina, Dept. of Agro-Food Technology, Miguel Hernandez University, Elche, Spain",
    "Prof. Adriana Kolesarova, Director, AgroBioTech Research Center, Slovak University of Agriculture in Nitra, Slovakia",
    "Prof. Gregorz Formicki, Dean of the Faculty of Geography & Biology, University of the National Education Commission, Krakow, Poland",
    "Prof. Norbert Lukac, Dean, Faculty of Biotechnology & Food Sciences, Slovak University of Agriculture in Nitra, Slovakia",
    "Dr. Debojyoti Chakraborty, Sr. Scientist, Austrian Research Centre for Forests, Vienna, Austria",
    "Prof. Peter Massanyi, Head, Institute of Applied Biology, Faculty of Biotechnology & Food Sciences, Slovak University of Agriculture in Nitra, Slovakia",
    "Prof. Lucia Rocco, Dept. of Environmental, Biological & Pharmaceutical Sciences & Technologies, University of Campania Luigi Vanvitelli, Caserta, Italy",
    "Dr. Petr Slama, Assoc. Professor & Former Head, Dept. of Animal Morphology, Physiology & Genetics, Faculty of AgriSciences, Mendel University in Brno, Brno, Czech Republic",
    "Dr. Renee Hazarika, Communicator & Policy Researcher, Vienna, Austria",
    "Dr. Filomena Mottola, Dept. of Veterinary Medicine, University of Naples Federico II, Naples, Italy",
    "Dr. Ales Pavlik, Assoc. Professor & Head, Dept. of Animal Morphology, Physiology and Genetics, Mendel University, Brno.",
    "Dr. Kavindra Kumar Kesari, Sr. Scientist, Dept. of Bioproducts and Biosystems, Aalto University, Espoo, Finland.",
    "Dr. Pallav Sengupta, Assistant Professor, College of Medicine, Gulf Medical University, UAE",
    "Dr. Sulagna Dutta, Assistant Professor, College of Medicine, Ajman University, UAE",
    "Dr. Israel Maldonado Rosas, CEO, Citmer Reproductive Medicine, Mexico.",
    "Dr. Zofia Goc, Dept. of Animal Physiology and Toxicology, University of the National Education Commission, Krakow, Poland",
    "Dr. Artan Qineti, Assoc. Professor, Dept. of Economic Policy, Slovak University of Agriculture in Nitra, Slovakia",
    "Dr. Arpita Roychoudhury, Innovation Manager, Xolo GmbH, Berlin, Germany",
    "Dr. Francesco Vizzari, Researcher, Dept. of Agricultural and Environmental Science, University of Bari Aldo Moro, Bari, Italy",
    "Matej Krebs, Anja spol. s.r.o. Slovakia",
    "Prof. Sukalyan Kumar Kundu, Dept. of Pharmacy, Jahangirnagar University, Dhaka, Bangladesh",
    "Dr. Shuvra Kanti Dey, Prof. Dept. of Microbiology, Jahangirnagar University, Dhaka, Bangladesh",
    "Dr. Pradip Debnath, Assoc. Professor, Dept. of Pharmacy, Cumilla University, Kotbari, Cumilla"
  ],
  nationalAdvisory: [
    "Dr. Lungmuana, ICAR RC for NEH Region, Mizoram Centre",
    "Dr. Lalhruaipuii, ICAR RC for NEH Region, Mizoram Centre",
    "Dr. A. L. Jat, ICAR RC for NEH Region, Mizoram Centre",
    "Dr. Vikas Pali, ICAR RC for NEH Region, Mizoram Centre",
    "Dr. Blessa Sailo, ICAR RC for NEH Region, Mizoram Centre",
    "Dr. Vanlalruati, ICAR RC for NEH Region, Mizoram Centre",
    "Mr. P. L. Lalrinsanga, ICAR RC for NEH Region, Mizoram Centre",
    "Dr. Jayaditya Purkayastha, Help Earth, Guwahati",
    "Dr. Basanta Bora, Dept. of Agricultural Biotechnology, AAU",
    "Dr. Priyadarshini Bharali, Dept. of Agricultural Biotechnology, AAU",
    "Dr. Ratna Kalita, Dept. of Agricultural Biotechnology, AAU",
    "Dr. Anil Deka, Dept. of Anatomy and Histology, College of Veterinary Sciences, Khanapara",
    "Dr. Madhurima Das, Dept. of Zoology, Assam Don Bosco University",
    "Prof. Surekha Kundu, Dept. of Botany, University of Calcutta, Kolkata",
    "Dr. Shyamal Chandra Sukla Das, Sr. Scientist, ICAR - CIFRI, Regional Centre, Guwahati",
    "Dr. Rajib Deb, Sr. Scientist, ICAR NRC on Pig, Rani, Assam",
    "Dr. Lokesh E, Scientist, ICAR NRC on Pig, Rani, Assam",
    "Dr. Binod Kumar Dutta Boruah, Sr. Scientist, ICAR RC for NEH Region, Arunchal Pradesh",
    "Dr. Prasanna Pathak, Sr. Scientist, ICAR-ATARI Zone VII, Umiam",
  ],
};

function RoleLine({ role }) {
  return (
    <div className="text-xl md:text-2xl font-bold leading-tight text-teal-800">
      {role}
      <div className="h-1 w-12 bg-amber-500 rounded mt-2"></div>
    </div>
  );
}

function LeaderItem({ p }) {
  return (
    <div className="flex flex-col md:flex-row items-center gap-6 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="avatar">
        <div className="w-24 h-24 md:w-28 md:h-28 rounded-full ring-4 ring-teal-100 overflow-hidden">
          <img src={p.img} alt={p.name} className="object-cover w-full h-full" />
        </div>
      </div>
      <div className="flex-1 text-center md:text-left">
        <h3 className="text-lg font-bold text-teal-900">{p.role}</h3>
        <h4 className="text-xl font-semibold text-gray-800 mt-1">{p.name}</h4>
        <p className="text-gray-600 mt-2">{p.title}</p>
      </div>
    </div>
  );
}

function ListBlock({ title, items, center = false }) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-md">
      <h3 className={`text-xl font-bold text-teal-800 mb-4 ${center ? "text-center" : ""}`}>
        {title}
        <div className="h-1 w-12 bg-amber-500 rounded mt-2 mx-auto"></div>
      </h3>
      <ol className={`list-decimal space-y-2 ${center ? "ml-6 md:mx-auto max-w-3xl" : "ml-6"}`}>
        {items.map((t, i) => (
          <li key={i} className="text-gray-700">{t}</li>
        ))}
      </ol>
    </div>
  );
}

function TwoColList({ title, items }) {
  const mid = Math.ceil(items.length / 2);
  const left = items.slice(0, mid);
  const right = items.slice(mid);
  return (
    <div className="bg-white rounded-xl p-6 shadow-md">
      <h3 className="text-xl font-bold text-teal-800 mb-4 text-center">
        {title}
        <div className="h-1 w-12 bg-amber-500 rounded mt-2 mx-auto"></div>
      </h3>
      <div className="grid md:grid-cols-2 gap-6 mt-4">
        <ol className="list-decimal ml-6 space-y-2">
          {left.map((t, i) => (
            <li key={i} className="text-gray-700">{t}</li>
          ))}
        </ol>
        <ol className="list-decimal ml-6 space-y-2">
          {right.map((t, i) => (
            <li key={i + left.length} className="text-gray-700">{t}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default function CommitteePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-white">
      <Header />
      
      {/* Hero Section with Mountain Background */}
      <div className="relative h-96 bg-gradient-to-br from-teal-900 to-teal-700 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/mountain-pattern.svg')] opacity-10"></div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-teal-50 to-transparent"></div>
        
        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <div className="relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Organizing Committee</h1>
            <p className="text-xl text-teal-100 max-w-2xl mx-auto">
              Climate Change and Environmental Sustainability in Mountainous and Hilly Landscapes - 2025
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
          <h2 className="text-3xl font-bold text-teal-800 mb-4">Conference Leadership</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our dedicated committee members are working to make this conference on mountain sustainability a success
          </p>
        </div>
        {/* <h2 className="text-3xl font-bold text-teal-800 text-center mb-4">Patrons</h2> */}
        {/* Leadership Grid */}
        {/* <div className="grid md:grid-cols-2 gap-6 mb-16">
          {people.map((p) => (
            <LeaderItem key={p.role} p={p} />
          ))}
        </div> */}
        
        {/* Committee Sections */}
        <div className="space-y-8">
          {/* <h2 className="text-3xl font-bold text-teal-800 text-center mb-8">Committee Members</h2> */}
          
          <ListBlock title="Patrons" items={lists.patrons} />
          <ListBlock title="Co-Patrons" items={lists.coPatrons} />
          <ListBlock title="Chairman" items={lists.chairman} />
          <ListBlock title="Vice Chairmen" items={lists.viceChairmen} />
          <ListBlock title="Organising Secretary" items={lists.organisingSecretary} />
          <ListBlock title="Convenor" items={lists.convenor} />
          <ListBlock title="Coordinator" items={lists.coordinator} />
          <ListBlock title="Treasurer" items={lists.treasurer} />
          <ListBlock title="Members" items={lists.members} />
          <ListBlock title="Local Organising Committee" items={lists.localOrganising} />
          <ListBlock title="International Advisory Committee" items={lists.internationalAdvisory} />
          <ListBlock title="National Advisory Committee" items={lists.nationalAdvisory} />
        </div>
      </div>
      
      <Footer />
    </div>
  );
}