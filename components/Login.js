import Image from "next/image";
import { useMoralis } from "react-moralis";

function Login() {
  const { authenticate } = useMoralis();
  
  return (
    <div className="bg-black relative text-white">
      <div className="flex flex-col absolute z-50 h-4/6 w-full items-center justify-center space-y-4">
        {/* Perfil Logo*/}
        <Image
          className="object-cover rounded-full"
          src="https://emanuelzini.com.ar/wp-content/uploads/2021/12/PerfilEma-sinfondo.png"
          height={200}
          width={200}
        />
        {/* Login button*/}
        <button
          onClick={authenticate}
          className="bg-yellow-500 rounded-lg p-5 font-bold animate-pulse"
        >
          Login to the METAVERSE
        </button>
      </div>

      <div className="w-full h-screen">
        <Image
          src="https://emanuelzini.com.ar/wp-content/uploads/2021/12/possibility.525f13b6.png"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
}

export default Login;
