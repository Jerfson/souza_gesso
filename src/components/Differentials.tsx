import { motion } from 'motion/react';
import { Clock, ShieldCheck, Award, ThumbsUp } from 'lucide-react';

export default function Differentials() {
  const items = [
    {
      icon: <Clock size={40} />,
      title: "Atendimento Rápido",
      description: "Agilidade desde o primeiro contato até a entrega final da obra, respeitando rigorosamente os prazos."
    },
    {
      icon: <ShieldCheck size={40} />,
      title: "Qualidade Garantida",
      description: "Utilizamos apenas materiais certificados e técnicas avançadas para um acabamento duradouro."
    },
    {
      icon: <Award size={40} />,
      title: "Profissionais Experientes",
      description: "Nossa equipe é formada por gesseiros e instaladores com anos de prática e constante atualização."
    },
    {
      icon: <ThumbsUp size={40} />,
      title: "Preço Justo",
      description: "Orçamentos transparentes, sem surpresas, oferecendo a melhor relação custo-benefício do mercado."
    }
  ];

  return (
    <section className="py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-amber-500 font-bold tracking-wider uppercase text-sm mb-2">Por que nos escolher?</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Diferenciais que fazem a diferença na sua obra
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-20 h-20 bg-slate-800 rounded-full flex items-center justify-center text-amber-500 mb-6 border border-slate-700">
                {item.icon}
              </div>
              <h4 className="text-xl font-bold mb-3">{item.title}</h4>
              <p className="text-slate-400 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
