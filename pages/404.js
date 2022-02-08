import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
export default function PageNotFound() {
  const router = useRouter();
  React.useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 4000);
  }, []);
  return (
    <div>
      <h1>Page Not Found 404</h1>
      <div>
        <Image src={"/assets/images/planet.svg"} width={50} height={50} />
      </div>
    </div>
  );
}
