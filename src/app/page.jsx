import billGatesImage from '@/assets/bill_gates.webp';
import { billGatesContext, iconOptions, optionsCategory } from '@/constants/const';
import Image from 'next/image';
import { ImBell, ImShare2 } from "react-icons/im";

export default function Home() {
  return (
    <div className="grid grid-cols-[0.5fr_2fr_1fr] w-full h-auto">
      {/* Coluna 1 */}
      <div className="flex flex-col justify-evenly items-center p-8 gap-8 w-full h-auto">
        <div className="flex flex-col justify-evenly items-center w-80 h-60 rounded-2xl shadow-md p-4">
          <h1>teste</h1>
          <h1 className="text-2xl">Creators page</h1>
        </div>
        <div className="flex flex-col items-center w-80 h-200 rounded-2xl shadow-md gap-6 p-10">
          <h1 className="text-4xl w-full ml-10">Category</h1>
          <div className="flex flex-col gap-3 w-full ml-10">
            {optionsCategory.map((opcoes, idx) => (
              <h1
                key={idx}
                className={`text-2xl cursor-pointer ${idx === 0 ? 'text-orange-600' : 'text-gray-500'}`}
              >
                {opcoes}
              </h1>
            ))}
          </div>
        </div>
      </div>

      {/* Coluna 2 */}
      <div className="flex flex-col w-full  justify-start items-start gap-5 p-10  h-auto rounded-2xl ">
        <h1 className="text-2xl p-4 rounded-lg">
          Bill Gates says "AI is the Next Great Revolution, Deal with It" at Ted Talks
        </h1>

        <div className="w-full relative aspect-video rounded-2xl overflow-hidden">
          <Image
            src={billGatesImage}
            alt="Bill Gates"
            fill
            className="object-cover rounded-2xl"
            priority
          />
        </div>

        <div className="w-full h-auto flex flex-col prose max-w-full  shadow-md p-5 rounded-2xl gap-5">
          <div className='grid grid-cols-2 justify-between items-center text-center w-full h-10'>
            <div className='flex bg-orange-100 w-2/5 rounded-full h-10 text-center justify-center items-center'>
              <h1 className='text-orange-600 uppercase '>Congress</h1>
            </div>
            <div className='flex flex-row justify-evenly items-end gap-10'>
              {iconOptions.map((options, idx) => (
                <div className='flex flex-row gap-2 justify-end items-center uppercase text-xl cursor-pointer' key={idx}>
                  {options.text} {options.icon}
                </div>
              ))}
            </div>
          </div>
          <div className='flex flex-row w-full h-20'>
            <div className='flex flex-col w-1/2 justify-start'>
              <h1 className='text-4xl'>Title</h1>
              <p className='text-2xl'>Subtitle</p>
            </div>
            <div className='flex flex-col w-1/2 justify-start items-end gap-5'>
              <div className='flex w-50 h-10 rounded-2xl bg-gray-200 justify-evenly text-center items-center cursor-pointer'>
                <ImBell />
                <h1>Save to pocket</h1>
              </div>
              <div className='flex w-50 h-10 rounded-2xl bg-blue-200 justify-evenly text-center items-center cursor-pointer'>
                <ImShare2 />
                <h1>Save to pocket</h1>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h1 className='text-xl text-gray-500 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum tempore perferendis accusamus laboriosam atque itaque quibusdam temporibus, minima voluptatem quisquam ipsa iusto. Qui, quo. Accusamus consectetur voluptates repudiandae enim vel. Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore voluptatibus deleniti quas eveniet tempore ratione. Natus omnis vero praesentium maiores atque, error ad aut tempora eligendi dolorum modi, suscipit laudantium. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium, obcaecati! Architecto dolor deserunt, amet quam aspernatur iste dolore, quo natus sed velit molestias ad, similique earum exercitationem perferendis distinctio? Cum?</h1>
        </div>
      </div>
      {/* Coluna 3 */}
      <div className="flex flex-col justify-start items-center p-10 gap-10 w-full h-auto">
        {billGatesContext.map((options, idx) => (
          <div
            className="flex flex-col w-full h-80 aspect-video rounded-2xl overflow-hidden"
            key={idx}
          >
            <div className="relative w-full h-200">
              <Image
                src={options.image}
                alt="Bill Gates"
                fill
                className="object-cover rounded-2xl"
              />
            </div>
            {/* Texto abaixo da imagem */}
            <div className='flex flex-col w-full h-auto'>
              <div className='flex flex-row justify-between mt-2'>
                <div className='flex w-35 h-10 rounded-2xl bg-red-200 justify-center items-center p-5'>
                  {options.tag}
                </div>
                <p className="flex flex-row justify-center items-center gap-2  text-start text-lg">
                  {options.icon}
                  {options['icon-label']}
                </p>
              </div>
              <div className='text-gray-500'>
                {options.text}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
