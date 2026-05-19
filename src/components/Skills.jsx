import { motion } from 'framer-motion';

const skills = [
  {
    category: "Languages",
    items: ["Python", "JavaScript", "SQL", "C++"],
    color: "bg-[#FF4500]"
  },
  {
    category: "Cloud & DevOps",
    items: ["AWS Lambda", "API Gateway", "DynamoDB", "SQS", "SNS", "SES", "Docker", "Jenkins", "GitHub Actions"],
    color: "bg-[#2563EB]"
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "REST APIs"],
    color: "bg-[#10B981]"
  },
  {
    category: "Architecture & Tools",
    items: ["Serverless", "Event-Driven", "Microservices", "CI/CD", "CloudWatch", "Prometheus", "Grafana", "Postman", "JIRA"],
    color: "bg-[#8B5CF6]"
  }
];

export default function Skills() {
  return (
    <section className="px-4 md:px-12 py-20 border-b-2 border-brutal bg-[#F5F5F5]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-12 flex items-center gap-4">
          <span className="bg-foreground w-4 h-4 inline-block border-brutal" />
          Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skillGroup, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-background border-brutal shadow-brutal flex flex-col h-full"
            >
              <div className={`p-4 border-b-2 border-brutal ${skillGroup.color} text-background`}>
                <h3 className="text-xl font-bold font-mono uppercase tracking-wider">{skillGroup.category}</h3>
              </div>
              <div className="p-6 flex flex-wrap gap-3 items-start content-start flex-grow">
                {skillGroup.items.map((skill, i) => (
                  <span 
                    key={i} 
                    className="font-mono font-bold text-sm bg-background border-brutal px-3 py-1 hover:-translate-y-1 hover:shadow-brutal transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
