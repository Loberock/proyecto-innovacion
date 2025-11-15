import Footer from "./core/Footer";
import Navbar from "./core/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Home />
      </main>
      <Footer />
    </div>
  );
}

export default App;
