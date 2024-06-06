import { Button } from "@repo/ui/button";
// import Image from "next/image";

export default function Landing() {
  return (
    <div className="flex h-[500px] p-4 bg-black">
      <div className="w-[50%] flex flex-col justify-center ml-16">
        <h1 className="text-5xl my-2">
          Become a software engineer at top companies
        </h1>

        <p className="text-slate-400">
          An online community of like minded folks to collaborate and share
          knowledge.
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
          src="https://d2yjqys1j7uhg1.cloudfront.net/images/voice_interface.svg"
          alt="Get in"
        />
      </div>
    </div>
  );
}
