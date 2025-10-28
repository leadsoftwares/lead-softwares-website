'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

type NavLinkProps = {
	href: string
	children: React.ReactNode
	exact?: boolean
	onClick?: () => void
}

export default function NavLink({
	href,
	children,
	exact = false,
	onClick,
}: NavLinkProps) {
	const pathname = usePathname()

	let isActive
	if (href === '/') {
		// Only active if exactly root
		isActive = pathname === '/'
	} else {
		isActive = exact ? pathname === href : pathname.startsWith(href)
	}

	const handleClick = () => {
		if (onClick) {
			onClick()
		}
	}

	return (
		<Link
			href={href}
			onClick={handleClick}
			className={
				isActive
					? 'px-4 py-2 text-blue-500 cursor-pointer'
					: 'px-4 py-2 hover:text-blue-500 cursor-pointer'
			}
		>
			{children}
		</Link>
	)
}
