import { motion } from 'framer-motion';
import { CheckCircle, Plus, Clock, FileText, Archive } from "lucide-react";

// Custom Card Component
const Card = ({ children }) => (
  <motion.div 
    className="p-6 bg-gradient-to-br from-cyan-500 rounded-xl shadow-lg cursor-pointer text-black"
    whileHover={{ y: -10, scale: 1.05 }} // Hover effect
    transition={{ duration: 0.3 }}
  >
    {children}
  </motion.div>
);

export default function DashboardPage() {
  const taskStats = [
    { title: "Total Tasks", icon: <FileText className="text-black" size={28} />, count: 12 },
    { title: "Completed", icon: <CheckCircle className="text-black" size={28} />, count: 5 },
    { title: "In Progress", icon: <Clock className="text-black" size={28} />, count: 4 },
    { title: "Archived", icon: <Archive className="text-black" size={28} />, count: 3 },
  ];

  return (
    <div className="p-6">
      {/* Dashboard Title */}
      <motion.h2 
        className="text-4xl font-bold text-center mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Task Dashboard
      </motion.h2>

      {/* Task Stats Section */}
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
        {taskStats.map((stat, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <Card>
              <div className="flex flex-col items-center">
                {stat.icon}
                <h3 className="text-xl font-semibold text-black mt-2">{stat.title}</h3>
                <p className="text-black text-lg mt-1">{stat.count}</p>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Add New Task Section */}
      <div className="mt-8 flex justify-center">
        <motion.div 
          className="bg-cyan-600 text-white p-4 rounded-xl shadow-lg cursor-pointer"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex items-center space-x-2">
            <Plus className="text-white" size={24} />
            <span className="text-lg font-semibold">Add New Task</span>
          </div>
        </motion.div>
      </div>

      {/* Recent Tasks Section */}
      <div className="mt-8">
        <motion.h3 
          className="text-2xl font-bold text-center mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Recent Tasks
        </motion.h3>
        <div className="space-y-4">
          {/* Replace these hardcoded tasks with real data */}
          <div className="flex justify-between items-center bg-gradient-to-br from-cyan-500 p-4 rounded-xl shadow-md">
            <span>Task 1: Build a new feature</span>
            <span className="text-sm text-gray-500">In Progress</span>
          </div>
          <div className="flex justify-between items-center bg-gradient-to-br from-cyan-500 p-4 rounded-xl shadow-md">
            <span>Task 2: Fix bugs</span>
            <span className="text-sm text-gray-500">Completed</span>
          </div>
          <div className="flex justify-between items-center bg-gradient-to-br from-cyan-500 p-4 rounded-xl shadow-md">
            <span>Task 3: Update documentation</span>
            <span className="text-sm text-gray-500">Pending</span>
          </div>
        </div>
      </div>
    </div>
  );
}
