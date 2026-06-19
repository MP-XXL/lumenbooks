import React from 'react'

function Nav() {
  return (
    <div>
          <nav>
              <div>
                  <svg width="220" height="60" viewBox="0 0 220 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                      {/* <!-- Custom L --> */}
                      <path
                          d="M24 10V48H52"
                          stroke="currentColor"
                          stroke-width="6"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                      />

                      {/* <!-- Light source --> */}
                      <circle cx="24" cy="10" r="5" fill="#FBBF24" />
                      <circle cx="24" cy="10" r="10" stroke="#FBBF24" stroke-opacity="0.3" />

                      {/* <!-- Text --> */}
                      <text
                          x="70"
                          y="40"
                          font-family="Inter, sans-serif"
                          font-size="32"
                          font-weight="800"
                          fill="currentColor"
                      >
                          umen
                      </text>
                  </svg>
              </div>

              <div>
                <button className="">Home</button>
              </div>
          </nav>
    </div>
  )
}

export default Nav