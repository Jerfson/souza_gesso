import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';

export default function CTA() {
  return (
    <section id="contato" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-amber-500"></div>
      
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-amber-400 rounded-full opacity-50 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-amber-600 rounded-full opacity-50 blur-3xl"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Pronto para transformar seu ambiente?
          </h2>
          <p className="text-amber-50 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Entre em contato agora mesmo e solicite um orçamento sem compromisso. Nossa equipe está pronta para atender seu projeto com a máxima excelência.
          </p>
          
          <a 
            href="https://wa.me/559884832765" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-full font-bold text-lg transition-transform hover:scale-105 shadow-xl"
          >
            <MessageCircle size={24} />
            Solicitar Orçamento via WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
