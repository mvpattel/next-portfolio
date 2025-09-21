import { ThemeProvider } from './components/ThemeContext/ThemeContext';
import ThemeToggle from './components/ThemeToggle/ThemeToggle';
import './globals.scss';

export const metadata = {
  title: 'My App',
  description: 'Portfolio project with Carbon + Next.js',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <body>
          <ThemeProvider>
            {/* Example: top-right corner toggle */}
            <div style={{ display: "flex", justifyContent: "flex-end", padding: "1rem" }}>
              <ThemeToggle />
            </div>
            {children}
          </ThemeProvider>
        </body>
      </body>
    </html>
  );
}
