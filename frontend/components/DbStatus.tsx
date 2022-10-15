// drag drop file component
import React, { useState } from "react";

interface Project {
  name: String;
  status: String;
}

const DbStatus = (props: any) => {
  const color: Record<string, string> = {
    Done: "green",
    Ongoing: "yellow",
    Failed: "red",
    Pending: "gray",
    Queued: "orange",
  };
  const bgColor = `bg-${color[props.status]}-200`;
  return (
    <>
      <div className={`rounded p-1 ${bgColor}`}>
        <h1>{props.status}</h1>
      </div>
    </>
  );
};

export default DbStatus;
