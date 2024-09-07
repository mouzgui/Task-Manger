import { useState } from "react";

const ListItems = ({ items, heading }) => {
  const [decoration, setDecoration] = useState(-1);

  return (
    <>
      <h1 className="text-2xl">{heading}</h1>
      {items.length === 0 && (
        <h1 className="text-lg text-red-500">No Items found</h1>
      )}
      <ul className="flex flex-col gap-2">
        {items.map((item, index) => (
          <li
            key={index}
            className={`border border-slate-400 rounded px-12 cursor-pointer ${
              decoration === index
                ? "bg-blue-500 text-white"
                : "bg-white text-black"
            }`}
            onClick={() => setDecoration(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListItems;
