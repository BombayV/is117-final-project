import { IconMinus, IconPlus } from "@tabler/icons-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const faqs = [
	{
		question: "What is your refund policy?",
		answer:
			"We offer a 30-day money-back guarantee. If you're not satisfied with our service, simply contact our support team within 30 days for a full refund.",
	},
	{
		question: "Can I cancel my subscription anytime?",
		answer:
			"Yes, you can cancel your subscription at any time. Your access will continue until the end of your current billing period.",
	},
	{
		question: "Do you offer technical support?",
		answer:
			"Absolutely! Our dedicated support team is available 24/7 to assist you with any technical issues or questions you may have.",
	},
	{
		question: "Is my data secure?",
		answer:
			"Security is our top priority. We use industry-standard encryption and security protocols to ensure your data is safe and protected.",
	},
];

export function FAQSection() {
	return (
		<section className="py-20 bg-muted/30">
			<div className="max-w-3xl mx-auto px-6 md:px-10">
				<h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
					Frequently Asked Questions
				</h2>
				<div className="space-y-4">
					{faqs.map((faq, index) => (
						<FAQItem
							key={`faq-item-${faq.question}-${index}`}
							question={faq.question}
							answer={faq.answer}
						/>
					))}
				</div>
			</div>
		</section>
	);
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="border rounded-lg bg-background overflow-hidden">
			<button
				type="button"
				onClick={() => setIsOpen(!isOpen)}
				className="w-full flex items-center justify-between p-4 text-left font-medium focus:outline-none"
			>
				<span>{question}</span>
				{isOpen ? (
					<IconMinus className="w-5 h-5" />
				) : (
					<IconPlus className="w-5 h-5" />
				)}
			</button>
			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ height: 0, opacity: 0 }}
						animate={{ height: "auto", opacity: 1 }}
						exit={{ height: 0, opacity: 0 }}
						transition={{ duration: 0.3 }}
					>
						<div className="p-4 text-muted-foreground border-t">{answer}</div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}
