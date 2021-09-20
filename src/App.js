import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <Navbar title="TextUtils"/>
      <div className="container my-3">
      <TextForm heading="Enter the text to analyze below"/>
      </div>
      <Footer/>
    </>
  );
}

export default App;
