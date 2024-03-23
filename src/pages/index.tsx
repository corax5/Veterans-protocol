
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import Buttons from '../components/Buttons';
import Ilustracion from "@/components/Ilustracion";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="body  border-t-4 border-b-4 border-black text-center">

        <Buttons />
        <Ilustracion />
        <div className="container mt-10 flex justify-center items-center">
          <div className="viñetas flex flex-col items-center">
            <Image src="/viñeta1.png" alt="viñeta1" width={1218} height={624} className="mb-2" priority={true} />
            <Image src="/viñeta2.png" alt="viñeta2" width={1218} height={624} className="mb-2" priority={true} />
            <Image src="/viñeta3.png" alt="viñeta3" width={1218} height={624} className="mb-56" priority={true} />
          </div>
        </div>
      </div>


      <Footer />
    </>
  );
}
