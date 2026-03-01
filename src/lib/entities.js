import { useState, useEffect } from 'react';

// Mock de memito.entities - Sistema simple de gestión de entidades para poder mostrar datos en las secciones de proyectos, servicios y experiencia sin necesidad de una base de datos real o API externa. Esto facilita el desarrollo y la demostración de la funcionalidad de carga y visualización de datos en el portafolio.

// Entidad: Projects
export const projects = [
  {
    id: 1,
    title: "Plataforma web de escuela (Proyecto practica profesional)",
    description: "Desarrollo de una plataforma web para un colegio, con funcionalidades de gestión académica, comunicación y recursos para estudiantes y profesores.",
    technologies: ["PHP puro", "MySQL", "Bootstrap", "JavaScript", "HTML", "CSS"],
    
    githubUrl: "https://github.com/usuario/ecommerce",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80"
  },
  {
    id: 2,
    title: "Gestion de un gimnasio (Proyecto grupal)",
    description: "Aplicación de gestión de un gimnasio con funcionalidades de arrastrar y soltar, categorización y colaboración en tiempo real.",
    technologies: ["React", "JavaScript", "Node.js", "MySQL"],
    demoUrl: "https://ejemplo-tasks.com",
    githubUrl: "https://github.com/usuario/task-app",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80"
  },
  {
    id: 3,
    title: "Plataforma inmobiliaria (Proyecto personal)",
    description: "Desarrollo de una plataforma inmobiliaria con funcionalidades de búsqueda avanzada, filtros dinámicos y gestión de propiedades.",
    technologies: ["PHP", "MySQL", "Bootstrap", "JavaScript", "HTML", "CSS"],
    githubUrl: "https://github.com/usuario/weather-app",
    image: "https://images.unsplash.com/photo-1561484930-998b6a7b22e8?w=800&q=80"
  },
];

//Entidad: Services
export const services = [
  {
    id: 1,
    title: "Mantenimiento básico / limpieza interna",
    description: "Limpieza interna del equipo para mejorar temperatura, rendimiento y vida útil de los componentes.",
    tags: ["Limpieza", "Prevención", "PC/Notebook"],
    priceRange: "$19.000 – $45.000 CLP",
    note: "Según si incluye solo limpieza o cambio de pasta térmica + diagnóstico completo.",
    image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=800&q=80"
  },
  {
    id: 2,
    title: "Mantenimiento preventivo + pasta térmica",
    description: "Servicio preventivo completo con limpieza, revisión general y aplicación de pasta térmica.",
    tags: ["Pasta térmica", "Temperaturas", "Rendimiento"],
    priceRange: "$30.000 – $60.000 CLP",
    note: "Ideal para equipos con altas temperaturas o uso intensivo.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80"
  },
  {
    id: 3,
    title: "Formateo / instalación de sistema operativo",
    description: "Instalación de sistema operativo, configuración de software base y drivers esenciales.",
    tags: ["Windows", "Drivers", "Optimización"],
    priceRange: "$20.000 – $40.000 CLP",
    note: "Incluye instalación de software base según necesidad del cliente.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80"
  },
  {
    id: 4,
    title: "Diagnóstico básico",
    description: "Evaluación inicial para detectar fallas de hardware o software y proponer solución.",
    tags: ["Revisión", "Fallas", "Presupuesto"],
    priceRange: "Desde $10.000 CLP",
    note: "Costo inicial de diagnóstico, sujeto a reparación posterior.",
    image: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?w=800&q=80"
  },
  {
    id: 5,
    title: "Servicio técnico a domicilio",
    description: "Atención en domicilio para soporte técnico, reparaciones y mantenciones según complejidad.",
    tags: ["A domicilio", "Soporte técnico", "Comodidad"],
    priceRange: "$30.000 – $60.000 CLP",
    note: "Valor varía según complejidad del trabajo y desplazamiento.",
    image: "https://images.unsplash.com/photo-1593642532871-8b12e02d091c?w=800&q=80"
  }
];


// Entidad: Experience
export const experiences = [
  {
    id: 1,
    company: "Colegio Familiar Agricola Valle del Elqui",
    position: "Tecnico en Computacion/Soporte IT en terreno",
    startDate: "2025-06",
    endDate: "2025-12",
    description: "Soporte técnico en terreno para el colegio, incluyendo mantenimiento de equipos, resolución de problemas técnicos y asistencia a usuarios, con un enfoque en la mejora continua de la infraestructura tecnológica del establecimiento.",
    achievements: [
      "Realicé mantenimiento preventivo y correctivo en los equipos del colegio, mejorando su rendimiento y prolongando su vida útil.",
      "Brindé soporte técnico a profesores y personal administrativo, resolviendo problemas de hardware y software de manera eficiente.",
      "Colaboré en la implementación de medidas de seguridad informática para proteger los datos del colegio y garantizar un entorno digital seguro."
    ]
  },
  {
    id: 2,
    company: "Colegio Familiar Agricola Valle del Elqui",
    position: "Desarrollador Web/Soporte IT (Práctica Profesional)",
    startDate: "2025-03",
    endDate: "2025-06",
    description: "Desarrollo de una plataforma web para la gestión académica y administrativa del colegio, incluyendo funcionalidades de comunicación, recursos educativos y soporte técnico para el personal.",
    achievements: [ 
      "Apoyé en la implementación de un sitio web escolar desarrollado en PHP, coordinando con el equipo docente y informática la publicación de información y el acceso desde los equipos del colegio.",
      "Colaboré en la resolución de problemas técnicos y en la capacitación del personal para el uso de la nueva plataforma, mejorando la eficiencia en la gestión académica y administrativa del colegio.",
      "Verifiqué el correcto funcionamiento del sitio en los navegadores utilizados en el establecimiento y realicé pruebas básicas de acceso desde la red interna."
    ]
  },
  {
    id: 3,
    company: "Universidad Inacap La Serena",
    position: "Analista Programador",
    startDate: "2023-03",
    endDate: "2024-12",
    description: "Desarrollo de aplicaciones web para la gestión académica y administrativa de la universidad, colaborando con equipos multidisciplinarios para mejorar los procesos internos.",
    achievements: [
      "Desarrollé una plataforma de gestión académica que redujo el tiempo de procesamiento de solicitudes en un 25%",
      "Colaboré en la migración de sistemas legados a tecnologías modernas, mejorando la eficiencia y seguridad",
      "Colaboré con equipos de diseño y administración para implementar soluciones personalizadas según las necesidades de la prueba final de la carrera"
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
      } else if (entityName === 'services') {
        setData(services);
      }
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [entityName]);

  return { data, loading };
}
