import { IconCheck } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

export function PricingSection() {
	const plans = [
		{
			name: "Starter",
			price: "$29",
			description: "Perfect for individuals and small projects.",
			features: [
				"Up to 5 projects",
				"Basic analytics",
				"24/7 Support",
				"Community access",
			],
			cta: "Get Started",
			href: "https://khandesign,net/start",
		},
		{
			name: "Pro",
			price: "$99",
			description: "Ideal for growing businesses and teams.",
			features: [
				"Unlimited projects",
				"Advanced analytics",
				"Priority support",
				"Team collaboration",
				"Custom domain",
			],
			cta: "Upgrade to Pro",
			popular: true,
			href: "https://khandesign.net/start",
		},
		{
			name: "Enterprise",
			price: "Custom",
			description: "For large organizations with specific needs.",
			features: [
				"Dedicated account manager",
				"Custom integrations",
				"SLA support",
				"On-premise deployment",
				"Advanced security",
			],
			cta: "Contact Sales",
			href: "https://khandesign.net/start",
		},
	];

	return (
		<section className="py-20">
			<div className="max-w-7xl mx-auto px-6 md:px-10">
				<div className="text-center mb-12">
					<h2 className="text-3xl md:text-5xl font-bold mb-4">
						Simple, Transparent Pricing
					</h2>
					<p className="text-muted-foreground text-lg">
						Choose the plan that's right for you.
					</p>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{plans.map((plan, index) => (
						<Card
							key={`pricing-plan-${plan.name}-${index}`}
							className={`flex flex-col ${
								plan.popular ? "border-primary shadow-lg relative" : ""
							}`}
						>
							{plan.popular && (
								<div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
									Popular
								</div>
							)}
							<CardHeader>
								<CardTitle className="text-2xl">{plan.name}</CardTitle>
								<CardDescription>{plan.description}</CardDescription>
							</CardHeader>
							<CardContent className="flex-1">
								<div className="text-4xl font-bold mb-6">{plan.price}</div>
								<ul className="space-y-3">
									{plan.features.map((feature, i) => (
										<li
											key={`${plan.name}-feature-${i}`}
											className="flex items-center gap-2"
										>
											<IconCheck className="w-5 h-5 text-primary" />
											<span className="text-muted-foreground">{feature}</span>
										</li>
									))}
								</ul>
							</CardContent>
							<CardFooter>
								<Button
									className="w-full"
									variant={plan.popular ? "default" : "outline"}
									asChild
								>
									<a href={plan.href}>{plan.cta}</a>
								</Button>
							</CardFooter>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}
