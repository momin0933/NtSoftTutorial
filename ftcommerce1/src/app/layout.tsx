import './globals.css'
import Link from 'next/link';


export const metadata = {
  title: 'My App',
  description: 'Next.js App with Global Layout',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ fontFamily: 'Arial, sans-serif', margin: 0 }}>
        <header style={{ background: '#0f172a', color: '#fff', padding: '20px' }}>
          <h1>My App</h1>
        </header>

        <nav style={{ background: '#1e293b', padding: '10px 20px' }}>
          <Link href="/" style={{ color: '#fff', marginRight: '20px' }}>Home</Link>
          <Link href="/dashboard" style={{ color: '#fff', marginRight: '20px' }}>Dashboard</Link>
          <Link href="/order" style={{ color: '#fff', marginRight: '20px' }}>Order</Link>
          <Link href="/contact" style={{ color: '#fff' }}>Contact</Link>
        </nav>

        <main style={{ padding: '30px' }}>
          {children}
        </main>

        <footer style={{ background: '#0f172a', color: '#fff', textAlign: 'center', padding: '20px' }}>
          <p>&copy; {new Date().getFullYear()} My App. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
