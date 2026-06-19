"use client"
import React from 'react'

function BottomNav() {
  return (
    <div>
        <div>
            <div className="text-white p-5">
                <div className="flex justify-between">
                  <svg width="220" height="60" viewBox="0 0 220 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                      {/* <!-- Custom L --> */}
                      <path
                          d="M24 10V48H52"
                          stroke="#FFFFFF"
                          strokeWidth="6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                      />

                      {/* <!-- Light source --> */}
                      <circle cx="24" cy="10" r="5" fill="#FBBF24" />
                      <circle cx="24" cy="10" r="10" stroke="#FBBF24" strokeOpacity="0.3" />

                      {/* <!-- Text --> */}
                      <text
                          x="70"
                          y="40"
                          fontFamily="Inter, sans-serif"
                          fontSize="32"
                          fontWeight="800"
                          fill="#FFFFFF"
                      >
                          umen
                      </text>
                  </svg>

                  <div className="hidden md:flex md:gap-10">
                      <button className="font-bold">Home</button>
                      <button className="font-bold">Featured</button>
                      <button className="font-bold">Contact</button>
                      <button className="font-bold">FAQ</button>
                      
                  </div>
              </div>
            </div>

            <div className="text-white p-5 flex justify-center">
                <p>@MP 2026</p>
            </div>
        </div>
    </div>
  )
}

export default BottomNav