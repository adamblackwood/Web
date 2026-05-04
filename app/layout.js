import "./globals.css";

export const metadata = {
  title: "Abdullah Nabil | Portfolio",
  description: "Creative Designer & Motion Artist",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}