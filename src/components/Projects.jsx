import { motion } from 'framer-motion';
import { Github } from 'lucide-react';

const projects = [
  {
    title: "Serverless Event-Driven Notification System",
    tech: ["AWS Lambda", "API Gateway", "SQS", "SES", "Python", "Boto3"],
    description: "Developed a serverless event-driven notification system with decoupled architecture. Implemented retry logic with Dead Letter Queues (DLQ) for failure handling.",
    github: "https://github.com/Shoeb-K"
  },
  {
    title: "Scalable Serverless Backend for Multi-Role App",
    tech: ["AWS Lambda", "DynamoDB", "SQS", "AWS CDK", "Python"],
    description: "Architected a serverless backend supporting multi-role access control (RBAC). Built event-driven workflows and developed JWT-based authentication APIs.",
    github: "https://github.com/Shoeb-K"
  },
  {
    title: "Serverless TODO App with CI/CD",
    tech: ["Docker", "Jenkins", "AWS ECS", "Node.js", "React"],
    description: "Developed microservices-based TODO app using Node.js and React on AWS ECS. Automated deployments using CI/CD pipelines and integrated CloudWatch.",
    github: "https://github.com/Shoeb-K"
  }
];

export default function Projects() {
  return (
    <section className="px-4 md:px-12 py-20 border-b-2 border-brutal">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-12 flex items-center gap-4">
          <span className="bg-secondary w-4 h-4 inline-block border-brutal" />
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-background border-brutal shadow-brutal flex flex-col h-full group hover:shadow-brutal-lg transition-all"
            >
              <div className="p-6 flex-grow flex flex-col border-b-2 border-brutal bg-[#F5F5F5] group-hover:bg-[#EBE9E1] transition-colors">
                <h3 className="text-xl font-bold mb-4 line-clamp-2">{project.title}</h3>
                <p className="font-medium text-sm mb-6 flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-xs font-mono font-bold bg-foreground text-background px-2 py-1 border-brutal">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-4 bg-background">
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center gap-2 font-mono font-bold text-sm hover:text-primary transition-colors uppercase tracking-wider"
                >
                  <Github size={18} />
                  View Source
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
