export default function Banner({ heading, description, imgButton, authButton, bgImage, descriptionWidth }) {
  const descriptionWidthClass = {
    lg: 'lg:max-w-[48rem]',
    xl: 'xl:max-w-[54rem]',
  };

  return (
    <div className={`relative h-[70vh] bg-cover bg-center`} style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
        <h1 className="text-4xl font-bold mb-4">{heading}</h1>
        <p className={`mb-6 ${descriptionWidthClass[descriptionWidth]}`}>{description}</p>
        <div className="space-x-4">
          <button className="px-4 py-1 bg-primary text-black rounded-full hover:bg-transparent hover:text-primary hover:border hover:border-black transition">
            {imgButton}
          </button>
          <button className="px-4 py-1 bg-transparent border border-white text-white rounded-full hover:bg-white hover:text-black transition">
            {authButton}
          </button>
        </div>
      </div>
    </div>
  );
}
