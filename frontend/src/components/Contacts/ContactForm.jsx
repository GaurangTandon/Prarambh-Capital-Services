import React, { useState } from "react";

const url =
  "https://script.google.com/macros/s/AKfycbwTbL9PjJ0uVQITuANjkkdhhNBQH2LD4XlEKFWV_SqR6dcubO-8UahLaIMn7vCg4VSQww/exec";

const ContactForm = ({ submitted, setSubmitted,isFetching,setIsFetching }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    phoneNumber: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsFetching(true);
    try {
      const response = await fetch(url, {
        method: "POST",
        redirect: "follow",
        headers: {
          "Content-Type": "text/plain",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log(response.status);
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "", phoneNumber: "" });
      } else {
        console.log("Submission failed:", response.status);
      }
    } catch (err) {
      console.log("Error:", err);
    }
    finally{
      setIsFetching(false);
    }
    setTimeout(() => {
      setSubmitted(false);
    }, 15000);
  };
  return (
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
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
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
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
          placeholder="ex@example.com"
        />
      </div>

      <div>
        <label
          htmlFor="phoneNumber"
          className="block text-sm font-medium text-gray-700"
        >
          Phone Number
        </label>
        <input
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
          placeholder="XXXXXXXXXX"
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
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary resize-none"
          placeholder="Your message here..."
        />
      </div>

      <div>
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
        >
          {isFetching?"Sending...":"Send Message"}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
