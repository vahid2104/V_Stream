type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <aside className="fixed left-0 top-0 h-screen w-20 border-r border-white/10 bg-black">
        Sidebar
      </aside>

      <header className="fixed left-20 right-0 top-0 h-20 border-b border-white/10 bg-[#050505]/90">
        Navbar
      </header>

      <main className="pl-24 pr-6 pt-24">
        {children}
      </main>
    </div>

  );
};

export default MainLayout;
