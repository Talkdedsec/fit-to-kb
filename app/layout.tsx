import type {Metadata} from 'next';
import './globals.css';
export const metadata:Metadata={title:'Fit to KB - Compress images to a target size',description:'Compress photos to a target KB size. Free, no account required. Your photos stay on your device.'};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="en"><body>{children}</body></html>;}
