import Image from "next/image";
import { ImBell, ImShare2 } from "react-icons/im";

import billGatesImage from "@/assets/bill_gates.webp";
import { billGatesContext, iconOptions, optionsCategory } from "@/constants/const";

export default function Home() {
  return (
    <div className="grid grid-cols-[0.5fr_2fr_1fr] w-full h-auto">

      {/* Coluna 1 */}
      <div className="flex flex-col justify-evenly items-center p-8 gap-8 w-full h-auto">

        {/* Card Criadores */}
        <div className="flex flex-col justify-evenly items-center w-80 h-60 rounded-2xl shadow-md p-4">
          <h1>teste</h1>
          <h1 className="text-2xl">Creators page</h1>
        </div>

        {/* Categorias */}
        <div className="flex flex-col items-center w-80 h-auto rounded-2xl shadow-md gap-6 p-10">
          <h1 className="text-4xl w-full ml-10">Category</h1>
          <div className="flex flex-col gap-3 w-full ml-10">
            {optionsCategory.map((opcoes, idx) => (
              <h1
                key={idx}
                className={`text-2xl cursor-pointer ${idx === 0
                  ? "text-orange-600"
                  : "text-gray-500 hover:text-orange-600"
                  }`}
              >
                {opcoes}
              </h1>
            ))}
          </div>
        </div>
      </div>

      {/* Coluna 2 */}
      <div className="flex flex-col w-full justify-start items-start gap-5 p-10 h-auto rounded-2xl mt-10">

        {/* Título */}
        <h1 className="text-2xl p-4 rounded-lg">
          Bill Gates says "AI is the Next Great Revolution, Deal with It" at Ted Talks
        </h1>

        {/* Imagem Principal */}
        <div className="w-full relative aspect-video rounded-2xl overflow-hidden">
          <Image
            src={billGatesImage}
            alt="Bill Gates"
            fill
            className="object-cover rounded-2xl"
            priority
          />
        </div>

        {/* Card de conteúdo */}
        <div className="w-full h-auto flex flex-col prose max-w-full shadow-md p-5 rounded-2xl gap-5">

          {/* Header do card */}
          <div className="grid grid-cols-2 justify-between items-center text-center w-full h-10">
            <div className="flex bg-orange-100 w-2/5 rounded-full h-10 text-center justify-center items-center">
              <h1 className="text-orange-600 uppercase">Congress</h1>
            </div>
            <div className="flex flex-row justify-evenly items-end gap-10">
              {iconOptions.map((options, idx) => (
                <div
                  key={idx}
                  className="flex flex-row gap-2 justify-end items-center uppercase text-xl cursor-pointer"
                >
                  {options.text} {options.icon}
                </div>
              ))}
            </div>
          </div>

          {/* Corpo do card */}
          <div className="flex flex-row w-full h-auto">
            <div className="flex flex-col w-1/2 justify-start">
              <h1 className="text-4xl">Bill Gates</h1>
              <p className="text-2xl">
                untur inventore dolore ex quibusdam unde magnam provident quas sapiente dolorem modi assumenda eveniet qui!
              </p>
            </div>
            <div className="flex flex-col w-1/2 justify-start items-end gap-5">
              <div className="flex w-50 h-10 rounded-2xl bg-gray-200 justify-evenly text-center items-center cursor-pointer">
                <ImBell />
                <h1>Save to pocket</h1>
              </div>
              <div className="flex w-50 h-10 rounded-2xl bg-blue-200 justify-evenly text-center items-center cursor-pointer">
                <ImShare2 />
                <h1>Save to pocket</h1>
              </div>
            </div>
          </div>
        </div>

        {/* Texto adicional */}
        <div>
          <h1 className="text-xl text-gray-500 text-justify">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis commodi quas libero veniam architecto asperiores nesciunt consectetur perspiciatis vel voluptatem iure tenetur provident dignissimos, aspernatur consequuntur voluptates fugit quos culpa!
          </h1>
        </div>
      </div>

      {/* Coluna 3 */}
      <div className="flex flex-col justify-start items-center p-10 gap-10 w-full h-auto mt-10">
        {billGatesContext.map((options, idx) => (
          <div
            key={idx}
            className="flex flex-col w-full h-auto aspect-video rounded-2xl overflow-hidden"
          >
            {/* Imagem */}
            <div className="relative w-full h-full">
              <Image
                src={options.image}
                alt="Bill Gates"
                fill
                className="object-cover rounded-2xl"
              />
            </div>

            {/* Texto abaixo da imagem */}
            <div className="flex flex-col w-full h-auto">
              <div className="flex flex-row justify-between mt-5">
                <div className="flex bg-red-100 w-2/5 rounded-full h-10 text-center justify-center items-center">
                  <h1 className="text-red-600 uppercase">{options.tag}</h1>
                </div>
                <p className="flex flex-row justify-center items-center gap-2 text-start text-lg">
                  {options.icon}
                  {options["icon-label"]}
                </p>
              </div>
              <div className="text-gray-500">{options.text}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
