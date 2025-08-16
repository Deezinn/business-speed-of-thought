import { navbarOptions } from '@/constants/const';
import { ImSearch } from "react-icons/im";

export default function Navbar() {
  return (
    <>
      <div className="flex flex-row w-full h-16 justify-center">
        <div className="flex justify-center items-center text-center w-1/2">

          <h1 className="uppercase font-bold oswald-500 text-xl">Bill Gates</h1>

        </div>
        <div className="flex justify-evenly items-center text-center w-full" >
          {
            navbarOptions.map((opcao, idx) => (
              <div className='flex flex-row cursor-pointer justify-center items-center text-center gap-2' key={idx}>
                <div>{opcao.icone}</div>

                <h1 className='oswald-300 text-xl'>{opcao.texto}</h1>

              </div>
            ))
          }
        </div>
        <div className="flex justify-center items-center text-center w-1/2">
          <div className='flex flex-row bg-gray-100 justify-center items-center text-center rounded-2xl p-1'>

            <input type="text" className='w-3/4 focus:outline-none text-xl' placeholder='Pesquise' />


            <ImSearch className='text-gray-500' />
          </div>
        </div>
      </div>
    </>
  )
}
