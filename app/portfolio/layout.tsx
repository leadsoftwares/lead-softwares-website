import type { Metadata } from 'next'
import { buildPageMetadata } from '@/lib/seo'

export const metadata: Metadata = buildPageMetadata({
	title: 'Portfolio',
	description:
		'See how Lead Softwares turns ideas into successful web and mobile products across multiple industries and platforms.',
	path: '/portfolio',
})

export default function PortfolioLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return children
}
