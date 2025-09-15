import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import Footer from '../components/footer-component'
import Navbar from '../components/navbar-component'
import './globals.css'
import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // choose weights you need
  variable: "--font-dm-sans",    // optional: expose as CSS variable
});

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
})

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
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
			<body
				 className={dmSans.className}
			>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	)
}
