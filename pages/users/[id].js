import React from "react";
import { useRouter } from "next/dist/client/router";

export const getStaticPaths = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  const paths =data.map(itemData=>{
    return{
      params:{id:itemData.id.toString() }
    }
  })

  return{
    paths,
    fallback:false
  }
};
export async function getStaticProps(context) {
  const id=context.params.id
  const response = await fetch("https://jsonplaceholder.typicode.com/users/"+id);
  const data = await response.json();

  return {
    props: {
      users: data,
    },
  };
}

export default function Details({users}) {
  const router = useRouter();
  const IdUser = router.query.id;
  return (
    <div>
      {/* <h1>Data user {IdUser}</h1> */}
      <ul>
        <li>{users.id}</li>
        <li>{users.name}</li>
        <li>{users.email}</li>
      </ul>
    </div>
  );
}
