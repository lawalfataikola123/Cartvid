import { motion } from "motion/react";

export default function Navbar({ setView }: { setView: (view: 'home' | 'workspace' | 'dashboard') => void }) {
  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="p-6 flex justify-between items-center fixed w-full z-50 backdrop-blur-md bg-black/50 border-b border-white/10"
    >
      <div onClick={() => setView('home')} className="text-2xl font-bold tracking-tighter text-white cursor-pointer">CartVid</div>
      <div className="gap-6 flex items-center text-sm">
        <button onClick={() => setView('home')} className="text-gray-300 hover:text-white transition">Home</button>
        <button onClick={() => setView('dashboard')} className="text-gray-300 hover:text-white transition">Dashboard</button>
        <button onClick={() => setView('workspace')} className="px-4 py-2 bg-white/10 rounded-full hover:bg-white/20 transition backdrop-blur-sm text-white">Workspace</button>
      </div>
    </motion.nav>
  );
}
