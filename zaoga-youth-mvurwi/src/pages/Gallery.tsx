import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, Calendar } from 'lucide-react';

// 1. THE MAGIC: Auto-fetch all images in the gallery folder
// This tells Vite to grab all jpg, jpeg, and png files at build time
const imageModules = import.meta.glob('/public/images/*.{png,jpg,jpeg,JPG,JPEG,PNG}', { eager: true, as: 'url' });

// 2. Format the data dynamically
const galleryData = Object.keys(imageModules).map((filePath, index) => {
  const url = imageModules[filePath] as string;
  
  // Extract the filename from the path (e.g., "2023-camp-fire.jpg")
  const fileName = filePath.split('/').pop() || '';
  
  // Try to find a year (e.g., 2023, 2024) in the filename using Regex
  const yearMatch = fileName.match(/(20\d{2})/);
  const year = yearMatch ? yearMatch[0] : 'Other'; // Defaults to 'Other' if no year is in the name

  // Randomly assign larger spans to some images to keep the creative bento-box look
  const isLarge = index % 5 === 0; // Every 5th image is large
  const isTall = index % 7 === 0;  // Every 7th image is tall

  let span = 'col-span-1 row-span-1';
  if (isLarge) span = 'md:col-span-2 md:row-span-2';
  else if (isTall) span = 'md:row-span-2';

  return {
    id: index,
    year: year,
    src: url,
    title: `Memory ${index + 1}`, // Generic title
    span: span,
  };
});

const Gallery = () => {
  const [activeYear, setActiveYear] = useState('All');
  const [selectedImage, setSelectedImage] = useState<typeof galleryData[0] | null>(null);

  // 3. Dynamically generate filter tabs based on the years found in the filenames
  const availableYears = useMemo(() => {
    const years = new Set(galleryData.map(img => img.year));
    // Sort years descending (newest first), push 'Other' to the end
    const sortedYears = Array.from(years).sort((a, b) => {
      if (a === 'Other') return 1;
      if (b === 'Other') return -1;
      return parseInt(b) - parseInt(a);
    });
    return ['All', ...sortedYears];
  }, []);

  // Filter the images based on the selected tab
  const filteredImages = activeYear === 'All' 
    ? galleryData 
    : galleryData.filter(img => img.year === activeYear);

  return (
    <div className="bg-brand-white min-h-screen pt-36 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-12">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold text-brand-primary mb-4"
          >
            Memories in <span className="text-yellow-500">Motion</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            className="text-gray-600 max-w-2xl mx-auto text-lg"
          >
            A visual journey of our youth ministry through the years.
          </motion.p>
        </div>

        {/* --- DYNAMIC FILTER TABS (Years) --- */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12"
        >
          {availableYears.map((year) => (
            <button
              key={year}
              onClick={() => setActiveYear(year)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 flex items-center gap-2
                ${activeYear === year 
                  ? 'bg-brand-primary text-yellow-400 shadow-lg scale-105' 
                  : 'bg-white text-gray-600 hover:bg-gray-100 shadow-sm'
                }`}
            >
              {year !== 'All' && <Calendar size={16} />}
              {year}
            </button>
          ))}
        </motion.div>

        {/* --- AUTO-GENERATED GALLERY GRID --- */}
        <motion.div layout className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[150px] md:auto-rows-[250px]">
          <AnimatePresence>
            {filteredImages.map((img) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, type: "spring" }}
                key={img.id}
                onClick={() => setSelectedImage(img)}
                className={`relative group overflow-hidden rounded-2xl cursor-pointer bg-gray-200 ${img.span}`}
              >
                <img 
                  src={img.src} 
                  alt={img.title} 
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/90 via-brand-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <ZoomIn className="text-yellow-400 mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300" size={28} />
                  <span className="text-yellow-300 font-bold text-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                    {img.year}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* --- LIGHTBOX MODAL --- */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 cursor-zoom-out"
            >
              <button onClick={() => setSelectedImage(null)} className="absolute top-6 right-6 text-white hover:text-yellow-400 bg-white/10 rounded-full p-2 backdrop-blur-md transition-colors">
                <X size={32} />
              </button>

              <motion.div 
                initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }}
                onClick={(e) => e.stopPropagation()} 
                className="relative max-w-5xl w-full max-h-[85vh] flex flex-col items-center"
              >
                <img src={selectedImage.src} alt="Enlarged Memory" className="w-full h-full object-contain rounded-lg shadow-2xl" style={{ maxHeight: '75vh' }} />
                <div className="mt-6 text-center">
                  <span className="inline-block px-4 py-1 rounded-full bg-yellow-500 text-brand-primary font-bold text-sm">
                    {selectedImage.year}
                  </span>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
};

export default Gallery;