import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/559884832765"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200, damping: 20 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center group"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle size={32} />
      
      {/* Tooltip */}
      <span className="absolute right-full mr-4 bg-slate-900 text-white text-sm font-medium px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Faça um orçamento!
        <span className="absolute top-1/2 -right-1 -translate-y-1/2 border-4 border-transparent border-l-slate-900"></span>
      </span>
      
      {/* Pulse effect */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20"></span>
    </motion.a>
  );
}
