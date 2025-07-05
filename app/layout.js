import './globals.css';

export const metadata = {
  title: 'Niranjan Desai | Portfolio',
  description: 'Explore the portfolio of Niranjan Desai, a creative and skilled Computer Science Engineer.',
  keywords: ['Niranjan Desai', 'Portfolio', 'Web Developer', 'CSE'],
  authors: [{ name: 'Niranjan Desai' }],
  icons: {
    icon: '/web logo.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Ensure this renders in the HTML head */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="overflow-x-hidden transition-colors duration-500">
        {children}
      </body>
    </html>
  );
}
