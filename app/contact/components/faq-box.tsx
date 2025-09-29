"use client"

import { useState } from "react"
import { Minus, Plus } from "lucide-react"
import { motion } from "framer-motion"
type FAQ = {
  question: string
  answer: string
}

type Section = {
  title: string
  faqs: FAQ[]
}

const sections: Section[] = [
  {
    title: "General",
    faqs: [
      {
        question: "How can I get in touch with Lead Softwares?",
        answer:
          "At Lead Softwares, we provide a wide range of web and mobile development services including custom software development, web design and development, mobile app development for iOS and Android, UI/UX design, and ongoing maintenance and support.",
      },
      {
        question: "How can I get in touch with Lead Softwares?",
        answer:
          "You can reach us via email at contact@leadsoftwares.com. You can also fill out the contact form on our Contact Us page, and we’ll get back to you as soon as possible.",
      },
      {
        question: "Where is lead Softwares located?",
        answer: "We are based in Multan, Pakistan. However, we work with clients from all around the world. Feel free to contact us regardless of your location!"
      },
      {
        question: "What is your approach to project management?",
        answer:"We follow an agile methodology to ensure flexibility and adaptability throughout the project lifecycle. We collaborate closely with our clients to meet their needs and goals while providing regular updates and feedback."
      },
      {
        question: "How do you ensure the quality of your work?",
        answer:"We have a rigorous quality assurance process that includes code reviews, automated testing, and manual testing to ensure that our solutions meet the highest standards."
      },
    ],
  },
  {
    title: "Services",
    faqs: [
      {
        question: "What is custom software development?",
        answer:
          "Custom software development involves creating tailored software solutions to meet specific business needs. Unlike off-the-shelf software, custom solutions are designed to address unique requirements and challenges.",
      },
      {
        question: "What is the difference between web design and web development?",
        answer:
          "Web design focuses on the visual aspects of a website, including layout, colors, and typography. Web development involves building the functionality and features of the site, such as coding and integrating back-end systems.",
      },
      {
        question: "Do you offer mobile app development services?",
        answer:
          "Yes, we offer mobile app development for both iOS and Android platforms. We build native, hybrid, and cross-platform apps to help you reach your target audience on various devices.",
      },
      {
        question: "What is UI/UX design, and why is it important?",
        answer:
          "UI (User Interface) design focuses on the look and feel of an application, while UX (User Experience) design aims to enhance usability and user satisfaction. Together, they ensure that your application is both attractive and easy to use.",
      },
      {
        question: "Do you provide ongoing maintenance and support for your projects?",
        answer:
          "Yes, we offer ongoing maintenance and support services to ensure that your software or website remains up-to-date, secure, and functional. Our support packages can be customized to fit your specific needs.",
      },

    ],
  },
  {
    title: "About the Team",
    faqs: [
        {
            question:"Who are the members of the Lead Softwares team?",
            answer: "Our team consists of experienced professionals including software developers, web developers, UI/UX designers, project managers, and quality assurance specialists. Each member brings a wealth of knowledge and expertise to deliver top-notch solutions."
        },
         {
            question:"What qualifications do your developers have?",
            answer: "Our developers hold degrees in Computer Science or related fields and have several years of experience in software and web development. Many of them also hold certifications in various technologies and methodologies."
        },
        {
            question: "How do you ensure your team stays updated with the latest technologies?",
            answer: "We encourage continuous learning through workshops, training sessions, and participation in industry conferences. Our team also stays up-to-date by exploring new tools and technologies and engaging with the development community."
        },
        {
            question: "How does Lead Softwares handle team collaboration?",
            answer: "We use collaborative tools and methodologies such as Agile and Scrum to ensure effective communication and teamwork. Regular meetings, feedback sessions, and project management tools help keep everyone aligned on project goals."
        },
        {
            question:"Can I meet the team before starting a project?",
            answer: "Absolutely! We can arrange meetings with key team members to discuss your project requirements, answer your questions, and ensure that we are a good fit for your needs."
        }

    ],
  },
  {
    title: "Skill",
    faqs: [
        {
            question: "What programming languages and technologies does your team specialize in?",
            answer: "Our team is skilled in a variety of programming languages and technologies including JavaScript, TypeScript, Python, Java, PHP, React, Vue.js, Node.js, and various databases like MongoDB and SQL."
        },
        {
            question: "Do you have experience with both front-end and back-end development?",
            answer: "Yes, we have expertise in both front-end and back-end development. Our developers are proficient in creating user interfaces as well as building server-side applications and APIs."
        },
        {
            question: "Are you familiar with cloud services and deployment platforms?",
            answer: "Yes, we have experience with cloud services such as AWS, Google Cloud Platform, and Microsoft Azure. We also handle deployment on platforms like Vercel, Heroku, and Netlify."
        },
        {
            question: "What frameworks and libraries do you use for web development?",
            answer: "We work with a range of frameworks and libraries including React, Next.js, Angular, Vue.js, Express.js, and Django, depending on the project requirements and client preferences."
        },
        {
            question: "Do you offer consulting services for technology and software solutions?",
            answer: "Yes, we provide technology consulting services to help businesses choose the right tools, frameworks, and strategies for their projects. We work with you to understand your needs and recommend the best solutions."
        }
    ],
  },
  {
    title: "Project-Related",
    faqs: [
        {
            question: "How do you determine project costs?",
            answer: "Project costs are determined based on the scope of work, complexity, and estimated time required for development. We provide detailed proposals and quotes after discussing your project requirements."
        },
        {
            question: "What is the typical timeline for a project?",
            answer: "The timeline varies depending on the project’s size and complexity. We work with you to create a project plan with milestones and deadlines. Generally, we provide an estimated timeline during the initial consultation."
        },
        {
            question: "How do you handle changes or additional requests during the project?",
            answer: "We manage changes through a formal change request process. This ensures that all requests are documented, reviewed, and evaluated for impact on the project scope, timeline, and cost."
        },
        {
            question: "How do you ensure the project stays on track and within budget?",
            answer: "We use project management tools and methodologies to track progress, manage resources, and control costs. Regular updates and transparent communication keep you informed and ensure that we stay on track."
        },
        {
            question: "What happens after the project is completed?",
            answer: "After project completion, we provide a comprehensive handover, including documentation and training if needed. We also offer post-launch support and maintenance services to address any issues that may arise."
        }
    ],
  },
]

export default function FAQPage() {
  const [activeSection, setActiveSection] = useState(0)
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div className="bg-bg flex flex-col lg:flex-row py-10 md:py-30 px-6 lg:px-20">
      {/* Sidebar */}
      <motion.aside
      initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true , amount: 0.3}}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      className="lg:w-64 bg-white shadow-md p-4 space-y-2">
        {sections.map((section, i) => (
          <button
            key={i}
            onClick={() => {
              setActiveSection(i)
              setOpenIndex(null)
            }}
            className={`block w-full text-left px-3 py-2 rounded-md transition ${
              activeSection === i
                ? "text-blue-600 font-medium bg-blue-50"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            {section.title}
          </button>
        ))}
      </motion.aside>

      {/* Content */}
      <motion.main
      initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true , amount: 0.3}}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      className="flex-1 py-4 lg:py-0 lg:p-8">
        <div className="space-y-4">
          {sections[activeSection].faqs.length > 0 ? (
            sections[activeSection].faqs.map((faq, i) => {
              const isOpen = openIndex === i
              return (
                <div
                  key={i}
                  className="rounded-lg bg-white shadow-sm overflow-hidden"
                >
                  <button
                    className="w-full flex items-center gap-3 px-4 py-3 text-left"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                  >
                    {isOpen ? (
                      <Minus className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    ) : (
                      <Plus className="w-5 h-5 text-gray-600 flex-shrink-0" />
                    )}
                    <span className="font-semibold text-gray-900">
                      {faq.question}
                    </span>
                  </button>
                  <div
                    className={`px-4 pb-4 text-gray-600 text-sm leading-relaxed transition-all duration-400 ease-in ${
                      isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                    } overflow-hidden`}
                  >
                    {faq.answer}
                  </div>
                </div>
              )
            })
          ) : (
            <p className="text-gray-400 italic">
              No FAQs available for this section yet.
            </p>
          )}
        </div>
      </motion.main>
    </div>
  )
}
