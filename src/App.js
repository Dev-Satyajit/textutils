import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <Navbar title="TextUtils" />
      <TextForm heading="Enter your text here" />
      <Footer />
    </>
  );
}

export default App;
