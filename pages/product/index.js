import Link from "next/dist/client/link";
export default function ProductList({ productId = 100 }) {
  return (
    <div>
      <ul>
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/product/1"}>Product 1</Link>
        </li>
        <li>
          <Link href={"/product/2"}>Product 2</Link>
        </li>
        <li>
          <Link href={"/product/3"} replace>
            Product 3
          </Link>
        </li>
        
      </ul>
    </div>
  );
}
