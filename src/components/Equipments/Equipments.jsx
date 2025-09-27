import React from "react";
import { motion } from "framer-motion";
import { SlideLeft } from "../../../utility/animation";
import {
  SiFigma,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiCplusplus,
} from "react-icons/si";

const EquipmentData = [
  {
    id: 1,
    icon: (
      <div className="flex items-center gap-3">
        <SiHtml5 className="text-4xl text-orange-500" />
        <SiCss3 className="text-4xl text-blue-500" />
        <SiJavascript className="text-4xl text-yellow-400" />
      </div>
    ),
    title: "Web Development",
    desc: "Membangun website modern dengan performa tinggi, UI responsif, dan aksesibilitas yang baik.",
    delay: 0.2,
  },
  {
    id: 2,
    icon: <SiFigma className="text-4xl text-indigo-400" />,
    title: "UI/UX Design",
    desc: "Mendesain antarmuka pengguna yang intuitif dan menarik menggunakan Figma, fokus pada pengalaman pengguna.",
    delay: 0.4,
  },
  {
    id: 3,
    icon: <SiCplusplus className="text-4xl text-blue-500" />,
    title: "SiCplusplus",
    desc: "Mengembangkan aplikasi dengan bahasa C++ untuk performa tinggi, sistematis, dan efisiensi.",
    delay: 0.6,
  },
];

const Equipments = () => {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header Section */}
        <section
          id="bio"
          className="p-6 mb-12 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg"
        >
          <h2 className="text-xl font-bold mb-2">Tentang Saya</h2>
          <p className="opacity-90">
            Saya Frontend Developer yang berfokus pada membangun antarmuka
            modern, interaktif, dan responsif. Mengutamakan desain yang menarik,
            pengalaman pengguna yang intuitif, serta performa yang optimal.
            Senang mengubah ide kreatif menjadi tampilan web yang fungsional dan
            siap digunakan.
          </p>
        </section>

        {/* Equipments Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {EquipmentData.map((item) => (
            <motion.div
              key={item.id}
              variants={SlideLeft(item.delay)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-md p-8 rounded-xl 
                         shadow-lg border border-white/10 
                         hover:shadow-[0_0_22px_0_rgba(0,0,0,0.4)] 
                         hover:bg-white/10 transition-all duration-300"
            >
              {/* Icon */}
              <div className="text-5xl text-indigo-400 mb-6">{item.icon}</div>

              {/* Description */}
              <p className="text-gray-300">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Equipments;
