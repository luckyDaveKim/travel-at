'use client'

// import Script from "next/script";
//
// export default function BootstrapJs() {
//     return (
//         <>
//             <Script
//                 src={'https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js'}
//                 strategy="afterInteractive"
//             />
//         </>
//     );
// }

import { useEffect } from "react";

export default function ImportBsJS() {
    useEffect(() => {
        require("bootstrap/dist/js/bootstrap.bundle.min.js");
    }, []);
    return null;
}
