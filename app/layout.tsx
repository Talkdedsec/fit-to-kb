import type {Metadata} from 'next';
import './globals.css';
export const metadata:Metadata={title:'KB’ye Sığdır — Fotoğraf boyutunu küçült',description:'Fotoğraflarını hedef KB boyutuna küçült. Ücretsiz, üyeliksiz; fotoğraflar cihazında kalır.'};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="tr"><body>{children}</body></html>;}
