import { useEffect, useState } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import {
  getTasks,
  addTask,
  updateTask,
  deleteTask,
} from "../../src/component/services/api";

const TaskBoard = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    category: "To-Do",
  });
  const [editingTask, setEditingTask] = useState(null);
  const [ws, setWs] = useState(null);

  // Fetch tasks and set up WebSocket connection
  useEffect(() => {
    getTasks().then((res) => setTasks(res.data));

    const websocket = new WebSocket("ws://localhost:5000"); // Connect to WebSocket server
    setWs(websocket);

    websocket.onmessage = (event) => {
      const updatedTasks = JSON.parse(event.data);
      setTasks(updatedTasks); // Update state with new tasks from server
    };

    return () => websocket.close(); // Cleanup WebSocket on component unmount
  }, []);

  // Handle adding a new task
  const handleAddTask = async () => {
    if (!newTask.title.trim()) {
      alert("Title is required!");
      return;
    }
    if (newTask.title.length > 50) {
      alert("Title must be 50 characters or less!");
      return;
    }
    if (newTask.description.length > 200) {
      alert("Description must be 200 characters or less!");
      return;
    }

    const taskWithTimestamp = {
      ...newTask,
      timestamp: new Date().toISOString(),
    };

    try {
      await addTask(taskWithTimestamp);
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  // Handle editing a task
  const handleEditTask = (task) => {
    setEditingTask(task);
  };

  const handleSaveEdit = async () => {
    if (!editingTask.title.trim()) {
      alert("Title is required!");
      return;
    }
    if (editingTask.title.length > 50) {
      alert("Title must be 50 characters or less!");
      return;
    }
    if (editingTask.description.length > 200) {
      alert("Description must be 200 characters or less!");
      return;
    }

    try {
      await updateTask(editingTask._id, editingTask);
      setEditingTask(null); // Reset editing state
    } catch (error) {
      console.error("Error editing task:", error);
    }
  };

  // Handle deleting a task
  const handleDeleteTask = async (taskId) => {
    try {
      await deleteTask(taskId);
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  // Handle Drag & Drop
  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const { source, destination } = result;

    // Clone the tasks array
    const updatedTasks = [...tasks];

    // Find the dragged task
    const movedTask = updatedTasks.find(
      (task) => task._id === result.draggableId
    );

    if (!movedTask) return; // Ensure the task exists

    // Update task category
    movedTask.category = destination.droppableId;

    // Remove task from old position
    updatedTasks.splice(source.index, 1);

    // Insert task in new position
    updatedTasks.splice(destination.index, 0, movedTask);

    // Update state
    setTasks(updatedTasks);

    // Update task in database
    updateTask(movedTask._id, {
      ...movedTask,
      category: destination.droppableId,
    });
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold text-center mb-6">Task Management</h1>

      {/* Add Task Form */}
      <div className="flex flex-col md:flex-row gap-3 mb-6">
        <input
          type="text"
          placeholder="Task title (max 50 chars)"
          value={newTask.title}
          onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
          maxLength="50"
          className="border p-2 rounded flex-1"
        />
        <input
          type="text"
          placeholder="Description (max 200 chars, optional)"
          value={newTask.description}
          onChange={(e) =>
            setNewTask({ ...newTask, description: e.target.value })
          }
          maxLength="200"
          className="border p-2 rounded flex-1"
        />
        <select
          value={newTask.category}
          onChange={(e) => setNewTask({ ...newTask, category: e.target.value })}
          className="border p-2 rounded"
        >
          <option value="To-Do">To-Do</option>
          <option value="In Progress">In Progress</option>
          <option value="Done">Done</option>
        </select>
        <button
          onClick={handleAddTask}
          className="bg-cyan-400 text-black px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          Add Task
        </button>
      </div>

      {/* Edit Task Modal */}
      {editingTask && (
        <div className="modal bg-gray-900 bg-opacity-50 fixed inset-0 flex justify-center items-center">
          <div className="modal-content bg-white p-6 rounded">
            <h2 className="text-xl font-semibold mb-4">Edit Task</h2>
            <input
              type="text"
              placeholder="Update Title"
              value={editingTask.title}
              onChange={(e) =>
                setEditingTask({ ...editingTask, title: e.target.value })
              }
              maxLength="50"
              className="border p-2 rounded mb-2 w-full"
            />
            <input
              type="text"
              placeholder="Update Description"
              value={editingTask.description}
              onChange={(e) =>
                setEditingTask({ ...editingTask, description: e.target.value })
              }
              maxLength="200"
              className="border p-2 rounded mb-4 w-full"
            />
            <div className="flex gap-4">
              <button
                onClick={handleSaveEdit}
                className="bg-cyan-400 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Save
              </button>
              <button
                onClick={() => setEditingTask(null)}
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Drag & Drop Task Board */}
      <DragDropContext onDragEnd={handleDragEnd}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {["To-Do", "In Progress", "Done"].map((category) => (
            <Droppable key={category} droppableId={category}>
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className="bg-cyan-100 p-4 rounded-lg shadow-md min-h-[300px]"
                >
                  <h2 className="text-lg font-semibold text-gray-700 mb-2">
                    {category}
                  </h2>
                  {tasks
                    .filter((task) => task.category === category)
                    .map((task, index) => (
                      <Draggable
                        key={task._id}
                        draggableId={String(task._id)}
                        index={index}
                      >
                        {(provided) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className="bg-white p-4 rounded-lg shadow mb-2 flex flex-col"
                          >
                            <h3 className="text-md font-semibold">
                              {task.title}
                            </h3>
                            <p className="text-sm text-gray-600">
                              {task.description}
                            </p>
                            <p className="text-xs text-gray-400">
                              {new Date(task.timestamp).toLocaleString()}
                            </p>
                            <div className="mt-2 flex gap-2">
                              <button
                                onClick={() => handleEditTask(task)}
                                className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 transition"
                              >
                                Edit
                              </button>
                              <button
                                onClick={() => handleDeleteTask(task._id)}
                                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                              >
                                Delete
                              </button>
                            </div>
                          </div>
                        )}
                      </Draggable>
                    ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          ))}
        </div>
      </DragDropContext>
    </div>
  );
};

export default TaskBoard;