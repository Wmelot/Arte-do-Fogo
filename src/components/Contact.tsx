import React from 'react';
import { Phone, Mail, Instagram, MapPin, MessageCircle } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = React.useState({
        name: '',
        phone: '',
        type: 'Churrasco em Domicílio',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const { name, phone, type, message } = formData;

        const subject = `Solicitação de Orçamento - ${name}`;
        const body = `Nome: ${name}%0D%0ATelefone: ${phone}%0D%0ATipo de Evento: ${type}%0D%0AMensagem: ${message}`;

        window.location.href = `mailto:andredibai.advocacia@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    return (
        <section id="contact" className="py-20 bg-brand-charcoal border-t border-white/5">
            <div className="container-custom grid md:grid-cols-2 gap-16">
                {/* Contact Info */}
                <div>
                    <span className="text-brand-orange font-bold tracking-widest uppercase text-sm block mb-2">Fale Conosco</span>
                    <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-8">
                        VAMOS PLANEJAR SEU <br />
                        <span className="text-brand-orange">PRÓXIMO CHURRASCO?</span>
                    </h2>
                    <p className="text-gray-400 mb-10 leading-relaxed text-lg">
                        Entre em contato para solicitar um orçamento personalizado, agendar um curso ou tirar dúvidas sobre nossos eventos.
                    </p>

                    <div className="flex flex-col gap-6">
                        <div className="flex items-start gap-4">
                            <div className="bg-brand-orange/10 p-3 rounded-full text-brand-orange">
                                <Phone className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="font-heading font-bold text-lg text-white">Telefones</h4>
                                <p className="text-gray-400 hover:text-brand-orange transition-colors"><a href="tel:+5531992760646">+55 31 99276-0646</a></p>
                                <p className="text-gray-400 hover:text-brand-orange transition-colors"><a href="tel:+5531993465023">+55 31 99346-5023</a></p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="bg-brand-orange/10 p-3 rounded-full text-brand-orange">
                                <Mail className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="font-heading font-bold text-lg text-white">Email</h4>
                                <p className="text-gray-400 hover:text-brand-orange transition-colors">
                                    <a href="mailto:andredibai.advocacia@gmail.com">andredibai.advocacia@gmail.com</a>
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="bg-brand-orange/10 p-3 rounded-full text-brand-orange">
                                <MessageCircle className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="font-heading font-bold text-lg text-white">WhatsApp</h4>
                                <p className="text-gray-400 text-sm mb-2">Clique para iniciar uma conversa:</p>
                                <div className="flex gap-2">
                                    <a href="https://wa.me/5531992760646" target="_blank" rel="noreferrer" className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white text-sm font-bold rounded-sm transition-colors">
                                        Falar com André
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="bg-brand-orange/10 p-3 rounded-full text-brand-orange">
                                <MapPin className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="font-heading font-bold text-lg text-white">Localização</h4>
                                <p className="text-gray-400">Belo Horizonte, MG e Região</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Form */}
                <div className="bg-brand-black p-8 rounded-lg border border-white/5">
                    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="name" className="block text-xs uppercase tracking-widest text-gray-500 mb-1">Nome Completo</label>
                            <input
                                type="text"
                                id="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full bg-brand-charcoal border border-white/10 p-4 text-white focus:border-brand-orange focus:outline-none transition-colors rounded-sm"
                                placeholder="Seu nome"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="phone" className="block text-xs uppercase tracking-widest text-gray-500 mb-1">Telefone / WhatsApp</label>
                            <input
                                type="text"
                                id="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full bg-brand-charcoal border border-white/10 p-4 text-white focus:border-brand-orange focus:outline-none transition-colors rounded-sm"
                                placeholder="(31) 99999-9999"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="type" className="block text-xs uppercase tracking-widest text-gray-500 mb-1">Tipo de Evento</label>
                            <select
                                id="type"
                                value={formData.type}
                                onChange={handleChange}
                                className="w-full bg-brand-charcoal border border-white/10 p-4 text-white focus:border-brand-orange focus:outline-none transition-colors rounded-sm"
                            >
                                <option>Churrasco em Domicílio</option>
                                <option>Corporativo</option>
                                <option>Curso/Workshop</option>
                                <option>Festival/Show</option>
                                <option>Outro</option>
                            </select>
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-xs uppercase tracking-widest text-gray-500 mb-1">Mensagem</label>
                            <textarea
                                id="message"
                                rows={4}
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full bg-brand-charcoal border border-white/10 p-4 text-white focus:border-brand-orange focus:outline-none transition-colors rounded-sm"
                                placeholder="Conte mais sobre seu evento (data, número de pessoas, local, etc)"
                                required
                            ></textarea>
                        </div>

                        <button type="submit" className="btn-primary w-full mt-2">Enviar via Email</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
