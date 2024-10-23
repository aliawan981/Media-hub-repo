export default function AboutSection() {
  const aboutData = [
    {
      id: 1,
      src: '/img/about1.png',
      title: 'More than 1 million design assets downloaded',
      description:
        'Discover how Media Hub has reached an incredible milestone with over 1 million design assets downloaded by creators worldwide.',
    },
    {
      id: 2,
      src: '/img/about2.png',
      title: 'Over 500 talented contributors and authors.',
      description:
        'Learn how Media Hub collaborates with over 500 skilled contributors and authors to bring you a diverse collection of high-quality design assets.',
    },
    {
      id: 3,
      src: '/img/about3.png',
      title: 'A collection of more than 150,000 creative design assets.',
      description:
        'Explore Media Hub`s vast library of over 150,000 high-quality design assets to enhance your projects with stunning visuals and creative elements!',
    },
  ];
  return (
    <div className=" container mx-auto  justify-center md:flex-row xl:items-center lg:items-center md:items-center sm:items-start sm:pl-4 px-4  px-58 py-16">
      <div className="flex flex-col">
        {' '}
        <h1 className="text-500 text-center py-6 text-2xl xl:text-4xl lg:text-4xl md:text-4xl sm:text-4xl font-semibold font-roboto">
          MediaHub Has Been Helping <br /> Creatives Since 2024
        </h1>
      </div>
      <div className="grid grid-cols-3 gap-6  justify-between items-center py-10 xl:px-48 lg:px-8 md:px-4 sm:px-4 px-2 pb-2">
        {aboutData.map(({ id, src, title, description }) => (
          <div key={id} className="bg-white  overflow-hidden">
            <img src={src} alt={`Card ${id}`} className="w-full h-48 object-cover" />
            <div className="p-4 text-center">
              <h3 className="text-xl font-bold mb-2 font-roboto ">{title}</h3>
              <p className="text-gray-600 font-roboto">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
