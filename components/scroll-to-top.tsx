'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUp } from 'lucide-react'
import { useEffect, useState } from 'react'

const ScrollToTop = () => {
	const [isVisible, setIsVisible] = useState(false)

	const toggleVisibility = () => {
		let scrollTop = 0

		if (window.pageYOffset !== undefined) {
			scrollTop = window.pageYOffset
		} else if (document.documentElement && document.documentElement.scrollTop) {
			scrollTop = document.documentElement.scrollTop
		} else if (document.body && document.body.scrollTop) {
			scrollTop = document.body.scrollTop
		}
		const smoothWrapper = document.getElementById('smooth-wrapper')
		if (smoothWrapper) {
			scrollTop = Math.max(scrollTop, smoothWrapper.scrollTop || 0)
		}

		if (scrollTop > 100) {
			setIsVisible(true)
		} else {
			setIsVisible(false)
		}
	}

	useEffect(() => {
		const handleScroll = () => {
			toggleVisibility()
		}


		window.addEventListener('scroll', handleScroll, { passive: true })
		document.addEventListener('scroll', handleScroll, { passive: true })

		const smoothWrapper = document.getElementById('smooth-wrapper')
		if (smoothWrapper) {
			smoothWrapper.addEventListener('scroll', handleScroll, { passive: true })
		}

		toggleVisibility()

		return () => {
			window.removeEventListener('scroll', handleScroll)
			document.removeEventListener('scroll', handleScroll)
			if (smoothWrapper) {
				smoothWrapper.removeEventListener('scroll', handleScroll)
			}
		}
	}, [])

	const scrollToTop = () => {
	
		if (window.scrollTo) {
			window.scrollTo({
				top: 0,
				left: 0,
				behavior: 'smooth',
			})
		} else {
			
			document.documentElement.scrollTop = 0
			document.body.scrollTop = 0
		}
	}

	return (
		<AnimatePresence>
			{isVisible && (
				<motion.button
					initial={{ opacity: 0, scale: 0.8 }}
					animate={{ opacity: 1, scale: 1 }}
					exit={{ opacity: 0, scale: 0.8 }}
					transition={{ duration: 0.3 }}
					onClick={scrollToTop}
					className='fixed bottom-8 right-8 z-[9999] bg-gradient-to-r from-[#857FFF] via-[#BB7BFF] to-pink-300 hover:from-[#7670FF] hover:via-[#A570FF] hover:to-pink-400 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 cursor-pointer'
					style={{
						position: 'fixed',
						bottom: '2rem',
						right: '2rem',
						zIndex: 9999,
					}}
					aria-label='Scroll to top'
				>
					<ArrowUp size={24} />
				</motion.button>
			)}
		</AnimatePresence>
	)
}

export default ScrollToTop
