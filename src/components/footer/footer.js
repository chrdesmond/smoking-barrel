import Image from "next/image";

export default function Footer() {
    return (
        <section className="bg-black text-white py-10 px-5 sm:px-10 md:flex-col lg:px-20 lg:flex-row flex flex-col justify-between">
            <div className="flex justify-center w-full lg:w-auto mb-6 lg:mb-0">
                <Image
                    src="https://www.smokingbarrels.coffee/images/footer@3x.png"
                    width={200}
                    height={200}
                    alt="logo"
                />
            </div>
            <div className="flex flex-col gap-4 w-full w-auto mb-6 sm:mb-0 lg:mr-16">
                <a href="http://localhost:3000/homepage" className="hover:text-amber-500 cursor-pointer">
                    HOME
                </a>
                <a href="http://localhost:3000/about" className="hover:text-amber-500 cursor-pointer">
                    ABOUT
                </a>
                <a href="http://localhost:3000/products" className="hover:text-amber-500 cursor-pointer">
                    PRODUCTS
                </a>
                <a href="http://localhost:3000/teams" className="hover:text-amber-500 cursor-pointer">
                    TEAM
                </a>
            </div>
            <div className="flex flex-col gap-4 w-full w-auto mb-6 sm:mb-0 lg:mr-16">
                <div className="hover:text-amber-500 cursor-pointer">
                    NEWSLETTER
                </div>
                <div className="hover:text-amber-500 cursor-pointer">
                    CONTACT
                </div>
            </div>
            <div className="flex flex-col gap-4 w-full w-auto lg:w-1/3">
                <div className="text-amber-500 text-xl font-bold">
                    PT. BASUKI LIMA SELARAS
                </div>
                <div>
                    Jl. Cilandak Tengah Raya no.8, Kel. Cilandak Barat, Kec. Cilandak, Jakarta Selatan, Jakarta 12430
                </div>
            </div>
        </section>
    );
}
