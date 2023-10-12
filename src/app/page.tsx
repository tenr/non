export default function Home() {
  return (
    <main
      className="flex items-center justify-center h-screen bg-center bg-no-repeat bg-cover"
      style={{ backgroundImage: "url(/nongif.gif)" }}
    >
      <div className="text-center">
        <h1 className="text-4xl font-sans">Now or Never</h1>
        <p className="italic text-yellow-300">(eventually...)</p>
      </div>
    </main>
  );
}
