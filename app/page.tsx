import SeaLogo from '@/app/ui/sea-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col bg-[#050512] text-white">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-10 py-6">
        <SeaLogo />
        <div className="hidden md:flex gap-8 text-[11px] font-bold tracking-widest text-gray-400">
          <Link href="#" className="hover:text-white">SOLUTIONS</Link>
          <Link href="#" className="hover:text-white">LOGISTICS</Link>
          <Link href="#" className="hover:text-white">ANALYTICS</Link>
          <Link href="#" className="hover:text-white">GLOBAL FLEET</Link>
        </div>
        <div className="flex items-center gap-6">
          <Link href="/login" className="text-sm font-semibold">LOG IN</Link>
          <Link href="/login" className="bg-[#B500B2] text-black px-5 py-2 rounded-lg text-xs font-bold shadow-[0_0_15px_rgba(0,242,255,0.4)]">
            GET STARTED
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="flex flex-1 flex-col md:flex-row items-center px-10 py-12 gap-10">
        <div className="flex flex-col gap-6 md:w-2/5">
          <div className="glass-card p-10 rounded-[2.5rem]">
            <h1 className="text-6xl font-bold leading-tight mb-4">
              Welcome to <span className="text-[#B500B2]">Sea Parcel.</span>
            </h1>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              A simple website for reliable sea freight shipping, allowing users to book shipments, check rates, and track deliveries easily.
            </p>
            <Link href="/login" className="inline-flex items-center gap-4 bg-[#B500B2] text-black px-8 py-4 rounded-xl font-bold transition-transform hover:scale-105">
              <span>More Info About Us</span> <ArrowRightIcon className="w-5" />
            </Link>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 gap-4">
            <div className="glass-card p-6 rounded-2xl">
              <p className="text-[10px] text-yellow-400 font-bold tracking-widest uppercase mb-2">⚡ Ultra-Speed</p>
              <p className="text-3xl font-bold">32ms</p>
              <p className="text-[10px] text-gray-500 uppercase">Global Latency</p>
            </div>
            <div className="glass-card p-6 rounded-2xl">
              <p className="text-[10px] text-purple-400 font-bold tracking-widest uppercase mb-2">🌐 Network</p>
              <p className="text-3xl font-bold">142</p>
              <p className="text-[10px] text-gray-500 uppercase">Ports Connected</p>
            </div>
          </div>
        </div>

        {/* Right Side: Mockup Overlay */}
        <div className="relative md:w-3/5 flex justify-center">
          {/* Background Mockup Layer */}
          <div className="w-[500px] h-[350px] bg-[#12122b] rounded-xl border border-white/10 opacity-40 -rotate-2"></div>
          
          {/* Main Invoice Card */}
          <div className="absolute top-10 glass-card bg-[#111122]/90 p-8 rounded-2xl w-[400px] shadow-2xl border border-white/10">
            <div className="flex justify-between mb-6">
              <div>
                <p className="text-[9px] text-purple-400 font-bold tracking-tighter">INVOICE #SP-2024-001</p>
                <h2 className="text-xl font-bold">Ocean Freight - Atlantic</h2>
              </div>
              <span className="bg-cyan-500/20 text-purple-400 text-[10px] px-2 py-1 rounded font-bold h-fit">PAID</span>
            </div>
            <div className="space-y-3 text-sm border-t border-white/5 pt-4">
              <div className="flex justify-between text-gray-400"><span>Logistics Fee</span><span>$1,240.00</span></div>
              <div className="flex justify-between text-gray-400"><span>Port Handling</span><span>$450.00</span></div>
              <div className="flex justify-between font-bold text-lg pt-4 text-#B500B2-400 border-t border-white/5 mt-4">
                <span>TOTAL</span><span>$1,690.00</span>
              </div>
            </div>
          </div>

          {/* Live Signal Badge */}
          <div className="absolute bottom-10 left-0 glass-card px-4 py-2 rounded-xl flex items-center gap-3 border border-white/10">
            <div className="h-2 w-2 rounded-full bg-purple-400 animate-pulse"></div>
            <div>
              <p className="text-[8px] text-gray-500 font-bold">LIVE SIGNAL</p>
              <p className="text-[10px]">Ship "Aurora" Mid-Atlantic</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="flex flex-col md:flex-row justify-between items-center px-10 py-10 mt-auto border-t border-white/5">
        <div className="mb-4 md:mb-0">
          <p className="font-bold text-purple-400">Sea Parcel</p>
          <p className="text-[10px] text-gray-500 mt-1">© 2024 Sea Parcel. Navigating the Midnight Abyss.</p>
        </div>
        <div className="flex gap-6 text-[11px] text-gray-500 font-medium">
          <Link href="#" className="hover:text-white">Privacy Policy</Link>
          <Link href="#" className="hover:text-white">Terms of Service</Link>
          <Link href="#" className="hover:text-white">Maritime Law</Link>
          <Link href="#" className="hover:text-white">API Docs</Link>
        </div>
      </footer>
    </main>
  );
}