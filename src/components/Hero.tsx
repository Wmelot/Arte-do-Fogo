
import { motion } from 'framer-motion';
import { ChevronDown, MessageCircle } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
            {/* Background Image / Overlay */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/50 to-brand-black/30 z-10"></div>
                <img
                    src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1920&auto=format&fit=crop"
                    alt="Churrasco sendo preparado em fogo alto"
                    className="w-full h-full object-cover opacity-60 scale-105 animate-slow-zoom"
                />
            </div>

            {/* Logo Watermark */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 opacity-5 pointer-events-none">
                <img src="/img/logo-vector.png" alt="" className="w-[600px] max-w-[90vw] object-contain invert grayscale" />
            </div>

            <div className="container-custom relative z-20 text-center px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="block text-brand-orange font-bold tracking-[0.3em] text-sm md:text-base mb-4">
                        EST. 2018 &bull; BELO HORIZONTE
                    </span>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold mb-6 leading-tight">
                        BBQ - Arte do Fogo <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-gold text-[0.7em]">Eventos e Buffet de fogo</span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-gray-300 text-lg md:text-xl mb-10 leading-relaxed font-light">
                        Especialistas em <strong>American BBQ</strong> e <strong>Fogo de Chão</strong>.
                        Levamos uma experiência gastronômica completa e premium para você.
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                        <a href="#contact" className="btn-primary flex items-center gap-2 group">
                            <MessageCircle className="w-5 h-5" />
                            Solicitar Orçamento
                        </a>
                        <a href="#about" className="btn-outline">
                            Conheça os Assadores
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-gray-400"
            >
                <span className="text-[10px] tracking-widest uppercase">Descubra</span>
                <ChevronDown className="w-6 h-6 animate-bounce" />
            </motion.div>
        </section>
    );
};

export default Hero;
