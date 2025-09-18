'use client'
import logoWhite from '@/public/png/Lead Logo White with white Text-02-02.png'
import { ChevronDown, Menu, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import logo from '../public/png/lead-logo-black.png'
import CustomButton from './custom-btn'
import NavLink from './navlink-component'

const Navbar = () => {
	const pathname = usePathname()
	const isHomePage = pathname === '/'
	const [openDropdown, setOpenDropdown] = useState<string | null>(null)
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false)
	const [isScrolled, setIsScrolled] = useState<boolean>(false)

	// Track scroll position and update navbar style
	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 20) {
				setIsScrolled(true)
			} else {
				setIsScrolled(false)
			}
		}

		// Add scroll event listener
		window.addEventListener('scroll', handleScroll)

		// Initial check in case page loads scrolled
		handleScroll()

		// Clean up event listener
		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen)
		setOpenDropdown(null)
	}

	const handleMobileDropdown = (dropdown: string) => {
		setOpenDropdown(openDropdown === dropdown ? null : dropdown)
	}

	return (
		<div
			className={`w-full h-16 font-[500] flex items-center justify-between px-2 lg:px-10 fixed top-0 z-[10000] transition-all duration-300
        ${
					isScrolled
						? 'bg-white shadow-[0_3px_8px_rgba(0,0,0,0.15)]'
						: 'bg-transparent'
				}
       `}
		>
			{/* Logo */}
			<NavLink
				href='/'
				onClick={isMobileMenuOpen ? toggleMobileMenu : undefined}
			>
				{isHomePage && !isScrolled ? (
					<Image className='w-35 md:w-35' src={logoWhite} alt='logo' />
				) : (
					<Image className='w-35 md:w-35' src={logo} alt='logo' />
				)}
			</NavLink>

			{/* Desktop Navigation */}
			<nav className='lg:mx-auto flex lg:justify-between items-center'>
				<div className='hidden lg:flex items-center gap-6'>
					<ul className={`flex gap-5 list-none text-text`}>
						<NavLink href={'/'}>Home</NavLink>

						<NavLink href='/about-us'>About us</NavLink>
						<li
							onMouseEnter={() => setOpenDropdown('pages')}
							onMouseLeave={() => setOpenDropdown(null)}
							className='cursor-pointer hover:text-blue-500 flex items-center gap-3 relative'
						>
							<span className={`flex items-center text-text`}>
								Pages <ChevronDown size={15} />
							</span>
							{openDropdown === 'pages' && (
								<ul className='absolute flex flex-col top-full text-text w-52 bg-white shadow-lg rounded-xl py-2 z-50'>
									<NavLink href='/services'>Services</NavLink>
									<NavLink href='/team'>Team</NavLink>
									<NavLink href='/career'>Careers</NavLink>
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
						className={`p-2 hover:text-blue-500 transition text-text`}
					>
						{isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
					</button>
				</div>
			</nav>

			{/* Desktop "Get Started" */}
			<Link
				href='/consultation'
				onClick={isMobileMenuOpen ? toggleMobileMenu : undefined}
				className='hidden lg:flex gap-4 items-center text-zinc-400'
			>
				<CustomButton title='Get Started' />
			</Link>

			{/* Mobile Menu Dropdown */}
			{isMobileMenuOpen && (
				<div className='lg:hidden absolute top-15 left-0 right-0 bg-white shadow-lg z-50'>
					<div className='px-4 py-6 space-y-2'>
						<div className='pb-4 -ml-4'>
							<NavLink href='/' onClick={toggleMobileMenu}>
								Home
							</NavLink>
						</div>
						<div className='pb-4 -ml-4 text-zinc-600'>
							<NavLink href='/about-us' onClick={toggleMobileMenu}>
								About us
							</NavLink>
						</div>
						<div className='pb-4'>
							<button
								onClick={() => handleMobileDropdown('pages')}
								className='w-full flex items-center justify-between hover:text-blue-500'
							>
								<span className={'text-text'}>Pages</span>
								<ChevronDown
									size={15}
									className={`transition-transform ${
										openDropdown === 'pages' ? 'rotate-180' : ''
									}`}
								/>
							</button>
							{openDropdown === 'pages' && (
								<div className='mt-3 pl-4 space-y-2 flex flex-col'>
									<NavLink href='/services' onClick={toggleMobileMenu}>
										Services
									</NavLink>
									<NavLink href='/team' onClick={toggleMobileMenu}>
										Team
									</NavLink>
									<NavLink href='/career' onClick={toggleMobileMenu}>
										Careers
									</NavLink>
								</div>
							)}
						</div>
						<div className='pb-4 -ml-4'>
							<NavLink href='/portfolio' onClick={toggleMobileMenu}>
								Portfolio
							</NavLink>
						</div>
						<div className='pb-4 -ml-4'>
							<NavLink href='/contact' onClick={toggleMobileMenu}>
								Contact
							</NavLink>
						</div>
					</div>
				</div>
			)}
		</div>
	)
}

export default Navbar
