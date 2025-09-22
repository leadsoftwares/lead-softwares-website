import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'
import Footer from '../components/footer-component'
import MicrosoftClarity from '../components/microsoft-clarity'
import Navbar from '../components/navbar-component'
import './globals.css'
// Initialize Firebase
import '../lib/firebase'
import SmoothScroll from '@/components/smoothScroll'

const dmSans = DM_Sans({
	subsets: ['latin'],
	weight: ['400', '500', '700'], // choose weights you need
	variable: '--font-dm-sans', // optional: expose as CSS variable
})

export const metadata: Metadata = {
	title: 'Lead Softwares',
	description: 'Created by Hassan King',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={dmSans.className} suppressHydrationWarning>
				<SmoothScroll>
				<MicrosoftClarity />
				<Navbar />
				{children}
				<Footer />
				</SmoothScroll>
			</body>
		</html>
	)
}
