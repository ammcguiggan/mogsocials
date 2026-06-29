export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10 px-6 text-center">
      <p className="text-2xl font-black text-gradient mb-2">MogSocials</p>
      <p className="text-white/40 text-sm">
        © {new Date().getFullYear()} MogSocials. All rights reserved.
      </p>
      <p className="text-white/30 text-xs mt-2">
        Built for the culture. Made for Gen Z.
      </p>
    </footer>
  );
}
