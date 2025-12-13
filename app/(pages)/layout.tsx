import NavComponent from "@/components/pages/layout/nav";
import FooterComponent from "@/components/pages/layout/footer";

export default function PagesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col min-h-screen bg-secondary-600">
      <NavComponent />

      {children}

      <FooterComponent />
    </div>
  );
}
