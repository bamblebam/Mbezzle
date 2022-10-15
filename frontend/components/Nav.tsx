// drag drop file component
import React from "react";
import Link from "next/link";

const Nav = (props: any) => {
  return (
    <>
      <div className='p-3 flex justify-between align-middle bg-gray-500'>
        <h1 className='ml-3 text-xl font-bold text-light-300'>MBezzel</h1>
        <nav>
          <ul className='flex justify-center align-middle mr-3'>
            <li className='ml-3 text-light-300'>
              <Link href='/'>Home</Link>
            </li>
            <li className='ml-3 text-light-300'>
              <Link href='/dashboard'>Dashboard</Link>
            </li>
            <li className='ml-3 text-light-300'>
              <Link href='/upload'>Upload file</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Nav;
