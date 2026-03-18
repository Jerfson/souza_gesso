import { motion } from 'motion/react';
import { Layers, Grid, Square, Maximize, Columns, PaintRoller } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Layers size={32} />,
      title: "Forro de Gesso",
      description: "Instalação de forros lisos, acartonados e removíveis, garantindo um acabamento perfeito e nivelado para qualquer ambiente."
    },
    {
      icon: <Grid size={32} />,
      title: "Drywall",
      description: "Construção de paredes e divisórias em drywall, oferecendo rapidez, limpeza e excelente isolamento termoacústico."
    },
    {
      icon: <Square size={32} />,
      title: "Sancas",
      description: "Sancas abertas, fechadas ou invertidas com iluminação embutida, criando atmosferas sofisticadas e modernas."
    },
    {
      icon: <Maximize size={32} />,
      title: "Molduras",
      description: "Aplicação de molduras decorativas clássicas ou contemporâneas, valorizando a transição entre teto e parede."
    },
    {
      icon: <Columns size={32} />,
      title: "Divisórias",
      description: "Soluções inteligentes para divisão de espaços corporativos ou residenciais, otimizando ambientes com elegância."
    },
    {
      icon: <PaintRoller size={32} />,
      title: "Acabamentos",
      description: "Emassamento, lixamento e preparação completa das superfícies de gesso para receber a pintura final com perfeição."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="servicos" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-amber-500 font-bold tracking-wider uppercase text-sm mb-2">Nossas Especialidades</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Serviços completos em Gesso e Drywall
          </h3>
          <p className="text-slate-600 text-lg">
            Oferecemos uma gama completa de soluções para transformar seu projeto em realidade, sempre com foco na qualidade e durabilidade.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 border border-slate-100 group"
            >
              <div className="w-16 h-16 bg-amber-50 rounded-xl flex items-center justify-center text-amber-500 mb-6 group-hover:bg-amber-500 group-hover:text-white transition-colors duration-300">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h4>
              <p className="text-slate-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
