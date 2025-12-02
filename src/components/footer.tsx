import { Logo, LogoText } from "@/components/shadcnblocks/logo";

interface MenuItem {
	title: string;
	links: {
		text: string;
		url: string;
	}[];
}

interface Footer2Props {
	logo?: {
		url: string;
		src: string;
		alt: string;
		title: string;
	};
	tagline?: string;
	menuItems?: MenuItem[];
	copyright?: string;
	bottomLinks?: {
		text: string;
		url: string;
	}[];
}

const Footer = ({
	logo = {
		src: "https://cdn.public.khandesign.net/kd_gradient_logo.png",
		alt: "Khan Design Web Logo",
		title: "Khan Design Web",
		url: "https://khandesign.net/links",
	},
	tagline = "Creating beautiful web experiences one block at a time.",
	menuItems = [
		{
			title: "Main",
			links: [
				{ text: "Home", url: "/" },
				{ text: "Contact", url: "/contact" },
			],
		},
		{
			title: "KD Network",
			links: [
				{ text: "Links", url: "https://khandesign.net/links" },
				{ text: "Residential", url: "https://khandesign.net/residential" },
				{ text: "Business", url: "https://khandesign.net/business" },
				{
					text: "Start a Project",
					url: "https://khandesign.net/startaproject",
				},
			],
		},
		{
			title: "Social",
			links: [
				{ text: "Links", url: "https://khandesign.net/links" },
				{ text: "Media", url: "https://khandesign.net/media" },
				{
					text: "Instagram",
					url: "https://www.instagram.com/khandesignpro/",
				},
				{
					text: "LinkedIn",
					url: "https://www.linkedin.com/company/khan-design/",
				},
			],
		},
	],
	copyright = "© 2025 Mohammed Khan. All rights reserved.",
	bottomLinks = [
		{ text: "Terms and Conditions", url: "https://khandesign.net/terms" },
		{ text: "Privacy Policy", url: "https://khandesign.net/privacy" },
	],
}: Footer2Props) => {
	return (
		<section className="pb-8 w-full border-t pt-16">
			<div className="w-full">
				<footer>
					<div className="grid grid-cols-2 gap-8 lg:grid-cols-6 px-6 md:px-8 max-w-7xl mx-auto">
						<div className="col-span-2 mb-8 lg:mb-0">
							<div className="flex items-center gap-2 lg:justify-start">
								<Logo url={logo.url}>
									<LogoText className="text-xl">{logo.title}</LogoText>
								</Logo>
							</div>
							<p className="mt-4 font-light">{tagline}</p>
						</div>
						{menuItems.map((section, sectionIdx) => (
							<div key={`footer-section-${section.title}-${sectionIdx}`}>
								<h3 className="mb-4 font-bold">{section.title}</h3>
								<ul className="text-muted-foreground space-y-4">
									{section.links.map((link, linkIdx) => (
										<li
											key={`${link.text}-${linkIdx}`}
											className="hover:text-primary font-medium"
										>
											<a href={link.url}>{link.text}</a>
										</li>
									))}
								</ul>
							</div>
						))}
					</div>
					<div className="text-muted-foreground mt-24 flex flex-col justify-between gap-4 border-t pt-8 text-sm font-medium md:flex-row md:items-center px-6 md:px-8 max-w-7xl mx-auto">
						<p>{copyright}</p>
						<ul className="flex gap-4">
							{bottomLinks.map((link, linkIdx) => (
								<li
									key={`${link.text}-${linkIdx}`}
									className="hover:text-primary underline"
								>
									<a href={link.url}>{link.text}</a>
								</li>
							))}
						</ul>
					</div>
				</footer>
			</div>
		</section>
	);
};

export { Footer };
