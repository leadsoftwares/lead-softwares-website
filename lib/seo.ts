import type { Metadata } from 'next'

const DEFAULT_SITE_URL = 'https://leadsoftwares.com'

export const siteConfig = {
	name: 'Lead Softwares',
	siteUrl: process.env.NEXT_PUBLIC_SITE_URL || DEFAULT_SITE_URL,
	description:
		'Lead Softwares builds custom web, mobile, and business software solutions that help companies grow with smarter technology.',
	keywords: [
		'Lead Softwares',
		'software house',
		'custom software development',
		'web development company',
		'mobile app development',
		'UI UX design',
		'business software solutions',
	],
}

export function buildPageMetadata({
	title,
	description,
	path = '/',
}: {
	title: string
	description: string
	path?: string
}): Metadata {
	const canonicalPath = path === '/' ? '/' : `/${path.replace(/^\/+/, '')}`
	const canonicalUrl = new URL(canonicalPath, siteConfig.siteUrl)

	return {
		title,
		description,
		keywords: siteConfig.keywords,
		alternates: {
			canonical: canonicalUrl,
		},
		openGraph: {
			title,
			description,
			url: canonicalUrl,
			siteName: siteConfig.name,
			type: 'website',
			locale: 'en_US',
			images: [
				{
					url: '/webp/logo.webp',
					width: 1200,
					height: 630,
					alt: `${siteConfig.name} logo`,
				},
			],
		},
		twitter: {
			card: 'summary_large_image',
			title,
			description,
			images: ['/webp/logo.webp'],
		},
	}
}
