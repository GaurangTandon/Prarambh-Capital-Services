import { FaEye, FaBullseye, FaHandshake } from "react-icons/fa";

export default function AboutUs() {
  return (
    <div className="container mx-auto px-4 py-12 min-h-[70vh]">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white">About Us</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Our Vision */}
        <div className="bg-white shadow-lg rounded-2xl p-6 text-center">
          <FaEye className="text-4xl text-green-500 mx-auto mb-4" />
          <h4 className="text-xl font-bold mb-4">Our Vision</h4>
          <p className="text-justify">
            Our vision is simple yet powerful, to ensure financial freedom for all. We believe that 
            everyone deserves a chance to thrive. Financial security shouldn’t be a privilege; it should be a right.
          </p>
        </div>

        {/* Our Mission */}
        <div className="bg-white shadow-lg rounded-2xl p-6 text-center">
          <FaBullseye className="text-4xl text-blue-500 mx-auto mb-4" />
          <h4 className="text-xl font-bold mb-4">Our Mission</h4>
          <p className="text-justify">
            With personalized guidance and transparent strategies, we cut through the noise. We turn confusion into clarity. 
            Our mission is to build trust and foster education, creating an everlasting partnership with our clients.
          </p>
        </div>

        {/* Lasting Partnership */}
        <div className="bg-white shadow-lg rounded-2xl p-6 text-center">
          <FaHandshake className="text-4xl text-yellow-500 mx-auto mb-4" />
          <h4 className="text-xl font-bold mb-4">Lasting Partnership</h4>
          <p className="text-justify">
            Together, we will navigate the financial landscape. Together, we will invest in brighter futures. 
            We're here to unlock your financial potential and help you achieve your aspirations—because your success is our success.
          </p>
        </div>
      </div>
    </div>
  );
}
