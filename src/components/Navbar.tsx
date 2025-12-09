import { useState, useEffect } from 'react';
import { Menu, X, Flame } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Os Assadores', href: '#about' },
        { name: 'Serviços', href: '#services' },
        { name: 'Eventos', href: '#events' },
        { name: 'Galeria', href: '#gallery' },
        { name: 'Contato', href: '#contact' },
        { name: 'Cardápio Básico', href: '#basic-menu' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-brand-black/95 backdrop-blur-sm py-4 shadow-lg' : 'bg-transparent py-6'}`}>
            <div className="container-custom flex justify-between items-center">
                {/* Logo */}
                <a href="#" className="flex items-center gap-2 group">
                    <div className="relative">
                        <Flame className="w-8 h-8 text-brand-orange group-hover:text-brand-gold transition-colors duration-300" />
                        <div className="absolute inset-0 bg-brand-orange/20 blur-md rounded-full group-hover:bg-brand-gold/30 transition-colors duration-300"></div>
                    </div>
                    <div className="flex flex-col">
                        <span className="font-heading text-xl font-bold tracking-wider leading-none text-white">ARTE DO FOGO</span>
                        <span className="text-[0.6rem] tracking-[0.2em] text-gray-400 group-hover:text-brand-orange transition-colors duration-300">BBQ & EXPERIENCE</span>
                    </div>
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium tracking-widest text-gray-300 hover:text-brand-orange transition-colors duration-300 relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-brand-orange after:transition-all after:duration-300 hover:after:w-full"
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="#contact"
                        className="px-5 py-2 border border-brand-orange text-brand-orange text-xs font-bold tracking-widest hover:bg-brand-orange hover:text-white transition-all duration-300"
                    >
                        ORÇAMENTO
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white hover:text-brand-orange transition-colors">
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-brand-black border-t border-white/10 overflow-hidden"
                    >
                        <div className="container-custom py-8 flex flex-col gap-6">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-lg font-heading tracking-wider text-gray-300 hover:text-brand-orange transition-colors"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
