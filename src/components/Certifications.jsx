import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';

const certificationsList = [
  {
    title: "AWS Cloud Technical Essentials",
    issuer: "Amazon Web Services (AWS)",
    date: "Issued Dec 2023",
    id: "WYGXL4PZNKBE",
    color: "bg-[#FF9900]",
    link: "https://www.coursera.org/account/accomplishments/records/WYGXL4PZNKBE"
  },
  {
    title: "DevOps on AWS Specialization",
    issuer: "Amazon Web Services (AWS)",
    date: "Issued Dec 2023",
    id: "E5LJCMNW52MS",
    color: "bg-[#FF9900]",
    link: "https://www.coursera.org/account/accomplishments/specialization/E5LJCMNW52MS"
  },
  {
    title: "DevOps on AWS: Code, Build, and Test",
    issuer: "Amazon Web Services (AWS)",
    date: "Issued Dec 2023",
    id: "MF2JLNUL3YS6",
    color: "bg-[#FF9900]",
    link: "https://www.coursera.org/account/accomplishments/records/MF2JLNUL3YS6"
  },
  {
    title: "DevOps on AWS: Operate and Monitor",
    issuer: "Amazon Web Services (AWS)",
    date: "Issued Dec 2023",
    id: "K9X3ABVRB5GR",
    color: "bg-[#FF9900]",
    link: "https://www.coursera.org/account/accomplishments/records/K9X3ABVRB5GR"
  },
  {
    title: "DevOps on AWS: Release and Deploy",
    issuer: "Amazon Web Services (AWS)",
    date: "Issued Dec 2023",
    id: "ZZG3QAZ2ESJU",
    color: "bg-[#FF9900]",
    link: "https://www.coursera.org/account/accomplishments/records/ZZG3QAZ2ESJU"
  },
  {
    title: "AWS APAC - Solutions Architecture Job Simulation",
    issuer: "Forage",
    date: "Issued Oct 2023",
    id: "YKGTppZfCmRhzDimn",
    color: "bg-[#FF9900]",
    link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/AWS/kkE9HyeNcw6rwCRGw_AWS%20APAC_myh2jasehxFHPnWa6_1696361416372_completion_certificate.pdf"
  },
  {
    title: "Hands-on Introduction to Linux Commands and Shell Scripting",
    issuer: "IBM",
    date: "Issued Mar 2023",
    id: "QS2U6PHV4M8S",
    color: "bg-[#0F62FE]",
    link: "https://www.coursera.org/account/accomplishments/records/QS2U6PHV4M8S"
  },
  {
    title: "Introduction to Cybersecurity Tools & Cyberattacks",
    issuer: "IBM",
    date: "Issued Mar 2023",
    id: "U8AR3G3WLLSR",
    color: "bg-[#0F62FE]",
    link: "https://www.coursera.org/account/accomplishments/records/U8AR3G3WLLSR"
  },
  {
    title: "SQL for Data Science",
    issuer: "University of California, Davis",
    date: "Issued Mar 2023",
    id: "KKCUJ7WPJ7P6",
    color: "bg-[#002855]",
    link: "https://www.coursera.org/account/accomplishments/records/KKCUJ7WPJ7P6"
  },
  {
    title: "Crash Course on Python",
    issuer: "Google",
    date: "Issued Jan 2023",
    id: "V5SGGJ24JTAH",
    color: "bg-[#4285F4]",
    link: "https://www.coursera.org/account/accomplishments/records/V5SGGJ24JTAH"
  }
];

export default function Certifications() {
  return (
    <div className="px-4 md:px-12 py-16 max-w-6xl mx-auto min-h-[85vh]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        <div className="inline-block bg-secondary text-background px-4 py-2 font-mono font-bold text-sm uppercase tracking-wider border-brutal shadow-brutal">
          Credentials
        </div>
        
        <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">
          Certifications
        </h1>
        
        <p className="max-w-3xl text-lg md:text-xl font-medium border-l-4 border-primary pl-4 py-1">
          A showcase of verified engineering proficiencies. Specialized in cloud orchestration, automated deployment pipelines, infrastructure-as-code, and software design systems.
        </p>

        <hr className="border-t-2 border-foreground my-12" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {certificationsList.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="bg-background border-brutal shadow-brutal flex flex-col justify-between h-full group hover:shadow-brutal-lg transition-all"
            >
              <div className="p-6">
                <div className={`p-2 ${cert.color} text-background border-brutal shadow-brutal inline-block mb-4`}>
                  <Award size={20} />
                </div>
                <h3 className="text-lg font-bold mb-2 leading-tight group-hover:text-primary transition-colors">
                  {cert.title}
                </h3>
                <p className="font-mono text-xs font-bold text-gray-500 mb-1">{cert.issuer}</p>
                <p className="font-mono text-xs font-semibold text-gray-400">{cert.date}</p>
              </div>

              <div className="p-4 border-t-2 border-brutal bg-[#F5F5F5] flex justify-between items-center">
                <span className="font-mono text-xs font-bold text-gray-600">ID: {cert.id}</span>
                <a 
                  href={cert.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-xs font-mono font-bold flex items-center gap-1 text-secondary hover:text-primary transition-colors"
                >
                  Verify <ExternalLink size={12} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
