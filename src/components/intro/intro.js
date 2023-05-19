document.addEventListener('DOMContentLoaded', () => {
  const H1 = document.querySelector('.intro__title')
  const H1InitialInnerHTML = H1.innerHTML

  const changeH1Text = () => {
    if (window.innerWidth <= 768) {
      H1.innerHTML = `
      <span class="intro__title-row"
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="200"
            >
        <span class="intro__title-accent1">Turn Your Story</span> into<br>
         a <span class="intro__title-accent2">Comics</span>
            Masterpiece!
        </span>
      <span class="intro__title-row"  data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="400"
            >
        Perfect Gift for any<br>
        occasion.
      </span>
      `
    } else {
      H1.innerHTML = `
      <span class="intro__title-row"
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="200">
            Unleash Imagination and Transform
       </span>
       <span class="intro__title-row"
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="400">
       <span class="intro__title-accent1">Your Story</span> into a <span class="intro__title-accent2">Comics</span>
            Masterpiece!
       </span>
       <span class="intro__title-row"
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="600">
            Gift for any occasion.
       </span>
                 
        <svg xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 451.000000 213.000000"
             preserveAspectRatio="xMidYMid meet" 
             class="intro__title-row-blob">
     
        <defs>
            <clipPath id="clip-line-1">
                <path id="line-1" d="M16 2114 c-24 -24 -19 -42 16 -64 30 -18 57 -24 150 -34 21 -3 86
                -11 145 -20 60 -8 166 -20 238 -26 151 -13 317 -33 395 -49 30 -5 123 -20 205
                -31 83 -12 175 -27 205 -35 30 -7 90 -16 133 -20 43 -3 90 -10 104 -16 14 -5
                74 -16 134 -24 60 -8 114 -17 119 -20 5 -3 37 -8 72 -11 35 -4 83 -10 108 -15
                25 -5 74 -14 110 -20 36 -5 103 -18 150 -29 47 -10 140 -29 207 -41 74 -13
                120 -26 116 -32 -4 -6 2 -8 15 -5 12 4 25 2 28 -3 8 -13 -15 -11 -129 10 -56
                11 -138 24 -182 31 -208 30 -287 41 -368 50 -49 6 -93 12 -98 15 -4 3 -43 8
                -86 11 -43 3 -103 12 -134 20 -31 8 -74 13 -95 13 -22 -1 -88 6 -148 15 -60 9
                -130 17 -155 17 -25 0 -74 5 -107 10 -85 12 -205 20 -359 22 -116 2 -130 0
                -133 -15 -3 -14 3 -18 27 -18 17 0 50 -6 73 -14 24 -7 63 -19 88 -26 71 -20
                295 -95 405 -135 55 -20 111 -40 125 -44 22 -6 193 -60 350 -111 30 -10 78
                -27 105 -38 46 -19 128 -47 165 -57 8 -2 16 -4 18 -5 1 -2 5 -3 10 -4 4 -1 13
                -5 20 -9 6 -5 12 -6 12 -3 0 3 25 -6 55 -20 31 -13 62 -24 69 -24 7 0 49 -16
                92 -36 44 -20 105 -44 136 -54 94 -31 272 -108 472 -206 50 -24 95 -44 101
                -44 6 0 20 -8 31 -18 10 -9 28 -18 39 -20 11 -2 43 -18 70 -37 28 -18 67 -41
                88 -51 20 -10 37 -22 37 -26 0 -5 4 -7 9 -4 5 3 36 -12 70 -34 34 -22 92 -56
                129 -76 37 -19 85 -46 107 -59 22 -14 47 -28 55 -32 17 -8 80 -48 95 -61 6 -5
                24 -17 40 -27 33 -21 197 -137 205 -145 3 -3 12 -6 20 -8 8 -2 18 -10 23 -17
                4 -8 30 -27 57 -42 28 -15 50 -31 50 -35 0 -4 17 -16 38 -27 20 -10 46 -28 56
                -40 11 -12 23 -21 29 -21 5 0 23 -12 41 -26 88 -74 221 -165 224 -154 4 12
                -58 76 -135 137 -62 49 -92 74 -112 94 -9 8 -50 41 -91 72 -41 31 -121 92
                -178 134 -156 119 -445 313 -463 313 -5 0 -32 15 -61 34 -29 18 -75 45 -103
                60 -60 31 -77 42 -132 78 -23 16 -61 35 -83 43 -23 8 -55 26 -70 39 -16 13
                -62 36 -102 52 -68 25 -238 101 -283 126 -77 43 -178 86 -380 162 -93 36 -267
                105 -303 121 -18 8 -39 15 -46 15 -7 0 -35 9 -62 19 -53 21 -266 90 -432 141
                -123 38 -142 55 -51 46 35 -3 73 -6 84 -6 11 0 61 -7 110 -15 97 -16 215 -32
                335 -45 87 -9 231 -28 275 -36 35 -6 205 -30 320 -45 44 -5 103 -14 130 -19
                28 -5 113 -16 190 -25 77 -8 172 -20 210 -25 39 -5 90 -12 115 -14 109 -10
                309 -38 358 -50 41 -10 54 -10 62 -1 16 19 -6 31 -95 53 -44 11 -145 42 -225
                70 -80 28 -197 62 -260 77 -63 14 -171 39 -240 55 -69 16 -152 34 -185 40 -33
                6 -87 17 -120 25 -33 7 -85 18 -115 24 -30 6 -89 18 -130 27 -41 8 -104 19
                -140 25 -36 5 -94 16 -130 24 -36 8 -114 22 -174 30 -59 8 -111 17 -115 19 -4
                3 -29 7 -57 10 -27 3 -96 13 -154 22 -58 8 -148 21 -200 29 -52 8 -129 19
                -170 25 -81 13 -182 25 -325 40 -49 5 -130 14 -180 20 -113 13 -305 32 -325
                32 -32 0 -112 28 -137 48 -31 24 -95 27 -117 4z"/>
            </clipPath>
        </defs>
        
        <g clip-path=url(#clip-line-1)" stroke-width="7">
            <path class="line-path-1" 
                  stroke="#FF5A20" 
                  fill="none" 
                  stroke-miterlimit="1"
                  d="M1 1L14.7411 5.79242L50.8516 9.94585L76.4165 12.5018L106.136 17.6137L137.453 22.7256L156.946 25.6011L180.274 29.1155L210.313 35.5054L227.889 39.9783L250.258 45.0903L269.432 49.2437L301.068 57.5505L262.082 51.7996L231.404 46.6877L193.376 41.2563L153.431 35.5054L128.505 32.63L101.662 29.1155L77.0556 26.5596L56.6037 24.9621L108.373 38.3809L147.679 51.7996L180.274 62.0235L218.302 77.9982L254.412 95.2509L280.616 108.35L308.738 124.964L330.148 139.98L352.837 156.274L368.496 168.415L376.165 174.486L380 178"/>
          
        </g>
  
        </svg>

                 
      `
    }
  }

  changeH1Text()
  window.addEventListener('resize', () => {
    // TODO: resize only when breakpoint 768 triggers (both sides)
    changeH1Text()
  })
})