import { motion } from 'motion/react';
import { MessageCircle, ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        <div className="absolute inset-0 bg-slate-900/70"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-amber-500/20 text-amber-400 text-sm font-semibold tracking-wider mb-6 border border-amber-500/30">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            ORÇAMENTO GRATUITO E SEM COMPROMISSO
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            A Referência em <span className="text-amber-500">Gesso</span> e <span className="text-amber-500">Drywall</span> em Santo Amaro
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Transformamos seu projeto em realidade com acabamento impecável, pontualidade e materiais de alto padrão. Atendimento especializado no Maranhão.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a 
              href="https://wa.me/559884832765" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-amber-500 hover:bg-amber-600 text-white rounded-full font-bold text-lg transition-all flex items-center justify-center gap-2 group shadow-lg shadow-amber-500/20"
            >
              <MessageCircle size={20} />
              Solicitar Orçamento Gratuito
            </a>
            <button 
              onClick={() => document.querySelector('#projetos')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-white/50 hover:border-white hover:bg-white hover:text-slate-900 text-white rounded-full font-bold text-lg transition-all flex items-center justify-center gap-2 group"
            >
              Ver Nossos Projetos
              <ChevronRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </button>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-sm md:text-base text-slate-300">
            <div className="flex text-amber-500 text-lg">
              ★★★★★
            </div>
            <span>Mais de 100 obras entregues com excelência na região</span>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/50"
      >
        <span className="text-sm mb-2 uppercase tracking-widest">Rolar</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }} 
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1"
        >
          <div className="w-1 h-2 bg-amber-500 rounded-full"></div>
        </motion.div>
      </motion.div>
    </section>
  );
}
