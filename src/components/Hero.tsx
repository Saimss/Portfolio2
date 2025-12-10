import { Zap, Trophy, Target, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-yellow-400 via-red-600 to-green-500"></div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <div className="flex items-center justify-center gap-4 mb-6 animate-bounce">
          <Trophy className="w-8 h-8 text-yellow-400" />
          <Zap className="w-8 h-8 text-red-500" />
          <Target className="w-8 h-8 text-blue-400" />
          <Sparkles className="w-8 h-8 text-green-400" />
        </div>

        <h1 className="text-6xl md:text-8xl font-black mb-6 bg-gradient-to-r from-blue-400 via-blue-300 via-blue-500 to-green-400 bg-clip-text text-transparent animate-pulse">
          HI THERE!
        </h1>

        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Full Stack Developer
        </h2>

        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
          Building legendary digital experiences with the speed of F1,
          the strategy of cricket, the precision of champions,
          and the evolution of a master trainer
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="px-8 py-4 bg-gradient-to-r from-blue-900 to-blue-800 text-white font-bold rounded-lg shadow-lg hover:shadow-blue-500/50 hover:scale-105 transition-all duration-300 border-2 border-yellow-400"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white font-bold rounded-lg shadow-lg hover:shadow-red-500/50 hover:scale-105 transition-all duration-300"
          >
            Get in Touch
          </a>
        </div>

        {/* <div className="mt-16 flex items-center justify-center gap-8 text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-blue-500 animate-pulse"></div>
            <span>Warriors Spirit</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-yellow-400 animate-pulse"></div>
            <span>Champion Mindset</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-600 animate-pulse"></div>
            <span>Racing Speed</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
            <span>Strategic Play</span>
          </div>
        </div> */}
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
