import { Loader2, Mail, MapPin, Phone } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

export default function ContactPage() {
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		message: "",
	});
	const [status, setStatus] = useState<
		"idle" | "loading" | "success" | "error"
	>("idle");

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setStatus("loading");
		try {
			const res = await fetch("/api/contact", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(formData),
			});
			if (res.ok) {
				setStatus("success");
				setFormData({ firstName: "", lastName: "", email: "", message: "" });
				setTimeout(() => setStatus("idle"), 3000);
			} else {
				setStatus("error");
			}
		} catch (error) {
			console.log("Error submitting contact form:", error);
			setStatus("error");
		}
	};

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		setFormData({ ...formData, [e.target.id]: e.target.value });
	};

	return (
		<div className="relative w-full min-h-screen flex flex-col">
			<div className="flex-1 container mx-auto px-4 py-20">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className="text-center mb-16"
				>
					<h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-linear-to-b from-foreground to-foreground/70">
						Get in Touch
					</h1>
					<p className="text-muted-foreground text-lg max-w-2xl mx-auto">
						Have a question or want to work together? We'd love to hear from
						you.
					</p>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5, delay: 0.2 }}
					>
						<Card className="h-full">
							<CardHeader>
								<CardTitle>Contact Information</CardTitle>
								<CardDescription>
									Reach out to us through any of these channels.
								</CardDescription>
							</CardHeader>
							<CardContent className="space-y-6">
								<div className="flex items-center space-x-4">
									<div className="bg-primary/10 p-3 rounded-full">
										<Mail className="w-6 h-6 text-primary" />
									</div>
									<div>
										<p className="font-medium">Email</p>
										<p className="text-muted-foreground">
											hello@khandesign.net
										</p>
									</div>
								</div>
								<div className="flex items-center space-x-4">
									<div className="bg-primary/10 p-3 rounded-full">
										<Phone className="w-6 h-6 text-primary" />
									</div>
									<div>
										<p className="font-medium">Phone</p>
										<p className="text-muted-foreground">+1 (857) 214-4386</p>
									</div>
								</div>
								<div className="flex items-center space-x-4">
									<div className="bg-primary/10 p-3 rounded-full">
										<MapPin className="w-6 h-6 text-primary" />
									</div>
									<div>
										<p className="font-medium">Office</p>
										<p className="text-muted-foreground">
											1 Grant St. Suite B-4, Framingham MA, 01702
										</p>
									</div>
								</div>
							</CardContent>
						</Card>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: 20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5, delay: 0.4 }}
					>
						<Card>
							<CardHeader>
								<CardTitle>Send us a Message</CardTitle>
								<CardDescription>
									Fill out the form below and we'll get back to you as soon as
									possible.
								</CardDescription>
							</CardHeader>
							<CardContent>
								<form className="space-y-4" onSubmit={handleSubmit}>
									<div className="grid grid-cols-2 gap-4">
										<div className="space-y-2">
											<label
												htmlFor="firstName"
												className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
											>
												First name
											</label>
											<input
												id="firstName"
												value={formData.firstName}
												onChange={handleChange}
												required
												className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
												placeholder="John"
											/>
										</div>
										<div className="space-y-2">
											<label
												htmlFor="lastName"
												className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
											>
												Last name
											</label>
											<input
												id="lastName"
												value={formData.lastName}
												onChange={handleChange}
												required
												className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
												placeholder="Doe"
											/>
										</div>
									</div>
									<div className="space-y-2">
										<label
											htmlFor="email"
											className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
										>
											Email
										</label>
										<input
											id="email"
											type="email"
											value={formData.email}
											onChange={handleChange}
											required
											className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
											placeholder="john@example.com"
										/>
									</div>
									<div className="space-y-2">
										<label
											htmlFor="message"
											className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
										>
											Message
										</label>
										<textarea
											id="message"
											value={formData.message}
											onChange={handleChange}
											required
											className="flex min-h-[120px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
											placeholder="How can we help you?"
										/>
									</div>
									<Button className="w-full" disabled={status === "loading"}>
										{status === "loading" ? (
											<>
												<Loader2 className="mr-2 h-4 w-4 animate-spin" />
												Sending...
											</>
										) : (
											"Send Message"
										)}
									</Button>
									{status === "success" && (
										<p className="text-green-500 text-sm text-center mt-2">
											Message sent successfully!
										</p>
									)}
									{status === "error" && (
										<p className="text-red-500 text-sm text-center mt-2">
											Something went wrong. Please try again.
										</p>
									)}
								</form>
							</CardContent>
						</Card>
					</motion.div>
				</div>
			</div>
			<Footer />
		</div>
	);
}
