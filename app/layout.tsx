import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Sanchit Butola | Data Analyst & ML Enthusiast',
  description: 'Premium portfolio showcasing data analytics, machine learning, and AI projects. BTech Computer Science graduate specializing in intelligent solutions.',
  keywords: 'Data Analytics, Machine Learning, AI, Python, SQL, Data Science, Portfolio',
  authors: [{ name: 'Sanchit Butola' }],
  viewport: 'width=device-width, initial-scale=1',
  openGraph: {
    title: 'Sanchit Butola | Data Analyst & ML Enthusiast',
    description: 'Explore my data analytics, machine learning, and AI projects.',
    type: 'website',
    locale: 'en_US',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-dark-bg text-white">
        <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
          {/* Animated gradient orbs */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mix-blend-screen filter blur-3xl opacity-5 animate-float"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mix-blend-screen filter blur-3xl opacity-5 animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 right-0 w-72 h-72 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mix-blend-screen filter blur-3xl opacity-5 animate-float" style={{ animationDelay: '4s' }}></div>
        </div>
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}