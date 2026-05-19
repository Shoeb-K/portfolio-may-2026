import { motion } from 'framer-motion';

const experiences = [
  {
    company: "Quadzero",
    role: "Software Developer",
    period: "Jan 2024 - Present",
    location: "Mumbai, India",
    highlights: [
      "Led end-to-end backend development of a multi-application platform (Admin, Supervisor, User), enabling role-based workflows and hierarchical access control.",
      "Architected scalable serverless infrastructure on AWS (Lambda, API Gateway, DynamoDB), enabling event-driven processing using SQS, SNS, and Step Functions.",
      "Designed an event-driven pipeline using DynamoDB Streams, Lambda, and SQS to trigger APIs and handle failures via DLQs with email alerts.",
      "Improved system performance by 30% through asynchronous processing, database optimization, and service decoupling."
    ]
  }
];

export default function Experience() {
  return (
    <section className="px-4 md:px-12 py-20 border-b-2 border-brutal bg-[#F5F5F5]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-12 flex items-center gap-4">
          <span className="bg-primary w-4 h-4 inline-block border-brutal" />
          Experience
        </h2>

        <div className="space-y-12">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-background border-brutal shadow-brutal p-6 md:p-8 hover:-translate-y-1 transition-transform"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between mb-6 gap-4">
                <div>
                  <h3 className="text-2xl font-bold">{exp.role}</h3>
                  <div className="text-xl font-mono mt-1 font-semibold">{exp.company}</div>
                </div>
                <div className="text-right">
                  <div className="font-mono bg-foreground text-background px-3 py-1 inline-block border-brutal font-bold text-sm">
                    {exp.period}
                  </div>
                  <div className="text-sm font-medium mt-2">{exp.location}</div>
                </div>
              </div>

              <ul className="space-y-3 font-medium">
                {exp.highlights.map((highlight, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-primary mt-1">▹</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
