/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Navbar from './components/navbar';
import FeatureGrid from './components/feature-grid';
import VideoShowcase from './components/video-showcase';
import Pricing from './components/pricing';
import Footer from './components/footer';
import Workspace from './components/workspace';
import Dashboard from './components/dashboard';

export default function App() {
  const [view, setView] = useState<'home' | 'workspace' | 'dashboard'>('home');

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-purple-500/30">
      <Navbar setView={setView} />
      <main className="pt-24">
        {view === 'home' && (
          <>
            <section className="px-6 py-20 text-center">
                <h2 className="text-6xl md:text-8xl font-extrabold tracking-tighter bg-clip-text text-transparent bg-linear-to-b from-white to-gray-500">
                    Turn Imagination<br />Into Motion
                </h2>
                <p className="mt-8 text-xl text-gray-400 max-w-2xl mx-auto">
                  The premium AI studio for cinematic video generation.
                </p>
                <div className="mt-12 flex justify-center gap-4">
                    <button onClick={() => setView('workspace')} className="px-8 py-4 bg-purple-600 rounded-full hover:bg-purple-500 transition font-medium">Generate Video</button>
                </div>
            </section>
            
            <FeatureGrid />
            <VideoShowcase />
            <Pricing />
          </>
        )}
        {view === 'workspace' && (
          <Workspace />
        )}
        {view === 'dashboard' && (
          <Dashboard />
        )}
        <Footer />
      </main>
    </div>
  );
}
