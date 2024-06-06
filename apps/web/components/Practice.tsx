import { Button } from "@repo/ui/button";
import Image from "next/image";

export default function Practice() {
  return (
    <div className="flex h-[500px] p-4 bg-black">
      <div className="w-[50%] flex flex-col justify-center ml-16">
        <h1 className="text-5xl my-2">Practice your coding skills</h1>
        <p>
          Questions designed to prepare you for interviews at the best
          companies.
        </p>
        <Button
          className="bg-blue-800 w-40 h-10 rounded-lg mt-4 hover:bg-blue-600 transition-all duration-300"
          appName=""
        >
          Get started
        </Button>
      </div>
      <div className="w-[50%] flex justify-center items-center">
        <img
          className=" w-[400px]"
          src="https://d2yjqys1j7uhg1.cloudfront.net/images/practice.svg"
          alt="Get in"
        />
      </div>
    </div>
  );
}
