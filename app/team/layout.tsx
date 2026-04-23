import type { Metadata } from 'next'
import { buildPageMetadata } from '@/lib/seo'

export const metadata: Metadata = buildPageMetadata({
	title: 'Our Team',
	description:
		'Meet the Lead Softwares team behind our web, mobile, and digital product delivery for ambitious businesses.',
	path: '/team',
})

export default function TeamLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return children
}
