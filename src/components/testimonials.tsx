import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

export function TestimonialsSection() {
	const testimonials = [
		{
			name: "Alice Johnson",
			role: "CEO, TechCorp",
			content:
				"This platform has revolutionized how we handle our client projects. The timeline feature is a game-changer!",
			avatar: "AJ",
		},
		{
			name: "Bob Smith",
			role: "Marketing Director, CreativeAgency",
			content:
				"The design is stunning and the features are exactly what we needed. Highly recommended!",
			avatar: "BS",
		},
		{
			name: "Charlie Davis",
			role: "Freelance Developer",
			content:
				"I've never seen such a comprehensive toolset. It's helped me scale my business effortlessly.",
			avatar: "CD",
		},
	];

	return (
		<section className="py-20 bg-muted/50">
			<div className="max-w-7xl mx-auto px-6 md:px-10">
				<h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
					What Our Clients Say
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{testimonials.map((testimonial, index) => (
						<Card
							key={`testimonial-${testimonial.name}-${index}`}
							className="bg-background"
						>
							<CardHeader className="flex flex-row items-center gap-4 pb-4">
								<Avatar>
									<AvatarImage src="" />
									<AvatarFallback>{testimonial.avatar}</AvatarFallback>
								</Avatar>
								<div className="flex flex-col">
									<CardTitle className="text-lg">{testimonial.name}</CardTitle>
									<CardDescription>{testimonial.role}</CardDescription>
								</div>
							</CardHeader>
							<CardContent>
								<p className="text-muted-foreground">{testimonial.content}</p>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}
