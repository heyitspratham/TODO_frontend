import React from "react";

const TodoItems = ({
  title,
  description,
  isCompleted,
  id,
  deleteHandler,
  updateHandler,
}) => {
  return (
    <div className="flex justify-between items-center bg-white  w-full p-5 my-5">
      <div>
        <h1 className="font-bold text-xl">{title}</h1>
        <p>{description}</p>
      </div>
      <div className="flex w-min">
        <input className="mr-5" type="checkbox" onChange={()=>updateHandler(id)} checked={isCompleted} />
        <button className="bg-gray-700 text-white text-lg my-5 p-2 px-5" onClick={()=>deleteHandler(id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItems;
