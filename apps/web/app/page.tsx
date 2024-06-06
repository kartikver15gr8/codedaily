// import { Button } from "@repo/ui/button";
// import Image from "next/image";
import Navbar from "../components/Navbar";
import Landing from "../components/Landing";
import Resources from "../components/Resources";
import Practice from "../components/Practice";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Landing />
      <Resources />
      <Practice />
      <Footer />
    </div>
  );
}
