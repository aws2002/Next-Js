import Link from "next/link"

export default function Home() {
  return (
    <div>
      <h1>Home page</h1>
      <Link href={'/blog'}>
        blog
      </Link>
      <br />
      <br />
      <Link href={'/docs'}>
        docs
      </Link>
      <br />
      <br />
      <Link href={'/product'}>
        product
      </Link>
      <br />
      <br />
      <button>Place Order</button>
    </div>
  )
}
