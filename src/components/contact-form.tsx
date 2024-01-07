'use client'

import Script from 'next/script'

export function ContactForm() {
    return (
        <>
            <iframe data-tally-src="https://tally.so/embed/npOKz8?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" loading="lazy" width="100%" height="276" frameborder="0" marginheight="0" marginwidth="0" title="Contact form
"></iframe>
            <Script
                id="tally-js"
                src="https://tally.so/widgets/embed.js"
                strategy='lazyOnload'
                onLoad={() => {
                    // @ts-ignore
                    Tally?.loadEmbeds();
                }}
            />
        </>
    )
}
