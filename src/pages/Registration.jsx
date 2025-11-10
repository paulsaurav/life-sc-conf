import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Registration() {
  return (
    <section className="bg-white text-black">
      <Header />
      <div className="mx-auto w-full max-w-[1050px] px-4 mt-14">
        {/* Page title */}
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-wide uppercase">
          Registration
        </h1>

        {/* REGISTRATION FEES */}
        <h2 className="mt-10 text-xl font-extrabold uppercase">
          Registration Fees
        </h2>

        <div className="overflow-x-auto mt-4">
          <table className="table w-full bg-white [&_th]:text-black">
            <thead>
              <tr className="[&>*]:border [&>*]:border-base-300">
                <th className="bg-white font-semibold text-black">Category</th>
                <th className="bg-white font-semibold text-black">
                  Registration Amount (Indian)
                </th>
                <th className="bg-white font-semibold text-black">
                  Registration Amount (Foreign)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="[&>*]:border [&>*]:border-base-300">
                <td>Student/Scholar (Assam University, Silchar)</td>
                <td>Rs. 1000</td>
                <td>Not applicable</td>
              </tr>
              <tr className="[&>*]:border [&>*]:border-base-300">
                <td>Student/Scholar (Other Universities/Institutes)</td>
                <td>Rs. 2000</td>
                <td>€100</td>
              </tr>
              <tr className="[&>*]:border [&>*]:border-base-300">
                <td>Academia/Industry</td>
                <td>Rs. 5000</td>
                <td>€100</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* PUBLICATION */}
        <h2 className="mt-12 text-xl font-extrabold uppercase">Publication</h2>
        <p className="mt-3">
          The conference proceeding will be published either in Springer or Taylor & Francis.
        </p>

        {/* PAPER SUBMISSION */}
        <h2 className="mt-10 text-xl font-extrabold uppercase">
          Paper Submission
        </h2>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <p className="mt-3">Microsoft CMT Portal</p>

          <a
            href="#"
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-4"
          >
            <button className="btn btn-success uppercase shadow-md">
              Paper Submission
            </button>
          </a>
        </div>

        {/* IMPORTANT DATES */}
        <h2 className="mt-12 text-xl font-extrabold uppercase">
          Important Dates
        </h2>
        <ul className="mt-4 list-disc pl-6 space-y-2">
          <li>Paper Submission Deadline: 20 November, 2025</li>
          <li>Notification of Acceptance: 22 November, 2025</li>
          <li>Early Birds Registration: 25 November, 2025</li>
          <li>Conference Dates: 28–29, November, 2025</li>
        </ul>
      </div>
      <br />
      <br />
      <Footer />
    </section>
  );
}
