type DynamicRoutes = {
	
};

type Layouts = {
	"/": undefined;
	"/api": undefined;
	"/api/contact": undefined;
	"/contact": undefined;
	"/projects": undefined;
	"/resume": undefined;
	"/sitemap.xml": undefined
};

export type RouteId = "/" | "/api" | "/api/contact" | "/contact" | "/projects" | "/resume" | "/sitemap.xml";

export type RouteParams<T extends RouteId> = T extends keyof DynamicRoutes ? DynamicRoutes[T] : Record<string, never>;

export type LayoutParams<T extends RouteId> = Layouts[T] | Record<string, never>;

export type Pathname = "/" | "/api" | "/api/contact" | "/contact" | "/projects" | "/resume" | "/sitemap.xml";

export type ResolvedPathname = `${"" | `/${string}`}${Pathname}`;

export type Asset = "/favicon.png";