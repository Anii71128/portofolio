import React from "react";
import { GrYoga } from "react-icons/gr";
import { FaDumbbell } from "react-icons/fa6";
import { GiGymBag } from "react-icons/gi";
import { motion } from "framer-motion";
import { SlideLeft } from "../../../utility/animation";
import DecryptedText from './DecryptedText';

const EquipmentData = [
  {
    id: 1,
    icon: <GrYoga />,
    title: "Yoga Classes",
    desc: "Improve flexibility and peace of mind.",
    delay: 0.2,
  },
  {
    id: 2,
    icon: <FaDumbbell />,
    title: "Strength Training",
    desc: "Build muscle and increase endurance.",
    delay: 0.4,
  },
  {
    id: 3,
    icon: <GiGymBag />,
    title: "Personal Training",
    desc: "Get one-on-one guidance from experts.",
    delay: 0.6,
  },
];

<div style={{ height: "300px", position: "relative" }}>
      </div>

const Equipments = () => {
  return (
    <div>
      <div className="container py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 font-playfair">
          {/* Example 1: Defaults (hover to decrypt) */}
<DecryptedText text="Hover me!" />

{/* Example 2: Customized speed and characters */}
<DecryptedText
text="Customize me"
speed={100}
maxIterations={20}
characters="ABCD1234!?"
className="revealed"
parentClassName="all-letters"
encryptedClassName="encrypted"
/>

{/* Example 3: Animate on view (runs once) */}
<div style={{ marginTop: '4rem' }}>
<DecryptedText
  text="This text animates when in view"
  animateOn="view"
  revealDirection="center"
/>
</div>

          {EquipmentData.map((item) => (
            <motion.div
              variants={SlideLeft(item.delay)}
              initial="hidden"
              whileInView="visible"
              key={item.id}
              className="bg-gray-100 space-y-4 p-6 hover:bg-white rounded-xl hover:shadow-[0_0_22px_0_rgba(0,0,0,0.15)]"
            >
              {item.icon && <div className="text-4xl">{item.icon}</div>}
              <p className="text-2xl font-semibold">{item.title}</p>
              <p className="text-gray-500">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Equipments;
