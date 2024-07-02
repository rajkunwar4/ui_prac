import React from "react";
import "../../App.css"

const HomeCard = ({ col_size }) => {

    console.log(col_size)
  return (
    <div
      className={`flex flex-col px-10 py-4 col-span-${col_size} border-[0.5px] border-gray-600 rounded-lg gap-2 justify-center items-center text-center custom-bg`}
    >
      <div className="bg-black w-12 p-2 flex items-center rounded-lg">
        <svg
          viewBox="0 0 24 24"
          fill="rgb(22 163 74)"
          xmlns="http://www.w3.org/2000/svg"
          className="w-10 "
        >
          <path d="M15 2H9v2H7v4H4v14h16V8h-3V4h-2V2zm0 2v4H9V4h6zm-6 6h9v10H6V10h3zm4 3h-2v4h2v-4z" />
        </svg>
      </div>
      <h2 className="text-white text-xl">Database</h2>
      <span className="text-gray-500">
        Every project is a full Postgres database, the world's most trusted
        relational database.
      </span>
      <div>
        <img
          src="https://supabase.com/_next/image?url=%2Fimages%2Findex%2Fproducts%2Fvector.svg&w=3840&q=100"
          alt=""
          className="w-32"
        />
      </div>
    </div>
  );
};

export default HomeCard;
