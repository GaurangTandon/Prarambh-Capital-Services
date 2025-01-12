import React from "react";
import {
  FaChartLine,
  FaHandshake,
  FaShieldAlt,
  FaUserTie,
  FaBalanceScale,
  FaLock,
  FaGraduationCap,
  FaBullseye,
  FaEye,
  FaChartPie,
} from "react-icons/fa";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const Home = () => {
  
  return (
    <div className="min-h-screen text-white">
      <div className="sm:container mx-auto">
        {/* Hero Section */}
        <section
          className="h-screen flex items-center justify-center text-center px-4 text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="max-w-4xl">
            <h1 className="sm:text-5xl text-lg font-bold mb-6" {...fadeIn}>
              Make confident choices about your money, now.
            </h1>
            <button
              className="bg-white text-primary px-8 py-3 rounded-full font-semibold text-lg hover:bg-blue-100 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Journey
            </button>
          </div>
        </section>

        {/* About Section */}
        <section className="py-5 sm:px-4">
          <div className="container flex-col justify-center">
            <div className="grid md:grid-cols-2 gap-8 items-start mb-16">
              <div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="grid grid-cols-2 gap-2 justify-center">
                  <div className=" flex justify-end items-end">
                    <img
                      src="/aboutHome/1.jpg"
                      alt="Team meeting"
                      className="rounded-lg shadow-md bg-cover"
                    />
                  </div>
                  <div className=" flex justify-start items-end">
                    <img
                      src="/aboutHome/2.jpg"
                      alt="Team meeting"
                      className="rounded-lg shadow-md bg-cover"
                    />
                  </div>
                  <div className=" flex justify-end items-start">
                    <img
                      src="/aboutHome/3.jpg"
                      alt="Team meeting"
                      className="rounded-lg shadow-md bg-cover"
                    />
                  </div>
                  <div className=" flex justify-start items-start">
                    <img
                      src="/aboutHome/4.jpg"
                      alt="Team meeting"
                      className="rounded-lg shadow-md bg-cover"
                    />
                  </div>
                </div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="bg-green-500 text-white rounded-full p-8 shadow-lg">
                    <div className="text-center">
                      <div className="text-4xl font-bold">15+</div>
                      <div className="text-sm">
                        Successful
                        <br />
                        Years
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-gray-300"
              >
                <div className=" text-center sm:text-left">
                  <h3 className="text-red-600 font-semibold text-2xl">
                    ABOUT US
                  </h3>
                  <h2 className="text-xl max-sm:text-lg font-bold text-white">
                    Welcome to Prarambh capital Services
                  </h2>
                  <h3 className="text-xl max-sm:text-lg text-white mb-2"></h3>
                </div>
                <p className="mb-8 text-lg text-justify leading-1 text-gray-300">
                  Best Mutual Fund Distributor in Delhi NCR, India
                  <br></br>
                  We are your dedicated financial advocates, committed to
                  transforming your financial future. We are here to make
                  financial security a reality for everyone, empowering you to
                  take control of your money.
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="text-center">
                    <FaBullseye className="text-4xl text-green-500 mx-auto mb-4" />
                    <h4 className="text-xl font-bold mb-4">Our Mission</h4>
                    <p className="text-justify">
                      With personalized guidance and transparent strategies, we
                      cut through the noise. We turn confusion into clarity. Our
                      mission is to build trust and foster education, creating
                      an everlasting partnership with our clients.
                    </p>
                  </div>
                  <div className="text-center">
                    <FaEye className="text-4xl text-green-500 mx-auto mb-4" />
                    <h4 className="text-xl font-bold mb-4">Our Vision</h4>
                    <p className="text-justify">
                      Our vision is simple yet powerful, to ensure financial
                      freedom for all. We believe that everyone deserves a
                      chance to thrive. Financial security shouldn’t be a
                      privilege; it should be a right.
                    </p>
                  </div>
                </div>

                <div className="text-center mt-8">
                  <button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-red-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-red-700 transition-colors"
                  >
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Code of Conduct */}
        <section className="py-5 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Our Code of Conduct
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: FaUserTie, text: "Client First" },
                { icon: FaShieldAlt, text: "Integrity" },
                { icon: FaBalanceScale, text: "Objectivity" },
                { icon: FaHandshake, text: "Fairness" },
                { icon: FaGraduationCap, text: "Professionalism" },
                { icon: FaChartPie, text: "Competence" },
                { icon: FaLock, text: "Confidentiality" },
                { icon: FaUserTie, text: "Diligence" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="text-center p-6 max-sm:px-2 bg-white rounded-lg shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <item.icon className="text-3xl text-blue-600 mx-auto" />
                  <p className="font-semibold text-gray-600 max-sm:text-sm">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quote Section */}
        <section className="mx-auto max-sm:mx-4 my-10 flex-col justify-center items-center py-10 px-4 bg-black bg-opacity-20 rounded-lg mb-5">
          <div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <blockquote className="text-2xl italic text-gray-300">
              "It takes 20 years to build a reputation and five minutes to ruin
              it. If you think about that, you'll do things differently"
            </blockquote>
            <p className="mt-2 mb-5 text-gray-300">- Warren Buffet</p>
          </div>
          <div className="max-w-6xl mx-auto text-center">
            <p>Your journey to financial freedom starts here</p>
            <div className="mt-4">
              <button
                className="bg-white text-primary px-6 py-2 rounded-full font-semibold hover:bg-blue-100 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
