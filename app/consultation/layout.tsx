import type { Metadata } from 'next'
import { buildPageMetadata } from '@/lib/seo'

export const metadata: Metadata = buildPageMetadata({
	title: 'Book a Consultation',
	description:
		'Book a consultation with Lead Softwares to plan your web, mobile, or custom software project with clarity and confidence.',
	path: '/consultation',
})

export default function ConsultationLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return children
}
