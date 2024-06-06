// import { Button } from "@repo/ui/button";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="flex flex-col items-center  p-4 bg-slate-900">
      <div className="flex flex-row justify-around mx-4 w-[100%] h-24 items-center">
        <div>
          <ul className="flex">
            <li className="mx-3">About</li>
            <li className="mx-3">FAQs</li>
            <li className="mx-3">Terms</li>
            <li className="mx-3">Privacy</li>
          </ul>
        </div>
        <div>
          <a href="mailto:vermakartikey786@gmail.com">
            vermakartikey786@gmail.com{" "}
          </a>
        </div>
        <div className="flex">
          <Link
            href="https://github.com/kartikver15gr8/codedaily"
            target="_blank"
          >
            <svg
              className="mx-1 w-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                fill="#2e74ff"
                d="M12.001 2c-5.525 0-10 4.475-10 10a9.994 9.994 0 0 0 6.837 9.488c.5.087.688-.213.688-.476c0-.237-.013-1.024-.013-1.862c-2.512.463-3.162-.612-3.362-1.175c-.113-.288-.6-1.175-1.025-1.413c-.35-.187-.85-.65-.013-.662c.788-.013 1.35.725 1.538 1.025c.9 1.512 2.337 1.087 2.912.825c.088-.65.35-1.087.638-1.337c-2.225-.25-4.55-1.113-4.55-4.938c0-1.088.387-1.987 1.025-2.687c-.1-.25-.45-1.275.1-2.65c0 0 .837-.263 2.75 1.024a9.28 9.28 0 0 1 2.5-.337c.85 0 1.7.112 2.5.337c1.913-1.3 2.75-1.024 2.75-1.024c.55 1.375.2 2.4.1 2.65c.637.7 1.025 1.587 1.025 2.687c0 3.838-2.337 4.688-4.562 4.938c.362.312.675.912.675 1.85c0 1.337-.013 2.412-.013 2.75c0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10"
              />
            </svg>
          </Link>
          <Link
            href="https://www.linkedin.com/in/kartikeyverma "
            target="_blank"
          >
            <svg
              className="mx-1 w-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                fill="#2e74ff"
                d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"
              />
            </svg>
          </Link>

          <Link href="https://x.com/kartikeystack" target="_blank">
            <svg
              className="mx-1 w-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                fill="none"
                stroke="#2e74ff"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                color="#2e74ff"
              >
                <path d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12.001 2.5c4.478 0 6.717 0 8.108 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.717 0-8.109-1.391c-1.39-1.392-1.39-3.63-1.39-8.109" />
                <path d="m7 17l4.194-4.193M17 7l-4.193 4.194m0 0L9.777 7H7l4.194 5.807m1.613-1.614L17 17h-2.778l-3.028-4.193" />
              </g>
            </svg>
          </Link>

          <Link href="https://instagram.com/kartikeyverma.eth" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mx-1 w-6"
              viewBox="0 0 24 24"
            >
              <path
                fill="#2e74ff"
                d="M11.95 1h.1c1.827 0 3.266 0 4.42.105c1.178.106 2.156.328 3.03.833A7 7 0 0 1 22.062 4.5c.505.874.727 1.852.833 3.03C23 8.684 23 10.123 23 11.95v.1c0 1.827 0 3.266-.105 4.42c-.106 1.178-.328 2.156-.833 3.03a7 7 0 0 1-2.562 2.562c-.874.505-1.852.727-3.03.833c-1.154.105-2.593.105-4.42.105h-.1c-1.827 0-3.266 0-4.42-.105c-1.178-.106-2.156-.328-3.03-.833A7 7 0 0 1 1.938 19.5c-.505-.874-.727-1.852-.833-3.03C1 15.316 1 13.877 1 12.05v-.1c0-1.827 0-3.266.105-4.42c.106-1.178.328-2.156.833-3.03A7 7 0 0 1 4.5 1.938c.874-.505 1.852-.727 3.03-.833C8.684 1 10.123 1 11.95 1M7.71 3.096c-1.039.095-1.691.274-2.21.574A5 5 0 0 0 3.67 5.5c-.3.519-.48 1.171-.574 2.21C3.001 8.764 3 10.112 3 12s.001 3.236.096 4.29c.095 1.039.274 1.691.574 2.21a5 5 0 0 0 1.83 1.83c.519.3 1.171.48 2.21.574c1.054.095 2.402.096 4.29.096s3.236-.001 4.29-.096c1.039-.095 1.691-.274 2.21-.574a5 5 0 0 0 1.83-1.83c.3-.519.48-1.171.574-2.21c.095-1.053.096-2.402.096-4.29s-.001-3.236-.096-4.29c-.095-1.039-.274-1.691-.574-2.21a5 5 0 0 0-1.83-1.83c-.519-.3-1.171-.48-2.21-.574C15.237 3.001 13.888 3 12 3s-3.236.001-4.29.096m9.04 3.156c0-.552.45-1.002 1.002-1.002s1.002.45 1.002 1.002s-.45 1.002-1.002 1.002s-1.002-.45-1.002-1.002M12 8.5a3.5 3.5 0 1 0 0 7a3.5 3.5 0 0 0 0-7M6.5 12a5.5 5.5 0 1 1 11 0a5.5 5.5 0 0 1-11 0"
              />
            </svg>
          </Link>

          <svg
            className="mx-1 w-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              fill="#2e74ff"
              d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09c-.01-.02-.04-.03-.07-.03c-1.5.26-2.93.71-4.27 1.33c-.01 0-.02.01-.03.02c-2.72 4.07-3.47 8.03-3.1 11.95c0 .02.01.04.03.05c1.8 1.32 3.53 2.12 5.24 2.65c.03.01.06 0 .07-.02c.4-.55.76-1.13 1.07-1.74c.02-.04 0-.08-.04-.09c-.57-.22-1.11-.48-1.64-.78c-.04-.02-.04-.08-.01-.11c.11-.08.22-.17.33-.25c.02-.02.05-.02.07-.01c3.44 1.57 7.15 1.57 10.55 0c.02-.01.05-.01.07.01c.11.09.22.17.33.26c.04.03.04.09-.01.11c-.52.31-1.07.56-1.64.78c-.04.01-.05.06-.04.09c.32.61.68 1.19 1.07 1.74c.03.01.06.02.09.01c1.72-.53 3.45-1.33 5.25-2.65c.02-.01.03-.03.03-.05c.44-4.53-.73-8.46-3.1-11.95c-.01-.01-.02-.02-.04-.02M8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.84 2.12-1.89 2.12m6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.83 2.12-1.89 2.12"
            />
          </svg>
        </div>
      </div>
      <div className="w-[80%] rounded-full bg-slate-400 h-[2px]"></div>
      <div className="flex my-10">
        <div className="w-72 h-64   mx-2  flex flex-col items-center p-4 ">
          <p className="text-xl my-2">Blog</p>
          <p className="">Career Advice and Roadmaps</p>
          <p className="">Data Structures & Algorithms</p>
          <p className="">Machine Coding Round (LLD)</p>
          <p className="">System Design & Architecture</p>
          <p className="">Backend Development</p>
          <p className="">Frontend Development</p>
        </div>
        <div className="w-72 h-64   mx-2  flex flex-col items-center p-4 ">
          <p className="text-xl my-2">Practice Questions</p>
          <p className="">Career Advice and Roadmaps</p>
          <p className="">Data Structures & Algorithms</p>
          <p className="">Machine Coding Round (LLD)</p>
          <p className="">System Design & Architecture</p>
          <p className="">Backend Development</p>
          <p className="">Frontend Development</p>
        </div>
        <div className="w-72 h-64   mx-2  flex flex-col items-center p-4 ">
          <p className="text-xl my-2">Online Compiler and IDEs</p>
          <p className="">Career Advice and Roadmaps</p>
          <p className="">Data Structures & Algorithms</p>
          <p className="">Machine Coding Round (LLD)</p>
          <p className="">System Design & Architecture</p>
          <p className="">Backend Development</p>
          <p className="">Frontend Development</p>
        </div>
      </div>
      <div className="w-[70%] rounded-full bg-slate-700 h-[2px]"></div>
      <div className="flex my-10">
        <div className="w-72 h-64   mx-2  flex flex-col items-center p-4 ">
          <p className="text-xl my-2">Topic-wise Problems</p>
          <p className="">Career Advice and Roadmaps</p>
          <p className="">Data Structures & Algorithms</p>
          <p className="">Machine Coding Round (LLD)</p>
          <p className="">System Design & Architecture</p>
          <p className="">Backend Development</p>
          <p className="">Frontend Development</p>
        </div>
        <div className="w-72 h-64   mx-2  flex flex-col items-center p-4 ">
          <p className="text-xl my-2">Company-wise Problems</p>
          <p className="">Career Advice and Roadmaps</p>
          <p className="">Data Structures & Algorithms</p>
          <p className="">Machine Coding Round (LLD)</p>
          <p className="">System Design & Architecture</p>
          <p className="">Backend Development</p>
          <p className="">Frontend Development</p>
        </div>
        <div className="w-72 h-64   mx-2  flex flex-col items-center p-4 ">
          <p className="text-xl my-2">DSA Sheets (Curated Lists)</p>
          <p className="">Career Advice and Roadmaps</p>
          <p className="">Data Structures & Algorithms</p>
          <p className="">Machine Coding Round (LLD)</p>
          <p className="">System Design & Architecture</p>
          <p className="">Backend Development</p>
          <p className="">Frontend Development</p>
        </div>
      </div>
      <div className="w-[90%] rounded-full bg-slate-800 h-[2px]"></div>
      <div className="w-[90%] flex justify-center items-center h-20 text-slate-500 ">
        <p>© 2024 CodeDaily pvt ltd | All Rights Reserved</p>
      </div>
    </div>
  );
}
