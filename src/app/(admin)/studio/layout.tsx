import "../../globals.css";

export const metadata = {
  title: "Tech Age Admin",
  description: "Content studio for the Tech Age store",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
