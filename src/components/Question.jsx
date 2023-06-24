import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useState } from "react";

function Question({ question, answer }) {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <>
      <div className="border-2 mb-2 px-2">
        <div className="flex items-center justify-center mb-2 ">
          <h1 className="font-bold lg:text-2xl text-lg flex-1 mt-4">
            {question}
          </h1>
          <button
            className="rounded-full p-2 text-lg bg-gray-200"
            onClick={() => setShowInfo(!showInfo)}
          >
            {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
          </button>
        </div>
        <p className=" duration-400 lg:text-lg text-md">{showInfo && answer}</p>
      </div>
    </>
  );
}

export default Question;
