"use client"
import React, { useState } from 'react'

function Contact() {

  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  async function handleSubmit() {
    try {
      const res = await fetch("/api/sendMail", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (!res.ok) {
        throw new Error("Failed to send message!")
      }

      console.log("form data", form)
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div className="px-10 py-20" id="contact-page">
      <div >
        <h2 className="font-bold text-3xl border-b-5 pb-1 w-fit border-b-white text-white mb-10">Contact us</h2>
        <div className="flex flex-col gap-5 md:flex-row md:justify-center md:items-center md:gap-30">
          <p className="font-bold text-2xl text-white">We would love <br /> to hear from you </p>
          <form action="" name="contact" className="bg-white rounded-xl p-5 flex flex-col gap-4">
            <input  onChange={handleChange} value={form.name} type="text" name="name" id="name" placeholder="Enter name" className="w-full p-2.5 rounded-xl bg-[#1E1E1E] text-white" />
            <input onChange={handleChange} value={form.email} type="email" name="email" id="email" placeholder="Enter email" className="w-full p-2.5 rounded-xl bg-[#1E1E1E] text-white" />
            <textarea onChange={handleChange} value={form.message} name="message" id="message" placeholder="Message" className="w-full p-2.5 rounded-xl bg-[#1E1E1E] text-white"></textarea>
            <button onClick={handleSubmit} className="text-white p-2.5 bg-black rounded-md font-bold transition active:scale-90 ">
              Send mail
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact