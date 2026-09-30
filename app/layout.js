import './globals.css';

export const metadata = {
  title: 'Ronit Patro | Finance, Accounting & Automation',
  description:
    'Portfolio of Ronit Patro — finance, accounting, reconciliation, GST & TDS compliance, audit support and AI-driven finance automation.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
