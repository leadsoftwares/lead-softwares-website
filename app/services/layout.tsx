import type { Metadata } from 'next'
import { buildPageMetadata } from '@/lib/seo'

export const metadata: Metadata = buildPageMetadata({
	title: 'Software Development Services',
	description:
		'Explore Lead Softwares services including custom software development, web apps, mobile apps, and product design for growing businesses.',
	path: '/services',
})

export default function ServicesLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return children
}
