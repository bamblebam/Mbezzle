import type { NextPage } from "next";
import DbElement from "../components/DbElement";

const dashboard: NextPage = () => {
  const dbs = [
    {
      name: "db1",
      status: "Ongoing",
    },
    {
      name: "db1",
      status: "Pending",
    },
    {
      name: "db1",
      status: "Done",
    },
    {
      name: "db1",
      status: "Queued",
    },
  ];
  return (
    <>
      <div className='w-full flex-col m-auto justify-center align-middle max-w-3xl'>
        <div className='flex-col  justify-center align-middle'>
          <p className='text-gray-300 text-center'>Welcome Back</p>
          <h1 className='text-light-400 text-xl text-center'>Jobs:</h1>
        </div>
        <div className='flex-col justify-center align-middle'>
          {dbs.map((element, i) => {
            return <DbElement key={i} db={element} />;
          })}
        </div>
      </div>
    </>
  );
};

export default dashboard;
