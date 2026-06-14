import Navbar from "./Navbar/Navbar";

type MainLayoutProps = {
  children: React.ReactNode;
};

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col  bg-[#06070d] text-white">
      <Navbar />
      <main>{children}</main>
    </div>
  );
}