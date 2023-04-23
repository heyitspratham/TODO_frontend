import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { server, userContext } from "../main";
import TodoItems from "../components/TodoItems";
import { Navigate } from "react-router-dom";

const Home = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [loading, setLoading] = useState(false);
  const [Tasks, setTasks] = useState([]);
  const [refresh, setRefresh] = useState(false)

  const {isAuthenticated} = useContext(userContext);

  const updateHandler = async (id) => {
    try {
      
      const {data} = await axios.put(`${server}/tasks/${id}`, {}, {
        withCredentials: true
      })
      toast.success(data.message)
      setRefresh((prev)=>!prev)

    } catch (error) {
      console.log("error occured");
      
    }
  };
  const deleteHandler = async (id) => {
    try {
      
      const {data} = await axios.delete(`${server}/tasks/${id}`, {
        withCredentials: true
      })
      console.log(data);
      toast.success(data.message)
      setRefresh((prev)=>!prev)
    } catch (error) {
      console.log("error occured");
    }
  };

  const submitHandler = async (e) => {
    setLoading(true);
    e.preventDefault();

    try {
      const { data } = await axios.post(
        `${server}/tasks/new`,
        {
          title,
          description: desc,
        },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      toast.success(data.message);
      setLoading(false);
      setTitle("");
      setDesc("");
      setRefresh((prev)=>!prev)
    } catch (error) {
      toast.error("Error Occured");
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    axios
      .get(`${server}/tasks/mytasks`, {
        withCredentials: true,
      })
      .then((res) => {
        setTasks(res.data.task);
        // console.log(res.data.task);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [refresh]);

  if(!isAuthenticated) return <Navigate to={"/login"} />


  return (
    <div className=" w-screen h-screen flex flex-col items-center bg-slate-300 overflow-auto">
      <form
        className="flex flex-col items-center mt-11  w-[55%] bg-white px-5 pt-3"
        onSubmit={submitHandler}
      >
        <input
          className="border border-gray-400 m-3 w-full p-2 text-lg"
          type="text"
          placeholder="Task"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          className="border border-gray-400 m-3 w-full p-2 text-lg"
          type="text"
          placeholder="Description"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          required
        />
        <button
          className="bg-gray-700 text-white w-[16%] text-lg my-5 p-2"
          type="submit"
          disabled={loading}
        >
          Add Task
        </button>
      </form>
      <section className="flex flex-col items-center mt-11  w-[55%]  pt-3">
        {Tasks.map((i) => (
          <TodoItems
            key={i._id}
            title={i.title}
            description={i.description}
            isCompleted={i.isCompleted}
            updateHandler={updateHandler}
            deleteHandler={deleteHandler}
            id={i._id}
          />
        ))}
      </section>
    </div>
  );
};

export default Home;
