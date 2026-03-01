import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '../ui/button';

export function Hero() {
	const scrollToSection = (id) => {
		document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
	};

	return (
		<section id="home" className="min-h-screen flex items-center relative overflow-hidden">
			<div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background -z-10" />

			<div className="container mx-auto px-4 py-24">
				<div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
					>
						<p className="text-primary font-medium mb-3 text-lg">Hola, soy</p>

						<h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight">
							Guillermo Delgado
						</h1>

						<h2 className="text-2xl md:text-3xl font-semibold mb-6 text-foreground/80">
							Analista Programador
						</h2>

						<p className="text-base md:text-lg text-muted-foreground mb-8 leading-relaxed max-w-2xl">
							Especializado en crear experiencias web modernas, accesibles y fáciles de usar,
							utilizando React, con las últimas tecnologías del ecosistema JavaScript.
							Actualmente, también ofrezco servicios técnicos de mantenimiento y me desempeño
							como analista programador, brindando soporte IT para garantizar soluciones
							eficientes y confiables.
						</p>

						<div className="flex flex-wrap gap-3 mb-6">
							<Button size="lg" onClick={() => scrollToSection('contact')}>
								<Mail className="h-4 w-4" />
								Contactar
							</Button>
							<Button size="lg" variant="outline" onClick={() => scrollToSection('projects')}>
								Ver Proyectos
							</Button>
							<Button size="lg" variant="outline" onClick={() => scrollToSection('services')}>
								Ver Servicios
							</Button>
						</div>

						<div className="flex items-center gap-3">
							<a
								href="https://github.com/usuario"
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-input hover:bg-accent hover:text-accent-foreground transition-colors"
								aria-label="Perfil de GitHub"
							>
								<Github className="h-5 w-5" />
							</a>
							<a
								href="https://linkedin.com/in/usuario"
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-input hover:bg-accent hover:text-accent-foreground transition-colors"
								aria-label="Perfil de LinkedIn"
							>
								<Linkedin className="h-5 w-5" />
							</a>
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 24 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.1 }}
						className="flex justify-center lg:justify-end"
					>
						<div className="w-[280px] sm:w-[340px] md:w-[380px] rounded-3xl border bg-card/70 backdrop-blur p-4 shadow-xl">
							<div className="relative rounded-2xl overflow-hidden bg-muted aspect-[4/5]">
								<img
									src="/perfil.jpg"
									alt="Imagen de perfil de Guillermo Delgado"
									className="w-full h-full object-cover"
								/>
								<div className="absolute inset-0 ring-1 ring-inset ring-white/10" />
							</div>
						</div>
					</motion.div>
				</div>
			</div>

			<motion.button
				className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-muted-foreground hover:text-primary transition-colors"
				onClick={() => scrollToSection('about')}
				animate={{ y: [0, 8, 0] }}
				transition={{ duration: 1.4, repeat: Infinity }}
			>
				<span className="text-xs sm:text-sm">Desplázate</span>
				<ChevronDown className="h-5 w-5" />
			</motion.button>
		</section>
	);
}
