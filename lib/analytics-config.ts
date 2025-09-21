// Analytics configuration
export const analyticsConfig = {
	clarity: {
		projectId: 't2t8jrmplm',
		enabledDomains: ['www.leadsoftwares.com', 'leadsoftwares.com'],
		enabledProtocols: ['https:'],
	},

	// Helper function to check if current environment should track
	shouldTrack: (): boolean => {
		if (typeof window === 'undefined') return false

		const { hostname, protocol } = window.location

		return (
			analyticsConfig.clarity.enabledDomains.includes(hostname) &&
			analyticsConfig.clarity.enabledProtocols.includes(protocol)
		)
	},

	// Environment check
	isProduction: (): boolean => {
		if (typeof window === 'undefined') return false
		return window.location.hostname.includes('leadsoftwares.com')
	},

	isDevelopment: (): boolean => {
		if (typeof window === 'undefined') return false
		const hostname = window.location.hostname
		return (
			hostname === 'localhost' ||
			hostname.includes('192.168') ||
			hostname.includes('127.0.0.1')
		)
	},
}
