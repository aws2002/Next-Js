import React from "react";
import Link from "next/link";
export default function User({ user }) {
  return (
    <div>
      <Link href={`/users/${user.id}`}>
          <a>{user.name} <br /></a>
        </Link>
    </div>
  );
}
