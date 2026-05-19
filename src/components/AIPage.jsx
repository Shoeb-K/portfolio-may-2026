import { motion } from 'framer-motion';
import { Cpu, Terminal, Share2, Layers } from 'lucide-react';
import diagramImage from '../assets/diagram-export-5-19-2026-10_54_31-PM.png';

const agentConcepts = [
  {
    icon: <Cpu className="w-8 h-8" />,
    title: "Autonomous Agentic Workflows",
    desc: "Designing multi-agent systems that utilize recursive reasoning loops, tool-calling capabilities, self-correction strategies, and structured JSON outputs to perform end-to-end tasks with minimal human intervention.",
    tags: ["CrewAI", "AutoGen", "Tool Calling", "ReAct Framework"]
  },
  {
    icon: <Terminal className="w-8 h-8" />,
    title: "Model Context Protocol (MCP)",
    desc: "Building and standardizing custom MCP host/server interfaces to grant LLMs secure, controlled, and direct contextual access to local data files, custom internal APIs, database systems, and secure environments.",
    tags: ["MCP Specification", "API Integration", "Context Injection"]
  },
  {
    icon: <Share2 className="w-8 h-8" />,
    title: "Event-Driven AI Pipelines",
    desc: "Integrating long-running LLM and agent tasks into scalable backend queues (like AWS SQS/SNS). Leveraging SQS for rate-limiting, and managing workflow failures using Dead Letter Queues (DLQs) with automated alerting.",
    tags: ["AWS SQS", "AWS Lambda", "Decoupled Pipelines", "DLQ"]
  },
  {
    icon: <Layers className="w-8 h-8" />,
    title: "Retrieval-Augmented Generation (RAG)",
    desc: "Building dense knowledge-base systems by chunking and indexing complex API docs, codebase hierarchies, and operational manuals using vector search databases to supply agents with pinpoint domain context.",
    tags: ["Vector Embeddings", "Semantic Search", "Knowledge Synthesis"]
  }
];

export default function AIPage() {
  return (
    <div className="px-4 md:px-12 py-16 max-w-6xl mx-auto min-h-[85vh]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        <div className="inline-block bg-primary text-background px-4 py-2 font-mono font-bold text-sm uppercase tracking-wider border-brutal shadow-brutal">
          Specialization
        </div>
        
        <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">
          AI & Agentic Systems
        </h1>
        
        <p className="max-w-3xl text-lg md:text-xl font-medium border-l-4 border-secondary pl-4 py-1">
          Bridge the gap between raw LLM capabilities and reliable enterprise backend systems. I engineer scalable pipelines and autonomous agent systems that communicate seamlessly through decoupled cloud architectures.
        </p>

        <hr className="border-t-2 border-foreground my-12" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {agentConcepts.map((concept, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-background border-brutal shadow-brutal p-6 md:p-8 flex flex-col justify-between group hover:shadow-brutal-lg transition-all"
            >
              <div>
                <div className="p-3 bg-secondary text-background border-brutal shadow-brutal inline-block mb-6 group-hover:bg-primary transition-colors">
                  {concept.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3">{concept.title}</h3>
                <p className="font-medium text-sm text-gray-700 leading-relaxed mb-6">
                  {concept.desc}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {concept.tags.map((tag, i) => (
                  <span key={i} className="text-xs font-mono font-bold bg-foreground text-background px-2.5 py-1 border-brutal">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Conceptual Design Grid of Custom System */}
        <div className="mt-16 bg-[#F5F5F5] border-brutal p-6 md:p-8">
          <h3 className="text-2xl font-bold font-mono uppercase mb-4">Architecture Design: Asynchronous Agent Pipeline</h3>
          <p className="font-medium text-sm text-gray-700 mb-6 max-w-3xl">
            A visual overview of how I orchestrate fail-safe agent systems on cloud infrastructure. By isolating LLM operations into micro-actions triggered by queues, the system is immune to traditional API timeout limitations.
          </p>
          <div className="border-2 border-brutal bg-background shadow-brutal p-2 md:p-4 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all">
            <img 
              src={diagramImage} 
              alt="Architecture Design: Asynchronous Agent Pipeline" 
              className="w-full h-auto object-contain border border-foreground"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
