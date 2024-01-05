import React from "react";

const Wolf: React.FC<SVGProps> = ({
  width = "50px",
  height = "50px",
  fillColor = "var(--primary-color)",
  mirror,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.0"
      width={width}
      height={height}
      viewBox="0 0 598.000000 583.000000"
      preserveAspectRatio="xMidYMid meet"
      transform={mirror !== undefined ? 'scale(-1, 1)' : undefined}
    >
      <g
        transform="translate(0,583) scale(0.1,-0.1)"
        fill={fillColor}
        stroke="none"
      >
        <path d="M1851 5526 c-7 -9 -10 -24 -6 -36 4 -13 1 -28 -7 -38 -18 -21 -58 -115 -64 -150 -2 -15 -11 -63 -19 -107 -28 -143 -36 -255 -19 -280 8 -12 16 -57 18 -105 l5 -83 -27 25 c-50 46 -135 66 -202 48 -31 -8 -40 -14 -31 -23 17 -17 13 -45 -9 -57 -21 -11 -27 -45 -9 -55 5 -4 14 -18 19 -31 10 -25 38 -31 69 -14 15 8 24 1 51 -38 19 -26 35 -49 36 -51 2 -2 10 1 18 8 11 9 17 8 29 -4 9 -8 27 -15 40 -15 28 0 54 24 37 35 -6 3 -8 11 -5 16 9 14 46 11 44 -3 -4 -23 23 -65 47 -77 13 -6 24 -7 24 -2 0 4 11 6 23 4 14 -3 31 2 40 11 8 9 20 16 25 16 5 0 13 15 18 33 8 27 15 33 43 35 23 2 37 -2 43 -11 9 -18 44 -12 71 11 18 16 24 77 8 87 -5 3 -13 20 -16 38 -7 33 -42 94 -105 182 -19 28 -45 70 -57 95 -11 25 -33 70 -47 101 -32 67 -50 163 -35 190 17 32 30 22 23 -17 -5 -29 -2 -40 17 -60 17 -18 30 -23 46 -19 20 5 23 2 23 -25 0 -29 29 -70 50 -70 6 0 10 -13 10 -29 0 -31 22 -61 45 -61 8 0 19 -9 25 -19 15 -29 48 -36 71 -15 28 25 25 70 -6 90 -33 22 -31 45 6 66 32 19 33 29 13 100 -7 24 -49 33 -81 19 -22 -10 -28 -9 -42 11 -9 13 -21 39 -27 59 -11 35 -9 39 23 74 33 36 35 37 51 18 41 -46 100 -120 118 -148 19 -30 30 -46 50 -68 5 -7 13 -19 17 -27 4 -8 16 -28 27 -45 42 -64 45 -73 27 -109 -12 -27 -13 -42 -5 -75 6 -22 14 -41 18 -41 4 0 11 -12 15 -27 6 -27 38 -103 54 -134 5 -8 22 -40 37 -70 16 -30 36 -63 46 -74 10 -10 23 -37 29 -60 23 -92 35 -120 49 -120 17 0 16 24 -1 92 -6 23 -9 49 -6 58 9 23 37 18 37 -6 0 -22 22 -49 39 -49 6 0 11 -13 11 -30 0 -16 4 -30 9 -30 5 0 14 -13 19 -29 7 -19 17 -29 29 -28 15 2 18 -6 18 -55 0 -73 12 -85 21 -20 8 62 20 84 34 62 5 -8 10 -25 10 -37 0 -31 44 -42 70 -18 18 16 19 16 34 -20 13 -31 19 -35 38 -30 13 4 36 19 52 34 27 25 28 25 22 3 -5 -14 -2 -27 8 -38 9 -8 16 -24 16 -34 0 -16 5 -18 29 -14 27 6 30 3 33 -22 2 -25 7 -28 28 -25 14 1 28 8 32 14 4 6 9 9 12 6 13 -12 9 -57 -9 -109 l-18 -55 -14 33 c-7 17 -20 32 -29 32 -11 0 -14 5 -10 16 6 14 -46 93 -66 102 -5 2 -8 10 -8 17 0 31 -47 25 -72 -10 -4 -5 -10 -2 -14 8 -6 16 -8 17 -24 2 -12 -11 -20 -13 -25 -6 -3 6 -10 11 -14 11 -13 0 -47 -33 -54 -53 -9 -24 -24 -14 -32 23 -4 17 -11 30 -16 30 -5 0 -5 -10 0 -22 4 -13 11 -44 15 -70 8 -55 19 -60 44 -18 l18 29 27 -31 c26 -29 28 -30 51 -14 14 8 37 31 52 51 14 19 32 35 39 35 12 0 17 -12 65 -167 15 -51 37 -109 49 -129 12 -19 21 -50 21 -68 0 -17 5 -37 11 -43 7 -7 8 -22 0 -49 -9 -34 -6 -84 6 -84 2 0 13 4 23 10 17 9 18 7 10 -20 -5 -16 -5 -32 -2 -34 11 -6 46 10 61 28 21 25 27 19 23 -26 -6 -61 14 -37 26 32 11 62 2 85 -31 74 -15 -5 -19 -3 -14 9 3 8 8 35 12 60 8 52 -6 68 -36 41 -22 -20 -23 -14 -8 39 13 47 6 75 -15 58 -21 -17 -25 7 -24 117 1 84 3 92 21 92 16 0 18 -5 13 -26 -14 -53 38 -73 66 -26 15 25 15 32 4 48 -8 11 -17 50 -21 87 -4 37 -12 67 -17 67 -5 0 -6 5 -3 10 3 6 13 10 22 10 9 0 21 7 28 16 10 15 14 10 24 -30 12 -50 31 -86 65 -123 38 -44 49 -18 17 45 -28 57 -34 92 -16 92 20 0 58 -21 68 -38 5 -7 19 -17 32 -22 13 -5 34 -28 45 -50 11 -22 31 -45 44 -50 15 -5 34 -29 50 -63 30 -64 44 -77 88 -82 18 -3 45 -14 60 -25 33 -24 37 -25 68 0 36 28 48 25 46 -12 -1 -31 1 -33 37 -36 27 -2 37 1 37 11 0 8 -7 18 -16 21 -8 3 -12 10 -9 16 4 7 13 6 27 -1 15 -8 23 -8 32 1 16 16 -16 37 -88 58 -68 19 -145 83 -224 186 -25 34 -63 78 -84 100 -21 21 -38 44 -38 52 0 17 -12 24 -55 29 -47 6 -62 15 -108 64 -21 23 -44 41 -51 41 -7 0 -30 25 -50 55 -80 121 -127 159 -261 214 -44 18 -84 37 -90 41 -16 12 -189 75 -199 72 -4 -1 -14 2 -20 8 -7 5 -15 8 -18 5 -3 -3 -18 1 -34 10 -16 8 -33 15 -39 15 -5 0 -44 24 -87 52 -58 40 -84 66 -109 108 -18 30 -35 57 -39 60 -4 3 -45 57 -92 120 -104 140 -119 156 -166 175 -20 9 -53 28 -72 44 -59 47 -73 51 -162 47 -45 -2 -88 0 -94 5 -7 6 -16 4 -23 -5z m222 -58 l21 -28 -24 -20 c-13 -11 -33 -20 -45 -20 -18 0 -21 5 -20 38 2 68 30 81 68 30z m-193 -58 c0 -5 -2 -10 -4 -10 -3 0 -8 5 -11 10 -3 6 -1 10 4 10 6 0 11 -4 11 -10z m-20 -76 c0 -14 -4 -22 -10 -19 -5 3 -10 17 -10 31 0 14 4 22 10 19 6 -3 10 -17 10 -31z m28 -256 c11 -22 32 -95 32 -110 0 -5 -6 -8 -13 -8 -7 0 -29 -11 -48 -25 -20 -13 -39 -21 -43 -18 -12 13 -6 109 9 129 8 10 15 27 15 37 0 25 34 21 48 -5z m581 -142 c-1 -28 2 -73 6 -101 5 -36 4 -46 -4 -35 -6 8 -13 34 -17 58 -3 23 -10 42 -14 42 -9 0 -30 46 -30 65 0 8 5 15 10 15 6 0 10 -9 10 -19 0 -11 5 -23 10 -26 6 -3 10 3 10 14 0 28 -11 52 -21 45 -5 -3 -9 2 -9 11 0 14 3 14 25 -1 23 -15 26 -23 24 -68z m71 -33 c0 -7 7 -13 15 -13 17 0 55 -35 55 -50 0 -5 9 -10 19 -10 27 0 35 -29 13 -54 -10 -12 -19 -34 -21 -51 -2 -16 -5 -32 -8 -35 -12 -12 -40 43 -53 103 -9 44 -21 74 -37 89 -13 12 -23 30 -23 40 0 16 3 16 20 6 11 -7 20 -18 20 -25z m-4 -72 c-3 -5 -1 -22 4 -40 5 -17 5 -31 0 -31 -5 0 -11 13 -15 30 -4 16 -11 32 -16 35 -5 4 -9 13 -9 21 0 12 4 12 20 4 11 -6 18 -15 16 -19z m324 -41 c0 -5 -5 -10 -11 -10 -5 0 -7 5 -4 10 3 6 8 10 11 10 2 0 4 -4 4 -10z m-107 -12 c3 -9 24 -13 61 -12 58 1 67 -5 41 -26 -8 -7 -15 -17 -15 -23 0 -5 -8 -15 -17 -22 -15 -11 -14 -16 18 -56 37 -49 45 -57 73 -79 18 -14 19 -13 13 16 -8 39 -2 46 29 32 25 -12 32 -27 36 -88 2 -28 8 -36 25 -38 17 -3 26 3 33 22 10 27 4 83 -12 102 -11 15 1 46 16 41 25 -8 36 -52 32 -122 -3 -38 -5 -79 -5 -89 -1 -16 -4 -17 -13 -8 -14 14 -67 16 -87 3 -9 -6 -23 -5 -37 1 -17 8 -27 8 -39 -2 -13 -10 -15 -9 -15 7 0 11 -11 33 -25 49 -14 16 -30 35 -36 42 -5 6 -18 12 -28 12 -12 0 -21 10 -25 26 -4 14 -20 33 -36 42 -19 11 -35 33 -45 62 -30 83 -29 80 -2 80 16 0 26 7 30 20 6 22 22 27 30 8z m215 -54 c12 -8 22 -21 22 -29 0 -11 -8 -10 -41 4 -22 10 -46 24 -52 30 -18 18 44 14 71 -5z m106 -48 c-3 -9 -10 -16 -15 -16 -14 0 -11 28 4 33 16 6 19 3 11 -17z m-1138 -33 c16 -21 18 -37 4 -28 -5 3 -18 1 -29 -5 -25 -13 -36 2 -21 30 13 25 29 26 46 3z m1339 -34 c25 -23 45 -49 45 -58 0 -11 -9 -6 -31 17 -17 18 -40 32 -53 32 -18 0 -23 6 -23 25 0 34 10 32 62 -16z m-1626 0 c11 -19 11 -21 -4 -15 -9 3 -19 6 -21 6 -2 0 -4 7 -4 15 0 21 13 19 29 -6z m201 -44 c0 -8 -2 -15 -4 -15 -2 0 -6 7 -10 15 -3 8 -1 15 4 15 6 0 10 -7 10 -15z m1424 -27 c15 -15 14 -16 -10 -14 -30 3 -67 32 -59 46 6 10 44 -7 69 -32z m-47 -36 c8 -5 10 -21 6 -45 -7 -46 -20 -40 -25 13 -4 41 -1 45 19 32z m110 -48 c-10 -10 -37 16 -37 34 0 13 4 12 22 -5 12 -13 19 -25 15 -29z m-273 -63 c3 -5 -1 -11 -9 -15 -9 -3 -15 0 -15 9 0 16 16 20 24 6z m206 -37 c0 -8 -4 -14 -10 -14 -5 0 -10 9 -10 21 0 11 5 17 10 14 6 -3 10 -13 10 -21z m531 -307 c-13 -13 -31 1 -31 23 0 19 1 19 20 3 12 -10 16 -21 11 -26z" />
        <path d="M2320 5062 c0 -12 40 -82 47 -82 2 0 1 10 -3 23 -8 26 -44 74 -44 59z" />
        <path d="M1466 4515 c6 -81 29 -163 61 -213 10 -15 46 -57 81 -94 35 -36 71 -77 80 -90 23 -31 72 -130 72 -144 0 -6 16 -29 35 -51 19 -23 35 -48 35 -56 0 -9 6 -22 13 -29 43 -45 109 -215 122 -313 3 -27 11 -68 18 -90 l11 -40 6 40 6 40 11 -35 c7 -23 7 -39 0 -48 -6 -7 -7 -41 -2 -85 4 -39 7 -87 7 -105 -1 -20 3 -30 10 -26 7 4 8 33 4 83 -9 91 3 86 33 -16 22 -75 41 -95 41 -44 0 43 -50 281 -84 406 -25 87 -14 132 39 163 19 11 19 11 -2 12 -13 0 -23 -4 -23 -10 0 -5 -6 -10 -14 -10 -12 0 -14 13 -11 58 3 56 3 56 -7 17 -13 -51 -15 -52 -33 -29 -22 28 -68 124 -62 130 3 3 16 -1 29 -10 15 -10 28 -12 38 -6 11 7 -2 24 -61 82 -41 40 -88 91 -105 113 -34 46 -97 109 -183 184 -78 68 -105 108 -142 213 l-28 83 5 -80z" />
        <path d="M3368 4055 c-8 -91 24 -177 54 -147 15 15 2 86 -26 147 l-23 50 -5 -50z" />
        <path d="M3523 3954 l-21 -42 25 -22 c21 -18 24 -27 19 -53 -4 -18 -11 -81 -17 -141 l-9 -109 -42 -36 c-22 -20 -47 -35 -54 -33 -29 6 -120 -68 -127 -104 -4 -25 17 -35 26 -11 2 6 7 9 11 5 11 -10 -84 -78 -109 -78 -26 0 -60 -34 -50 -50 9 -15 66 -5 76 12 5 7 11 10 14 7 3 -4 -10 -25 -30 -49 -37 -45 -44 -80 -20 -100 8 -7 15 -18 15 -25 0 -8 13 -16 30 -20 47 -10 127 32 199 106 65 66 157 197 167 237 4 12 12 22 19 22 25 0 139 -71 153 -96 9 -17 144 -54 198 -54 19 0 39 -9 52 -23 27 -29 27 -38 2 -60 -37 -31 -26 -62 34 -99 30 -18 57 -41 60 -52 3 -13 10 -17 22 -12 12 5 15 2 10 -10 -4 -10 12 -36 46 -75 47 -53 56 -59 81 -53 22 4 34 1 48 -15 11 -12 23 -21 27 -21 10 0 115 -101 110 -105 -2 -2 -40 7 -83 20 -94 29 -130 31 -139 9 -10 -25 11 -42 73 -60 31 -9 88 -26 126 -38 39 -11 75 -21 80 -21 6 0 16 -4 23 -8 6 -5 17 -5 22 -2 6 3 10 1 10 -5 0 -8 -9 -10 -27 -5 -16 4 -48 9 -73 11 -25 2 -56 7 -69 10 -26 6 -87 -21 -95 -42 -3 -7 7 -25 20 -39 l25 -27 127 6 c70 3 143 2 162 -2 l35 -9 -30 -6 c-16 -3 -58 -9 -93 -13 -56 -5 -64 -9 -73 -32 -5 -14 -9 -32 -7 -40 4 -22 163 -109 243 -134 39 -12 88 -33 110 -46 l40 -26 -30 -7 c-16 -4 -93 -12 -169 -18 -91 -7 -143 -15 -148 -23 -14 -23 -9 -46 12 -53 11 -3 20 -10 20 -15 0 -10 -22 -15 -159 -35 -130 -19 -186 -33 -231 -57 -51 -27 -66 -24 -45 8 9 14 25 34 36 45 23 23 165 126 182 132 26 9 -1 16 -31 8 -18 -5 -32 -6 -32 -2 0 5 25 46 55 91 30 45 55 86 55 91 0 4 14 10 30 14 41 9 38 26 -2 18 -42 -7 -40 -7 -60 1 -16 7 -82 -24 -98 -45 -3 -3 -15 -9 -27 -13 -13 -4 -23 -11 -23 -16 0 -4 -11 -11 -25 -14 -33 -8 -33 -36 -1 -36 14 0 28 6 33 12 4 8 10 0 14 -22 7 -31 4 -39 -23 -67 -26 -27 -29 -35 -18 -48 10 -12 8 -18 -11 -34 -13 -11 -40 -28 -59 -38 -19 -10 -39 -24 -43 -30 -4 -7 -14 -13 -22 -13 -8 0 -38 -24 -67 -52 -59 -58 -334 -376 -389 -449 -19 -25 -53 -70 -77 -99 -41 -50 -43 -56 -40 -109 3 -55 4 -56 33 -56 28 0 30 3 36 42 3 24 17 56 32 75 15 18 50 62 77 97 62 79 64 60 5 -39 -25 -41 -45 -82 -45 -91 0 -9 -7 -22 -15 -29 -8 -7 -15 -20 -15 -30 0 -10 -7 -20 -15 -24 -17 -6 -21 -36 -5 -36 6 0 41 30 78 68 72 72 133 177 191 327 31 80 54 115 78 115 7 0 13 3 13 8 0 4 22 18 50 31 27 13 69 41 92 62 46 42 139 91 203 108 22 6 103 22 180 35 l140 25 60 -20 c56 -20 60 -20 72 -3 22 30 15 62 -17 86 -16 12 -30 25 -30 30 0 4 20 8 45 8 24 0 90 9 146 20 110 21 129 20 200 -16 48 -24 175 -54 196 -47 13 5 26 50 18 64 -8 12 -66 37 -140 59 -61 18 -60 22 10 32 13 2 21 12 22 28 2 14 5 41 9 60 5 31 1 39 -29 68 -26 25 -50 36 -101 47 -37 8 -82 23 -99 33 -56 34 -78 37 -97 12 -12 -16 -23 -21 -39 -15 -12 3 -19 11 -15 16 12 21 -19 41 -53 34 l-33 -6 21 36 c21 34 21 37 4 55 -10 11 -24 20 -31 20 -49 0 -289 161 -431 288 -29 26 -65 57 -80 68 -23 18 -26 24 -14 37 7 9 10 21 6 26 -3 7 0 8 9 5 21 -8 21 29 0 64 -21 36 -82 82 -116 89 -15 3 -32 11 -38 18 -9 11 1 16 47 25 53 11 158 64 192 98 13 12 16 12 27 -3 37 -50 187 37 231 134 16 34 16 106 1 133 -31 54 -95 101 -168 123 -30 9 -76 28 -101 41 -26 13 -52 24 -59 24 -17 0 -42 -28 -31 -35 6 -3 15 3 21 12 10 16 11 16 6 1 -3 -11 5 -23 27 -36 18 -11 41 -27 52 -36 45 -36 146 -98 152 -93 11 12 33 -22 33 -50 0 -30 -53 -93 -78 -93 -6 0 -26 -13 -44 -28 -18 -16 -62 -39 -98 -52 -36 -12 -79 -34 -97 -47 -59 -45 -190 -64 -292 -42 -40 8 -60 20 -93 55 -23 24 -51 47 -62 50 -43 12 -96 38 -96 47 0 4 11 23 25 41 14 18 28 53 31 78 4 28 13 49 25 56 12 8 19 8 19 2 0 -5 5 -10 12 -10 10 0 38 -17 97 -57 2 -2 -3 -11 -12 -21 -34 -38 -13 -75 34 -62 26 8 29 6 29 -16 0 -17 7 -25 26 -30 35 -9 93 2 115 22 20 18 36 14 81 -18 14 -10 27 -10 63 0 34 9 51 9 67 1 17 -9 27 -6 62 18 46 33 59 63 27 63 -14 0 -23 9 -27 26 -7 27 -11 27 -72 8 -18 -5 -24 -2 -29 15 -6 24 -14 25 -63 11 -18 -5 -59 -7 -89 -4 -50 6 -60 11 -101 55 -25 26 -56 50 -70 54 -14 3 -51 28 -83 55 -31 26 -71 51 -89 55 -44 10 -58 22 -58 54 0 32 -8 42 -40 58 -45 22 -73 12 -97 -33z m-123 -484 c0 -5 -4 -10 -10 -10 -5 0 -10 5 -10 10 0 6 5 10 10 10 6 0 10 -4 10 -10z m783 -286 c40 -54 -8 -27 -52 29 -13 17 -13 17 10 7 13 -6 32 -23 42 -36z" />
        <path d="M2106 3672 c-4 -7 1 -38 19 -120 4 -18 10 -21 30 -16 23 6 25 3 25 -30 0 -20 4 -36 9 -36 11 0 33 26 48 59 10 22 11 9 6 -75 -3 -56 -2 -107 1 -113 12 -19 44 6 57 44 17 47 28 26 18 -37 -15 -91 10 -137 45 -86 30 42 30 9 0 -94 -4 -13 0 -18 15 -18 28 0 56 119 39 173 -11 35 -38 52 -38 23 0 -7 -7 -20 -17 -27 -15 -13 -16 -8 -9 61 5 60 3 80 -9 95 -15 20 -15 20 -34 -2 -11 -13 -22 -23 -26 -23 -4 0 -5 33 -3 74 4 66 3 75 -14 79 -11 3 -24 -2 -31 -14 -17 -23 -27 -15 -27 20 0 55 -17 57 -41 6 -22 -46 -24 -48 -30 -25 -4 14 -7 40 -8 58 -1 30 -13 42 -25 24z" />
        <path d="M3233 3363 c9 -2 23 -2 30 0 6 3 -1 5 -18 5 -16 0 -22 -2 -12 -5z" />
        <path d="M2496 3163 c-4 -5 -24 -13 -44 -20 l-37 -12 49 5 c35 4 51 2 57 -8 6 -9 9 -4 9 15 0 26 -17 36 -34 20z" />
        <path d="M2030 3160 c-4 -13 -9 -78 -15 -212 -7 -130 -6 -148 8 -148 11 0 19 17 28 56 12 55 13 55 26 30 8 -14 17 -26 21 -26 14 0 32 -65 32 -111 -1 -24 -6 -69 -14 -99 -7 -30 -12 -77 -12 -105 l1 -50 38 3 c20 2 37 1 37 -2 0 -3 -11 -16 -24 -30 -34 -38 -89 -145 -82 -162 8 -20 26 -9 95 56 48 44 71 59 71 46 0 -2 -11 -29 -25 -61 -33 -73 -27 -99 21 -90 30 5 34 3 34 -15 0 -27 -3 -36 -13 -32 -4 1 -17 -6 -28 -17 -18 -17 -19 -23 -9 -61 12 -46 56 -122 73 -129 6 -2 23 -17 38 -33 24 -26 29 -28 47 -17 25 16 30 12 38 -29 7 -35 -5 -42 -30 -16 -30 29 -39 11 -43 -84 l-3 -92 33 0 c18 0 38 5 44 11 18 18 25 -7 30 -99 2 -46 9 -94 16 -106 6 -12 10 -27 8 -35 -1 -7 0 -24 3 -37 5 -19 13 -24 36 -24 26 0 30 -3 30 -29 0 -23 5 -30 22 -33 15 -2 25 -13 31 -34 5 -16 18 -34 30 -40 12 -5 24 -18 26 -29 2 -11 9 -24 17 -28 10 -5 14 -27 14 -69 0 -59 0 -60 25 -55 18 3 29 -1 36 -14 5 -11 16 -16 25 -12 13 5 14 0 9 -31 -4 -21 -3 -36 3 -36 5 0 21 -12 35 -26 18 -18 32 -24 46 -19 12 3 21 4 21 1 0 -3 -29 -49 -65 -102 -36 -53 -65 -102 -65 -108 0 -6 9 -17 20 -24 26 -16 48 -5 85 44 35 46 44 31 16 -25 -25 -47 -28 -96 -7 -88 7 3 18 1 24 -5 6 -6 24 -1 52 17 23 14 44 25 46 23 2 -2 -3 -28 -11 -58 -19 -73 -19 -100 1 -100 14 0 16 -9 12 -56 -4 -44 -1 -57 12 -64 24 -13 35 0 49 54 7 27 27 87 46 133 36 89 35 116 -6 126 -15 4 -17 10 -8 40 8 30 6 40 -8 56 -10 12 -25 21 -35 21 -27 0 -23 39 5 44 73 15 87 15 87 1 0 -7 -4 -16 -10 -20 -12 -7 -3 -29 32 -81 15 -23 28 -44 28 -47 0 -20 78 -165 96 -179 24 -20 70 -106 66 -125 -3 -14 66 -113 79 -113 22 0 -1 120 -36 187 -8 15 -15 33 -15 39 0 20 -80 168 -99 184 -25 22 -41 54 -41 83 0 45 -47 135 -80 152 -16 8 -30 24 -30 33 0 10 -11 40 -24 68 -13 27 -26 61 -30 75 -3 14 -17 42 -31 63 -14 20 -25 43 -25 50 0 7 -7 36 -15 64 -18 58 -45 81 -69 57 -13 -13 -17 -12 -35 12 -21 26 -25 36 -36 106 -6 36 -26 49 -40 26 -14 -22 -46 31 -56 91 -13 83 -25 108 -54 122 -22 10 -34 8 -80 -15 -60 -29 -57 -31 -70 50 -8 48 -39 83 -57 65 -23 -23 -35 -11 -46 50 -7 36 -20 70 -33 84 -11 12 -28 53 -38 91 -11 47 -21 67 -30 65 -22 -5 -29 17 -26 80 4 71 -11 108 -43 108 -20 0 -22 4 -16 23 8 24 7 64 -2 78 -12 20 -48 6 -94 -37 -59 -55 -64 -46 -15 25 48 70 67 91 82 91 17 0 26 35 18 78 -9 54 -18 66 -42 53 -28 -15 -40 15 -47 114 -7 108 -41 288 -55 293 -6 2 -11 12 -11 22 0 9 -6 23 -14 29 -11 9 -15 7 -20 -11 -3 -13 -6 -33 -6 -46 0 -14 -4 -21 -11 -16 -7 4 -9 23 -6 48 3 22 2 50 -3 61 -5 11 -9 18 -10 15z m17 -162 c-3 -8 -6 -5 -6 6 -1 11 2 17 5 13 3 -3 4 -12 1 -19z m282 -949 c3 -24 3 -24 -18 -5 -11 10 -18 23 -15 28 10 16 29 2 33 -23z m99 -235 c-10 -10 -28 6 -28 24 0 15 1 15 17 -1 9 -9 14 -19 11 -23z m80 4 c15 -15 15 -30 -1 -52 -12 -16 -15 -16 -41 9 -27 25 -27 27 -10 40 23 18 37 18 52 3z m209 -153 c-5 -11 -11 -21 -12 -23 -5 -6 -75 27 -75 36 0 4 15 15 33 24 29 14 33 14 48 -1 12 -12 14 -21 6 -36z m-7 -65 c0 -5 -9 -10 -21 -10 -11 0 -17 5 -14 10 3 6 13 10 21 10 8 0 14 -4 14 -10z m-55 -30 c-3 -5 -10 -10 -16 -10 -5 0 -9 5 -9 10 0 6 7 10 16 10 8 0 12 -4 9 -10z m125 -239 c-1 -16 -23 -51 -33 -51 -10 0 -19 59 -12 81 6 19 8 20 26 3 10 -9 19 -24 19 -33z m210 -1 c0 -13 -5 -18 -15 -14 -8 4 -15 12 -15 20 0 8 7 14 15 14 8 0 15 -9 15 -20z m-97 -244 c4 -9 -5 -21 -19 -31 -32 -21 -37 -16 -21 18 13 29 32 35 40 13z m117 0 c0 -3 -4 -8 -10 -11 -5 -3 -10 -1 -10 4 0 6 5 11 10 11 6 0 10 -2 10 -4z m-13 -58 c-3 -8 -6 -5 -6 6 -1 11 2 17 5 13 3 -3 4 -12 1 -19z m43 -32 c0 -11 -19 -15 -25 -6 -3 5 1 10 9 10 9 0 16 -2 16 -4z m140 -81 c0 -8 -4 -15 -8 -15 -16 0 -32 25 -32 49 l0 25 20 -22 c11 -12 20 -28 20 -37z m-233 -142 c-16 -16 -17 -16 -17 3 0 26 11 37 24 24 7 -7 5 -16 -7 -27z" />
        <path d="M2493 3049 c-50 -69 -88 -94 -205 -139 -89 -33 -115 -51 -103 -70 10 -17 32 -12 60 15 15 13 50 31 79 39 98 29 185 104 206 177 5 18 9 33 7 34 -1 1 -21 -24 -44 -56z" />
        <path d="M3530 2943 c-19 -13 -40 -17 -87 -14 -68 3 -123 -6 -123 -20 0 -5 25 -9 55 -9 41 0 55 -4 55 -15 0 -7 -6 -18 -14 -22 -51 -29 -186 -152 -186 -169 0 -7 12 -21 28 -32 l27 -19 98 78 c97 79 125 95 112 62 -36 -90 -26 -114 49 -115 41 -1 47 -4 45 -22 -4 -58 4 -83 38 -121 l36 -40 -7 54 c-4 30 -2 86 5 129 12 75 12 75 -13 97 -36 31 -38 43 -17 99 17 46 17 50 1 72 -21 28 -67 32 -102 7z" />
        <path d="M3220 2910 c-21 -7 -21 -8 -5 -9 11 0 27 4 35 9 18 11 5 11 -30 0z" />
        <path d="M3699 2527 c32 -16 69 -87 85 -165 14 -63 21 -80 31 -70 8 7 -23 136 -42 178 -24 51 -43 70 -72 70 l-26 0 24 -13z" />
        <path d="M3822 2363 c2 -10 11 -19 21 -21 16 -3 17 -1 7 17 -13 25 -33 28 -28 4z" />
        <path d="M4400 2310 c-12 -8 -12 -10 5 -10 11 0 27 5 35 10 12 8 12 10 -5 10 -11 0 -27 -5 -35 -10z" />
        <path d="M3185 2090 c-10 -11 -15 -23 -11 -27 4 -4 11 -1 15 6 7 11 11 9 20 -5 9 -17 10 -16 11 8 0 35 -13 42 -35 18z" />
        <path d="M3198 2015 c-1 -16 -2 -41 -3 -55 -1 -14 -4 -32 -7 -40 -9 -22 -98 -319 -98 -325 0 -3 7 -5 15 -5 21 0 19 -18 -10 -98 -32 -88 -32 -143 0 -207 13 -27 25 -58 25 -67 0 -25 36 -59 54 -52 8 3 22 31 31 62 36 121 134 332 155 332 5 0 0 -30 -11 -67 -11 -38 -27 -107 -35 -156 -15 -80 -15 -89 0 -112 13 -20 22 -23 47 -18 30 6 30 5 24 -28 -14 -77 -10 -374 5 -398 9 -16 17 40 19 139 3 140 21 285 47 388 19 73 23 107 16 114 -18 18 -38 2 -69 -52 -36 -63 -48 -54 -27 21 72 250 79 339 28 339 -19 0 -149 -224 -190 -328 -19 -48 -40 -97 -46 -109 l-11 -23 -19 30 c-10 17 -18 43 -18 58 0 23 53 189 80 247 52 115 81 190 95 244 17 66 15 91 -7 91 -14 0 -26 -16 -70 -95 -23 -42 -35 -47 -29 -12 0 4 7 46 15 95 8 52 11 93 5 102 -6 11 -9 7 -11 -15z" />
        <path d="M2270 1979 c0 -5 5 -7 10 -4 6 3 10 8 10 11 0 2 -4 4 -10 4 -5 0 -10 -5 -10 -11z" />
        <path d="M2264 1910 c2 -50 5 -55 27 -58 21 -2 22 -1 9 10 -8 7 -17 27 -18 43 -7 57 -21 61 -18 5z" />
      </g>
    </svg>
  );
};

export default Wolf;
