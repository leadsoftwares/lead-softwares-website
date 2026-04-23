import type { Metadata } from 'next'
import { buildPageMetadata } from '@/lib/seo'

export const metadata: Metadata = buildPageMetadata({
	title: 'Contact Lead Softwares',
	description:
		'Contact Lead Softwares to discuss your project, ask questions, or get expert guidance on your next digital product.',
	path: '/contact',
})

export default function ContactLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return children
}
