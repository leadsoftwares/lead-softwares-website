import type { Metadata } from 'next'
import { buildPageMetadata } from '@/lib/seo'

export const metadata: Metadata = buildPageMetadata({
	title: 'About Lead Softwares',
	description:
		'Learn about Lead Softwares, our mission, and the team building scalable digital products for modern businesses.',
	path: '/about',
})

export default function AboutLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return children
}
