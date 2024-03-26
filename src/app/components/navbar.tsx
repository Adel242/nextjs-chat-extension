import Link from "next/link";

export default function Navbar() {
  return (
    <ul className=" flex flex-row justify-between">
      <li>
        <Link href="/">Home</Link>
      </li>

      <li>
        <Link href="/setting">Setting</Link>
      </li>
    </ul>
  );
};