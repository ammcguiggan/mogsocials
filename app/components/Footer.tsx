export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10 px-6 text-center">
      <p className="text-lg font-black text-white uppercase tracking-tight mb-2">
        Mog<span style={{ color: "#0057ff" }}>Socials</span>
      </p>
      <p className="label-tag">
        © {new Date().getFullYear()} MogSocials. All rights reserved.
      </p>
    </footer>
  );
}
