import './App.css';
import { AuthProvider } from './Context/Auth';
import { Rotes } from './Routes';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {

  return (
    <AuthProvider>
      <Rotes />
      <ToastContainer
                position="bottom-right"
                autoClose={3500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
    </AuthProvider>
  );
}

export default App;
 