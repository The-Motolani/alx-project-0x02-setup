import Header from "../components/layout/Header";

export default function Home() {
  return (
    <>
    <Header />
    <div>
        <main className="flex min-h-screen items-center justify-center bg-gray-100">
        <h1 className="text-4xl font-bold text-gray-800">
          Welcome to ALX Project 2
        </h1>
      </main>
    </div>
    </>
  );
}
