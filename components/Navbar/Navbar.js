import Link from "next/link";
import { useRouter } from "next/router";
export default function Navbar() {
  const router = useRouter();
  function handleClick() {
    router.push("/product");
  }
  return (
    <header>
      <h1 className="bg-zinc-600 text-6xl">Navbar</h1>
      <br />
      <br />
      <Link href={"/"}>Home</Link>
      <br />
      <br />
      <Link href={"/blog"}>blog</Link>
      <br />
      <br />
      <Link href={"/docs"}>docs</Link>
      <br />
      <br />
      <Link href={"/product"}>product</Link>
      <br />
      <br />
      <Link href={"/users"}>user</Link>
      <br />
      <br />
      <button onClick={handleClick}>Place Order</button>
    </header>
  );
}
