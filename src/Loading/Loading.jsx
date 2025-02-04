import React from "react";
import "../Loading/Loading.css";
function Loading() {
  return (
    <>
      <div className="w-full  bg-[#5594d26e] h-screen flex justify-center items-center rounded-[10px]">
        <div class="loader"></div>
      </div>
    </>
  );
}

export default Loading;
