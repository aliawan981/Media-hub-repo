export default function MainSection() {
  return (
    <div className="bg-[url('/img/main-bg.png')] h-auto bg-cover bg-center ">
      <div className="relative z-10 container mx-auto flex flex-col md:flex-row xl:items-center lg:items-center md:items-center sm:items-start sm:pl-12 px-8 justify-between px-58 py-16">
        <div className=" mt-10 md:mt-0 xl:pl-40 lg:pl-8 md:pl-8">
          <h1 className="text-primary font-roboto xl:text-5xl lg:text-4xl md:text-2xl sm:text-3xl text-2xl  font-bold mb-6">
            Discover Premium Images <br /> For Your Projects
          </h1>
          <p className="text-gray-400 font-roboto xl:text-lg lg:text-lg md:text-base mb-6">
            Explore A Vast Collection Across Diverse <br className="md:block xl:hidden" /> Categories To{' '}
            <br className="xl:block md:hidden" />
            Find The Perfect Visuals Here.
          </p>

          <div className="space-x-4">
            <button
              type="button"
              className="font-roboto px-3 py-2 text-xs font-medium text-center rounded-2xl inline-flex items-center bg-primary text-500"
            >
              Browse Images
            </button>
            <button
              type="button"
              className="font-roboto px-3 py-2 text-xs font-medium text-center inline-flex border border-external rounded-2xl items-center bg-transparent text-white"
            >
              Become an Author
            </button>
          </div>
        </div>

        <div className="md:w-1/2 mt-10 md:mt-0 flex xl:justify-center xl:items-center lg:justify-end">
          <div className="relative">
            <div className="absolute inset-0 rounded-3xl"></div>
            <div className="relative overflow-hidden rounded-3xl">
              <img
                src="/img/main-section.svg"
                className="xl:w-96 lg:w-96  md:w-80 sm:w-80 w-80"
                alt="Main Section"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
