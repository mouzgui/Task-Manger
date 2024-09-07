import Input from "./TaskManager/Input";

const App = () => {
  return (
    <div className="flex flex-col items-center font-sans space-y-4 mt-12  mb-96">
      <h1 className="text-2xl">Task Manager App</h1>
      <Input />
    </div>
  );
};
export default App;
