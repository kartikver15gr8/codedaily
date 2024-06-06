import { Button } from "@repo/ui/button";
import Image from "next/image";

export default function Landing() {
  return (
    <div className="flex h-[500px] p-4 bg-black">
      <div className="w-[50%] flex flex-col justify-center ml-16">
        <h1 className="text-5xl my-2">Practice your coding skills</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores illum
          accusamus est doloremque quos commodi exercitationem magni dolorum
          recusandae facere.
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
