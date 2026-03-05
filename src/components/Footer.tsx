const Footer = () => (
  <footer className="py-8 px-4 border-t border-border/30">
    <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
      <span className="font-mono text-xs text-muted-foreground">
        &copy; {new Date().getFullYear()} John Doe. All rights reserved.
      </span>
      <span className="font-mono text-xs text-muted-foreground/50">
        Built with ⚡ and neon dreams
      </span>
    </div>
  </footer>
);

export default Footer;
