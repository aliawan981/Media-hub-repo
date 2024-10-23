export default function GalleryCollection() {
  const product = [
    { id: 11, src: '/img/collection1.png' },
    { id: 12, src: '/img/collection2.png' },
    { id: 13, src: '/img/collection3.png' },
    { id: 14, src: '/img/collection4.png' },
    { id: 15, src: '/img/collection5.png' },
    { id: 16, src: '/img/collection6.png' },
    { id: 17, src: '/img/collection7.png' },
    { id: 18, src: '/img/collection8.png' },
    { id: 19, src: '/img/collection9.png' },
    { id: 26, src: '/img/card7.png' },
    { id: 20, src: '/img/collection10.png' },
    { id: 21, src: '/img/collection11.png' },
    { id: 22, src: '/img/collection12.png' },
    { id: 23, src: '/img/collection13.png' },
    { id: 24, src: '/img/collection14.png' },
    { id: 25, src: '/img/card6.png' },
  ];
  return (
    <div className=" container mx-auto  justify-center md:flex-row xl:items-center lg:items-center md:items-center sm:items-start sm:pl-4 px-4  px-58 py-16">
      <div className="flex flex-col">
        {' '}
        <h1 className="text-500 text-center text-2xl xl:text-4xl lg:text-4xl md:text-4xl sm:text-4xl font-semibold font-roboto">
          Explore The Media <br /> Collections From MediaHub
        </h1>
      </div>
      <div className="flex  justify-between items-center py-10 xl:px-48 lg:px-8 md:px-4 sm:px-4 px-2  pb-2">
        <div className="xl:space-x-8  lg:space-x-8  md:space-x-8  sm:space-x-8 space-x-4">
          <button className="text-black font-semibold font-roboto">All Images</button>
          <button className="text-gray-500 font-roboto">Actor</button>
          <button className="text-gray-500 font-roboto">Event</button>
          <button className="text-gray-500 font-roboto">Episode</button>
        </div>
        <button className="bg-500 text-white px-2  py-1 rounded-full inline-flex items-center space-x-2">
          <span className="flex font-roboto">
            <img src="/img/filter.svg" />
            Filter
          </span>
        </button>
      </div>
      <div className="grid grid-cols-4  gap-6 space-y-8 justify-between items-center py-10 xl:px-48 lg:px-8 md:px-4 sm:px-4 px-2 pb-2">
        {product.map(({ id, src }) => (
          <div key={id}>
            <img src={src} alt={`Card ${id}`} />
          </div>
        ))}
      </div>
    </div>
  );
}
