import React from "react";
import { motion } from "framer-motion";
import { SlideLeft } from "../../../utility/animation";

// Import icons dari react-icons
import { FaGraduationCap, FaBriefcase, FaCode } from "react-icons/fa";

const Banner2 = () => {
  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-transparent">
      <div className="flex flex-col justify-center items-center text-center space-y-12 px-6 lg:px-20">
        {/* Judul */}
        <motion.h1
          variants={SlideLeft(0.5)}
          initial="hidden"
          whileInView={"visible"}
          viewport={{ once: true }}
          className="text-3xl lg:text-5xl font-bold text-primary uppercase"
        >
          Riwayat Pendidikan & Pengalaman
        </motion.h1>

        {/* Grid Card */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Pendidikan */}
          <motion.div
            variants={SlideLeft(0.7)}
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10 shadow-lg hover:shadow-xl transition w-72"
          >
            <h2 className="text-xl font-semibold text-blue-500 flex items-center justify-center gap-2 mb-4">
              <FaGraduationCap /> Pendidikan
            </h2>
            <p className="text-gray-300">🎓 SMKN 1 PURWOSARI </p>
            <p className="text-gray-300">🎓 SMPN 2 PURWOSARI </p>
          </motion.div>

          {/* Pengalaman */}
          <motion.div
            variants={SlideLeft(0.9)}
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10 shadow-lg hover:shadow-xl transition w-72"
          >
            <h2 className="text-xl font-semibold text-green-500 flex items-center justify-center gap-2 mb-4">
              <FaBriefcase /> Pengalaman
            </h2>
            <p className="text-gray-300">💼 pernah bikin web responsive sie</p>
            <p className="text-gray-300">💼 dan pernah bikin kaya project c++ bangking management system gitu</p>
          </motion.div>

          {/* Skill */}
          <motion.div
            variants={SlideLeft(1.1)}
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10 shadow-lg hover:shadow-xl transition w-72"
          >
            <h2 className="text-xl font-semibold text-purple-500 flex items-center justify-center gap-2 mb-4">
              <FaCode /> Keterampilan
            </h2>
            <p className="text-gray-300">
              ⚡ HTML, CSS, JavaScript, React, Tailwind, Figma, C++, Bootstrap
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Banner2;
