
import { motion } from 'framer-motion';
import { Flame, ChefHat, Award, Utensils } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-20 md:py-32 bg-brand-black relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-orange/5 blur-[120px] rounded-full pointing-events-none"></div>

            <div className="container-custom relative">
                {/* Section Watermark */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 opacity-[0.03] pointer-events-none">
                    <img src="/img/logo-vector.png" alt="" className="w-[600px] max-w-[90%] object-contain grayscale invert brightness-200" />
                </div>
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <span className="w-12 h-[2px] bg-brand-orange"></span>
                        <span className="text-brand-orange font-bold tracking-widest uppercase text-sm">Quem Somos</span>
                        <span className="w-12 h-[2px] bg-brand-orange"></span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-heading font-bold leading-tight">
                        CONHEÇA OS <span className="text-brand-orange">ASSADORES</span>
                    </h2>
                </motion.div>

                {/* Chef 1: André Dibai */}
                <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
                    {/* Left: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative z-10"
                    >
                        <h3 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                            ANDRÉ <span className="text-brand-orange">DIBAI</span>
                        </h3>
                        <p className="text-gray-400 leading-relaxed mb-6 text-lg">
                            Com <strong>mais de 10 anos de experiência</strong>, André Dibai transformou sua paixão pelo fogo em uma assinatura culinária única.
                        </p>
                        <p className="text-gray-400 leading-relaxed mb-10">
                            Especialista em <strong>American BBQ</strong> e técnicas ancestrais de <strong>Fogo de Chão</strong>, ele não serve apenas comida; ele entrega uma performance gastronômica que cativa todos os sentidos.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                            {[
                                { icon: <ChefHat className="w-8 h-8 text-brand-orange mb-3" />, label: "American BBQ" },
                                { icon: <Flame className="w-8 h-8 text-brand-orange mb-3" />, label: "Fogo de Chão" },
                                { icon: <Utensils className="w-8 h-8 text-brand-orange mb-3" />, label: "Churrasco Tradicional" },
                                { icon: <Award className="w-8 h-8 text-brand-orange mb-3" />, label: "Premium BBQ" },
                                { icon: <Flame className="w-8 h-8 text-brand-orange mb-3" />, label: "Parrilla Argentina" },
                                { icon: <ChefHat className="w-8 h-8 text-brand-orange mb-3" />, label: "Pit Smoker" },
                            ].map((item, index) => (
                                <div key={index} className="flex flex-col items-start p-4 bg-white/5 rounded-sm border border-white/5 hover:border-brand-orange/30 transition-colors">
                                    {item.icon}
                                    <span className="font-heading font-medium text-sm text-gray-200">{item.label}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right: Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="aspect-[3/4] rounded-sm overflow-hidden relative group">
                            <img
                                src="/img/andre-dibai-new.jpg"
                                alt="André Dibai"
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent opacity-80"></div>
                            <div className="absolute bottom-8 left-8 right-8">
                                <blockquote className="text-xl font-heading italic text-white mb-4">
                                    "O fogo é o ingrediente principal. Dominá-lo é o que transforma o corte em arte."
                                </blockquote>
                                <div className="w-16 h-[2px] bg-brand-orange mb-2"></div>
                                <p className="text-sm tracking-widest uppercase font-bold text-brand-gold">André Dibai</p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Chef 2: Luís Otávio */}
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    {/* Left: Image (Order Changes on Desktop) */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative order-2 md:order-1"
                    >
                        <div className="aspect-[3/4] rounded-sm overflow-hidden relative group">
                            <img
                                src="/img/luis-otavio.jpg"
                                alt="Luís Otávio"
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent opacity-80"></div>
                            <div className="absolute bottom-8 left-8 right-8">
                                <blockquote className="text-xl font-heading italic text-white mb-4">
                                    "Churrasco é tradição e técnica. Cada detalhe importa para o sabor perfeito."
                                </blockquote>
                                <div className="w-16 h-[2px] bg-brand-orange mb-2"></div>
                                <p className="text-sm tracking-widest uppercase font-bold text-brand-gold">Luís Otávio</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative z-10 order-1 md:order-2"
                    >
                        <h3 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                            LUÍS <span className="text-brand-orange">OTÁVIO</span>
                        </h3>
                        <p className="text-gray-400 leading-relaxed mb-6 text-lg">
                            Sócio e Assador com <strong>mais de 15 anos de experiência</strong>. Luís Otávio é uma autoridade quando o assunto é churrasco premium.
                        </p>
                        <p className="text-gray-400 leading-relaxed mb-10">
                            Especialista em <strong>Pit Smoker</strong> e grandes operações de assados, ele combina técnica apurada com a paixão pela gastronomia para entregar resultados impecáveis em cada evento.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                            {[
                                { icon: <ChefHat className="w-8 h-8 text-brand-orange mb-3" />, label: "Pit Smoker" },
                                { icon: <Award className="w-8 h-8 text-brand-orange mb-3" />, label: "Premium BBQ" },
                                { icon: <Utensils className="w-8 h-8 text-brand-orange mb-3" />, label: "Churrasco Tradicional" },
                                { icon: <ChefHat className="w-8 h-8 text-brand-orange mb-3" />, label: "American BBQ" },
                                { icon: <Flame className="w-8 h-8 text-brand-orange mb-3" />, label: "Fogo de Chão" },
                                { icon: <Flame className="w-8 h-8 text-brand-orange mb-3" />, label: "Parrilla Argentina" },
                            ].map((item, index) => (
                                <div key={index} className="flex flex-col items-start p-4 bg-white/5 rounded-sm border border-white/5 hover:border-brand-orange/30 transition-colors">
                                    {item.icon}
                                    <span className="font-heading font-medium text-sm text-gray-200">{item.label}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>

            </div>
        </section>
    );
};

export default About;
