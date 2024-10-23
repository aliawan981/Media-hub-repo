export default function Sellers() {
  const images = [
    { id: 5, src: '/img/card.png' },
    { id: 6, src: '/img/card2.png' },
    { id: 7, src: '/img/seller1.png' },
    { id: 8, src: '/img/seller2.png' },
  ];
  return (
    <div className=" container mx-auto  justify-center md:flex-row xl:items-center lg:items-center md:items-center sm:items-start sm:pl-4 px-4  px-58 py-16">
      <div className="flex flex-col">
        <h1 className="text-500 text-center text-4xl font-bold font-roboto">Best Sellers</h1>
      </div>
      <div className="flex  justify-between items-center py-10 xl:px-48 lg:px-8 md:px-4 sm:px-4 px-2  pb-2">
        <div className="xl:space-x-8  lg:space-x-8  md:space-x-8  sm:space-x-8 space-x-4">
          <button className="text-black font-semibold font-roboto">All Images</button>
          <button className="text-gray-500 font-roboto">Actor</button>
          <button className="text-gray-500 font-roboto">Event</button>
          <button className="text-gray-500 font-roboto">Episode</button>
        </div>
        <button className="bg-500 font-roboto text-white px-2  py-1 rounded-full inline-flex items-center space-x-2">
          Show All
        </button>
      </div>
      <div className="grid grid-cols-4  gap-6 justify-between items-center py-10 xl:px-48 lg:px-8 md:px-4 sm:px-4 px-2 pb-2">
        {images.map(({ id, src }) => (
          <div key={id}>
            <img src={src} alt={`Card ${id}`} />
          </div>
        ))}
      </div>
    </div>
  );
}