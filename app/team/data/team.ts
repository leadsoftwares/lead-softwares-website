import AliIMG from '@/public/png/Lead Software Team Images Transparent/Ali Haider.png'
import KhuramIMG from '@/public/png/Lead Software Team Images Transparent/Khuram.png'
import LuisIMG from '@/public/png/Lead Software Team Images Transparent/Luis.png'
import SufiyanIMG from '@/public/png/Lead Software Team Images Transparent/Sufian.png'
import AhmadIMG from '@/public/png/Lead Software Team Images Transparent/Ahmad.png'
import FazeelIMG from '@/public/png/Lead Software Team Images Transparent/Fazeel.png'
import HassanIMG from '@/public/png/Lead Software Team Images Transparent/Hassan.png'
import JunaidIMG from '@/public/png/Lead Software Team Images Transparent/Juniad.png'
import RimshaIMG from '@/public/png/Lead Software Team Images Transparent/Rimsha.png'
import RomanIMG from '@/public/png/Lead Software Team Images Transparent/Roman.png'
import ShahzadIMG from '@/public/png/Lead Software Team Images Transparent/Shehzad.png'
import ZaeemIMG from '@/public/png/Lead Software Team Images Transparent/Zaeem.png'
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

export const teamStaff = [
	{
		id: 1,
		name: 'Ahmad Yar',
		role: 'Web Team Lead',
		img: AhmadIMG,
	},
	{
		id: 2,
		name: 'Junaid Mureed',
		role: 'Backend Team Lead',
		img: JunaidIMG,
	},
	{
		id: 3,
		name: 'Ume Roman',
		role: 'UI/UX Designer',
		img: RomanIMG,
	},
	{
		id: 4,
		name: 'Rimsha Ramzan',
		role: 'Mobile Developer',
		img: RimshaIMG,
	},
	{
		id: 5,
		name: 'Hassan Sajjad',
		role: 'Web Developer',
		img: HassanIMG,
	},
	{
		id: 6,
		name: 'Muhammad Shahzad',
		role: 'Mobile Developer',
		img: ShahzadIMG,
	},
	{
		id: 7,
		name: 'Muhammad Zaeem',
		role: 'Web Developer',
		img: ZaeemIMG,
	},
	{
		id: 8,
		name: 'Fazeel Ahmad',
		role: 'QA Engineer',
		img: FazeelIMG,
	},
]