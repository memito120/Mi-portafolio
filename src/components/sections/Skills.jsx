import { motion } from 'framer-motion';
import {
  Code2,
  Database,
  Wrench,
  GitBranch,
  Atom,
  FileCode2,
  Palette,
  Wind,
  Sparkles,
  Github,
  Package,
  PenTool,
  Bot,
  FileSpreadsheet,
  Server,
  Braces,
  Globe,
  Boxes,
  Circle
} from 'lucide-react';
import { Badge } from '../ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

const skillCategories = [
  {
    title: "Frontend",
    icon: Code2,
    skills: [
      "React+Vite", "JavaScript", "TypeScript (Aprendiendo)",
      "HTML", "CSS", "Tailwind CSS", "Bootstrap", "Framer Motion"
    ]
  },
  {
    title: "Herramientas",
    icon: Wrench,
    skills: [
      "Office", "GitHub", "npm", "Figma", "Copilot", "Excel intermedio", "Sqlite"
    ]
  },
  {
    title: "Backend",
    icon: Database,
    skills: [
      "PHP", "MongoDB", "MySQL", "RESTful APIs", "Node.js (Aprendiendo)", "Next.js (Aprendiendo)"
    ]
  },
  {
    title: "Metodologías (Aprendiendo)",
    icon: GitBranch,
    skills: [
      "Agile/Scrum", "Kanban"
    ]
  }
];
/*Funcion para asignar iconos a las habilidades según su nombre, mejorando la visualización de las mismas en la sección de habilidades del portafolio. 
Se basa en palabras clave dentro del nombre de la habilidad para determinar el icono más representativo. 
Si no se encuentra una coincidencia específica, se asigna un icono genérico. 
Esto ayuda a los visitantes a identificar rápidamente las tecnologías y herramientas*/
function getSkillIcon(skill) {
  const label = skill.toLowerCase();

  if (label.includes('office')) return FileSpreadsheet;
  if (label.includes('react')) return Atom;
  if (label.includes('javascript') || label.includes('typescript')) return FileCode2;
  if (label.includes('html') || label.includes('css')) return Palette;
  if (label.includes('tailwind')) return Wind;
  if (label.includes('bootstrap')) return Palette;
  if (label.includes('framer')) return Sparkles;
  if (label.includes('git') || label.includes('github')) return Github;
  if (label.includes('npm')) return Package;
  if (label.includes('figma')) return PenTool;
  if (label.includes('copilot')) return Bot;
  if (label.includes('excel')) return FileSpreadsheet;
  if (label.includes('sqlite') || label.includes('mysql') || label.includes('mongodb')) return Database;
  if (label.includes('php') || label.includes('node')) return Server;
  if (label.includes('api')) return Braces;
  if (label.includes('next.js')) return Boxes;
  if (label.includes('agile') || label.includes('kanban')) return GitBranch;
  if (label.includes('web')) return Globe;

  return Circle;
}

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Título de sección */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Habilidades</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Tecnologías y herramientas con las que trabajo día a día
            </p>
          </div>

          {/* Grid de categorías */}
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-primary/10 text-primary">
                        <category.icon className="h-6 w-6" />
                      </div>
                      {category.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => {
                        const SkillIcon = getSkillIcon(skill);

                        return (
                          <motion.div
                            key={skill}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: (index * 0.1) + (skillIndex * 0.02) }}
                          >
                            <Badge
                              variant="secondary"
                              className="inline-flex items-center gap-1.5 hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                            >
                              <SkillIcon className="h-3.5 w-3.5" />
                              {skill}
                            </Badge>
                          </motion.div>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
