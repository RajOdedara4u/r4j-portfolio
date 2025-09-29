import React from "react";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    company: "SK iTPRO",
    location: "Rajkot, Gujarat, India",
    duration: "Apr 2025 - Present · 6 mos",
    title: "Web Developer",
    type: "Full-time · Hybrid",
    skills: ["MERN Stack"],
  },
  {
    company: "SK iTPRO",
    location: "Rajkot, Gujarat, India",
    duration: "Jan 2025 - Mar 2025 · 3 mos",
    title: "Web Developer (Trainee)",
    type: "On-site",
    skills: ["React.js", "React Redux", "+6 skills"],
  },
  {
    company: "Unified Mentor",
    location: "Junagadh, Gujarat, India",
    duration: "Jul 2024 - Jul 2024 · 1 mo",
    title: "Web Developer (Internship)",
    type: "Remote",
    description:
      "Developed a Weather App with real-time updates using API integration.",
    skills: ["CSS", "React.js", "+1 skill"],
  },
];
const ExperienceSection=()=> {
  return (
    <section className="bg-[#44266c] text-[#DCCFED] py-12 px-6 md:px-16 lg:px-24">
      <h2 className="text-3xl font-bold mb-10 text-center">Experience</h2>
      <div className="relative border-l-4 rounded-[10%] border-[#DCCFED] ml-6">
        {experiences.map((exp, index) => (
          <div key={index} className="mb-10 ml-6 relative">
            <span className="absolute -left-9 flex items-center justify-center w-10 h-10 bg-[#DCCFED] text-[#44266c] rounded-full shadow-lg">
              <Briefcase size={20} />
            </span>
            <div className="bg-[#5a3689] p-5 rounded-2xl shadow-md hover:shadow-xl transition-all">
              <h3 className="text-xl font-semibold">{exp.title}</h3>
              <p className="text-sm italic mb-2">{exp.company} · {exp.type}</p>
              <p className="text-sm">{exp.location}</p>
              <p className="text-sm mb-3">{exp.duration}</p>
              {exp.description && (
                <p className="text-sm mb-3">{exp.description}</p>
              )}
              <div className="flex flex-wrap gap-2 mt-2">
                {exp.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="bg-[#DCCFED] text-[#44266c] text-xs px-3 py-1 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ExperienceSection