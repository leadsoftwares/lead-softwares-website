import AliIMG from '@/public/png/Lead Software Team Images Transparent/Ali Haider.png'
import KhuramIMG from '@/public/png/Lead Software Team Images Transparent/Khuram.png'
import LuisIMG from '@/public/png/Lead Software Team Images Transparent/Luis.png'
import SufiyanIMG from '@/public/png/Lead Software Team Images Transparent/Sufian.png'
import { Facebook, Linkedin, Twitter } from 'lucide-react'

export const teamMembers = [
	{
		id: 1,
		name: 'Khuram Iftikhar',
		role: 'Founder & CEO',
		img: KhuramIMG,
		socials: [
			{ href: 'https://facebook.com', icon: Facebook, label: 'Facebook' },
			{
				href: 'https://www.linkedin.com/in/muhamad-khuram-iftikhar-873624202/',
				icon: Linkedin,
				label: 'LinkedIn',
			},
			{ href: 'https://twitter.com', icon: Twitter, label: 'Twitter' },
		],
	},
	{
		id: 2,
		name: 'Luis Henrique',
		role: 'Co Founder',
		img: LuisIMG,
		socials: [
			{ href: 'https://facebook.com', icon: Facebook, label: 'Facebook' },
			{ href: 'https://linkedin.com', icon: Linkedin, label: 'LinkedIn' },
			{ href: 'https://twitter.com', icon: Twitter, label: 'Twitter' },
		],
	},
	{
		id: 3,
		name: 'Ali Haider',
		role: 'COO',
		img: AliIMG,
		socials: [
			{
				href: 'https://instagram.com/ranaalihydr',
				icon: Facebook,
				label: 'Facebook',
			},
			{
				href: 'https://www.linkedin.com/in/ali-haider-ab45a3197/',
				icon: Linkedin,
				label: 'LinkedIn',
			},
			{ href: 'https://twitter.com', icon: Twitter, label: 'Twitter' },
		],
	},
	{
		id: 4,
		name: 'Sufiyan Nadeem',
		role: 'CFO',
		img: SufiyanIMG,
		socials: [
			{ href: 'https://facebook.com', icon: Facebook, label: 'Facebook' },
			{ href: 'https://linkedin.com', icon: Linkedin, label: 'LinkedIn' },
			{ href: 'https://twitter.com', icon: Twitter, label: 'Twitter' },
		],
	},
]