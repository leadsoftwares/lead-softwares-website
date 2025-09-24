import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'
import Footer from '../components/footer-component'
import MicrosoftClarity from '../components/microsoft-clarity'
import Navbar from '../components/navbar-component'
import ScrollToTop from '../components/scroll-to-top'
import './globals.css'
// Initialize Firebase
import SmoothScroll from '@/components/smoothScroll'
import '../lib/firebase'
import Fav from "@/public/png/White-01.png"

const dmSans = DM_Sans({
	subsets: ['latin'],
	weight: ['400', '500', '700'], // choose weights you need
	variable: '--font-dm-sans', // optional: expose as CSS variable
})

export const metadata: Metadata = {
	title: 'Lead Softwares',
	description: 'Created by Hassan King',
	icons: {
		icon: '/png/White-01.png',
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
				<SmoothScroll>
					<MicrosoftClarity />
				
					{children}
					<Footer />
				</SmoothScroll>
				<ScrollToTop />
			</body>
		</html>
	)
}
