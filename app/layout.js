import { Cormorant_Garamond, Manrope } from 'next/font/google';
import './globals.css';

const serif = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-serif',
  display: 'swap'
});

const sans = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap'
});

export const metadata = {
  title: 'Anxiety & Trauma Therapy in Santa Monica | Dr. Maya Reynolds, PsyD',
  description: 'Warm, evidence-based therapy for anxiety, panic, trauma, burnout, and perfectionism. In-person in Santa Monica and secure telehealth across California.',
  openGraph: {
    title: 'Dr. Maya Reynolds, PsyD | Santa Monica Psychologist',
    description: 'Practical tools for what feels urgent. Space to understand what runs deeper.',
    type: 'website'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
