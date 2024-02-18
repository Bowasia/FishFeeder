import Image from "next/image";
import Link from "next/link";
import Nav from "./component/Nav";
import GetLIFF from "./component/GetLIFF";


export default function Home() {

  return (
    <>
      <Nav />
      <GetLIFF />
    </>
  );
}
