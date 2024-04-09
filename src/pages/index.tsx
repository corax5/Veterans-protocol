import Link from "next/link";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Buttons from '../components/Buttons';
import Ilustracion from "@/components/Ilustracion";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  const [walletConnected, setwalletConnected] = useState(false);

  return (
    <>
      <Navbar />
      <div className="body">

        <Buttons />

        <div className="container mt-10 flex justify-center items-center">
          <div className="viñetas flex flex-col items-center">
            <Image src="/viñeta1.png" alt="viñeta1" width={5218} height={624} className="viñeta1 mb-2" priority={true} />
            <Image src="/viñeta2.png" alt="viñeta2" width={5218} height={624} className="viñeta2 mb-2" priority={true} />
            <Image src="/viñeta3.png" alt="viñeta3" width={5218} height={624} className="viñeta3 mb-56" priority={true} />
          </div>
          <div className="buttons-img">
            <Link href="/linking" passHref>
              <div className="button-linkventory2 mr-2 w-32 font-bold" id="linking" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }}>
                <h1>V - LINKING</h1>
              </div>
            </Link>
            <Link href="/inventory" passHref>
              <div className="button-linkventory2 mr-2 w-32 font-bold" id="inventory" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }}>
                INVENTORY
              </div>
            </Link>
          </div>
        </div>
        <Ilustracion />
      </div>

      <Footer />
    </>
  );
}
