import ScrollToTop from '@/components/scroll-to-top'
import SmoothScroll from '@/components/smoothScroll'
import { buildPageMetadata, siteConfig } from '@/lib/seo'
import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'
import Script from 'next/script'
import Footer from '../components/footer-component'
import MicrosoftClarity from '../components/microsoft-clarity'
import Navbar from '../components/navbar-component'
import '../lib/firebase'
import './globals.css'

const homeMetadata = buildPageMetadata({
	title: siteConfig.name,
	description: siteConfig.description,
	path: '/',
})

const dmSans = DM_Sans({
	subsets: ['latin'],
	weight: ['400', '500', '700'],
	variable: '--font-dm-sans',
})

export const metadata: Metadata = {
	metadataBase: new URL(siteConfig.siteUrl),
	title: {
		default: siteConfig.name,
		template: `%s | ${siteConfig.name}`,
	},
	description: siteConfig.description,
	keywords: siteConfig.keywords,
	applicationName: siteConfig.name,
	category: 'technology',
	authors: [{ name: siteConfig.name, url: siteConfig.siteUrl }],
	creator: siteConfig.name,
	publisher: siteConfig.name,
	alternates: {
		canonical: homeMetadata.alternates?.canonical || '/',
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-image-preview': 'large',
			'max-snippet': -1,
			'max-video-preview': -1,
		},
	},
	openGraph: homeMetadata.openGraph,
	twitter: homeMetadata.twitter,
	icons: {
		icon: '/White-01.png',
	},
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	const organizationSchema = {
		'@context': 'https://schema.org',
		'@type': 'Organization',
		name: siteConfig.name,
		url: siteConfig.siteUrl,
		logo: `${siteConfig.siteUrl}/webp/logo.webp`,
		email: 'contact@leadsoftwares.com',
		sameAs: ['https://www.facebook.com/leadsoft'],
	}

	return (
		<html lang='en'>
			<body className={dmSans.className} suppressHydrationWarning>
				<Script
					id='organization-schema'
					type='application/ld+json'
					strategy='beforeInteractive'
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(organizationSchema),
					}}
				/>
				<Navbar />
				<ScrollToTop />
				<SmoothScroll>
					<MicrosoftClarity />
					{children}
					<Footer />
				</SmoothScroll>
			</body>
		</html>
	)
}
