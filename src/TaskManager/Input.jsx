import React, { useState } from "react";
import { FaRegTrashCan } from "react-icons/fa6";
import { FcApproval } from "react-icons/fc";
import { motion, AnimatePresence } from "framer-motion";

const Input = () => {
  const [taskValue, setTaskValue] = useState("");
  const [descriptionValue, setDescriptionValue] = useState("");
  const [tasks, setTasks] = useState([]);
  const [completedTask, setCompletedTask] = useState(new Set());

  const handleClick = () => {
    if (!taskValue.trim() || !descriptionValue.trim()) {
      alert("Please fill in both the task and description.");
      return;
    }
    const newTask = {
      task: taskValue,
      description: descriptionValue,
    };

    setTasks([...tasks, newTask]);
    setTaskValue("");
    setDescriptionValue("");
  };

  const handleDelete = (index) => {
    let confirmation = confirm("Are you sure you want to delete this Task ?");
    if (confirmation) {
      const deletedItems = tasks.filter((_, item) => item !== index);
      setTasks(deletedItems);
    } else {
      return;
    }
  };

  const makeAsRead = (index) => {
    const newCompletedTask = new Set(completedTask);
    if (newCompletedTask.has(index)) {
      newCompletedTask.delete(index);
    } else {
      newCompletedTask.add(index);
    }
    setCompletedTask(newCompletedTask);
  };

  const stylingCompletedTask = (index) => {
    return completedTask.has(index) ? "line-through text-slate-300" : "";
  };

  // Framer Motion variants for animations
  const taskVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
  };

  return (
    <div className="flex flex-col justify-center items-center space-y-8 bg-white shadow-lg rounded-lg p-8 w-full max-w-lg mx-auto mt-10">
      <h2 className="text-3xl font-semibold text-gray-800 mb-4">
        Add a New Task
      </h2>

      {/* Task Title Input */}
      <div className="flex flex-col space-y-3 w-full">
        <label htmlFor="task-title" className="text-gray-700 font-medium">
          Task Title
        </label>
        <input
          id="task-title"
          type="text"
          placeholder="Please enter your task"
          className="rounded-lg border border-gray-300 px-4 py-2 w-full focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-400 transition duration-200"
          value={taskValue}
          onChange={(e) => setTaskValue(e.target.value)}
          aria-label="Task Title Input"
        />
      </div>

      {/* Task Description Input */}
      <div className="flex flex-col space-y-3 w-full">
        <label htmlFor="task-description" className="text-gray-700 font-medium">
          Task Description
        </label>
        <input
          id="task-description"
          type="text"
          placeholder="Please enter your task description"
          className="rounded-lg border border-gray-300 px-4 py-2 w-full focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-400 transition duration-200"
          value={descriptionValue}
          onChange={(e) => setDescriptionValue(e.target.value)}
          aria-label="Task Description Input"
          aria-describedby="description-info"
        />
        <p id="description-info" className="text-gray-500 text-sm">
          Describe your task briefly for better clarity.
        </p>
      </div>

      {/* Add Task Button */}
      <button
        className="px-6 py-3 rounded-lg bg-blue-500 text-white font-medium hover:bg-blue-600 transition duration-300 w-full"
        onClick={handleClick}
        aria-label="Add Task Button"
      >
        Add Task
      </button>

      {/* Task List with Animations */}
      <div className="w-full mt-6 space-y-4">
        <AnimatePresence>
          {tasks.map((item, index) => (
            <motion.div
              key={index}
              className="flex items-center justify-between bg-slate-50 px-6 py-4 rounded-lg shadow-md border border-gray-200 space-x-4"
              aria-label={`Task ${index + 1}`}
              variants={taskVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="flex flex-col">
                <h3
                  className={`font-bold text-lg text-gray-800 ${stylingCompletedTask(
                    index
                  )}`}
                >
                  Title:
                </h3>
                <p
                  className={`text-base text-gray-700 ${stylingCompletedTask(
                    index
                  )}`}
                >
                  {item.task}
                </p>
                <h4
                  className={`font-semibold text-md text-gray-800 mt-2 ${stylingCompletedTask(
                    index
                  )}`}
                >
                  Description:
                </h4>
                <p
                  className={`text-sm text-gray-600 ${stylingCompletedTask(
                    index
                  )}`}
                >
                  {item.description}
                </p>
              </div>

              {/* Delete and Approve Task Buttons */}
              <div className="flex space-x-2">
                <button
                  className="text-red-500 hover:text-red-600 transition duration-200"
                  title="Delete Task"
                  aria-label={`Delete Task ${item.task}`}
                >
                  <FaRegTrashCan
                    size={20}
                    onClick={() => handleDelete(index)}
                  />
                </button>
                <button
                  className="text-green-500 hover:text-green-600 transition duration-200"
                  title="Approve Task"
                  aria-label={`Approve Task ${item.task}`}
                >
                  <FcApproval size={22} onClick={() => makeAsRead(index)} />
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Input;
