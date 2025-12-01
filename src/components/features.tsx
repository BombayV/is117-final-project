import {
	IconCloud,
	IconCurrencyDollar,
	IconEaseInOut,
	IconHelp,
} from "@tabler/icons-react";
import { cn } from "@/lib/utils";

export function FeaturesSection() {
	const features = [
		{
			title: "Design with clients in mind",
			description:
				"Our platform is intuitive and user-friendly, ensuring a seamless experience for your clients.",
			icon: <IconEaseInOut />,
		},
		{
			title: "Pricing like no other",
			description:
				"Simple and transparent pricing that scales with your needs.",
			icon: <IconCurrencyDollar />,
		},
		{
			title: "Powerful features",
			description:
				"Built with the latest technologies to ensure speed and reliability.",
			icon: <IconCloud />,
		},
		{
			title: "24/7 Customer Support",
			description:
				"We are available a 100% of the time. Send us a message anytime!",
			icon: <IconHelp />,
		},
	];
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 max-w-7xl mx-auto">
			{features.map((feature, index) => (
				<Feature key={feature.title} {...feature} index={index} />
			))}
		</div>
	);
}

const Feature = ({
	title,
	description,
	icon,
	index,
}: {
	title: string;
	description: string;
	icon: React.ReactNode;
	index: number;
}) => {
	return (
		<div
			className={cn(
				"flex flex-col lg:border-r py-10 relative group/feature border-border",
				(index === 0 || index === 4) && "lg:border-l",
				index < 4 && "",
			)}
		>
			{index < 4 && (
				<div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-muted to-transparent pointer-events-none" />
			)}
			{index >= 4 && (
				<div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-muted to-transparent pointer-events-none" />
			)}
			<div className="mb-4 relative z-10 px-10 text-muted-foreground">
				{icon}
			</div>
			<div className="text-lg font-bold mb-2 relative z-10 px-10">
				<div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-border group-hover/feature:bg-primary transition-all duration-200 origin-center" />
				<span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-foreground">
					{title}
				</span>
			</div>
			<p className="text-sm text-muted-foreground max-w-xs relative z-10 px-10">
				{description}
			</p>
		</div>
	);
};
