export default function Footer() {
  return (
    <footer className="w-full px-4 md:px-20 py-12 bg-[#1c150d] text-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-4 opacity-100">
          <img src="/hvfoods-logo.webp" alt="Horizon Vert Foods" className="h-12 w-auto object-contain bg-white/10 rounded-lg p-1" />
        </div>
        <div className="flex gap-8 text-sm text-white/60">
          <a className="hover:text-primary transition-colors" href="#">Privacy Policy</a>
          <a className="hover:text-primary transition-colors" href="#">Terms of Service</a>
          <a className="hover:text-primary transition-colors" href="#">Contact Us</a>
        </div>
        <div className="flex gap-4">
          <span className="material-symbols-outlined text-white/40 cursor-pointer hover:text-primary transition-colors">share</span>
        </div>
      </div>
      <div className="text-center mt-8 text-white/20 text-xs">
        © 2026 Horizon Vert Foods. Not officially affiliated with FIFA. All imagery used for artistic representation.
      </div>
    </footer>
  );
}
