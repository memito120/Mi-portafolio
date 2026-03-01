import { motion } from 'framer-motion';
import { Code2, Lightbulb, Target, Users, Zap, Heart } from 'lucide-react';
import { Card, CardContent } from '../ui/card';

const values = [
  {
    icon: Code2,
    title: "Código Limpio",
    description: "Escribo código mantenible, legible y siguiendo las mejores prácticas de la industria."
  },
  {
    icon: Zap,
    title: "Rendimiento",
    description: "Optimizo cada aspecto para garantizar experiencias web rápidas y fluidas."
  },
  {
    icon: Users,
    title: "Colaboración",
    description: "Trabajo efectivamente en equipo, compartiendo conocimientos y aprendiendo de otros."
  },
  {
    icon: Lightbulb,
    title: "Innovación",
    description: "Siempre busco nuevas tecnologías y enfoques para resolver problemas de manera creativa."
  },
  {
    icon: Target,
    title: "Enfoque en Objetivos",
    description: "Me concentro en entregar soluciones que cumplan los objetivos del negocio y del usuario."
  },
  {
    icon: Heart,
    title: "Pasión",
    description: "Me apasiona el desarrollo web y aprender continuamente nuevas habilidades."
  }
];

export function About() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          {/* Título de sección */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Sobre Mí</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>

          {/* Descripción principal */}
          <div className="mb-16 max-w-3xl mx-auto text-center">
            <motion.p
              className="text-lg text-muted-foreground mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Soy un analista programador con 1 años de experiencia creando aplicaciones
              web modernas y escalables. Mi pasión es transformar diseños en experiencias digitales
              intuitivas y faciles de usar.
            </motion.p>
            <motion.p
              className="text-lg text-muted-foreground mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Me especializo en React, TypeScript y el ecosistema moderno de JavaScript, siempre
              buscando las mejores prácticas y las últimas tecnologías para crear soluciones
              innovadoras que superen las expectativas.
            </motion.p>
            <motion.p
              className="text-lg text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Cuando no estoy programando, me gusta contribuir a proyectos de código abierto,
              escribir artículos técnicos y mantenerme actualizado con las últimas tendencias
              en desarrollo web.
            </motion.p>
          </div>

          {/* Valores y principios */}
          <div>
            <h3 className="text-2xl font-semibold text-center mb-10">
              Mis Valores y Principios
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow duration-300 group">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                          <value.icon className="h-6 w-6" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold mb-2 text-lg">{value.title}</h4>
                          <p className="text-sm text-muted-foreground">{value.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
