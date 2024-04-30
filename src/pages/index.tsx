import Link from "next/link";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Buttons from '../components/Buttons';
import Ilustracion from "@/components/Ilustracion";
import { useState } from "react";
import Viñetas from "@/components/Viñetas";
import Bubble1 from "@/components/Bubble1";
import Bubble3 from "@/components/Bubble3";
import Bubble2 from "@/components/Bubble2";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  const [walletConnected, setwalletConnected] = useState(false);

  return (
    <>
      <Navbar />
      <Ilustracion />
      <Buttons />
      <Bubble1 />
      <Bubble2 />
      <Bubble3 />
      <Viñetas />

      <div className="buttons-img">
        <Link href="/Linking" passHref>
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

      <Footer />
    </>

  );
}
