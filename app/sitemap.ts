import type { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/seo'

const routes = [
	'',
	'about',
	'services',
	'portfolio',
	'team',
	'contact',
	'consultation',
	'career',
	'privacy-policy',
]

export default function sitemap(): MetadataRoute.Sitemap {
	return routes.map((route) => ({
		url: route
			? `${siteConfig.siteUrl}/${route}`
			: `${siteConfig.siteUrl}/`,
		changeFrequency: route === '' ? 'weekly' : 'monthly',
		priority: route === '' ? 1 : 0.7,
	}))
}
