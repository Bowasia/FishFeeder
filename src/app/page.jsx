import Image from "next/image";
import Link from "next/link";
import Nav from "./components/Nav";
import GetLIFF from "./components/GetLIFF";
import Payment from "./components/Payment";


export default function Home() {

  return (
    <>
      <Nav />
      <GetLIFF />
      <Payment />
    </>
  );
}
