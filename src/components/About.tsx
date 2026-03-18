import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export default function About() {
  const features = [
    "Mais de 10 anos de experiência",
    "Equipe altamente qualificada",
    "Materiais de primeira linha",
    "Garantia em todos os serviços"
  ];

  return (
    <section id="sobre" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/5] lg:aspect-square">
              <img 
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Profissional trabalhando com gesso" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-amber-500 text-white p-6 rounded-2xl shadow-xl hidden md:block">
              <p className="text-4xl font-bold mb-1">10+</p>
              <p className="text-sm font-medium uppercase tracking-wider">Anos de<br/>Experiência</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-amber-500 font-bold tracking-wider uppercase text-sm mb-2">Sobre a Empresa</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
              Transformando espaços com arte e precisão
            </h3>
            <p className="text-slate-600 text-lg mb-6 leading-relaxed">
              A Souza Gesso é referência em acabamentos e construção a seco em Santo Amaro, Maranhão, e região. Nascemos com a missão de elevar o padrão da construção civil, sendo especialistas em soluções de gesso e drywall, unindo técnica, design e materiais de alta qualidade para entregar resultados que superam expectativas.
            </p>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              Seja um projeto residencial aconchegante ou um espaço corporativo moderno, nossa equipe está preparada para executar desde forros simples até as mais complexas sancas e molduras decorativas.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="text-amber-500 flex-shrink-0" size={24} />
                  <span className="text-slate-800 font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <button 
              onClick={() => document.querySelector('#servicos')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-full font-bold transition-colors"
            >
              Conheça Nossos Serviços
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
