'use client'

import { useEffect } from 'react'
import { analyticsConfig } from '../lib/analytics-config'

declare global {
	interface Window {
		dataLayer?: unknown[]
		gtag?: (...args: unknown[]) => void
	}
}

export default function GoogleTag() {
	useEffect(() => {
		if (!analyticsConfig.shouldTrack()) {
			return
		}

		const tagId = analyticsConfig.googleTag.tagId

		if (!tagId) {
			console.log('Google Tag: Skipped - NEXT_PUBLIC_GOOGLE_TAG_ID is not set')
			return
		}

		if (
			document.querySelector(
				`script[src*="googletagmanager.com/gtag/js?id=${tagId}"]`,
			)
		) {
			return
		}

		window.dataLayer = window.dataLayer || []
		window.gtag = (...args: unknown[]) => {
			window.dataLayer?.push(args)
		}

		const script = document.createElement('script')
		script.async = true
		script.src = `https://www.googletagmanager.com/gtag/js?id=${tagId}`
		document.head.appendChild(script)

		window.gtag('js', new Date())
		window.gtag('config', tagId)

		console.log(`Google Tag: Initialized with tag ID ${tagId}`)

		return () => {
			const tagScript = document.querySelector(
				`script[src*="googletagmanager.com/gtag/js?id=${tagId}"]`,
			)
			if (tagScript) {
				tagScript.remove()
			}
		}
	}, [])

	return null
}
