import React from 'react'

function Contact() {
  return (
    <div className="px-10 py-20">
        <div >
            <h2 className="font-bold text-3xl border-b-5 pb-1 w-fit border-b-white text-white mb-10">Contact us</h2>
            <div className="flex flex-col gap-5 md:flex-row md:justify-center md:items-center md:gap-30">
                <p className="font-bold text-2xl text-white">We would love <br /> to hear from you </p>
                <form action="" name="contact" className="bg-white rounded-xl p-5 flex flex-col gap-4">
                    <input type="text" name="name" id="name" placeholder="Enter name" className="w-full p-2.5 rounded-xl bg-[#1E1E1E] text-white" />
                    <input type="email" name="email" id="email" placeholder="Enter email" className="w-full p-2.5 rounded-xl bg-[#1E1E1E] text-white" />
                    <textarea name="comment" id="comment" placeholder="Message" className="w-full p-2.5 rounded-xl bg-[#1E1E1E] text-white"></textarea>
                    <button className="text-white p-2.5 bg-black rounded-md font-bold transition active:scale-90 ">
                      Send mail
                  </button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact