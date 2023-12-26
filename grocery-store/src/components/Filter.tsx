import React from "react";

export const Filter = () => {
  return (
    <div className="bg-cyan-100 rounded-lg ml-4 mb-4  overflow-x-hidden">
      <div className="flex flex-col gap-4 m-4">
        <div className="bg-white h-12 flex justify-center items-center w-full rounded-lg font-bold text-xl">
          Filter
        </div>
        <div className="max-h-96 flex flex-row gap-2 overflow-hidden px-2 justify-center">
          <div className="bg-white h-16 w-[50%] flex justify-left items-center rounded-lg p-4 font-bold m-0">
            Row 1
          </div>
          <div className="bg-white h-16 w-[50%] flex justify-left items-center rounded-lg p-4 font-bold m-0">
            Row 2
          </div>
        </div>
      </div>
    </div>
  );
};
