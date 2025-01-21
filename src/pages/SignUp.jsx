import loginBackground from "../assets/images/login-bg.jpg";
import SignUpForm from "../components/SignUpForm";

export default function App() {
  return (
    <div className="grid grid-cols-12 h-screen bg-gray-50">
      <div className="flex items-center justify-center col-span-12 lg:col-span-8 px-4">
        <div className="w-full max-w-md mx-auto">
          <SignUpForm />
        </div>
      </div>
      <div 
        className="hidden lg:col-span-4 lg:block bg-cover bg-center"
        style={{ backgroundImage: `url(${loginBackground})`}}
      >
      </div>
    </div>
  );
}