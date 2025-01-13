import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [captchaVerified, setCaptchaVerified] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleCaptchaChange = (value) => {
    // console.log("Captcha value:", value);
    setCaptchaVerified(!!value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!captchaVerified) {
      alert("Please verify the CAPTCHA.");
      return;
    }
    // console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    setCaptchaVerified(false);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="md:max-w-[50%] xl:max-w-[40%] mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white">Contact Us</h2>
          <p className="mt-2 text-sm text-gray-200">
            We'd love to hear from you. Send us a message and we'll respond as
            soon as possible.
          </p>
        </div>

        <div className="mt-8">
          <div className="bg-white py-8 px-6 shadow rounded-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-blue-500"
                  placeholder="Full Name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-blue-500"
                  placeholder="ex@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-blue-500 resize-none"
                  placeholder="Your message here..."
                />
              </div>

              <div className="w-full flex justify-center">
                <ReCAPTCHA
                  sitekey={`${import.meta.env.VITE_SITE_KEY}`}
                  onChange={handleCaptchaChange}
                />
              </div>

              <div>
                <button
                  type="submit"
                  disabled={!captchaVerified}
                  className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
                    captchaVerified
                      ? "bg-blue-600 hover:bg-blue-700"
                      : "bg-gray-400 cursor-not-allowed"
                  } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary`}
                >
                  Send Message
                </button>
              </div>
            </form>

            {submitted && (
              <div className="mt-4 p-4 bg-green-100 rounded-md">
                <p className="text-sm text-green-700">
                  Thank you for your message! We'll be in touch soon.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
