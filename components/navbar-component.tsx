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
		setOpenDropdown(null) // Close any open dropdowns when toggling mobile menu
	}

	const handleMobileDropdown = (dropdown: string) => {
		setOpenDropdown(openDropdown === dropdown ? null : dropdown)
	}

	return (
		<div className='w-full h-16 flex items-center px-4 lg:px-10 sticky top-0 bg-white z-10000'>
			<div className='logo'>
				<Image className='w-35 md:w-35' src={logo} alt='logo' />
			</div>
			<nav className='mx-auto flex justify-between items-center'>
				{/* Logo */}

				{/* Desktop Navigation */}
				<div className='hidden lg:flex items-center gap-6'>
					<ul className='flex gap-10 list-none text-zinc-400'>
						<li
							onMouseEnter={() => setOpenDropdown('home')}
							onMouseLeave={() => setOpenDropdown(null)}
							className='relative cursor-pointer hover:text-blue-500 flex items-center gap-3'
						>
							<NavLink href={'/'}>
								Home
							</NavLink>
						</li>

						<NavLink href='/about-us'>About us</NavLink>

						<li
							onMouseEnter={() => setOpenDropdown('pages')}
							onMouseLeave={() => setOpenDropdown(null)}
							className='cursor-pointer hover:text-blue-500 flex items-center gap-3'
						>
							<span className='flex items-center'>
								Pages <ChevronDown size={15} />
							</span>
							{openDropdown === 'pages' && (
								<ul className='absolute text-zinc-400 mt-80 w-52 bg-white shadow-lg rounded-xl py-2 z-110'>
									<NavLink href='/services'>Services</NavLink>
									<li className='px-4 py-2 hover:text-blue-500 hover:bg-gray-100 cursor-pointer'>
										Pricing
									</li>
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

						<li
							className='cursor-pointer hover:text-blue-500 flex items-center gap-3'
						>
							<NavLink href='/portfolio'>	
								Portfolio
							</NavLink>
						</li>
						<NavLink href='/contact'>Contact</NavLink>
					</ul>

					
				</div>
				

				{/* Mobile Menu Button & Icons */}
				<div className='lg:hidden flex items-center gap-4'>
					{/* Mobile Icons */}
					<div className='flex gap-3 text-zinc-400'></div>

					{/* Hamburger Menu */}
					<button
						onClick={toggleMobileMenu}
						className='p-2 text-zinc-600 hover:text-blue-500 transition'
					>
						{isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
					</button>
				</div>
			</nav>
			<div className='hidden icons-btn lg:flex gap-4 items-center text-zinc-400'>
						<button className='bg-blue-500 text-white py-3 px-6 cursor-pointer hover:bg-purple-900 rounded-md transition'>
							Get Started
						</button>
					</div>

			{/* Mobile Menu Dropdown */}
			{isMobileMenuOpen && (
				<div className='lg:hidden absolute top-25 left-0 right-0 bg-white shadow-lg z-50'>
					<div className='px-4 py-6 space-y-4'>
						{/* Home */}
						<div className='pb-4'>
							<button
								onClick={() => handleMobileDropdown('home')}
								className='w-full flex items-center justify-between text-zinc-400 hover:text-blue-500'
							>
								<span>Home</span>
								<ChevronDown
									size={15}
									className={`transition-transform ${
										openDropdown === 'home' ? 'rotate-180' : ''
									}`}
								/>
							</button>
							{openDropdown === 'home' && (
								<div className='mt-3 pl-4 space-y-2'>
									<div className='flex justify-between items-center py-2 text-zinc-500 hover:text-blue-500'>
										Main
										<span className='text-xs font-semibold px-2 py-0.5 rounded-full bg-red-100 text-red-600'>
											HOT
										</span>
									</div>
									<div className='flex justify-between items-center py-2 text-zinc-500 hover:text-blue-500'>
										Agency Style
										<span className='text-xs font-semibold px-2 py-0.5 rounded-full bg-green-100 text-green-600'>
											NEW
										</span>
									</div>
									<div className='-ml-4 my-3'>
										<NavLink href={'/'}>Business Style</NavLink>
									</div>
									<div className='py-2 text-zinc-500 hover:text-blue-500'>
										SaaS Style
									</div>
									<div className='py-2 text-zinc-500 hover:text-blue-500'>
										Technology Style
									</div>
								</div>
							)}
						</div>

						{/* About us */}
						<div className='pb-4 -ml-4'>
							<NavLink href='/about-us'>About us</NavLink>
						</div>

						{/* Pages */}
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

						{/* Features */}
						<div className='pb-4'>
							<button
								onClick={() => handleMobileDropdown('features')}
								className='w-full flex items-center justify-between text-zinc-400 hover:text-blue-500'
							>
								<span>Features</span>
								<ChevronDown
									size={15}
									className={`transition-transform ${
										openDropdown === 'features' ? 'rotate-180' : ''
									}`}
								/>
							</button>
							{openDropdown === 'features' && (
								<div className='mt-3 pl-4 space-y-3'>
									<div>
										<div className='font-medium text-zinc-700 mb-2'>Intro</div>
										<div className='space-y-1 text-sm'>
											<div className='py-1 text-zinc-500 hover:text-blue-500'>
												Headers
											</div>
											<div className='py-1 text-zinc-500 hover:text-blue-500'>
												Hero Sections
											</div>
											<div className='py-1 text-zinc-500 hover:text-blue-500'>
												Page Headers
											</div>
											<div className='py-1 text-zinc-500 hover:text-blue-500'>
												Section Patterns
											</div>
											<div className='py-1 text-zinc-500 hover:text-blue-500'>
												Shape Dividers
											</div>
										</div>
									</div>
									<div>
										<div className='font-medium text-zinc-700 mb-2'>
											Main Content
										</div>
										<div className='space-y-1 text-sm'>
											<div className='py-1 text-zinc-500 hover:text-blue-500'>
												Headings Styles
											</div>
											<div className='py-1 text-zinc-500 hover:text-blue-500'>
												Services Styles
											</div>
											<div className='py-1 text-zinc-500 hover:text-blue-500'>
												Pricing Styles
											</div>
											<div className='py-1 text-zinc-500 hover:text-blue-500'>
												Testimonials
											</div>
										</div>
									</div>
									<div>
										<div className='font-medium text-zinc-700 mb-2'>More</div>
										<div className='space-y-1 text-sm'>
											<div className='py-1 text-zinc-500 hover:text-blue-500'>
												Portfolio Styles
											</div>
											<div className='py-1 text-zinc-500 hover:text-blue-500'>
												Blog Elements
											</div>
											<div className='py-1 text-zinc-500 hover:text-blue-500'>
												Call to Auctions
											</div>
											<div className='py-1 text-zinc-500 hover:text-blue-500'>
												Counters
											</div>
											<div className='py-1 text-zinc-500 hover:text-blue-500'>
												WooCommerce
											</div>
										</div>
									</div>
								</div>
							)}
						</div>

						{/* Blog */}
						<div className='pb-4'>
							<button
								onClick={() => handleMobileDropdown('blog')}
								className='w-full flex items-center justify-between text-zinc-400 hover:text-blue-500'
							>
								<span>Blog</span>
								<ChevronDown
									size={15}
									className={`transition-transform ${
										openDropdown === 'blog' ? 'rotate-180' : ''
									}`}
								/>
							</button>
							{openDropdown === 'blog' && (
								<div className='mt-3 pl-4 space-y-2'>
									<div className='py-2 text-zinc-500 hover:text-blue-500'>
										Single Centered
									</div>
									<div className='py-2 text-zinc-500 hover:text-blue-500'>
										Single with Gradient
									</div>
									<div className='py-2 text-zinc-500 hover:text-blue-500'>
										Single with Image
									</div>
									<div className='py-2 text-zinc-500 hover:text-blue-500'>
										Single with Sidebar
									</div>
								</div>
							)}
						</div>

						{/* Contact */}
						<div className='pb-4'>
							<div className='text-zinc-600 hover:text-blue-500 cursor-pointer'>
								Contact
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	)
}

export default Navbar
