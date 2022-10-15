import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Nav from "../components/Nav";

const Home: NextPage = () => {
  return (
    <>
      <div className='flex justify-center align-middle w-full'>
        <h1 className='text-light-200 text-xl mt-5'>Welcome To MBezzel</h1>
      </div>
    </>
  );
};

export default Home;
