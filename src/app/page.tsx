import { NavBarButtons } from "@/components/navigation/navbar-button";
import Link from 'next/link'
import Image from 'next/image'
import Background from '../../public/pixelArt.jpeg'

export default function Home() {
  return (
    <body>
      <NavBarButtons />
      <div>Home</div>
      <Link href="/dashboard"> Dashboard</Link>
      <Image src={Background} alt="Pixel Art"></Image>
    </body>
  );
}
