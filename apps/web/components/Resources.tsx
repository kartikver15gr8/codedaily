import { Button } from "@repo/ui/button";
// import Image from "next/image";

export default function Resources() {
  return (
    <div className="flex h-[500px] p-4 bg-gray-200">
      <div className="w-[50%] flex justify-center items-center">
        <img
          className=" w-[400px]"
          src="https://d2yjqys1j7uhg1.cloudfront.net/images/books.svg"
          alt="Resources"
        />
      </div>
      <div className="w-[50%] text-black flex flex-col justify-center ml-16">
        <h1 className="text-5xl my-2">Resources</h1>
        <p>
          Articles, blogs, roadmaps, guides for all your interview preparation
          needs.
        </p>
        <Button
          className="bg-blue-800 text-white w-40 h-10 rounded-lg mt-4 hover:bg-blue-600 transition-all duration-300"
          appName=""
        >
          Explore
        </Button>
      </div>
    </div>
  );
}
