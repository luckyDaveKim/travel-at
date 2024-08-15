import Script from 'next/script';

export default function GoogleAnalytics() {
    return (
        <>
            <Script
                src={`https://www.googletagmanager.com/gtag/js?id=G-F9093Q58VD`}
                strategy="afterInteractive"
            />

            <Script id="nextjs-google-analytics" strategy="afterInteractive">
                {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-F9093Q58VD');
                `}
            </Script>
        </>
    );
}
