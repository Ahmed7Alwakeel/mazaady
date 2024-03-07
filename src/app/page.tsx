'use client'
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router=useRouter()
  return (
    <h1>Hello</h1>
  );
}
