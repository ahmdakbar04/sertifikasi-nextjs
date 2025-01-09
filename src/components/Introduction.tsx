import Image from "next/image";

export default function Introduction() {
    return(
        <>
    <div className="w-screen h-[500px] bg-slate-900 p-8">
        <div className="flex justify-between items-center">
            <div>
                <div>
          
            <p className="text-[#0028ff] text-2xl font-bold my-4">Sistem Informasi </p>
            <h2 className="text-7xl text-white">Hello, Im</h2>
            <h2 className="text-7xl text-[#ffd700]"> Ahmad Akbar</h2>
            </div>
            <div className="my-8">
                <p className="text-white max-w-lg">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis facere sunt ratione dolores sequi cumque deleniti totam nihil?
                </p>
            </div>
          </div>
          <div className="relative w-96 h-96">
            {/*image*/}
            <Image
            src={"/img/user.jpg"}
             alt="Ahmad Akbar" 
             fill={true}
             priority={true}
            className="rounded-3xl object-cover"
            />
          </div>
        </div>
    </div> 
        </>
    )
}