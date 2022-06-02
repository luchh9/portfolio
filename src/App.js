import "./assets/css/style.css";
import Background from "./components/Background";
import Home from "./pages/Home";
import "./assets/css/Preloader.css";

// const Preloader = () => (
//   <motion.div
//     className="preloader"
//     initial={{ opacity: 0 }}
//     animate={{ opacity: 1 }}
//     exit={{ opacity: 0 }}
//   >
//     <h1>preloader</h1>
//   </motion.div>
// );

function App() {
  // const [loading, setLoading] = useState(true);

  // setTimeout(() => {
  //   setLoading(false);
  // }, 3000);

  return (
    <>
      <Background />
      <Home />

      {/* {loading ? (
        <Preloader />
      ) : (
        <>
          <AnimatePresence>
            <Home />
          </AnimatePresence>
        </>
      )} */}
    </>
  );
}

export default App;
