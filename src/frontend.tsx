import { Analytics } from "@vercel/analytics/react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Route, Switch } from "wouter";
import ContactPage from "./pages/contact";
import { Home } from "./pages/Home";
import "@/styles/globals.css";
import { HomeIcon, QrCode } from "lucide-react";
import { FloatingDock } from "./components/ui/floating-dock";
import NotFound from "./pages/404";

const DOCK_ITEMS = [
	{
		title: "Home",
		icon: <HomeIcon />,
		href: "/",
	},
	{
		title: "Contact",
		icon: <QrCode />,
		href: "/contact",
	},
];

// biome-ignore lint/style/noNonNullAssertion: We know this element exists.
const elem = document.getElementById("root")!;
const app = (
	<StrictMode>
		<Switch>
			<Route path="/" component={Home}></Route>
			<Route path="/contact" component={ContactPage}></Route>
			<Route component={NotFound}></Route>
		</Switch>
		<FloatingDock
			desktopClassName="fixed bottom-0 left-1/2 -translate-x-1/2 mb-6"
			mobileClassName="fixed bottom-4 right-4"
			items={DOCK_ITEMS}
		/>
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
