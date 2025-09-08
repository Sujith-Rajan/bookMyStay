"use client"
import React from "react";
import { motion } from "framer-motion";

type SectionType = {
    title: string;
    content: string;
    delay?: number;
}

const sections = [
  {
    title: "🏡 History of the Farm",
    content: `This land is part of the 128 acres acquired by Late Mani Muriyankal, the great grandfather of the Muriyankal Family, nearly 200 years ago. From this heritage, a 6-acre plot was developed into what is now known as M. FARM.

Earlier, this particular land did not have road access, but thanks to the kind and generous gesture of Dr. George Thomas Muriyankal, it became possible to reach the property.`,
  },
  {
    title: "📍 Location & Accessibility",
    content: `M. FARM is located at the western tip of Lakkattoor village in Kooroppada Panchayath, at the meeting point of Amayannoor and Areepparambu villages.

- 6 km north-west of Pampady
- 7 km east of Manarcad
- 15 km from Tirunakkara, Kottayam
- 3 km deviation from Oravackal – Kannankunnu – Lakkattoor Road (300m from Oravackal Junction)
- 1.5 km west of Kandankavu on the Oravackal–Koorali Road

The farm sits on a hilltop with uneven terrain, shaped into three levels. This terracing allows for water conservation and makes cultivation sustainable even during summer.

The approach road is fully tarred, and inside the property the road up to the residence is tiled, providing excellent accessibility. Road development was made possible with the support of Jose K. Mani M.P., through the fund of Thomas Abraham M.P.`,
  },
  {
    title: "🌱 Vision & Values",
    content: `M. FARM is developed with a focus on:

- Bio-farming practices — minimizing chemicals and using bio-fertilizers.
- Eco-friendly water management — rainwater harvesting, ponds, and terracing for conservation.
- Community involvement — promoting local activities such as bee farming, honey production, and packing local produce.

Our goal is to create a space that combines sustainable agriculture, healthy living, and community-driven growth, while also promoting farm tourism in the near future.`,
  },
];

const Section = ({ title, content, delay }:SectionType) => (
  <motion.section
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    className="bg-gray-50 p-6 md:p-8 rounded-2xl shadow-md hover:shadow-lg transition mb-8"
  >
    <h2 className="text-2xl font-semibold text-gray-800 mb-4">{title}</h2>
    <p className="text-gray-600 leading-relaxed whitespace-pre-line">{content}</p>
  </motion.section>
);

const About = () => {
  return (
    <main className="w-full py-16 px-6 bg-gradient-to-b from-gray-50 to-gray-100">
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="mb-12 text-center"
      >
        <h1 className='text-3xl md:text-4xl font-bold text-gray-500 mb-4 tracking-wider text-center'>
          About Us
        </h1>
        <p className="mt-3 text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
          Learn more about our history, location, and vision for sustainable farming.
        </p>
      </motion.header>

      <div className="max-w-5xl mx-auto grid gap-8">
        {sections.map((sec, idx) => (
          <Section key={idx} {...sec} delay={idx * 0.2} />
        ))}
      </div>
    </main>
  );
};

export default About;
