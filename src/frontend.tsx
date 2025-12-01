import { Analytics } from "@vercel/analytics/react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";

// biome-ignore lint/style/noNonNullAssertion: We know this element exists.
const elem = document.getElementById("root")!;
const app = (
	<StrictMode>
		<App />
		<Analytics />
	</StrictMode>
);

if (import.meta.hot) {
	// biome-ignore lint/suspicious/noAssignInExpressions: This is intentional for HMR.
	const root = (import.meta.hot.data.root ??= createRoot(elem));
	root.render(app);
} else {
	// The hot module reloading API is not available in production.
	createRoot(elem).render(app);
}
