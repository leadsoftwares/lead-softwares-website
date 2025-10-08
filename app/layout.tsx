import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'
import Footer from '../components/footer-component'
import MicrosoftClarity from '../components/microsoft-clarity'
import Navbar from '../components/navbar-component'
import './globals.css'
import SmoothScroll from '@/components/smoothScroll'
import '../lib/firebase'
import ScrollToTop from '@/components/scroll-to-top'
const dmSans = DM_Sans({
	subsets: ['latin'],
	weight: ['400', '500', '700'],
	variable: '--font-dm-sans',
})

export const metadata: Metadata = {
	title: 'Lead Softwares',
	description: 'Created by Leads',
	icons: {
		icon: '/White-01.png',
	},
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={dmSans.className} suppressHydrationWarning>
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
