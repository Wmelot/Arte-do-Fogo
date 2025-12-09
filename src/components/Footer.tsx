
import { Flame, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-black py-12 border-t border-white/10">
            <div className="container-custom flex flex-col md:flex-row justify-between items-center gap-8">

                {/* Brand */}
                <div className="flex flex-col items-center md:items-start group">
                    <div className="flex items-center gap-2 mb-2">
                        <Flame className="w-6 h-6 text-brand-orange" />
                        <span className="font-heading text-lg font-bold text-white tracking-widest">ARTE DO FOGO</span>
                    </div>
                    <p className="text-xs text-gray-500 uppercase tracking-widest">Churrasco & Experience</p>
                </div>

                {/* Socials */}
                <div className="flex gap-6">
                    <a href="https://www.instagram.com/bbqartedofogo" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-brand-orange hover:text-white transition-all duration-300">
                        <Instagram size={20} />
                    </a>
                    {/* Placeholder for other socials if added later */}
                    <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-brand-orange hover:text-white transition-all duration-300">
                        <Facebook size={20} />
                    </a>
                </div>

                {/* Copyright */}
                <div className="text-center md:text-right">
                    <p className="text-gray-600 text-sm">© {new Date().getFullYear()} Arte do Fogo.</p>
                    <p className="text-gray-700 text-xs mt-1">Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
