import React, { useState } from "react";

const Contact = ({ closePopup }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [status, setStatus] = useState(null);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    fullName: "",
    address: "",
    email: "",
    questionComment: "",
    phone: "",
  });

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
        setStatus('pending');
        setError(null);
        const myForm = event.target;
        const formData = new FormData(myForm);
        const res = await fetch('/contact.html', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams(formData).toString()
        });
        if (res.ok) {
            setStatus('ok');
            myForm.reset();
            closePopup();
        } else {
            setStatus('error');
            setError(`${res.status} ${res.statusText}`);
        }
    } catch (e) {
        setStatus('error');
        setError(`${e}`);
    }
  };

  return (
    <div className="font-sans fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 bg-gray-800 bg-opacity-50 w-full h-full flex items-center justify-center overflow-y-auto">
      <div className="p-4 sm:p-8 rounded-lg shadow-lg h-auto w-full max-w-sm sm:max-w-md relative">
        <form
          name="contact"
          className="bg-white p-4 text-black rounded-md text-sm"
          method="POST"
          data-netlify="true"
          onSubmit={handleFormSubmit}
        >
          <input type="hidden" name="form-name" value="contact" />
          <button
            onClick={closePopup}
            className="absolute right-5 top-5 text-gray-800 p-4 hover:text-red-600 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current shrink-0 h-8 w-8"
              fill="white"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
          <h1 className="text-2xl font-bold text-primary text-teal-600 text-center mb-2">
            Contact Us
          </h1>
          <p className="max-w-xl mx-auto text-md text-gray-600 mb-2">
            Please leave us a message below, and we will get back to you promptly.
          </p>
          <input type="hidden" name="form-name" value="contact" />
          <input
            type="text"
            id="fullName"
            name="fullName"
            placeholder="Full Name *"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="mt-1 block w-full border text-black border-gray-400 rounded-md shadow-sm focus:ring-2 focus:ring-black-500 focus:outline-none text-sm:text-md p-2"
          />
          <input
            type="text"
            id="address"
            name="address"
            placeholder="Address *"
            value={formData.address}
            onChange={handleChange}
            required
            className="mt-2 block w-full border border-gray-400 rounded-md shadow-sm focus:ring-2 focus:ring-black-500 focus:outline-none text-sm:text-md p-2"
          />
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email Address *"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-2 mb-2 block w-full border border-gray-400 rounded-md shadow-sm focus:ring-2 focus:ring-black-500 focus:outline-none text-sm:text-md p-2"
          />
          <input
            name="phone"
            type="text"
            id="phone"
            placeholder="Phone *"
            value={formData.phone}
            onChange={handleChange}
            className="mt-2 mb-2 block w-full border border-gray-400 rounded-md shadow-sm focus:ring-2 focus:ring-black-500 focus:outline-none text-sm:text-md p-2"
          />
          <textarea
            id="questionComment"
            name="questionComment"
            placeholder="Question / Comment"
            value={formData.questionComment}
            onChange={handleChange}
            rows="2"
            className="mt-2 block w-full border border-gray-400 rounded-md shadow-sm focus:ring-2 focus:ring-black-500 focus:outline-none text-sm:text-md p-2"
          />
          <label className="flex items-center text-sm mt-4">
            <input
              type="checkbox"
              className="form-checkbox h-4 w-4 text-black-600"
              onChange={handleCheckboxChange}
              required
            />
            <span className="ml-2 text-gray-800">
              By submitting this form you agree to the terms of the{" "}
              <a
                href="/privacy-policy"
                className="text-teal-600 font-bold hover:underline"
              >
                Privacy Policy
              </a>
              .
            </span>
          </label>
          <button
            type="submit"
            className={`mt-2 min-w-full bg-teal-600 text-white py-2 px-2 rounded-md focus:outline-none focus:ring-2 focus:ring-black-500 focus:ring-offset-2 ${
              isChecked ? "" : "opacity-50 cursor-not-allowed"
            }`}
            disabled={!isChecked}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
