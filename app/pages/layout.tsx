export default function PagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <main className="flex max-h-screen flex-col items-center justify-between w-full bg-white">
        {children}
      </main>
    </div>
  );
}
