import { serve } from "bun";
import index from "./index.html";

const server = serve({
	routes: {
		// Serve index.html for all unmatched routes.
		"/*": index,

		"/api/contact": {
			async POST(req) {
				const body = await req.json();
				console.log("Contact form submission:", body);
				// TODO: Integrate email service here (e.g., Resend, Nodemailer)
				return Response.json({
					message: "Message sent successfully!",
				});
			},
		},
	},

	development: process.env.NODE_ENV !== "production" && {
		// Enable browser hot reloading in development
		hmr: true,

		// Echo console logs from the browser to the server
		console: true,
	},
});

console.log(`🚀 Server running at ${server.url}`);
