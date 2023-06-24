import { useState } from "react";
import info from "../info";
import Question from "./Question";

function Questions() {
  return (
    <>
      <div className="lg:w-[40%] w-[350px] h-auto mx-auto  bg-white px-10 py-5 rounded-lg shadow-2xl">
        <div className="flex flex-col">
          <h1 className="text-center font-bold lg:text-4xl md:text-3xl mb-5 text-2xl">
            Frequently Ask
          </h1>
        </div>
        {info.map((inf) => (
          <Question {...inf} />
        ))}
      </div>
    </>
  );
}

export default Questions;
