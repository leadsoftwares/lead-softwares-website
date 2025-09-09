"use client";
import React, { useState } from "react";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const [openFAQId, setOpenFAQId] = useState<number>(0);

  const faqItems: FAQItem[] = [
    {
      id: 1,
      question: "What do I need to know before contacting you?",
      answer:
        "The most important thing to know is what do you want to accomplish. Why do I need this software? What for? What should it do? Having a clear vision in mind is crucial when ordering a software application.",
    },
    {
      id: 2,
      question: "How much time will it take for you to make my app?",
      answer:
        "Development time varies based on complexity, features, and requirements. Simple apps typically take 2-4 weeks, while complex applications can take 2-6 months or more. We'll provide a detailed timeline after discussing your specific needs.",
    },
    {
      id: 3,
      question: "Should I create a mobile or a web app?",
      answer:
        "The choice depends on your target audience and use case. Web apps are accessible across all devices through browsers and are cost-effective. Mobile apps offer better performance and device integration but require separate development for iOS and Android. We can help you decide based on your specific requirements.",
    },
    {
      id: 4,
      question: "Do you have any reviews from satisfied customers?",
      answer:
        "Yes, we have numerous satisfied clients who have provided positive feedback about our work. We can share testimonials and case studies upon request. Our portfolio includes successful projects across various industries with measurable results and client satisfaction.",
    },
    {
      id: 5,
      question: "How do you guarantee product quality?",
      answer:
        "We ensure quality through rigorous testing, code reviews, and following industry best practices. Our development process includes quality assurance at every stage, automated testing, and thorough documentation. We also provide post-launch support to address any issues that may arise.",
    },
    {
      id: 6,
      question: "What happens after you finish my app?",
      answer:
        "After completion, we provide comprehensive documentation, source code, and deployment assistance. We offer ongoing maintenance and support packages, help with app store submissions, and provide training for your team. We're also available for future updates and enhancements.",
    },
  ];

  const toggleFAQ = (id: number) => {
    setOpenFAQId(openFAQId === id ? 0 : id);
  };

  return (
    <div className="mx-auto mt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {faqItems.map((item) => {
          const isOpen = openFAQId === item.id;
          return (
            <div
              key={item.id}
              className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <button
                onClick={() => toggleFAQ(item.id)}
                className="w-full p-6 text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-gray-800 font-bold text-base leading-relaxed pr-4">
                    {item.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {isOpen ? (
                      <svg
                        className="w-5 h-5 text-blue-600 transform transition-all duration-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M20 12H4"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="w-5 h-5 text-gray-600 transform transition-transform duration-200"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 4v16m8-8H4"
                        />
                      </svg>
                    )}
                  </div>
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-6 mt-4">
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FAQ;
