import { motion } from 'framer-motion';
import { Code2, Database, Wrench, GitBranch } from 'lucide-react';
import { Badge } from '../ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

const skillCategories = [
  {
    title: "Frontend",
    icon: Code2,
    skills: [
      "React", "TypeScript", "JavaScript (ES6+)", "Next.js", "Vue.js",
      "HTML5", "CSS3", "Sass/SCSS", "Tailwind CSS", "Material-UI",
      "Styled Components", "Framer Motion", "Redux", "Zustand", "React Query"
    ]
  },
  {
    title: "Backend",
    icon: Database,
    skills: [
      "Node.js", "Express", "RESTful APIs", "GraphQL",
      "MongoDB", "PostgreSQL", "Firebase", "Supabase"
    ]
  },
  {
    title: "Herramientas",
    icon: Wrench,
    skills: [
      "Git", "GitHub", "GitLab", "VS Code", "Webpack", "Vite",
      "npm/yarn", "ESLint", "Prettier", "Jest", "Testing Library",
      "Cypress", "Figma", "Adobe XD"
    ]
  },
  {
    title: "Metodologías",
    icon: GitBranch,
    skills: [
      "Agile/Scrum", "Code Review", "CI/CD", "Responsive Design",
      "Accesibilidad (WCAG)", "SEO", "Performance Optimization",
      "Atomic Design", "BEM", "Git Flow"
    ]
  }
];

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
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skill}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: (index * 0.1) + (skillIndex * 0.02) }}
                        >
                          <Badge 
                            variant="secondary"
                            className="hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                          >
                            {skill}
                          </Badge>
                        </motion.div>
                      ))}
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
