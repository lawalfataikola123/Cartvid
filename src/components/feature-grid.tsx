import { motion } from "motion/react";
import { Video, Image, Zap, Bot, Edit, Camera, Sparkles, Layers } from "lucide-react";

const features = [
    { title: "Text to Video", icon: Video, description: "Generate cinematic videos from text prompts." },
    { title: "Image to Video", icon: Image, description: "Animate static images with AI motion." },
    { title: "Multi-Reference", icon: Layers, description: "Consistent character creation." },
    { title: "Character Consistency", icon: Bot, description: "Maintain consistency across scenes." },
    { title: "AI Anime Stylizer", icon: Sparkles, description: "Turn footage into anime masterpieces." },
    { title: "Product Videos", icon: Edit, description: "AI-driven product showcases." },
    { title: "Social Shorts", icon: Zap, description: "Optimized for social media." },
    { title: "Camera Motion", icon: Camera, description: "Dynamic AI camera movements." },
];

export default function FeatureGrid() {
  return (
    <section id="features" className="py-20 px-6 max-w-7xl mx-auto">
      <h3 className="text-4xl font-bold tracking-tighter mb-12 text-center text-white">Advanced AI Features</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -10 }}
            className="p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-purple-500/50 transition duration-300"
          >
            <feature.icon className="w-10 h-10 text-purple-400 mb-4" />
            <h4 className="text-lg font-semibold mb-2">{feature.title}</h4>
            <p className="text-gray-400 text-sm">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
