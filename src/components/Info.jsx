export default function Info() {
  return (
    <div className="bg-[url('/img/background.png')] h-auto bg-cover bg-center">
      <div className="container mx-auto  justify-center md:flex-row xl:items-center lg:items-center md:items-center sm:items-start sm:pl-4 px-4  px-58 py-16">
        <div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 grid-cols-0 ">
          <div></div>
          <div className="py-20">
            <h1 className="text-4xl text-external font-amstelvar">Media Hub</h1>
            <h1 className="text-4xl text-primary font-semibold py-4 font-roboto">
              Browse over 150,000 Ready Images
            </h1>
            <p className="text-lg text-external py-4 font-roboto">
              Unlock a massive collection of creative assets curated just for you. From stunning photos to
              high-quality graphics, find everything you need to bring your ideas to life.
            </p>
            <div className="mt-8 space-x-4">
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
        </div>
      </div>
    </div>
  );
}
