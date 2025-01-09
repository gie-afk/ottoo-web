import Login from "./components/Login"
import loginBackground from "./assets/images/login-bg.jpg"
import SignUp from "./components/SignUp";

export default function App() {
  return (
    <div className="grid grid-cols-12 h-screen bg-gray-50">
      <div className="w-3/5 flex items-center mx-auto col-span-8">
        {/* <Login /> */}
        <SignUp />
      </div>
      <div 
        className="col-span-4 bg-cover bg-center"
        style={{ backgroundImage: `url(${loginBackground})`}}
      >
      </div>
    </div>
  );
}