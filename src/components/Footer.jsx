export default function Footer() {
  return (
    <>
      <div className=" container mx-auto  justify-center md:flex-row xl:items-center lg:items-center md:items-center sm:items-start sm:pl-4 px-4  px-58 py-16">
        <footer className="bg-primary py-8">
          <div className="container mx-auto px-4 grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-4 gap-8">
            <div className="col-span-1">
              <img src="/img/logo.png" />{' '}
              <p className="text-500 py-4 font-roboto">
                Your ultimate destination for high-quality stock images, videos, and design resources. Whether
                you're a creator, designer, or business owner, we offer a vast library of media assets to fuel
                your creativity and enhance your projects.{' '}
              </p>
              <div className="flex space-x-8 items-center">
                <a href="#" aria-label="Facebook" className="text-gray-500 hover:text-black">
                  <img src="/img/fb.png" />
                </a>
                <a href="#" aria-label="Twitter" className="text-gray-500 hover:text-black">
                  <img src="/img/twitter.png" />{' '}
                </a>
                <a href="#" aria-label="LinkedIn" className="text-gray-500 hover:text-black">
                  <img src="/img/linkdin.png" />{' '}
                </a>
                <a href="#" aria-label="Instagram" className="text-gray-500 hover:text-black">
                  <img src="/img/insta.png" />{' '}
                </a>
              </div>
            </div>
            <div className="col-span-1">
              <h3 className="font-bold mb-4 font-roboto">COLLECTIONS</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-300 font-roboto hover:text-black">
                    Actor
                  </a>
                </li>
                <li>
                  <a href="#" className="text-300 font-roboto hover:text-black">
                    Event
                  </a>
                </li>
                <li>
                  <a href="#" className="text-300 font-roboto hover:text-black">
                    Episode
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-span-1">
              <h3 className="font-bold mb-4 font-roboto">ABOUT US</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-300 font-roboto hover:text-black">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="text-300 font-roboto hover:text-black">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-300 font-roboto hover:text-black">
                    Terms & Conditions
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-span-1">
              <h3 className="font-bold mb-4 font-roboto">CUSTOMER SERVICES</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-300 font-roboto hover:text-black">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-300 font-roboto hover:text-black">
                    Track Your Order
                  </a>
                </li>
                <li>
                  <a href="#" className="text-300 font-roboto hover:text-black">
                    Image Creator & Repair
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
      <div className="bg-gray-900 py-4 mt-8">
        <div className="container mx-auto flex justify-between items-center px-4 text-external">
          <p className="text-sm font-roboto">© 2024 Media Hub, Inc.</p>
          <div className="flex space-x-4">
            <img src="/img/payment.png" />
          </div>
          <a href="#" className="text-external  hover:text-gray-300">
            <span className="flex ">
              Scroll To Top <img src="/img/arrow.svg" className="pl-2" />
            </span>
          </a>
        </div>
      </div>
    </>
  );
}
