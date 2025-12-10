import { Award, Rocket, Users, Gamepad2 } from 'lucide-react';

export default function About() {
  const attributes = [
    {
      icon: Award,
      title: 'Championship Mentality',
      description: 'Like the Warriors dynasty, I focus on consistent excellence and teamwork',
      color: 'from-blue-500 to-yellow-400'
    },
    {
      icon: Rocket,
      title: 'Maximum Performance',
      description: 'Red Bull Racing precision - every millisecond counts in optimization',
      color: 'from-red-600 to-blue-600'
    },
    {
      icon: Users,
      title: 'Strategic Thinking',
      description: 'Cricket-inspired planning: reading the field, adapting strategies',
      color: 'from-green-500 to-blue-500'
    },
    {
      icon: Gamepad2,
      title: 'Continuous Evolution',
      description: 'Pokemon philosophy - always learning, growing, and evolving skills',
      color: 'from-yellow-400 to-red-500'
    }
  ];

  return (
    <section className="relative py-32 px-6" id="about">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black mb-4 bg-gradient-to-r from-yellow-400 via-red-500 to-blue-500 bg-clip-text text-transparent">
            ABOUT ME
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-yellow-400 to-red-600 mx-auto rounded-full"></div>
        </div>

        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 md:p-12 mb-12 border border-white/10 shadow-2xl">
          <p className="text-xl text-gray-300 leading-relaxed mb-6">
            Hi there, I'm Saiman Ghimire. A passionate developer who brings the <span className="text-blue-400 font-bold">Stephen Curry's Precision</span>,
            the <span className="text-red-500 font-bold">Speed of Max Verstappen</span>,
            the <span className="text-green-400 font-bold">Versitality of AB De Villiers</span>,
            and the <span className="text-yellow-400 font-bold">Evolutionary mindset of a Pokemon trainer</span> to every project.
          </p>
          <p className="text-xl text-gray-300 leading-relaxed">
            My approach combines cutting-edge technology with relentless pursuit of excellence.
            Whether it's building scalable applications, optimizing performance, or crafting beautiful user experiences,
            I bring the energy and dedication of a true champion.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {attributes.map((attr, index) => (
            <div
              key={index}
              className="group bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${attr.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <attr.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">{attr.title}</h3>
              <p className="text-gray-400">{attr.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
