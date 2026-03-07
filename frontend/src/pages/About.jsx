import { FaEye, FaBullseye, FaHandshake, FaAnchor, FaQuoteLeft } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function AboutUs() {
  return (
    <div className="min-h-screen text-white">
      <div className="container mx-auto px-4 py-12">
        {/* Our Founder Section */}
        <section className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-white">Our Founder</h2>
          </div>

          <div className="max-w-5xl mx-auto bg-white bg-opacity-5 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-0">
              {/* Photo */}
              <div className="md:col-span-2 flex items-center justify-center p-8">
                <div className="relative">
                  <img
                    src="/captain.jpeg"
                    alt="Capt. Amar Nath Singh"
                    className="rounded-2xl shadow-xl w-full max-w-sm h-[28rem] object-cover"
                  />
                  <div className="absolute -bottom-3 -right-3 bg-primary text-white px-4 py-2 rounded-lg shadow-md">
                    <FaAnchor className="inline mr-2" />
                    <span className="font-semibold text-sm">CFP Certified</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="md:col-span-3 p-8">
                <h3 className="text-2xl font-bold text-green-400 mb-1">Capt. Amar Nath Singh</h3>
                <p className="text-gray-400 mb-4 text-sm font-medium">Founder | Certified Financial Planner (CFP)</p>

                <div className="space-y-4 text-gray-300 text-justify leading-relaxed">
                  <p>
                    Capt. Amar has sailed on various types of tankers over the past 30 years, including more than
                    15 years as a Master Mariner. During his extensive seafaring career, he observed that most
                    seafarers lacked awareness on personal finance—something he later realized is true for many
                    people ashore as well.
                  </p>
                  <p>
                    This insight sparked his passion for self-education in personal finance, financial instruments,
                    and the capital markets. Over the years, he has witnessed the financial world up close and
                    observed the widespread issue of mis-selling of financial products. He realized that many
                    individuals fall prey to unsuitable products simply due to a lack of awareness and understanding.
                  </p>
                  <p>
                    Capt. Amar has been a guiding force for many of his colleagues—both onshore and onboard—helping
                    them not only with investments but also in becoming more financially literate and proactive about
                    their financial health.
                  </p>
                  <p>
                    He is accredited by the Financial Planning Standard Board (FPSB) USA, as a Certified Financial
                    Advisor (CFP) which is recognised in more than 28 countries. This certification provides
                    specialisation in Investment planning, Retirement planning, Risk management, Estate management
                    and Tax Planning.
                  </p>
                </div>

                {/* Quote */}
                <div className="mt-6 bg-black bg-opacity-30 rounded-xl p-5 border-l-4 border-green-500">
                  <FaQuoteLeft className="text-green-500 text-xl mb-2" />
                  <p className="italic text-gray-200 text-lg">
                    {'"Knowing we don\'t know doesn\'t hurt as much as not knowing that we don\'t know."'}
                  </p>
                </div>

                {/* Closing */}
                <div className="mt-6 text-gray-300">
                  <p>
                    Let us help you gain clarity, confidence, and control over your finances.
                    <br />
                    Do reach out to us to help you achieve your dream goals.
                  </p>
                  <p className="mt-4 font-semibold text-white">
                    Warm regards,
                    <br />
                    <span className="text-green-400">Team Aarnik Capital Services LLP</span>
                  </p>
                </div>

                <div className="mt-6">
                  <NavLink
                    to="/contacts"
                    className="bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-accent transition-colors inline-block"
                  >
                    Get In Touch
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Video Section */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <div className="relative w-full pt-[56.25%] rounded-2xl overflow-hidden shadow-lg">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/5oYm1GtaVcg?autoplay=1&mute=1"
                title="Aarnik Capital Services"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </div>
          </div>
        </section>

        {/* Vision, Mission, Partnership Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white shadow-lg rounded-2xl p-6 text-center">
            <FaEye className="text-4xl text-green-500 mx-auto mb-4" />
            <h4 className="text-xl font-bold mb-4 text-gray-800">Our Vision</h4>
            <p className="text-justify text-gray-700">
              Our vision is simple yet powerful, to ensure financial freedom for all. We believe that
              everyone deserves a chance to thrive. Financial security shouldn&apos;t be a privilege; it should be a right.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-2xl p-6 text-center">
            <FaBullseye className="text-4xl text-blue-500 mx-auto mb-4" />
            <h4 className="text-xl font-bold mb-4 text-gray-800">Our Mission</h4>
            <p className="text-justify text-gray-700">
              With personalized guidance and transparent strategies, we cut through the noise. We turn confusion into clarity.
              Our mission is to build trust and foster education, creating an everlasting partnership with our clients.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-2xl p-6 text-center">
            <FaHandshake className="text-4xl text-yellow-500 mx-auto mb-4" />
            <h4 className="text-xl font-bold mb-4 text-gray-800">Lasting Partnership</h4>
            <p className="text-justify text-gray-700">
              Together, we will navigate the financial landscape. Together, we will invest in brighter futures.
              We&apos;re here to unlock your financial potential and help you achieve your aspirations—because your success is our success.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}