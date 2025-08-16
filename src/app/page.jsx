import billGatesImage from '@/assets/bill_gates.webp';
import { billImages, optionsCategory } from '@/constants/const';
import Image from 'next/image';
import { ImBubble2, ImEye, ImShare2 } from "react-icons/im";

export default function Home() {
  return (
    <div className="grid grid-cols-[0.5fr_2fr_1fr] w-full min-h-screen">
      {/* Coluna 1 */}
      <div className="flex flex-col justify-evenly items-center p-8 gap-8">
        <div className="flex flex-col justify-evenly items-center w-80 h-60 rounded-2xl shadow-xl p-4">
          <h1>teste</h1>
          <h1 className="text-2xl">Creators page</h1>
        </div>
        <div className="flex flex-col items-center w-80 rounded-2xl shadow-xl gap-6 p-10">
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
      <div className="flex flex-col w-full justify-start items-start gap-6 p-10">
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

        <div className="flex flex-col prose max-w-full gap-5">
          <div className='grid grid-cols-2 justify-between items-center text-center'>
            <div className='flex bg-orange-100 w-2/5 rounded-full h-10 text-center justify-center items-center'>
              <h1 className='text-orange-600 uppercase'>Congress</h1>
            </div>
            <div className='flex flex-row justify-evenly items-end ml-50 gap-10'>
              <div className='flex flex-row gap-2 justify-end items-center uppercase text-xl'>
                <ImEye />
                <h1>2.5 m</h1>
              </div>
              <div className='flex flex-row gap-2 justify-end items-center uppercase text-xl'>
                <ImBubble2 />
                <h1 className='uppercase'>15k</h1>
              </div>
              <div className='flex flex-row gap-2 justify-end items-center uppercase text-xl'>
                <ImShare2 />
                <h1 className='uppercase'>15k</h1>

              </div>
            </div>
          </div>
          <h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus quasi non rerum illum rem laboriosam reiciendis, nesciunt mollitia inventore totam, quis dolor fugit quae aut consequuntur sint sit, repellendus voluptate.
            {/* restante do texto */}
          </h2>
        </div>
      </div>

      {/* Coluna 3 */}
      <div className="flex flex-col justify-start items-center p-8 gap-4 rounded-2xl">
        {
          billImages.map((options, idx) => (
            <div className="w-100 relative aspect-video rounded-2xl overflow-hidden" key={idx}>
              <Image
                src={options}
                alt="Bill Gates"
                fill
                className="object-cover rounded-2xl"
                priority
              />
            </div>
          ))
        }
      </div>

    </div>
  );
}
