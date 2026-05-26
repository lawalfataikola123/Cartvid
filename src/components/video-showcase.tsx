import { motion } from "motion/react";

const videos = [
  { category: "Cinematic", title: "Cyberpunk City" },
  { category: "Anime", title: "Forest Spirit" },
  { category: "Realistic", title: "Portrait Study" },
  { category: "Fashion", title: "Runway Walk" },
  { category: "Gaming", title: "Action Sequence" },
  { category: "Ads", title: "Product Promo" },
];

export default function VideoShowcase() {
  return (
    <section id="showcase" className="py-20 px-6 max-w-7xl mx-auto">
      <h3 className="text-4xl font-bold tracking-tighter mb-12 text-center text-white">Video Showcase</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video, i) => (
          <motion.div 
            key={i}
            whileHover={{ scale: 1.02 }}
            className="aspect-video bg-white/5 rounded-2xl overflow-hidden relative group border border-white/10"
          >
            <div className="absolute inset-0 flex items-center justify-center text-gray-500 group-hover:text-purple-400 transition">
              {video.title}
            </div>
            <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black/80 to-transparent w-full">
              <span className="text-xs text-purple-400 font-medium">{video.category}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
