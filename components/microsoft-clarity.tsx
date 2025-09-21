'use client'

import { useEffect } from 'react'
import { analyticsConfig } from '../lib/analytics-config'

export default function MicrosoftClarity() {
	useEffect(() => {
		// Only initialize Clarity on allowed domains and protocols
		if (!analyticsConfig.shouldTrack()) {
			if (analyticsConfig.isDevelopment()) {
				console.log(
					'Microsoft Clarity: Skipped - Development environment detected'
				)
			} else {
				console.log('Microsoft Clarity: Skipped - Domain not in allowed list')
			}
			return
		}

		// Check if Clarity is already loaded
		if (
			typeof window !== 'undefined' &&
			(window as typeof window & { clarity?: unknown }).clarity
		) {
			console.log('Microsoft Clarity: Already loaded')
			return
		}

		// Microsoft Clarity tracking code
		const script = document.createElement('script')
		script.type = 'text/javascript'
		script.innerHTML = `
			(function(c,l,a,r,i,t,y){
				c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
				t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
				y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
			})(window, document, "clarity", "script", "${analyticsConfig.clarity.projectId}");
		`

		document.head.appendChild(script)

		console.log(
			`Microsoft Clarity: Initialized for production domain with project ID: ${analyticsConfig.clarity.projectId}`
		)

		// Cleanup function
		return () => {
			// Remove script if component unmounts (though this rarely happens in layout)
			const clarityScript = document.querySelector('script[src*="clarity.ms"]')
			if (clarityScript) {
				clarityScript.remove()
			}
		}
	}, [])

	return null // This component doesn't render anything visible
}
