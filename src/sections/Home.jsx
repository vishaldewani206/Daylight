import { Parallax } from "react-scroll-parallax"

export const Home = () => {
  return (
    <section className="w-screen h-screen relative overflow-hidden text-offWhite">
      <Parallax speed={-20}>
        <div className="grid-wrapper">

        {/* Row 1 */}
        <div className="box-wrapper">
          <div className="box border-r border-b flex items-end ">
            <p className="text-lg mb-3 uppercase font-social">Power you control</p>
          </div>
          <div className="box border-r border-b flex flex-col justify-end pb-4 space-y-2 pt-2">
            <p>kWh generated</p>
            <p>8.2kWh-9.5kWh</p>
          </div>
          <div className="box border-b"></div>
        </div>

        {/* Row 2 */}
        <div className="box-wrapper">
          <div className="box border-r border-b order-7 md:order-0 col-span-3 md:col-span-1">
            <h1 className="md:text-8xl text-2xl font-heading ">Join the Daylight <br/> Network</h1>
            <p className="mt-8 md:text-xl text-sm font-bold ">
              Save on energy. Earn rewards. Stay powered when <br/> the grid goes down.
            </p>
            <div className="space-x-2 mt-9">
              <button className="btn-initials bg-offWhite text-black">See if you qualify</button>
              <button className="btn-initials bg-primary">Get your estimate</button>
            </div>
          </div>
          <div className="box border-r border-b relative overflow-hidden order-5 md:order-none">
            <video
              src="/videos/low.mp4"
              poster="/images/thumbnail.avif"
              className="absolute inset-0 w-full h-full object-cover"
              muted
              autoPlay
              playsInline
              loop
            />
          </div>
          <div className="box border-b"></div>
        </div>

        {/* Row 3 */}
        <div className="box-wrapper grid-cols-1 md:grid-cols-[64%_20%_16%] ">
          {/* 7 */}
          <div className="box border-r md:border-b order-1 md:order-none">
            
          </div>

          {/* hidden on mobile */}
          <div className="box border-r hidden md:flex"></div>
          <div className="box hidden md:flex"></div>
        </div>

      </div>

      </Parallax>
      {/* Background */}
      <Parallax speed={-20} className="absolute inset-0 -z-10">
        <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-black/40"></div>
        <img src="/images/main.avif" className="w-full h-full object-cover" />
      </div>
      </Parallax>
    </section>
  )
}
