import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Inicio', id: 'home' },
  { label: 'Sobre mí', id: 'about' },
  { label: 'Proyectos', id: 'projects' },
  { label: 'Servicios', id: 'services' },
  { label: 'Skills', id: 'skills' },
  { label: 'Experiencia', id: 'experience' },
  { label: 'Contacto', id: 'contact' }
];

export function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsSidebarOpen(false);
  };

  return (
    <>
      {/* Navbar Desktop */}
      <motion.header
        initial={{ opacity: 0, y: -24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[min(96%,980px)] hidden md:block"
      >
        <nav className="rounded-2xl border border-border/60 bg-background/60 backdrop-blur-xl shadow-lg">
          <div className="px-3 py-2 sm:px-4">
            <ul className="flex items-center gap-1">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="relative px-3 py-2 text-sm font-medium text-foreground/85 hover:text-primary transition-colors"
                  >
                    {item.label}
                    <motion.span
                      className="absolute left-3 right-3 -bottom-[2px] h-[2px] bg-primary rounded-full"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.2 }}
                      style={{ transformOrigin: 'center' }}
                    />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </motion.header>

      {/* Botón Menú Móvil */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        onClick={() => setIsSidebarOpen(true)}
        className="fixed top-4 right-4 z-50 md:hidden p-3 rounded-xl border border-border/60 bg-background/60 backdrop-blur-xl shadow-lg hover:bg-background/80 transition-colors"
        aria-label="Abrir menú"
      >
        <Menu className="h-6 w-6 text-foreground" />
      </motion.button>

      {/* Overlay */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setIsSidebarOpen(false)}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 md:hidden"
          />
        )}
      </AnimatePresence>

      {/* Sidebar Móvil */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 w-[280px] z-50 md:hidden border-l border-border/60 bg-background/60 backdrop-blur-xl shadow-2xl"
          >
            <div className="flex flex-col h-full">
              {/* Header del Sidebar */}
              <div className="flex items-center justify-between p-4 border-b border-border/60">
                <h2 className="text-lg font-semibold text-foreground">Menú</h2>
                <button
                  onClick={() => setIsSidebarOpen(false)}
                  className="p-2 rounded-lg hover:bg-accent transition-colors"
                  aria-label="Cerrar menú"
                >
                  <X className="h-5 w-5 text-foreground" />
                </button>
              </div>

              {/* Items del Sidebar */}
              <nav className="flex-1 overflow-y-auto py-4">
                <ul className="space-y-1 px-3">
                  {navItems.map((item, index) => (
                    <motion.li
                      key={item.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <button
                        onClick={() => scrollToSection(item.id)}
                        className="w-full text-left px-4 py-3 rounded-lg text-sm font-medium text-foreground/85 hover:text-primary hover:bg-accent/50 transition-colors"
                      >
                        {item.label}
                      </button>
                    </motion.li>
                  ))}
                </ul>
              </nav>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}