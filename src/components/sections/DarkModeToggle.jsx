import { motion } from 'framer-motion';
import { Moon, Sun, Sparkles } from 'lucide-react';
import { Button } from '../ui/button';
import { cn } from '../../lib/utils';

export function DarkModeToggle({ isDarkMode, setIsDarkMode }) {
  return (
    <motion.div
      className="fixed top-6 right-6 z-50"
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
          ¡Prueba el modo {isDarkMode ? 'claro' : 'oscuro'}!
          <div className="absolute top-0 right-4 -translate-y-1/2 w-2 h-2 bg-primary rotate-45"></div>
        </motion.div>

        {/* Partículas animadas */}
        <motion.div
          className="absolute inset-0 -z-10"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-primary rounded-full"
              style={{
                top: '50%',
                left: '50%',
                rotate: `${i * 45}deg`,
              }}
              animate={{
                x: [0, 25, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
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

        {/* Icono de chispas flotante */}
        <motion.div
          className="absolute -top-2 -right-2"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 15, -15, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        >
          <Sparkles className="h-4 w-4 text-yellow-400 fill-yellow-400" />
        </motion.div>
      </div>
    </motion.div>
  );
}
