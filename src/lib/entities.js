import { useState, useEffect } from 'react';

// Mock de memito.entities - Sistema simple de gestión de entidades
// En un escenario real, esto se conectaría con una base de datos o API

// Entidad: Projects
export const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "Plataforma completa de comercio electrónico con carrito de compras, pasarela de pago y panel de administración.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
    demoUrl: "https://ejemplo-ecommerce.com",
    githubUrl: "https://github.com/usuario/ecommerce",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Aplicación de gestión de tareas con funcionalidades de arrastrar y soltar, categorización y colaboración en tiempo real.",
    technologies: ["React", "TypeScript", "Firebase", "Redux", "Material-UI"],
    demoUrl: "https://ejemplo-tasks.com",
    githubUrl: "https://github.com/usuario/task-app",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80"
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "Dashboard interactivo del clima con pronósticos de 7 días, mapas de radar y alertas meteorológicas.",
    technologies: ["Vue.js", "Vuex", "OpenWeather API", "Chart.js", "Sass"],
    demoUrl: "https://ejemplo-weather.com",
    githubUrl: "https://github.com/usuario/weather-app",
    image: "https://images.unsplash.com/photo-1561484930-998b6a7b22e8?w=800&q=80"
  },
  {
    id: 4,
    title: "Portfolio CMS",
    description: "Sistema de gestión de contenido personalizado para portafolios creativos con editor visual.",
    technologies: ["Next.js", "Sanity.io", "GraphQL", "Tailwind CSS"],
    demoUrl: "https://ejemplo-cms.com",
    githubUrl: "https://github.com/usuario/portfolio-cms",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80"
  }
];

// Entidad: Experience
export const experiences = [
  {
    id: 1,
    company: "Tech Solutions S.L.",
    position: "Senior Front-End Developer",
    startDate: "2022-03",
    endDate: null, // null significa 'Actualidad'
    description: "Lidero el equipo de desarrollo front-end, implementando arquitecturas escalables y mejorando la experiencia de usuario en aplicaciones web empresariales.",
    achievements: [
      "Reduje el tiempo de carga de la aplicación principal en un 40%",
      "Implementé un sistema de diseño reutilizable que aceleró el desarrollo en un 30%",
      "Mentoricé a 3 desarrolladores junior"
    ]
  },
  {
    id: 2,
    company: "Digital Innovations",
    position: "Front-End Developer",
    startDate: "2020-06",
    endDate: "2022-02",
    description: "Desarrollé interfaces de usuario responsivas y accesibles para clientes de diversos sectores, utilizando las últimas tecnologías web.",
    achievements: [
      "Desarrollé más de 15 proyectos exitosos para clientes",
      "Mejoré la accesibilidad de los proyectos alcanzando puntuaciones WCAG AAA",
      "Implementé pruebas automatizadas que redujeron los errores en producción en un 50%"
    ]
  },
  {
    id: 3,
    company: "StartUp Web Studio",
    position: "Junior Front-End Developer",
    startDate: "2018-09",
    endDate: "2020-05",
    description: "Comencé mi carrera profesional desarrollando sitios web y aplicaciones para startups y pequeñas empresas.",
    achievements: [
      "Contribuí al desarrollo de 10+ sitios web responsivos",
      "Aprendí y apliqué frameworks modernos como React y Vue.js",
      "Colaboré en la migración de proyectos legacy a tecnologías modernas"
    ]
  }
];

// Hook simulado para cargar entidades
export function useEntity(entityName) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simular una carga asíncrona
    const timer = setTimeout(() => {
      if (entityName === 'projects') {
        setData(projects);
      } else if (entityName === 'experiences') {
        setData(experiences);
      }
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [entityName]);

  return { data, loading };
}
