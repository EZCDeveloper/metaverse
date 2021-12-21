import Image from "next/image";
import { useMoralis } from "react-moralis";
import Avatar from "./Avatar";
import ChangeUsername from "./ChangeUsername";

function Header() {
    const { user} = useMoralis();

    return (
        <div className="sticky top-0 p-5 z-50 bg-black shadow-sm text-pink-500 border-b-2 border-pink-700">
            <div className="grid grid-cols-5 lg:grid-cols-6 items-end lg:items-center">
                <div className="relative h-24 w-24 mx-auto hidden lg:inline-grid">
                    <Image 
                        layout="fill"
                        objectFit="cover" 
                        className="rounded-full" 
                        src={"https://emanuelzini.com.ar/wp-content/uploads/2021/12/PerfilEma-sinfondo.png"} 
                        />
                </div>

                <div className="col-span-4 text-left lg:text-center">
                    <div className="relative h-48 w-48 lg:mx-auto border-pink-500 border-8 rounded-full">
                        <Avatar logoutOnPress/>

                    </div>

                    {/* Welcome Message */}
                    {/* username */}
                    <h1 className="text-3xl font-bold truncate ">Welcome to Manu metaverse</h1>
                    <h2>{user.getUsername()}</h2>

                    {/* Change username component */}
                    <ChangeUsername />
                </div>


            </div>
        </div>
    )
}

export default Header
