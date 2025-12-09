import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';

const Gallery = () => {

    const images = [
        "/img/gallery-new-1.jpg",
        "/img/gallery-new-2.jpg",
        "/img/gallery-new-3.jpg",
        "/img/gallery-new-4.jpg",
        "/img/gallery-new-5.jpg",
    ];

    return (
        <section id="gallery" className="py-20 bg-brand-black overflow-hidden">
            <div className="container-custom mb-20 text-center">
                <div className="flex items-center justify-center gap-2 mb-4">
                    <span className="w-12 h-[2px] bg-brand-orange"></span>
                    <span className="text-brand-orange font-bold tracking-widest uppercase text-sm">Galeria</span>
                    <span className="w-12 h-[2px] bg-brand-orange"></span>
                </div>
                <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                    MOMENTOS <span className="text-brand-orange">DEFUMADOS</span>
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    Um pouco do que rola nos nossos eventos. Carne de verdade, fogo de chão e aquela atmosfera que só o churrasco proporciona.
                </p>
            </div>

            {/* Mosaic Layout */}
            <div className="container-custom">
                <div className="grid grid-cols-12 md:gap-8 auto-rows-[200px] md:auto-rows-[300px]">

                    {/* Image 1: Hero Large */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="col-span-12 md:col-span-7 md:row-span-2 relative group rounded-sm overflow-hidden"
                    >
                        <img src={images[0]} alt="Galeria 1" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0" />
                        <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-transparent to-transparent opacity-60"></div>
                    </motion.div>

                    {/* Image 2: Top Right Overlap */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="col-span-6 md:col-span-5 md:row-span-1 relative z-10 md:mt-24 md:-ml-24 group rounded-sm overflow-hidden shadow-2xl border-4 border-brand-black"
                    >
                        <img src={images[1]} alt="Galeria 2" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0" />
                    </motion.div>

                    {/* Image 3: Middle Left */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="col-span-6 md:col-span-4 md:row-span-1 relative group rounded-sm overflow-hidden"
                    >
                        <img src={images[2]} alt="Galeria 3" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0" />
                    </motion.div>

                    {/* Image 4: Center Tall Overlap */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="col-span-12 md:col-span-3 md:row-span-2 relative z-20 md:-mt-32 shadow-2xl border-4 border-brand-black group rounded-sm overflow-hidden"
                    >
                        <img src={images[3]} alt="Galeria 4" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0" />
                    </motion.div>

                    {/* Image 5: Bottom Right */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="hidden md:block col-span-12 md:col-span-5 md:row-span-1 relative md:-mt-12 group rounded-sm overflow-hidden"
                    >
                        <img src={images[4]} alt="Galeria 5" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0" />
                    </motion.div>
                </div>
            </div>

            <div className="text-center mt-20">
                <a
                    href="https://www.instagram.com/bbqartedofogo/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-brand-orange hover:text-brand-gold transition-colors font-heading text-lg tracking-wide border-b border-brand-orange pb-1"
                >
                    <Instagram className="w-5 h-5" />
                    VEJA MAIS NO INSTAGRAM
                </a>
            </div>
        </section>
    );
};

export default Gallery;
