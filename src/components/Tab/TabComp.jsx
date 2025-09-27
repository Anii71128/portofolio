import React from "react";
import { motion } from "framer-motion";
import { ProductsData } from "../../mockData/data";

const TabComp = () => {
  return (
    <section className="py-10 px-5 bg-gray-950">
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {ProductsData.map((card) => (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="p-5 border border-gray-800 rounded-xl shadow-md bg-gray-900 text-white hover:shadow-lg hover:-translate-y-1 transition"
          >
            {/* Gambar */}
            <img
              src={card.image}
              alt={card.title}
              className="h-[180px] w-full object-cover rounded-lg mb-4 hover:scale-105 transition"
            />

            {/* Judul & Deskripsi */}
            <h3 className="text-lg font-semibold">{card.title}</h3>
            <p className="text-sm text-gray-400 mb-3">{card.info}</p>

            {/* Progress Bar */}
            <div className="w-full bg-gray-700 rounded-full h-3 mt-2 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${card.level}%` }}
                transition={{ duration: 1 }}
                className="bg-gradient-to-r from-blue-500 to-cyan-400 h-3 rounded-full"
              ></motion.div>
            </div>
            <p className="text-xs text-gray-400 mt-1">{card.level}%</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TabComp;
