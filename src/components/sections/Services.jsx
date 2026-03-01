import { motion } from 'framer-motion';
import { useEntity } from '../../lib/entities';
import { Badge } from '../ui/badge';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { Skeleton } from '../ui/skeleton';

function ServiceSkeleton() {
	return (
		<Card className="h-full">
			<Skeleton className="h-48 w-full rounded-t-lg" />
			<CardHeader>
				<Skeleton className="h-6 w-3/4" />
				<Skeleton className="h-4 w-full mt-2" />
			</CardHeader>
			<CardContent>
				<div className="flex flex-wrap gap-2">
					<Skeleton className="h-6 w-20" />
					<Skeleton className="h-6 w-16" />
					<Skeleton className="h-6 w-24" />
				</div>
			</CardContent>
			<CardFooter className="flex-col items-start gap-2">
				<Skeleton className="h-5 w-40" />
				<Skeleton className="h-4 w-full" />
			</CardFooter>
		</Card>
	);
}

export function Services() {
	const { data: services, loading } = useEntity('services');

	return (
		<section id="services" className="py-20">
			<div className="container mx-auto px-4">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
				>
					<div className="text-center mb-12">
						<h2 className="text-3xl md:text-4xl font-bold mb-4">Servicios Técnicos</h2>
						<div className="w-20 h-1 bg-primary mx-auto rounded-full" />
						<p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
							Soporte y mantenimiento de computación a domicilio, con diagnóstico y solución según la necesidad.
						</p>
					</div>

					<div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
						{loading ? (
							[...Array(4)].map((_, index) => <ServiceSkeleton key={index} />)
						) : (
							services?.map((service, index) => (
								<motion.div
									key={service.id}
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ delay: index * 0.1 }}
								>
									<Card className="h-full flex flex-col group hover:shadow-xl transition-all duration-300">
										<div className="relative overflow-hidden rounded-t-lg h-48 bg-muted">
											<img
												src={service.image}
												alt={service.title}
												className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
											/>
											<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
										</div>

										<CardHeader>
											<CardTitle className="text-xl">{service.title}</CardTitle>
											<CardDescription>{service.description}</CardDescription>
										</CardHeader>

										<CardContent className="flex-1">
											<div className="flex flex-wrap gap-2">
												{service.tags.map((tag) => (
													<Badge key={tag} variant="secondary">
														{tag}
													</Badge>
												))}
											</div>
										</CardContent>

										<CardFooter className="flex-col items-start gap-1">
											<p className="text-sm font-semibold text-primary">{service.priceRange}</p>
											<p className="text-sm text-muted-foreground">{service.note}</p>
										</CardFooter>
									</Card>
								</motion.div>
							))
						)}
					</div>
				</motion.div>
			</div>
		</section>
	);
}
