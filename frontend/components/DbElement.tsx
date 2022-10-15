// drag drop file component
import React, { useState } from "react";
import DbStatus from "./DbStatus";

interface Project {
  name: String;
  status: String;
}

const DbElement = (props: any) => {
  return (
    <>
      <div className='w-full min-h-2 p-5 mt-2 rounded bg-gray-300 flex justify-between align-middle'>
        <h1 className='text-black-500 p-1'>{props.db.name}</h1>
        <DbStatus status={props.db.status} />
      </div>
    </>
  );
};

export default DbElement;
