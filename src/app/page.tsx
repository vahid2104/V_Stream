import MainLayout from "@/components/layout/MainLayout";

export default function HomePage() {
  return (
    <MainLayout>
      <section className="rounded-3xl bg-white/5 p-10">
        <h1 className="text-4xl font-bold">SaintStream Home Page</h1>
        <p className="mt-4 text-white/60">
          Main layout is working.
        </p>
      </section>
    </MainLayout>
  );
}