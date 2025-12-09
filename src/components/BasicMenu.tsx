import { useState } from 'react';
import { motion } from 'framer-motion';
import { Utensils, Flame, Wheat, Wine } from 'lucide-react';

const BasicMenu = () => {
    const [activeTab, setActiveTab] = useState('churrasco');

    const menuItems = {
        churrasco: {
            title: "Churrasco Completo",
            icon: <Flame className="w-5 h-5" />,
            description: "O autêntico sabor do fogo de chão e parrilla em sua essência.",
            items: [
                { name: "Picanha Angus", detail: "Grelhada na parrilla com sal de parrilla" },
                { name: "Ancho (Ribeye)", detail: "Corte nobre, suculento e marmorizado" },
                { name: "Costela de Chão", detail: "Assada lentamente por 8-10 horas" },
                { name: "Chorizo", detail: "Sabor intenso e gordura lateral" },
                { name: "Sobrecoxa Desossada", detail: "Marinada na cerveja e ervas" },
                { name: "Linguiça Artesanal", detail: "Suína com queijo ou apimentada" }
            ]
        },
        entradas: {
            title: "Entradas & Petiscos",
            icon: <Utensils className="w-5 h-5" />,
            description: "Para começar o evento com o pé direito.",
            items: [
                { name: "Pão de Alho", detail: "Cremoso, feito na brasa" },
                { name: "Queijo Coalho", detail: "Com melaço de cana" },
                { name: "Panceta Pururuca", detail: "Crocante e suculenta" },
                { name: "Legumes na Brasa", detail: "Abobrinha, berinjela, pimentões e cebola" },
                { name: "Coraçãozinho", detail: "Temperado no vinho e mostarda" }
            ]
        },
        guarnicoes: {
            title: "Guarnições",
            icon: <Wheat className="w-5 h-5" />,
            description: "Acompanhamentos que harmonizam perfeitamente.",
            items: [
                { name: "Arroz Carreteiro", detail: "Feito no disco de arado" },
                { name: "Arroz Branco", detail: "Soltinho com alho" },
                { name: "Feijão Tropeiro", detail: "Tradicional mineiro" },
                { name: "Farofa Crocante", detail: "Com bacon e cebola caramelizada" },
                { name: "Vinagrete Especial", detail: "Tomate, cebola, pimentão e ervas" },
                { name: "Salada Verde", detail: "Mix de folhas nobres e tomatinhos" },
                { name: "Maionese de Batata", detail: "Receita clássica da casa" }
            ]
        },
        bebidas: {
            title: "Bebidas (Opcional)",
            icon: <Wine className="w-5 h-5" />,
            description: "Opções para refrescar seu evento.",
            items: [
                { name: "Refrigerantes", detail: "Coca-Cola, Guaraná (Normal/Zero)" },
                { name: "Água", detail: "Com e sem gás" },
                { name: "Cerveja", detail: "Heineken, Spaten ou a combinar" },
                { name: "Sucos Naturais", detail: "Laranja e Limonada Suíça" }
            ]
        }
    };

    return (
        <section id="basic-menu" className="py-20 bg-brand-charcoal border-t border-white/5 relative overflow-hidden">
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
                <svg width="100%" height="100%">
                    <pattern id="pattern-circles" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                        <circle cx="2" cy="2" r="1" className="text-white" fill="currentColor" />
                    </pattern>
                    <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-circles)" />
                </svg>
            </div>

            <div className="container-custom relative z-10 w-full">
                <div className="text-center mb-16">
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <span className="w-12 h-[2px] bg-brand-orange"></span>
                        <span className="text-brand-orange font-bold tracking-widest uppercase text-sm">Nosso Buffet</span>
                        <span className="w-12 h-[2px] bg-brand-orange"></span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
                        CARDÁPIO <span className="text-brand-orange">BÁSICO</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Uma seleção premium dos itens mais solicitados para um churrasco inesquecível. Personalize conforme sua necessidade.
                    </p>
                </div>

                {/* Tabs */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {Object.entries(menuItems).map(([key, value]) => (
                        <button
                            key={key}
                            onClick={() => setActiveTab(key)}
                            className={`flex items-center gap-2 px-6 py-3 rounded-full border transition-all duration-300 ${activeTab === key
                                ? 'bg-brand-orange border-brand-orange text-white'
                                : 'bg-transparent border-white/20 text-gray-400 hover:border-brand-orange hover:text-white'
                                }`}
                        >
                            {value.icon}
                            <span className="font-heading font-bold tracking-wider">{value.title}</span>
                        </button>
                    ))}
                </div>

                {/* Content */}
                <div className="bg-brand-black/50 backdrop-blur-sm rounded-lg border border-white/10 p-8 md:p-12 min-h-[400px]">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="grid md:grid-cols-2 gap-x-12 gap-y-8"
                    >
                        <div className="col-span-full mb-4">
                            <h3 className="text-2xl font-bold text-white mb-2 font-heading flex items-center gap-3">
                                {menuItems[activeTab as keyof typeof menuItems].title}
                            </h3>
                            <p className="text-brand-orange">{menuItems[activeTab as keyof typeof menuItems].description}</p>
                        </div>

                        {menuItems[activeTab as keyof typeof menuItems].items.map((item, index) => (
                            <div key={index} className="flex flex-col border-b border-white/10 pb-4 last:border-0">
                                <span className="text-white font-bold text-lg mb-1">{item.name}</span>
                                <span className="text-gray-500 text-sm">{item.detail}</span>
                            </div>
                        ))}
                    </motion.div>
                </div>

                <div className="text-center mt-12">
                    <a href="#contact" className="btn-primary inline-flex items-center gap-2">
                        <Utensils className="w-5 h-5" />
                        Quero este Cardápio
                    </a>
                    <p className="text-gray-500 mt-4 text-sm">
                        * Itens sujeitos a alteração conforme disponibilidade e sazonalidade.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default BasicMenu;
