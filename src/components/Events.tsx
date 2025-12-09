
import { MapPin, Calendar, ArrowRight } from 'lucide-react';

const Events = () => {
    return (
        <section id="events" className="py-20 relative bg-fixed bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?q=80&w=1920&auto=format&fit=crop')" }}>
            <div className="absolute inset-0 bg-black/80"></div>

            <div className="container-custom relative z-10">
                <div className="bg-brand-black/80 backdrop-blur-md rounded-lg p-8 md:p-12 border-l-4 border-brand-orange max-w-4xl mx-auto">
                    <div className="flex flex-col md:flex-row gap-8 items-center">

                        <div className="flex-1 text-center md:text-left">
                            <span className="inline-block px-3 py-1 bg-brand-orange/20 text-brand-orange text-xs font-bold tracking-widest uppercase mb-4 rounded-sm">
                                Produção Própria
                            </span>
                            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                                CIRCUITO MINEIRO <br /> DE CHURRASCO
                            </h2>
                            <p className="text-gray-300 mb-6 leading-relaxed">
                                Temos orgulho de organizar um dos maiores eventos gastronômicos do estado. O Circuito Mineiro reúne os melhores assadores, música de qualidade e amantes do fogo em uma experiência única.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                                <div className="flex items-center gap-2 text-gray-400 text-sm">
                                    <MapPin className="w-5 h-5 text-brand-orange" />
                                    <span>Edições em todo o estado</span>
                                </div>
                                <div className="flex items-center gap-2 text-gray-400 text-sm">
                                    <Calendar className="w-5 h-5 text-brand-orange" />
                                    <span>Fique ligado na agenda</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex-shrink-0">
                            <a
                                href="https://www.sympla.com.br/evento/circuito-mineiro-de-churrasco-2-edicao-sete-lagoas/3013823?utm_source=ig&utm_medium=social&utm_content=link_in_bio&referrer=l.instagram.com&referrer=l.instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex flex-col items-center justify-center w-40 h-40 bg-brand-orange hover:bg-orange-600 transition-colors rounded-full text-white font-heading font-bold leading-tight group"
                            >
                                <span>PRÓXIMAS</span>
                                <span className="text-xl">DATAS</span>
                                <ArrowRight className="w-6 h-6 mt-2 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Events;
