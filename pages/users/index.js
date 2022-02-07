import React from 'react';
import Link from 'next/dist/client/link';
// import User from '../../components/Sections/user';
import User from '../../components/SectionsPages/user';
export default function UsersList({users}) {
  return <div>
      <Link href={'/'}>
        home
      </Link>
      {users.map((item)=>(
        //   <p>{item.name}</p>
        <div key={item.id}>
          <User user={item}/>
        </div>
      ))}
  </div>;
}
export async function getStaticProps(){
    const response=await fetch('https://jsonplaceholder.typicode.com/users')
    const data=await response.json()

    return{
        props:{
            users:data,
        },
    }
}