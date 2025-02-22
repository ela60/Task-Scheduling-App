import { useState, useEffect } from "react";

const TaskScheduler = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({
    title: "",
    dueDate: "",
    recurring: "none",
  });

  // Handle adding a new task
  const handleAddTask = () => {
    if (!newTask.title.trim() || !newTask.dueDate) {
      alert("Task title and due date are required!");
      return;
    }

    const taskWithId = { ...newTask, id: Date.now() };
    setTasks([...tasks, taskWithId]);
    setNewTask({ title: "", dueDate: "", recurring: "none" });
  };

  // Handle deleting a task
  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  // Check and trigger notifications
  useEffect(() => {
    const checkReminders = () => {
      const now = new Date();
      tasks.forEach((task) => {
        const taskTime = new Date(task.dueDate);
        if (taskTime <= now) {
          alert(`🔔 Reminder: Task "${task.title}" is due!`);
        }
      });
    };

    const interval = setInterval(checkReminders, 60000); // Check every 60 seconds
    return () => clearInterval(interval);
  }, [tasks]);

  return (
    <div className="max-w-lg mx-auto p-4 bg-white rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4 text-center">📅 Task Scheduling & Reminders</h2>

      {/* Task Input Form */}
      <div className="flex flex-col gap-2">
        <input
          type="text"
          placeholder="Task title"
          value={newTask.title}
          onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
          className="border p-2 rounded"
        />
        <input
          type="datetime-local"
          value={newTask.dueDate}
          onChange={(e) => setNewTask({ ...newTask, dueDate: e.target.value })}
          className="border p-2 rounded"
        />
        <select
          value={newTask.recurring}
          onChange={(e) => setNewTask({ ...newTask, recurring: e.target.value })}
          className="border p-2 rounded"
        >
          <option value="none">One-time Task</option>
          <option value="daily">Repeat Daily</option>
          <option value="weekly">Repeat Weekly</option>
          <option value="monthly">Repeat Monthly</option>
        </select>
        <button
          onClick={handleAddTask}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add Task
        </button>
      </div>

      {/* Task List */}
      <ul className="mt-4 space-y-3">
        {tasks.map((task) => (
          <li key={task.id} className="p-3 bg-gray-100 rounded flex justify-between items-center">
            <div>
              <p className="font-semibold">{task.title}</p>
              <p className="text-sm text-gray-600">{new Date(task.dueDate).toLocaleString()}</p>
              {task.recurring !== "none" && (
                <p className="text-xs text-green-600">🔄 Recurring: {task.recurring}</p>
              )}
            </div>
            <button
              onClick={() => handleDeleteTask(task.id)}
              className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskScheduler;
