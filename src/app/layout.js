import Head from 'next/head';
import '@/styles/global.css';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { ThemeProvider } from 'next-themes';
import ThemeToggleIcon from '../components/ThemeToggleIcon'; // Import the new component


export const metadata = {
  title: '[Your Painting Company Name] - Professional Painting in Panaji, Goa',
  description: 'Top-quality interior, exterior, and commercial painting services in Panaji, Goa. Get a free quote today!',
};

function RootLayout({ children }) {
  return (
      <html lang="en">
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <body>
          <ThemeProvider defaultTheme="light" enableSystem attribute="class">
            <Navigation />
            <main>{children}</main>
            <Footer />
            <ThemeToggleIcon /> {/* Add the theme toggle icon component */}
          </ThemeProvider>
        </body>
      </html>
  );
}

export default RootLayout;