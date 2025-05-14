export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="bg-blue-500 text-white p-4 rounded-lg">
        <h1 className="text-2xl font-bold">Tailwind Test</h1>
        <p className="mt-2">If you can see this with blue background and white text, Tailwind is working!</p>
      </div>

      {/* Test basic utilities */}
      <div className="mt-4 grid grid-cols-3 gap-4">
        <div className="bg-red-500 p-4 text-center text-white">Red</div>
        <div className="bg-green-500 p-4 text-center text-white">Green</div>
        <div className="bg-yellow-500 p-4 text-center text-white">Yellow</div>
      </div>
    </main>
  );
}