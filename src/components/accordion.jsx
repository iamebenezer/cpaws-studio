import React, { useState } from 'react';
import { FiPlus } from "react-icons/fi";
import { FaMinus } from "react-icons/fa"

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const accordionData = [
    {
      title: 'Web Development',
      content: '- Front-end, Back-end, Full-stack',
    },
    {
      title: 'Graphic Design',
      content: 'Branding, UI/UX',
    },
    {
      title: 'Mobile App Development',
      content: '- Cross-platform (React Native)',
    },
    {
        title: 'Animation',
        content: ` - 2D (cartoons, explainer videos) - Motion Graphics (animations, effects)`,
      },
      {
        title: 'Illustrations',
        content: ' - Digital (vector, raster) - Traditional (watercolor, ink)',
      },
      {
        title: 'Smart Contracts',
        content: 'Creating Smart Contracts, Ethereum, Bnb, etc',
      },
      {
        title:' Decentralized Applications (Dapps)',
        content: 'Building Dapps for web 3 projects'
      },
  ];

  return (
    <div className="w-full  mx-auto p-4">
      {accordionData.map((item, index) => (
        <div key={index} className="border-b w-f border-gray-200">
          <button
            onClick={() => toggleAccordion(index)}
            className="w-full flex justify-between  items-center py-3 text-left text-lg font-nukshock text-[#0F2C5C]"
          >
            {item.title}
            <span
              className={`transform transition-transform duration-300 ${
                activeIndex === index ? <FaMinus/> : ''
              }`}
            >
                <FiPlus/>
            </span>
          </button>
          <div
            className={`overflow-hidden transition-max-height duration-300 ${
              activeIndex === index ? 'max-h-40' : 'max-h-0'
            }`}
          >
            <p className="p-4 text-gray-600 uppercase font-pop">{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
