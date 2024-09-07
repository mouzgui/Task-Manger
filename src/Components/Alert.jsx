import React from "react";
import { TiDeleteOutline } from "react-icons/ti";

const Alert = ({ alert, ondeleteIcon }) => {
  return (
    <>
      <div className="flex flex-col items-center justify-center relative">
        <p className=" px-24 border border-red-500 text-red-500 bg-red-100 py-2">
          {alert}
        </p>
        <TiDeleteOutline
          className="cursor-pointer absolute top-0 right-0"
          onClick={ondeleteIcon}
        />
      </div>
    </>
  );
};

export default Alert;
