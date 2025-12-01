import { Link } from "wouter";

export function NotFound() {
	return (
		<div className="flex min-h-screen flex-col items-center justify-center px-4 py-12">
			<div className="text-center">
				<h1 className="text-8xl font-bold text-primary md:text-9xl">404</h1>
				<p className="mt-4 text-2xl font-semibold text-foreground md:text-3xl">
					Page Not Found
				</p>
				<p className="mt-2 text-lg text-muted-foreground">
					Sorry, the page you're looking for doesn't exist.
				</p>
				<div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
					<Link
						to="/"
						className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
					>
						Go Home
					</Link>
					<Link
						to="/projects"
						className="inline-flex items-center justify-center rounded-lg border border-border bg-background px-6 py-3 font-semibold text-foreground transition-colors hover:bg-muted"
					>
						View Projects
					</Link>
				</div>
			</div>
		</div>
	);
}

export default NotFound;
