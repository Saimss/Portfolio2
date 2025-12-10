import { ExternalLink, Github, Zap } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'Speed Demon Test',
      description: 'Test your reflex speeds by comparing yourself to the lightning-fast reactions of F1 drivers. Compete for the best times!',
      tech: ['React', 'Node.js', 'Redis', 'WebSocket'],
      gradient: 'from-red-600 to-blue-600',
      icon: '🏎️'
    },
    {
      title: 'Bingo Battle Royale',
      description: 'Multiplayer bingo game with a competitive environment. Invite your friends and see who can shout BINGO first!',
      tech: ['TypeScript', 'Supabase', 'React', 'Tailwind'],
      gradient: 'from-blue-600 to-yellow-400',
      icon: '🏆'
    },
    {
      title: 'Cricket Tournament Manager',
      description: 'Create a tournament, manage teams, schedule matches, and track scores with cricket-inspired strategic features.',
      tech: ['React', 'TypeScript', 'Supabase', 'PostgreSQL'],
      gradient: 'from-green-500 to-blue-500',
      icon: '🏏'
    },
    {
      title: 'Evolution Tracker Pro',
      description: 'Personal growth and skill development platform. Track your journey from rookie to champion with gamified progression.',
      tech: ['Next.js', 'Supabase', 'Typescript', 'React'],
      gradient: 'from-yellow-400 to-red-500',
      icon: '⚡'
    },
    {
      title: 'DeerNews',
      description: 'All the latest tech news curated for DeerWalkers who want to know what is going on in DeerWalk.',
      tech: [ 'Supabase', 'TypeScript', 'React'],
      gradient: 'from-purple-600 to-pink-500',
      icon: '📰'
    },
    
  ];

  return (
    <section className="relative py-32 px-6 bg-black/20" id="projects">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black mb-4 bg-gradient-to-r from-red-500 via-yellow-400 to-blue-500 bg-clip-text text-transparent">
            LEGENDARY PROJECTS
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-red-600 to-yellow-400 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4 text-lg">Championship-caliber work that makes an impact</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white/5 backdrop-blur-lg rounded-xl overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>

              <div className="p-8">
                <div className="text-5xl mb-4">{project.icon}</div>

                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-yellow-400 group-hover:to-red-500 transition-all duration-300">
                  {project.title}
                </h3>

                <p className="text-gray-400 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300 border border-white/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-all duration-300 border border-white/20">
                    <ExternalLink className="w-4 h-4" />
                    <span>Demo</span>
                  </button>
                  <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-all duration-300 border border-white/20">
                    <Github className="w-4 h-4" />
                    <span>Code</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="group px-8 py-4 bg-gradient-to-r from-yellow-500 to-red-600 text-white font-bold rounded-lg shadow-lg hover:shadow-yellow-500/50 hover:scale-105 transition-all duration-300 inline-flex items-center gap-2">
            <Zap className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
}
