"use client";

import { motion } from "motion/react";
import KhanDesign from "@/lib/assets/khandesign.png";

export default function HeroSection() {
	return (
		<div className="relative mx-auto my-10 flex max-w-7xl flex-col items-center justify-center">
			<div className="absolute inset-y-0 left-0 h-full w-px bg-border/50">
				<div className="absolute top-0 h-40 w-px bg-linear-to-b from-transparent via-primary to-transparent" />
			</div>
			<div className="absolute inset-y-0 right-0 h-full w-px bg-border/50">
				<div className="absolute h-40 w-px bg-linear-to-b from-transparent via-primary to-transparent" />
			</div>
			<div className="absolute inset-x-0 bottom-0 h-px w-full bg-border/50">
				<div className="absolute mx-auto h-px w-40 bg-linear-to-r from-transparent via-primary to-transparent" />
			</div>
			<div className="px-4 py-10 md:py-20">
				<h1 className="relative z-10 mx-auto max-w-4xl text-center text-4xl md:text-6xl mb-4 text-text">
					{"Launch your website in hours, not days"
						.split(" ")
						.map((word, index) => (
							<motion.span
								key={`hero-word-${word}`}
								initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
								animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
								transition={{
									duration: 0.3,
									delay: index * 0.1,
									ease: "easeInOut",
								}}
								className="mr-2 inline-block"
							>
								{word}
							</motion.span>
						))}
				</h1>
				<motion.p
					initial={{
						opacity: 0,
					}}
					animate={{
						opacity: 1,
					}}
					transition={{
						duration: 0.3,
						delay: 0.8,
					}}
					className="relative z-10 mx-auto max-w-xl py-4 text-center text-muted-foreground text-base md:text-lg"
				>
					With Khan Design's professional services, get your website up and
					running in no time. Our expert team ensures a seamless experience from
					start to finish.
				</motion.p>
				<motion.div
					initial={{
						opacity: 0,
					}}
					animate={{
						opacity: 1,
					}}
					transition={{
						duration: 0.3,
						delay: 1,
					}}
					className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4"
				>
					<a
						href="https://khandesign.net/start"
						className="w-60 transform text-center rounded-lg bg-primary px-6 py-2 font-medium text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:opacity-90"
					>
						Explore Now
					</a>
					<a
						href="https://clients.khandesign.net"
						className="w-60 transform rounded-lg text-center border border-border bg-background px-6 py-2 font-medium text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-muted"
					>
						View Projects
					</a>
				</motion.div>
				<motion.div
					initial={{
						opacity: 0,
						y: 10,
					}}
					animate={{
						opacity: 1,
						y: 0,
					}}
					transition={{
						duration: 0.3,
						delay: 1.2,
					}}
					className="relative z-10 mt-20 rounded-3xl border border-border bg-card p-4 shadow-md"
				>
					<div className="w-full overflow-hidden rounded-xl border border-border">
						<img
							src={KhanDesign}
							alt="Landing page preview"
							className="aspect-[16/9] h-auto w-full object-cover"
							height={1000}
							width={1000}
						/>
					</div>
				</motion.div>
			</div>
		</div>
	);
}
