import { Code2, Database, Palette, Workflow, Shield, Sparkles } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      icon: Code2,
      title: 'Frontend Mastery',
      color: 'from-blue-500 to-blue-700',
      skills: ['React', 'TypeScript', 'Next.js', 'Vue.js', 'Tailwind CSS', 'Framer Motion']
    },
    {
      icon: Database,
      title: 'Backend Power',
      color: 'from-green-500 to-green-700',
      skills: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'Redis', 'GraphQL']
    },
    {
      icon: Workflow,
      title: 'DevOps Speed',
      color: 'from-red-600 to-red-800',
      skills: ['Docker', 'Kubernetes', 'AWS', 'CI/CD', 'Nginx', 'Monitoring']
    },
    {
      icon: Palette,
      title: 'Design Excellence',
      color: 'from-yellow-400 to-orange-500',
      skills: ['UI/UX', 'Figma', 'Responsive Design', 'Accessibility', 'Animation', 'Branding']
    },
    {
      icon: Shield,
      title: 'Security First',
      color: 'from-purple-600 to-purple-800',
      skills: ['Auth', 'Encryption', 'OWASP', 'Penetration Testing', 'Compliance', 'Best Practices']
    },
    {
      icon: Sparkles,
      title: 'Soft Skills',
      color: 'from-pink-500 to-rose-600',
      skills: ['Leadership', 'Communication', 'Problem Solving', 'Agile', 'Mentoring', 'Strategy']
    }
  ];

  return (
    <section className="relative py-32 px-6" id="skills">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black mb-4 bg-gradient-to-r from-green-400 via-blue-500 to-yellow-400 bg-clip-text text-transparent">
            SKILL ARSENAL
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-green-500 to-blue-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4 text-lg">Evolved and battle-tested abilities</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-105"
            >
              <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                <category.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">{category.title}</h3>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 bg-white/10 hover:bg-white/20 rounded-lg text-sm text-gray-300 border border-white/20 transition-all duration-300 hover:scale-110 hover:text-white cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600/20 via-yellow-500/20 to-red-600/20 backdrop-blur-lg rounded-2xl p-12 border border-white/10">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-white mb-4">The Champion's Edge</h3>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
              Like a championship team, I combine technical excellence with strategic thinking.
              Every project is an opportunity to push boundaries, optimize performance, and deliver legendary results.
              I don't just write code—I craft experiences that win.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                <span className="text-gray-400">5+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <span className="text-gray-400">50+ Projects Delivered</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-600"></div>
                <span className="text-gray-400">99% Client Satisfaction</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="text-gray-400">Always Learning</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
