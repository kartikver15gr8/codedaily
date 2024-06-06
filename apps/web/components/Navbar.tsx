import { Button } from "@repo/ui/button";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="flex p-2 w-full justify-between items-center h-16 bg-black fixed z-20  backdrop-blur-lg bg-[rgba(0,0,0,0.2)]">
      <div className="flex justify-center items-center ">
        <Image
          className="mx-4 my-2 hover:scale-110 transition-all duration-300 "
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'  viewBox='0 0 1024 1024'%3E%3Cpath fill='%231a74ea' d='M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32M513.1 518.1l-192 161c-5.2 4.4-13.1.7-13.1-6.1v-62.7c0-2.3 1.1-4.6 2.9-6.1L420.7 512l-109.8-92.2a7.63 7.63 0 0 1-2.9-6.1V351c0-6.8 7.9-10.5 13.1-6.1l192 160.9c3.9 3.2 3.9 9.1 0 12.3M716 673c0 4.4-3.4 8-7.5 8h-185c-4.1 0-7.5-3.6-7.5-8v-48c0-4.4 3.4-8 7.5-8h185c4.1 0 7.5 3.6 7.5 8z'/%3E%3C/svg%3E"
          width={50}
          height={50}
          alt="codedaily"
        />
      </div>
      <div className="flex ">
        <ul className="flex flex-row">
          <li className="mx-4 text-lg hover:text-blue-400 hover:scale-110 transition-all duration-300 ">
            Practice
          </li>
          <li className="mx-4 text-lg hover:text-blue-400 hover:scale-110 transition-all duration-300">
            Resources
          </li>
          <li className="mx-4 text-lg hover:text-blue-400 hover:scale-110 transition-all duration-300">
            Curriculam
          </li>
          <li className="mx-4 text-lg hover:text-blue-400 hover:scale-110 transition-all duration-300">
            Progress
          </li>
        </ul>
      </div>
      <div>
        <Button
          className="mx-4 w-20 h-10 bg-blue-700 rounded-md hover:bg-blue-600 hover:scale-105 transition-all duration-300"
          appName=""
        >
          Login
        </Button>
      </div>
    </div>
  );
}
