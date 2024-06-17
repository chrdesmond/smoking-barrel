import Image from "next/image";
import { MdArrowDropDown, MdOutlineKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

export default function Product() {
  return (
    <>
      <div className="lg:bg-[url('https://www.smokingbarrels.coffee/storage/2018/11/15/15422641894691.JPG')] bg-yellow-800 w-full lg:h-[370px] h-[130px] bg-no-repeat bg-center bg-cover">
                <div className="flex flex-row gap-4 p-10 lg:p-40 justify-center">
                    <h3 className="text-white font-bold text-4xl">
                        PRODUCTS
                    </h3>
                </div>
        </div>

      <div className="bg-gray-100 w-full pt-10 flex flex-col lg:flex-row">
        <div className="hidden lg:block w-[15%]"></div>
        
        <div className="w-full lg:w-[25%] px-4 lg:px-8 mb-8 lg:mb-0 flex flex-col gap-5">
          <div className="border-b border-black py-4 flex justify-between items-center">
            <div>ALL PRODUCTS</div>
            <div className="ml-auto">{"("}41{")"}</div>
            <MdArrowDropDown />
          </div>
          <div className="border-b border-black py-4 flex justify-between items-center">
            <div>COFFEE</div>
            <div className="ml-auto">{"("}23{")"}</div>
            <MdArrowDropDown />
          </div>
          <div className="border-b border-black py-4 flex justify-between items-center">
            <div>TEA</div>
            <div className="ml-auto">{"("}10{")"}</div>
            <MdArrowDropDown />
          </div>
          <div className="border-b border-black py-4 flex justify-between items-center">
            <div>EQUIPMENT</div>
            <div className="ml-auto">{"("}7{")"}</div>
            <MdArrowDropDown />
          </div>
          <div className="border-b border-black py-4 flex justify-between items-center">
            <div>MERCHANDISE</div>
            <div className="ml-auto">{"("}1{")"}</div>
            <MdArrowDropDown />
          </div>
        </div>

        <div className="w-full lg:w-2/3 px-4 lg:px-8">
          {/* Bagian Sortir Produk */}
          <div className="flex flex-col lg:flex-row items-center justify-between py-4">
            <div>Showing 9/41 products</div>
            <button className="flex items-center px-5 py-2 border-2 border-yellow-700 text-yellow-900 font-bold bg-transparent hover:bg-yellow-700 hover:text-white">
              SORT BY NEWEST
              <MdArrowDropDown className="ml-2" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-10 bg-gray-100">
            <div className="flex flex-col items-center text-center bg-gray-100">
              <Image
                src="https://www.smokingbarrels.coffee/storage/2023/04/04/16805995404972.jpg"
                width={255}
                height={255}
                alt="product1"
              />
              <p className="font-bold">Kerinci Radjea Natural 250gr & 1000gr</p>
              <p>Arabica coffee Beans</p>
              <p>Origins: Jambi</p>
              <p>Rp 140,000</p>
            </div>

            <div className="flex flex-col items-center text-center bg-gray-100">
              <Image
                src="https://www.smokingbarrels.coffee/storage/2023/04/04/16805991174856.jpg"
                width={255}
                height={255}
                alt="product2"
              />
              <p className="font-bold">Java Malabar Cirawa Natural 250gr & 1000gr</p>
              <p>Arabica coffee Beans</p>
              <p>Origins: West Java</p>
              <p>Rp 145,000</p>
            </div>

            <div className="flex flex-col items-center text-center bg-gray-100">
              <Image
                src="https://www.smokingbarrels.coffee/storage/2023/04/11/16811944627101.jpeg"
                width={255}
                height={255}
                alt="product3"
              />
              <p className="font-bold">
                Quick Shot Coffee Capsule - Colombia Fruta Madura / Kopi Kapsul
                Nespresso
              </p>
              <p>Arabica coffee Beans</p>
              <p>Origins: Colombia</p>
              <p>Rp 100,000</p>
            </div>

            <div className="flex flex-col items-center text-center bg-gray-100">
              <Image
                src="https://www.smokingbarrels.coffee/storage/2023/04/11/16811941875747.jpeg"
                width={255}
                height={255}
                alt="product4"
              />
              <p className="font-bold">
                Quick Shot Coffee Capsule - Cannon / Kopi Kapsul Nespresso
              </p>
              <p>Arabica coffee Beans</p>
              <p>Origins: Bali</p>
              <p>Rp 90,000</p>
            </div>

            <div className="flex flex-col items-center text-center bg-gray-100">
              <Image
                src="https://www.smokingbarrels.coffee/storage/2022/06/15/16552813997923.jpg"
                width={255}
                height={255}
                alt="product5"
              />
              <p className="font-bold">
                Quick Shot Coffee Capsule - Flores Careb Ruteng / Kopi Kapsul
                Nespresso
              </p>
              <p>Arabica coffee Beans</p>
              <p>Origins: Flores</p>
              <p>Rp 95,000</p>
            </div>

            <div className="flex flex-col items-center text-center bg-gray-100">
              <Image
                src="https://www.smokingbarrels.coffee/storage/2022/05/18/16528567515432.jpg"
                width={255}
                height={255}
                alt="product6"
              />
              <p className="font-bold">
                Quick Shot Coffee Capsule - Ethiopia Samii Uraga / Kopi Kapsul
                Nespresso
              </p>
              <p>Arabica coffee Beans</p>
              <p>Origins: Jambi</p>
              <p>Rp 100,000</p>
            </div>

            <div className="flex flex-col items-center text-center bg-gray-100">
              <Image
                src="https://www.smokingbarrels.coffee/storage/2022/05/18/16528566848165.jpg"
                width={255}
                height={255}
                alt="product7"
              />
              <p className="font-bold">
                Quick Shot Coffee Capsule - Flores Gulang / Kopi Kapsul
                Nespresso
              </p>
              <p>Arabica coffee Beans</p>
              <p>Origins: Flores</p>
              <p>Rp 95,000</p>
            </div>

            <div className="flex flex-col items-center text-center bg-gray-100">
              <Image
                src="https://www.smokingbarrels.coffee/storage/2022/04/13/16498411579124.JPG"
                width={255}
                height={255}
                alt="product8"
              />
              <p className="font-bold">
                Weekdays Booster (Set of 5) - Specialty Coffee Drip Bag
              </p>
              <p>Arabica coffee Beans</p>
              <p>Origins: Flores</p>
              <p>Rp 140,000</p>
            </div>

            <div className="flex flex-col items-center text-center bg-gray-100">
              <Image
                src="https://www.smokingbarrels.coffee/storage/2022/04/13/16498354016611.JPG"
                width={255}
                height={255}
                alt="product9"
              />
              <p className="font-bold">
                Quick Shot Coffee Capsule - Dynamite / Kopi Kapsul Nespresso
              </p>
              <p>Arabica coffee Beans</p>
              <p>Origins: Sindoro</p>
              <p>Rp 90,000</p>
            </div>
          </div>

          <div className="flex justify-center items-center py-10">
            <div className="flex gap-2">
              <button className="w-10 h-10 flex items-center justify-center border-2 border-yellow-700 text-yellow-900 bg-transparent hover:bg-yellow-700 hover:text-white">
                &lt;
              </button>
              <button className="w-10 h-10 flex items-center justify-center border-2 border-yellow-700 text-white bg-yellow-700 hover:bg-yellow-700 hover:text-white">
                1
              </button>
              <button className="w-10 h-10 flex items-center justify-center border-2 border-yellow-700 text-yellow-900 bg-transparent hover:bg-yellow-700 hover:text-white">
                2
              </button>
              <button className="w-10 h-10 flex items-center justify-center border-2 border-yellow-700 text-yellow-900 bg-transparent hover:bg-yellow-700 hover:text-white">
                3
              </button>
              <button className="w-10 h-10 flex items-center justify-center border-2 border-yellow-700 text-yellow-900 bg-transparent hover:bg-yellow-700 hover:text-white">
                4
              </button>
              <button className="w-10 h-10 flex items-center justify-center border-2 border-yellow-700 text-yellow-900 bg-transparent hover:bg-yellow-700 hover:text-white">
                5
              </button>
              <button className="w-10 h-10 flex items-center justify-center border-2 border-yellow-700 text-yellow-900 bg-transparent hover:bg-yellow-700 hover:text-white">
                &gt;
              </button>
            </div>
          </div>
        </div>

        <div className="hidden lg:block w-1/6"></div>
      </div>

      <section className="bg-gray-100 w-full h-[100px] text-2xl lg:text-3xl font-bold flex items-center justify-center">
                CUSTOMER&#39;S TESTIMONY
            </section>

            <section className="bg-gray-100 font-bold text-[15px] lg:text-[20px] w-full h-auto flex flex-col items-center justify-center gap-5 py-10">
                <div className="bg-yellow-800 text-white w-full sm:w-3/4 lg:w-1/2 h-[120px] px-5 italic text-center rounded-lg shadow-2xl flex items-center justify-center">
                    &quot;Smoking Barrel is my go-to coffee spot! The atmosphere is cozy, and the coffee is always exceptional. I love the unique flavors and the friendly staff.&quot;
                </div>
                <div className="bg-yellow-800 text-white w-full sm:w-3/4 lg:w-1/2 h-[120px] px-5 italic text-center rounded-lg shadow-2xl flex items-center justify-center">
                    &quot;I can&#39;t get enough of Smoking Barrel&#39;s freshly roasted beans. The quality is unmatched, and the baristas are true coffee artists. Highly recommend!&quot;
                </div>
                <div className="bg-yellow-800 text-white w-full sm:w-3/4 lg:w-1/2 h-[120px] px-5 italic text-center rounded-lg shadow-2xl flex items-center justify-center">
                    &quot;This place is a gem! The coffee is incredible, and the staff always make me feel welcome. It&#39;s the perfect spot to relax and enjoy a great cup of coffee.&quot;
                </div>
                <div className="bg-yellow-800 text-white w-full sm:w-3/4 lg:w-1/2 h-[120px] px-5 italic text-center rounded-lg shadow-2xl flex items-center justify-center">
                    &quot;The attention to detail at Smoking Barrel is impressive. Every cup is brewed to perfection, and the service is top-notch. It&#39;s my favorite coffee shop by far&quot;
                </div>
                <div className="bg-yellow-800 text-white w-full sm:w-3/4 lg:w-1/2 h-[120px] px-5 italic text-center rounded-lg shadow-2xl flex items-center justify-center">
                    &quot;I discovered Smoking Barrel last year, and I haven&#39;t looked back. Their roasts are amazing, and the atmosphere is just what I need to unwind.&quot;
                </div>
            </section>
    </>
  );
}
