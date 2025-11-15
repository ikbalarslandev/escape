import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hipodrom",
  description: "Şehrin kaderi sizin ellerinizde...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      {/* Elegant overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-black/5 pointer-events-none" />

      {/* Subtle pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25px_25px,rgba(255,255,255,0.1)_2%,transparent_0%)] bg-[length:50px_50px] pointer-events-none" />

      {/* Main content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
