'use client'
import { ChevronDown, Menu, X } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import logo from '../public/png/lead-logo-black.png'
import NavLink from './navlink-component'

const Navbar = () => {
	const [openDropdown, setOpenDropdown] = useState<string | null>(null)
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false)

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen)
		setOpenDropdown(null)
	}

	const handleMobileDropdown = (dropdown: string) => {
		setOpenDropdown(openDropdown === dropdown ? null : dropdown)
	}

	return (
		<div
			className={`w-full h-16 shadow-[0_4px_10px_rgba(0,0,0,0.15)]
 font-semibold flex items-center justify-between px-4 lg:px-10 sticky top-0 bg-white z-[10000] transition-transform duration-300
      `}
		>
			{/* Logo */}
			<NavLink href='/'>
				<Image className='w-35 md:w-35' src={logo} alt='logo' />
			</NavLink>

			{/* Desktop Navigation */}
			<nav className='lg:mx-auto flex lg:justify-between items-center'>
				<div className='hidden lg:flex items-center gap-6'>
					<ul className='flex gap-10 list-none text-zinc-400'>
						<li
						>
							<NavLink href={'/'}>Home</NavLink>
						</li>
						<NavLink href='/about-us'>About us</NavLink>
						<li
							onMouseEnter={() => setOpenDropdown('pages')}
							onMouseLeave={() => setOpenDropdown(null)}
							className='cursor-pointer hover:text-blue-500 flex items-center gap-3 relative'
						>
							<span className='flex items-center'>
								Pages <ChevronDown size={15} />
							</span>
							{openDropdown === 'pages' && (
								<ul className='absolute flex flex-col top-full text-zinc-400 w-52 bg-white shadow-lg rounded-xl py-2 z-50'>
									<NavLink href='/services'>Services</NavLink>
									<NavLink href='/pricing'>
										Pricing
									</NavLink>
									<li className='px-4 py-2 hover:text-blue-500 hover:bg-gray-100 cursor-pointer'>
										Support
									</li>
									<li className='px-4 py-2 hover:text-blue-500 hover:bg-gray-100 cursor-pointer'>
										Careers
									</li>
									<li className='px-4 py-2 hover:text-blue-500 hover:bg-gray-100 cursor-pointer'>
										Shop
									</li>
									<li className='px-4 py-2 hover:text-blue-500 hover:bg-gray-100 cursor-pointer'>
										Cart
									</li>
									<li className='px-4 py-2 hover:text-blue-500 hover:bg-gray-100 cursor-pointer'>
										Checkout
									</li>
								</ul>
							)}
						</li>
						<li className='cursor-pointer hover:text-blue-500 flex items-center gap-3'>
							<NavLink href='/portfolio'>Portfolio</NavLink>
						</li>
						<NavLink href='/contact'>Contact</NavLink>
					</ul>
				</div>

				{/* Mobile Menu Button */}
				<div className='lg:hidden flex items-center gap-4'>
					<button
						onClick={toggleMobileMenu}
						className='p-2 text-zinc-600 hover:text-blue-500 transition'
					>
						{isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
					</button>
				</div>
			</nav>

			{/* Desktop "Get Started" */}
			<div className='hidden lg:flex gap-4 items-center text-zinc-400'>
				<button className='bg-blue-500 text-white py-3 px-6 cursor-pointer hover:bg-purple-900 rounded-md transition'>
					Get Started
				</button>
			</div>

			{/* Mobile Menu Dropdown */}
			{isMobileMenuOpen && (
				<div className='lg:hidden absolute top-15 left-0 right-0 bg-white shadow-lg z-50'>
					<div className='px-4 py-6 space-y-4'>
						<div className='pb-4 -ml-4'>
							<button className='w-full flex items-center justify-between text-zinc-600 hover:text-blue-500'>
								<NavLink href='/'>Home</NavLink>
							</button>
						</div>
						<div className='pb-4 -ml-4 text-zinc-600'>
							<NavLink href='/about-us'>About us</NavLink>
						</div>
						<div className='pb-4'>
							<button
								onClick={() => handleMobileDropdown('pages')}
								className='w-full flex items-center justify-between text-zinc-400 hover:text-blue-500'
							>
								<span>Pages</span>
								<ChevronDown
									size={15}
									className={`transition-transform ${
										openDropdown === 'pages' ? 'rotate-180' : ''
									}`}
								/>
							</button>
							{openDropdown === 'pages' && (
								<div className='mt-3 pl-4 space-y-2'>
									<div className='py-2 text-zinc-500 hover:text-blue-500'>
										Services
									</div>
									<div className='py-2 text-zinc-500 hover:text-blue-500'>
										Pricing
									</div>
									<div className='py-2 text-zinc-500 hover:text-blue-500'>
										Support
									</div>
									<div className='py-2 text-zinc-500 hover:text-blue-500'>
										Careers
									</div>
									<div className='py-2 text-zinc-500 hover:text-blue-500'>
										Shop
									</div>
									<div className='py-2 text-zinc-500 hover:text-blue-500'>
										Cart
									</div>
									<div className='py-2 text-zinc-500 hover:text-blue-500'>
										Checkout
									</div>
								</div>
							)}
						</div>
						<div className='pb-4 -ml-4'>
							<NavLink href='/portfolio'>Portfolio</NavLink>
						</div>
						<div className='pb-4 -ml-4'>
							<NavLink href='/contact'>Contact</NavLink>
						</div>
					</div>
				</div>
			)}
		</div>
	)
}

export default Navbar
