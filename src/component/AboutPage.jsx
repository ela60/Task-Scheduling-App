import { motion } from 'framer-motion';
import { Briefcase, Globe, Users } from "lucide-react";

// Custom Card Component
const Card = ({ children }) => (
  <motion.div 
    className="p-4 bg-gradient-to-b from-cyan-400 rounded-2xl shadow-lg cursor-pointer"
    whileHover={{ y: -10, scale: 1.05 }} // Move up on hover
    transition={{ duration: 0.3 }}
  >
    {children}
  </motion.div>
);

export default function AboutPage() {
  const highlights = [
    { title: "Experience", icon: <Briefcase className="text-blue-500" size={28} />, desc: "Years of experience in frontend development." },
    { title: "Global Reach", icon: <Globe className="text-green-500" size={28} />, desc: "Worked with clients worldwide on web projects." },
    { title: "Community", icon: <Users className="text-purple-500" size={28} />, desc: "Active in developer communities and open-source projects." },
  ];

  return (
    <div className="p-6 text-center">
      {/* Title */}
      <motion.h2 
        className="text-3xl font-bold mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        About Me
      </motion.h2>

      {/* Highlights with Alternating Motion (Up and Down) */}
      <div className="grid md:grid-cols-3 gap-6">
        {highlights.map((highlight, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, y: index % 2 === 0 ? -30 : 30 }} // Alternate between up (-30) and down (30)
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <Card>
              <div className="flex flex-col items-center">
                {highlight.icon}
                <h3 className="text-xl font-semibold mt-2">{highlight.title}</h3>
                <p className="text-gray-600 text-sm mt-1">{highlight.desc}</p>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
