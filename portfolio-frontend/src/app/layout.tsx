import { ReactNode } from 'react';
import { ThemeProvider } from 'next-themes';
import '@/app/globals.css';
import { Oxanium } from 'next/font/google';
import LenisProvider from '@/components/utils/LenisProvider';
import { Toaster } from '@/components/ui/sonner';
import Header from '@/components/header/Header';

const oxanium = Oxanium({
    subsets: ['latin'],
    weight: ['400'], // Choose weights you need
    variable: '--font-oxanium', // Define a CSS variable for Tailwind
});

export const metadata = {
    title: 'Fi Amanillah',
    description: 'Fi Amanillah - Portfolio',
    icons: {
        icon: '/favicon.svg', // Default favicon
        shortcut: '/favicon.svg', // Shortcut icon
    },
};

// Define Props Type
interface RootLayoutProps {
    children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={`antialiased ${oxanium.variable} font-oxanium bg-background prose max-w-none`}
            >
                <LenisProvider />
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <Toaster />
                    <Header />
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
