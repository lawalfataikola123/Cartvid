import { motion } from "motion/react";
import { Button } from "@/components/ui/button";

export default function Workspace() {
  return (
    <div className="max-w-5xl mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="md:col-span-2 space-y-6">
        <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
          <label className="block text-sm text-gray-400 mb-2">Prompt</label>
          <textarea className="w-full h-32 p-4 bg-black/50 border border-white/10 rounded-xl text-white" placeholder="Describe your video..." />
        </div>
        <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
          <label className="block text-sm text-gray-400 mb-2">Negative Prompt</label>
          <input className="w-full p-4 bg-black/50 border border-white/10 rounded-xl text-white" placeholder="What to avoid..." />
        </div>
      </div>
      <div className="space-y-6">
        <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
          <Button className="w-full bg-purple-600 hover:bg-purple-500">Generate Video</Button>
        </div>
      </div>
    </div>
  );
}
