import Script from 'next/script'

export default function GoogleTag() {
	return (
		<>
			<Script
				async
				src='https://www.googletagmanager.com/gtag/js?id=AW-10816304544'
				strategy='afterInteractive'
			/>
			<Script
				id='google-ads-gtag'
				strategy='afterInteractive'
				dangerouslySetInnerHTML={{
					__html: `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'AW-10816304544');
`,
				}}
			/>
		</>
	)
}
