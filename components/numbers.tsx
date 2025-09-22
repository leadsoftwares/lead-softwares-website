'use client'

import {
	animate,
	motion,
	useInView,
	useMotionValue,
	useTransform,
} from 'motion/react'
import { useEffect, useRef } from 'react'

type Props = {
	number: number
	duration?: number
	className?: string
}

export default function HTMLContent({
	number,
	duration = 1,
	className,
}: Props) {
	const count = useMotionValue(0)
	const rounded = useTransform(count, (latest) => Math.round(latest))

	const ref = useRef(null)
	const isInView = useInView(ref, { once: true }) // animate only first time

	useEffect(() => {
		if (isInView) {
			const controls = animate(count, number, { duration })
			return () => controls.stop()
		}
	}, [isInView, count, number, duration])

	return (
		<motion.pre className={className} ref={ref} style={text}>
			{rounded}
		</motion.pre>
	)
}

/**
 * ==============   Styles   ================
 */
const text = {
	fontSize: 64,
	color: '#22c55e', // ✅ must be a real color, not Tailwind class
}
