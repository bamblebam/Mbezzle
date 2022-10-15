import type { NextPage } from "next";
import DragDrop from "../components/DragDrop";

const upload: NextPage = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
      }}
    >
      <DragDrop />
    </div>
  );
};

export default upload;
