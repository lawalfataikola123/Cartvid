export default function Dashboard() {
  return (
    <div className="max-w-7xl mx-auto p-6">
        <h2 className="text-4xl font-bold mb-8">Dashboard</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                <h3 className="text-gray-400">Credits Remaining</h3>
                <p className="text-4xl font-bold mt-2">1,250</p>
            </div>
            <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                <h3 className="text-gray-400">Recent Generations</h3>
                <p className="text-4xl font-bold mt-2">8</p>
            </div>
            <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                <h3 className="text-gray-400">Subscription</h3>
                <p className="text-2xl font-bold mt-2 text-purple-400">Pro Plan</p>
            </div>
        </div>
    </div>
  );
}
