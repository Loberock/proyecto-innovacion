import Footer from "./core/Footer";
import Navbar from "./core/Navbar";
import Hero from "./pages/Hero";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Hero />
      </main>
      <Footer />
    </div>
  );
}

export default App;
