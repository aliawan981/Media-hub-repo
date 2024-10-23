import Link from 'next/link';

export default function Header() {
  return (
    <>
      <nav class="bg-primary">
        <div class="max-w-6xl mx-auto px-4">
          <div class="flex justify-between">
            <div class="flex space-x-4">
              <div>
                <a href="#" class="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900">
                  <img src="/img/logo.png" alt="#" />
                </a>
              </div>

              <div class="hidden md:flex items-center space-x-1">
                <div class="flex px-4 py-1 xl:w-96 lg:w-[15rem]  rounded-xl bg-external  overflow-hidden  mx-auto ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 192.904 192.904"
                    width="16px"
                    class="fill-gray-600"
                  >
                    <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"></path>
                  </svg>
                  <input
                    type="email"
                    placeholder="Search For Images"
                    class="w-full outline-none bg-transparent text-gray-600 pl-3 text-sm"
                  />
                </div>
                <div className="xl-pl-8 lg:pl-0">
                  <Link href="/" className="py-5 font-roboto px-3 text-gray-700 hover:text-gray-900">
                    Home
                  </Link>
                  <Link href="/gallery" className="py-5 font-roboto px-3 text-gray-700 hover:text-gray-900">
                    Gallery
                  </Link>
                  <Link href="/about" className="py-5 font-roboto px-3 text-gray-700 hover:text-gray-900">
                    About
                  </Link>
                  <Link href="/contact" className="py-5 font-roboto px-3 text-gray-700 hover:text-gray-900">
                    Contact
                  </Link>
                </div>
              </div>
            </div>

            <div class="hidden md:flex items-center space-x-1">
              <a href="" class="py-5 px-3">
                <img src="/icons/lock.svg" className="w-7" alt="#" />
              </a>
              <a href="" class="py-1 px-2 bg-500 rounded-xl text-primary text-sm  transition duration-300">
                Become an author
              </a>
            </div>

            <div class="md:hidden flex items-center">
              <button class="mobile-menu-button">
                <svg
                  class="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div class="mobile-menu hidden md:hidden">
          <a href="#" class="block py-2 px-4 text-sm hover:bg-gray-200">
            Features
          </a>
          <a href="#" class="block py-2 px-4 text-sm hover:bg-gray-200">
            Pricing
          </a>
        </div>
      </nav>
    </>
  );
}
