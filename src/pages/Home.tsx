import { FAQSection } from "@/components/faq";
import { FeaturesSection } from "@/components/features";
import { Footer } from "@/components/footer";
import { PricingSection } from "@/components/pricing";
import { TestimonialsSection } from "@/components/testimonials";
import HeroSection from "@/components/ui/hero-section";
import { Timeline } from "@/components/ui/timeline";

export function Home() {
	const timelineData = [
		{
			title: "Q4 2024",
			content: (
				<div>
					<p className="text-foreground/80 text-xs md:text-sm font-normal mb-8">
						Successfully launched version 2.0 of our platform with real-time
						collaboration features and improved performance metrics by 45%.
					</p>
					<ul className="text-foreground/70 text-xs md:text-sm space-y-2">
						<li>• Real-time collaboration tools for teams</li>
						<li>• 45% performance improvement</li>
						<li>• Added 150+ new enterprise features</li>
					</ul>
				</div>
			),
		},
		{
			title: "Q2 2024",
			content: (
				<div>
					<p className="text-foreground/80 text-xs md:text-sm font-normal mb-8">
						Reached 10,000 active users and expanded our team to 50+ developers.
						Launched mobile app on iOS and Android platforms.
					</p>
					<ul className="text-foreground/70 text-xs md:text-sm space-y-2">
						<li>• 10,000+ active users milestone</li>
						<li>• Mobile apps launched on iOS & Android</li>
						<li>• Team expanded to 50+ developers</li>
					</ul>
				</div>
			),
		},
		{
			title: "Q4 2023",
			content: (
				<div>
					<p className="text-foreground/80 text-xs md:text-sm font-normal mb-8">
						Founded the company with a vision to revolutionize web experiences.
						Initial product launch with core features received positive feedback
						from early adopters.
					</p>
					<ul className="text-foreground/70 text-xs md:text-sm space-y-2">
						<li>• Company founded</li>
						<li>• Initial product launch</li>
						<li>• First 100 users onboarded</li>
					</ul>
				</div>
			),
		},
	];

	return (
		<div className="w-full">
			<HeroSection />
			<FeaturesSection />
			<Timeline data={timelineData} />
			<TestimonialsSection />
			<PricingSection />
			<FAQSection />
			<Footer />
		</div>
	);
}

export default Home;
