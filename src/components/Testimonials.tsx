import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Carlos Eduardo",
      role: "Arquiteto",
      content: "Trabalho com a Gesso Premium há anos em meus projetos. A qualidade do acabamento nas sancas e o cumprimento dos prazos são excepcionais. Recomendo de olhos fechados.",
      rating: 5
    },
    {
      name: "Mariana Silva",
      role: "Cliente Residencial",
      content: "Fizeram o rebaixamento de teto e a iluminação da minha sala. A equipe foi super limpa, educada e o resultado final ficou exatamente como eu sonhava. Preço muito justo!",
      rating: 5
    },
    {
      name: "Roberto Alves",
      role: "Empresário",
      content: "Contratamos para fazer as divisórias em drywall do nosso novo escritório. Serviço rápido, sem sujeira excessiva e com um isolamento acústico perfeito para nossas salas de reunião.",
      rating: 5
    }
  ];

  return (
    <section id="depoimentos" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-amber-500 font-bold tracking-wider uppercase text-sm mb-2">Depoimentos</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            O que dizem nossos clientes
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 relative"
            >
              <Quote className="absolute top-6 right-6 text-slate-100" size={48} />
              
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={20} className="fill-amber-500 text-amber-500" />
                ))}
              </div>
              
              <p className="text-slate-600 mb-8 relative z-10 italic">
                "{testimonial.content}"
              </p>
              
              <div>
                <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
                <p className="text-sm text-slate-500">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
