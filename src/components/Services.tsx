import React from 'react';
import { motion } from 'framer-motion';
import { Utensils, Music, GraduationCap, Building2 } from 'lucide-react';

const Services = () => {
    const services = [
        {
            icon: <Utensils className="w-10 h-10" />,
            title: "Eventos Sociais e Corporativos",
            description: "Aniversários, casamentos e confraternizações. Do buffet completo ao serviço exclusivo de assados, personalizamos o cardápio para o seu público.",
            image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=800&auto=format&fit=crop"
        },
        {
            icon: <GraduationCap className="w-10 h-10" />,
            title: "Cursos e Workshops",
            description: "Aprenda na prática os segredos do fogo. Cursos de American BBQ, Parrilla e Fogo de Chão ministrados pelo próprio Chef André Dibai.",
            image: "https://images.unsplash.com/photo-1594041680534-e8c8cdebd659?q=80&w=800&auto=format&fit=crop"
        },
        {
            icon: <Music className="w-10 h-10" />,
            title: "Festivais e Shows",
            description: "Estrutura robusta para operar em grandes festivais, servindo centenas de pessoas com qualidade e agilidade sem perder o sabor.",
            image: "https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?q=80&w=800&auto=format&fit=crop"
        },
        {
            icon: <Building2 className="w-10 h-10" />,
            title: "Ação Promocional",
            description: "Ativações de marca com experiências gastronômicas. Associe sua empresa aos valores de tradição, qualidade e excelência do churrasco.",
            image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=800&auto=format&fit=crop"
        }
    ];

    return (
        <section id="services" className="py-20 bg-brand-charcoal text-white">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <span className="text-brand-orange font-bold tracking-widest uppercase text-sm block mb-2">Nossos Serviços</span>
                    <h2 className="text-4xl md:text-5xl font-heading font-bold">O QUE OFERECEMOS</h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="group relative h-[400px] overflow-hidden rounded-sm cursor-pointer"
                        >
                            {/* Background Image */}
                            <div className="absolute inset-0">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                                />
                                <div className="absolute inset-0 bg-brand-black/70 group-hover:bg-brand-black/40 transition-colors duration-500"></div>
                            </div>

                            {/* Content */}
                            <div className="relative z-10 h-full flex flex-col justify-end p-6 border border-white/10 group-hover:border-brand-orange/50 transition-colors duration-500">
                                <div className="translate-y-4 group-hover:-translate-y-2 transition-transform duration-500">
                                    <div className="text-brand-orange mb-4 opacity-80 group-hover:opacity-100 transition-opacity">
                                        {service.icon}
                                    </div>
                                    <h3 className="text-xl font-heading font-bold mb-3 group-hover:text-brand-gold transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-300 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                        {service.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
