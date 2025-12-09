import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Instagram, X, ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { galleryData, type GalleryItem } from '../data/galleryData';

const Gallery = () => {
    const categories = Object.keys(galleryData);
    const [activeTab, setActiveTab] = useState(categories[0]);
    const [selectedItem, setSelectedItem] = useState<{ item: GalleryItem; index: number } | null>(null);

    const currentItems = galleryData[activeTab];

    const openLightbox = (item: GalleryItem, index: number) => {
        setSelectedItem({ item, index });
        document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
        setSelectedItem(null);
        document.body.style.overflow = 'auto';
    };

    const navigateLightbox = (direction: 'next' | 'prev') => {
        if (!selectedItem) return;
        const newIndex = direction === 'next'
            ? (selectedItem.index + 1) % currentItems.length
            : (selectedItem.index - 1 + currentItems.length) % currentItems.length;
        setSelectedItem({ item: currentItems[newIndex], index: newIndex });
    };

    return (
        <section id="gallery" className="py-20 bg-brand-black relative min-h-screen">
            <div className="container-custom relative z-10">

                {/* Header */}
                <div className="text-center mb-16">
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <span className="w-12 h-[2px] bg-brand-orange"></span>
                        <span className="text-brand-orange font-bold tracking-widest uppercase text-sm">Galeria</span>
                        <span className="w-12 h-[2px] bg-brand-orange"></span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-white">
                        MOMENTOS <span className="text-brand-orange">DEFUMADOS</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Explore nossos eventos, pratos e bastidores.
                    </p>
                </div>

                {/* Tabs */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveTab(category)}
                            className={`px-6 py-2 rounded-full text-sm font-bold tracking-wider transition-all duration-300 border ${activeTab === category
                                ? 'bg-brand-orange text-white border-brand-orange shadow-[0_0_20px_rgba(255,107,0,0.3)]'
                                : 'bg-transparent text-gray-400 border-white/10 hover:border-brand-orange/50 hover:text-white'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
                >
                    {currentItems.map((item, index) => (
                        <motion.div
                            key={`${activeTab}-${index}`}
                            layoutId={`${activeTab}-${index}`}
                            className="relative group aspect-square overflow-hidden rounded-sm cursor-pointer border border-white/5 bg-white/5"
                            onClick={() => openLightbox(item, index)}
                        >
                            {item.type === 'video' ? (
                                <div className="w-full h-full relative group-hover:scale-105 transition-transform duration-500">
                                    <video src={item.src} className="w-full h-full object-cover opacity-80 group-hover:opacity-100" muted playsInline />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-12 h-12 rounded-full bg-brand-orange/80 flex items-center justify-center backdrop-blur-sm">
                                            <Play className="w-5 h-5 text-white ml-1" fill="currentColor" />
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <img
                                    src={item.src}
                                    alt={`Galeria ${activeTab} ${index + 1}`}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                                    loading="lazy"
                                />
                            )}
                            <div className="absolute inset-0 bg-brand-black/20 group-hover:bg-transparent transition-colors duration-300"></div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Footer Link */}
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
            </div>

            {/* Lightbox */}
            <AnimatePresence>
                {selectedItem && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4"
                        onClick={closeLightbox}
                    >
                        <button
                            className="absolute top-4 right-4 text-white hover:text-brand-orange transition-colors p-2 z-50"
                            onClick={closeLightbox}
                        >
                            <X className="w-8 h-8" />
                        </button>

                        <div
                            className="relative w-full max-w-5xl max-h-[90vh] flex items-center justify-center"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Prev Button */}
                            <button
                                className="absolute left-0 md:-left-12 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors p-2"
                                onClick={() => navigateLightbox('prev')}
                            >
                                <ChevronLeft className="w-10 h-10" />
                            </button>

                            {/* Content */}
                            <motion.div
                                key={selectedItem.item.src}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3 }}
                                className="w-full h-full flex items-center justify-center"
                            >
                                {selectedItem.item.type === 'video' ? (
                                    <video
                                        src={selectedItem.item.src}
                                        controls
                                        autoPlay
                                        className="max-w-full max-h-[85vh] rounded-sm shadow-2xl"
                                    />
                                ) : (
                                    <img
                                        src={selectedItem.item.src}
                                        alt="Zoom"
                                        className="max-w-full max-h-[85vh] object-contain rounded-sm shadow-2xl"
                                    />
                                )}
                            </motion.div>

                            {/* Next Button */}
                            <button
                                className="absolute right-0 md:-right-12 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors p-2"
                                onClick={() => navigateLightbox('next')}
                            >
                                <ChevronRight className="w-10 h-10" />
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Gallery;
