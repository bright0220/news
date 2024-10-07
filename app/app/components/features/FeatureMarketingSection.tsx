import React from 'react';
import { motion } from 'framer-motion';
import { FaBullseye, FaUsers, FaChartLine, FaRocket } from 'react-icons/fa';
import Link from 'next/link';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  value: string;
}

const FeatureCard: React.FC<{ feature: Feature, index: number }> = ({ feature, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.1 * index }}
    className="rounded-xl p-6 transform hover:scale-105 transition-transform duration-300"
  >
    <div className="flex items-center mb-3">
      <div className="bg-primary-100 rounded-full p-2 mr-3">{feature.icon}</div>
      <h3 className="text-lg font-bold text-gray-900">{feature.title}</h3>
    </div>
    <p className="text-sm text-gray-600 mb-2">{feature.description}</p>
    <p className="text-sm text-primary-600 font-semibold">{feature.value}</p>
  </motion.div>
);

const FeatureMarketingSection: React.FC = () => {
  const features: Feature[] = [
    {
      icon: <FaBullseye className="text-primary-600 text-3xl" />,
      title: "Tactical Planning",
      description: "Develop data-driven marketing tactics for each campaign.",
      value: "Align strategies with business goals and target personas.",
    },
    {
      icon: <FaUsers className="text-primary-600 text-3xl" />,
      title: "Persona Targeting",
      description: "Create and target specific customer personas for campaigns.",
      value: "Increase relevance and engagement with tailored messaging.",
    },
    {
      icon: <FaChartLine className="text-primary-600 text-3xl" />,
      title: "KPI Tracking",
      description: "Monitor key performance indicators in real-time.",
      value: "Make data-driven decisions to optimize campaign performance.",
    },
    {
      icon: <FaRocket className="text-primary-600 text-3xl" />,
      title: "Strategic Alignment",
      description: "Ensure marketing efforts align with overall business strategy.",
      value: "Maximize ROI and achieve long-term business objectives.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-green-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
            Elevate Your <span className="text-primary-600">Marketing Strategy</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Leverage our comprehensive marketing platform to plan, execute, and measure impactful campaigns across multiple channels.
          </p>
        </motion.div>

        <div className="relative flex flex-col md:flex-row items-center justify-between">
          <div className="absolute inset-0 pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 1000 600" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M0 300C0 300 200 100 500 300C800 500 1000 300 1000 300"
                stroke="rgba(16, 185, 129, 0.2)"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray="20 20"
              />
            </svg>
          </div>

          <div className="md:w-1/3 space-y-6 relative z-10">
            {features.slice(0, 2).map((feature, index) => (
              <FeatureCard key={index} feature={feature} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:w-1/2 my-8 md:my-0 relative z-20"
            whileHover={{
              scale: 1.5,
              zIndex: 30,
              transition: { duration: 0.3 }
            }}
          >
            <img 
              src="/image/MarketingTable.png" 
              alt="Marketing Dashboard" 
              className="w-full rounded-lg shadow-2xl transition-all duration-300 hover:shadow-4xl"
            />
          </motion.div>

          <div className="md:w-1/3 space-y-6 relative z-10">
            {features.slice(2, 4).map((feature, index) => (
              <FeatureCard key={index + 2} feature={feature} index={index + 2} />
            ))}
          </div>
        </div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex justify-center mt-8"
        >
          <Link
            href="/signup"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 transition-colors duration-300 shadow-md hover:shadow-lg"
          >
            Start Your Strategic Marketing Journey
            <FaRocket className="ml-2" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeatureMarketingSection;
