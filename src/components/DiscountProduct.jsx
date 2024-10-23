export default function DiscountProduct() {
  const products = [
    { id: 1, src: '/img/product1.png' },
    { id: 2, src: '/img/product2.png' },
    { id: 3, src: '/img/product3.png' },
    { id: 4, src: '/img/product4.png' },
    { id: 5, src: '/img/product5.png' },
    { id: 6, src: '/img/product6.png' },
  ];
  return (
    <div className="bg-external">
      <div className=" container mx-auto  justify-center md:flex-row xl:items-center lg:items-center md:items-center sm:items-start sm:pl-4 px-4  px-58 py-16">
        <div className="flex flex-col">
          <h1 className="text-500 text-center text-4xl font-bold font-roboto">
            Follow Collections and discounts on Instagram
          </h1>
        </div>
        <div className="grid grid-cols-6  gap-6 justify-between items-center py-10 xl:px-48 lg:px-8 md:px-4 sm:px-4 px-2 pb-2">
          {products.map(product => (
            <div key={product.id}>
              <img src={product.src} alt={`Product ${product.id}`} />
            </div>
          ))}
        </div>
        <div className="flex flex-col py-14">
          <h1 className="text-500 text-center text-4xl font-bold font-roboto">
            Or subscribe to the newsletter
          </h1>
          <div className="flex justify-center items-center w-full py-10">
            <form className="relative w-full md:w-1/2">
              <input
                type="email"
                placeholder="Email Address..."
                className="w-full px-4 py-2 pr-20 rounded-full border border-gray-400 focus:outline-none"
              />
              <button
                type="submit"
                className="font-roboto absolute right-1 top-1/2 transform -translate-y-1/2 px-4 py-1 bg-black text-white rounded-full"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
