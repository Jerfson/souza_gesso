import { Instagram, Facebook, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-8 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="lg:col-span-1">
            <span className="text-2xl font-bold tracking-tighter text-white block mb-4">
              SOUZA<span className="text-amber-500">GESSO</span>
            </span>
            <p className="text-slate-400 mb-6">
              Especialistas em gesso, drywall e acabamentos de alto padrão. Transformando projetos em realidade com qualidade e precisão.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-amber-500 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-amber-500 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Links Rápidos</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="hover:text-amber-500 transition-colors">Início</a></li>
              <li><a href="#sobre" className="hover:text-amber-500 transition-colors">Sobre Nós</a></li>
              <li><a href="#servicos" className="hover:text-amber-500 transition-colors">Serviços</a></li>
              <li><a href="#projetos" className="hover:text-amber-500 transition-colors">Projetos</a></li>
              <li><a href="#depoimentos" className="hover:text-amber-500 transition-colors">Depoimentos</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Serviços</h4>
            <ul className="space-y-3">
              <li><span className="hover:text-amber-500 transition-colors cursor-pointer">Forro de Gesso</span></li>
              <li><span className="hover:text-amber-500 transition-colors cursor-pointer">Paredes em Drywall</span></li>
              <li><span className="hover:text-amber-500 transition-colors cursor-pointer">Sancas e Molduras</span></li>
              <li><span className="hover:text-amber-500 transition-colors cursor-pointer">Divisórias</span></li>
              <li><span className="hover:text-amber-500 transition-colors cursor-pointer">Acabamentos</span></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-amber-500 flex-shrink-0 mt-1" size={20} />
                <span>Rua Boa Esperança, Olho D' Agua<br/>Santo Amaro - MA</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-amber-500 flex-shrink-0" size={20} />
                <span>+55 98 8483-2765</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-amber-500 flex-shrink-0" size={20} />
                <span>contato@souzagesso.com.br</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} Souza Gesso. Todos os direitos reservados.
          </p>
          <p className="text-slate-500 text-sm">
            Desenvolvido com excelência.
          </p>
        </div>
      </div>
    </footer>
  );
}
