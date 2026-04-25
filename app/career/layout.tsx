import type { Metadata } from 'next'
import { buildPageMetadata } from '@/lib/seo'

export const metadata: Metadata = buildPageMetadata({
	title: 'Careers',
	description:
		'Explore career opportunities at Lead Softwares and join a team building thoughtful digital products and software solutions.',
	path: '/career',
})

export default function CareerLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return children
}
