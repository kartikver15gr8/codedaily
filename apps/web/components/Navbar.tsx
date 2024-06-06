import { Button } from "@repo/ui/button";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="flex  justify-between items-center h-14 bg-black ">
      <div className="flex justify-center items-center ">
        <Image
          className="mx-4 my-2"
          src="https://assets.leetcode.com/static_assets/public/images/LeetCode_logo_rvs.png"
          width={40}
          height={40}
          alt="leetcode"
        />
      </div>
      <div className="flex ">
        <ul className="flex flex-row">
          <li className="mx-2 text-lg">Practice</li>
          <li className="mx-2 text-lg">Resources</li>
          <li className="mx-2 text-lg">Curriculam</li>
          <li className="mx-2 text-lg">Progress</li>
        </ul>
      </div>
      <div>
        <Button
          className=" mx-4  h-8 bg-blue-800 rounded-md w-16 hover:bg-blue-600 transition-all duration-300"
          appName=""
        >
          Login
        </Button>
      </div>
    </div>
  );
}
