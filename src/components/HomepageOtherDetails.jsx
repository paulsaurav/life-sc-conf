import React from 'react'

const HomepageOtherDetails = () => {
  return (
    <section className="bg-white text-gray-800 py-12 px-4">
      <div className="max-w-[1175px] mx-auto flex flex-col gap-12">

        {/* Row 1: Background + Expected Outcome */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Background */}
          <div className="w-full md:w-2/3">
            <h2 className="text-2xl font-bold mt-2 text-gray-900">BACKGROUND</h2>
            <p className="text-gray-800 text-md font-medium mt-1 text-justify">
              To be updated
            </p>
          </div>

          {/* Expected Outcome */}
          <div className="w-full md:w-1/3">
            <h2 className="text-2xl font-bold mt-2 text-gray-900">EXPECTED OUTCOME</h2>
            {/* <p className='text-gray-800 text-md font-medium mt-1 text-justify'>The major benefits that are expected may be furnished as below:-</p>
            <ul className="list-disc list-inside space-y-2 text-justify text-md text-gray-800 mt-2">
              <li>Provide an International forum for academicians and researchers in government organizations and industry to develop, contribute and present papers for meaningful interactions.</li>
              <li>
                Identifying key topics & futuristic problems for research in the area of Advanced Computing, Machine Learning, Robotics and Internet Technologies.
              </li>
              <li>
                Creating knowledgebase in electronic format.
              </li>
              <li>
                Publication of research outcome in the form of proceedings of the conference.
              </li>
              <li>
                Forge national and international research collaboration through exchange of technical knowledge and MOUs.
              </li>
              <li>Motivate young students and researchers for undertaking research.</li>
              <li>Exploring interdisciplinary research prospects in the major thrust areas of Computer Science.</li>
              <li>Lateral interaction with other nodal and related departments (Govt. / Semi Govt. Institutions / Industry) for development of new technologies.</li>
            </ul> */}
            <p>To be updated</p>
          </div>
        </div>

        {/* Row 2: Motivation */}
        <div>
          <h2 className="text-2xl font-bold mt-2 text-gray-900">MOTIVATION</h2>
          <p className="text-gray-800 text-md font-medium mt-1 text-justify">
            To be updated
          </p>
        </div>
      </div>
    </section>
  )
}

export default HomepageOtherDetails