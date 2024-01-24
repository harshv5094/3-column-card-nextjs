import { Big_Shoulders_Display } from 'next/font/google'
import Image from 'next/image'

const bigShoulderDisplay = Big_Shoulders_Display({
  subsets: ['latin'],
  weight: '700'
})

export default function Home() {
  return (
    <main className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
      <div className="grid max-desktop:grid-cols-default w-[40em] h-[25em] text-white">
        <div className="bg-bright-orange">
          <div className="p-6">
            <Image
              src={'/icon-sedans.svg'}
              width={50}
              height={50}
              alt="sedans"
            />
            <h1 className={` ${bigShoulderDisplay.className} text-3xl mt-6`}>
              SEDANS
            </h1>

            <p className="mt-5 text-[15px] text-transparent-white">
              Choose a sedan for its affordability and excellent fuel economy.
              Ideal for cruising in the city or on your next road trip.
            </p>
          </div>
        </div>

        <div className="bg-dark-cyan">
          <div className="p-6">
            <Image src={'/icon-suvs.svg'} width={50} height={50} alt="suvs" />
            <h1 className={`${bigShoulderDisplay.className} text-3xl mt-6`}>
              SUVS
            </h1>
            <p className="mt-5 text-[15px] text-transparent-white">
              Take an SUV for its spacious interior, power, and versatility.
              Perfect for your next family vacation and off-road adventures.
            </p>
          </div>
        </div>

        <div className="bg-very-dark-cyan">
          <div className="p-6">
            <Image src={'/icon-luxury.svg'} width={50} height={50} alt="suvs" />
            <h1 className={`${bigShoulderDisplay.className} text-3xl mt-6`}>
              LUXURY
            </h1>
            <p className="mt-5 text-[15px] text-transparent-white">
              Cruise in the best car brands without the bloated prices. Enjoy
              the enhanced comfort of a luxury rental and arrive in style.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
