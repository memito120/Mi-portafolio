import { motion } from 'framer-motion';
import { Moon, Sun, Sparkles } from 'lucide-react';
import { Button } from '../ui/button';
import { cn } from '../../lib/utils';

export function DarkModeToggle({ isDarkMode, setIsDarkMode }) {
  return (
    <motion.div
      className="fixed top-36 z-50 right-4"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5, type: "spring", stiffness: 260, damping: 20 }}
    >
      <div className="relative group">
        {/* Tooltip */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="absolute -bottom-12 right-0 bg-primary text-primary-foreground px-3 py-1.5 rounded-md text-xs
                     whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
        >
          {isDarkMode ? 'Modo Oscuro' : 'Modo Claro'}
        </motion.div>
        {/* Botón principal */}
        <Button
          size="icon"
          variant="default"
          onClick={() => setIsDarkMode(!isDarkMode)}
          className={cn(
            "relative overflow-hidden w-14 h-14 rounded-full shadow-lg",
            "hover:shadow-xl transition-all duration-300",
            "animate-pulse hover:animate-none"
          )}
        >
          <motion.div
            initial={false}
            animate={{ rotate: isDarkMode ? 360 : 0 }}
            transition={{ duration: 0.5, type: "spring" }}
            className="relative"
          >
            {isDarkMode ? (
              <Moon className="h-6 w-6" />
            ) : (
              <Sun className="h-6 w-6" />
            )}
          </motion.div>

          {/* Efecto de brillo */}
          <motion.div
            className="absolute inset-0 bg-white/20"
            initial={{ x: "-100%" }}
            whileHover={{ x: "100%" }}
            transition={{ duration: 0.5 }}
          />
        </Button>
      </div>
    </motion.div>
  );
}
