import { Mail, Linkedin, Github, Twitter, MessageSquare, Send } from 'lucide-react';

export default function Contact() {
  const socialLinks = [
    { icon: Github, label: 'GitHub', href: '#', color: 'hover:text-white' },
    { icon: Linkedin, label: 'LinkedIn', href: '#', color: 'hover:text-blue-400' },
    { icon: Twitter, label: 'Twitter', href: '#', color: 'hover:text-blue-400' },
    { icon: Mail, label: 'Email', href: '#', color: 'hover:text-red-400' }
  ];

  return (
    <section className="relative py-32 px-6 bg-black/20" id="contact">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black mb-4 bg-gradient-to-r from-blue-400 via-red-500 to-yellow-400 bg-clip-text text-transparent">
            LET'S TEAM UP
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-blue-600 to-yellow-400 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4 text-lg">Ready to build something legendary together?</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 md:p-12 border border-white/10">
            <div className="flex items-center gap-3 mb-6">
              <MessageSquare className="w-8 h-8 text-yellow-400" />
              <h3 className="text-3xl font-bold text-white">Send a Message</h3>
            </div>

            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-4 bg-gradient-to-r from-blue-600 via-yellow-500 to-red-600 text-white font-bold rounded-lg shadow-lg hover:shadow-yellow-500/50 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-gradient-to-br from-blue-600/20 to-yellow-500/20 backdrop-blur-lg rounded-2xl p-8 md:p-12 border border-white/10">
              <h3 className="text-3xl font-bold text-white mb-4">Connect With Me</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Whether you need a championship-caliber developer for your team,
                want to collaborate on an exciting project, or just want to talk tech
                and sports—I'm always up for it!
              </p>

              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className={`flex items-center gap-3 px-6 py-4 bg-white/10 hover:bg-white/20 rounded-lg border border-white/20 transition-all duration-300 hover:scale-105 text-gray-300 ${link.color}`}
                  >
                    <link.icon className="w-6 h-6" />
                    <span className="font-medium">{link.label}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-red-600/20 to-green-500/20 backdrop-blur-lg rounded-2xl p-8 md:p-12 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-4">Championship Stats</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Response Time</span>
                  <span className="text-white font-bold">&lt; 24 hours</span>
                </div>
                <div className="h-px bg-white/10"></div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Availability</span>
                  <span className="text-green-400 font-bold">Open to opportunities</span>
                </div>
                <div className="h-px bg-white/10"></div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Time Zone</span>
                  <span className="text-white font-bold">UTC -8</span>
                </div>
                <div className="h-px bg-white/10"></div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Collaboration Style</span>
                  <span className="text-yellow-400 font-bold">Team Player</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-white/5 backdrop-blur-lg rounded-full px-8 py-4 border border-white/10">
            <p className="text-gray-400">
              Built with <span className="text-red-500">❤️</span> and championship spirit
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
