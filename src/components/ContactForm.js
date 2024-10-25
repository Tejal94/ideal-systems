import React, { useState } from "react";
import PhoneIcon from "../assets/icons/phone.svg";
import EmailIcon from "../assets/icons/email.svg";
import ClockIcon from "../assets/icons/clock.svg";
import MapIcon from "../assets/icons/map.svg";
import { toast, Toaster } from 'react-hot-toast';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    company: "",
    comments: ""
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullname) newErrors.fullname = "Full Name is required";
    if (!formData.email) newErrors.email = "Email Address is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email Address is invalid";
    if (!formData.phone) newErrors.phone = "Phone Number is required";
    else if (!/^\d{10}$/.test(formData.phone)) newErrors.phone = "Phone Number is invalid";
    if (!formData.company) newErrors.company = "Company Name is required";
    if (!formData.comments) newErrors.comments = "Comments are required";
    return newErrors;
  };

  const submitToGoogleSheet = async () => {
    const url = "https://script.google.com/macros/s/AKfycbxgjzI48aj6QEmHBZHxI76QsCUnS32ulfNi1ZOQNPXbUdZmjUDxyRc-SnzzoPPtib5UHQ/exec"; // Replace with the Web app URL from Apps Script
    try {
      const response = await fetch(url, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      console.log("Response:", response);
      if (response.ok) {
        toast.success("Form submitted successfully!");
      }
      setFormData({
        fullname: "",
        email: "",
        phone: "",
        company: "",
        comments: ""
      })
    } catch (error) {
      console.error("Error:", error);
      toast.error("Failed to submit the form.");
    }
  };

  const handleForm = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      console.log(formData);
      submitToGoogleSheet();
      toast.success('Enquiry submitted successfully!');
      // Submit the form data
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div>
      <Toaster/>
      <article className="flex flex-col md:flex-row justify-around gap-y-5 gap-x-10">
        <p className="font-bold text-3xl underline underline-offset-8 text-[#222222] flex-2">
          TELL US WHAT YOU LOOKING FOR
        </p>
        <p className="flex flex-1 font-normal text-[20px] leading-[30px] text-[#39345A]">
          We are the world class engineering manufacturer providing the highest
          quality products, services and solutions to our customers.
        </p>
      </article>
      <div className="flex flex-col md:flex-row pt-10 md:mx-10 gap-y-14 gap-x-20">
        <div className="flex flex-col flex-2 gap-y-5">
          <div className="flex flex-row">
            <img src={PhoneIcon} alt="rtc1" className="h-6 w-6 self-center" />
            <article className="flex flex-col pl-5 text-wrap justify-evenly">
              <p className="font-medium text-lg text-[#2B2F3E]">
                Contact Number
              </p>
              <p className="font-normal text-lg text-[#1A306B]">
                + 91 9665134392, + 91 9890805654
              </p>
            </article>
          </div>
          <div className="flex flex-row">
            <img src={EmailIcon} alt="rtc1" className="h-6 w-6 self-center" />
            <article className="flex flex-col pl-5 text-wrap justify-evenly">
              <p className="font-medium text-lg text-[#2B2F3E]">
                Send us an e-mail.
              </p>
              <p className="font-normal text-lg text-[#1A306B]">
                Info@idealsystems.co.in
              </p>
            </article>
          </div>
          <div className="flex flex-row">
            <img src={ClockIcon} alt="rtc1" className="h-6 w-6 self-center" />
            <article className="flex flex-col pl-5 text-wrap justify-evenly">
              <p className="font-medium text-lg text-[#2B2F3E]">
                Working Hours
              </p>
              <p className="font-normal text-lg text-[#1A306B]">
                Mon - Sat: 9:00 - 19:00
              </p>
            </article>
          </div>
          <div className="flex mt-2 flex-row">
            <img src={MapIcon} alt="rtc1" className="h-6 w-6 self-center" />
            <article className="flex flex-col pl-5 text-wrap justify-evenly">
              <p className="font-medium text-md text-[#0231A8] border-gradient-btn md:text-[20px]">
                Find Us on Map
              </p>
            </article>
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-y-6">
          <form className="px-6 md:px-10" onSubmit={handleForm}>
            <div>
              <input
                className="border rounded w-full py-2 px-3 mb-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="fullname"
                type="text"
                placeholder="Full Name"
                value={formData.fullname}
                onChange={handleInputChange}
              />
              {errors.fullname && <p className="text-red-500 text-xs italic">{errors.fullname}</p>}
            </div>
            <div>
              <input
                className="border rounded w-full py-2 px-3 mb-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="text"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleInputChange}
              />
              {errors.email && <p className="text-red-500 text-xs italic">{errors.email}</p>}
            </div>
            <div>
              <input
                className="border rounded w-full py-2 px-3 mb-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="phone"
                type="text"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleInputChange}
              />
              {errors.phone && <p className="text-red-500 text-xs italic">{errors.phone}</p>}
            </div>
            <div>
              <input
                className="border rounded w-full py-2 px-3 mb-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="company"
                type="text"
                placeholder="Company Name"
                value={formData.company}
                onChange={handleInputChange}
              />
              {errors.company && <p className="text-red-500 text-xs italic">{errors.company}</p>}
            </div>
            <div>
              <input
                className="border rounded w-full py-2 px-3 mb-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-[180px]"
                id="comments"
                type="text"
                placeholder="Comments"
                value={formData.comments}
                onChange={handleInputChange}
              />
              {errors.comments && <p className="text-red-500 text-xs italic">{errors.comments}</p>}
            </div>
            <button type="submit" className="bg-[#0231A8] w-48 p-2 rounded-full self-center text-white header-button hidden md:block px-6 py-2.5 font-semibold text-center">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
