export default function ContactForm() {
  return (
    <div className="flex flex-col justify-center items-center  py-3 px-3 container xl:mx-auto xl:py-20 lg:px-8 md:px-6 md:py-4 sm:text-xl sm:px-3 sm:py-3">
      <div>
        <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2   gap-10 md:pt-6 sm:pt-6">
          <div class="xl:w-96 lg:w-[48rem]  md:w-84  px-3">
            <label
              class="block  tracking-wide font-roboto text-500 text-base font-semibold mb-2"
              for="grid-last-name"
            >
              Firts Name*
            </label>
            <input
              class="appearance-none block w-full font-roboto text-external border border-500 rounded-full py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="dave"
            />
          </div>
          <div class="xl:w-96 lg:w-[48rem]  md:w-84  px-3">
            <label
              class="block  tracking-wide font-roboto text-500 text-base font-semibold mb-2"
              for="grid-last-name"
            >
              Email Address*
            </label>
            <input
              class="appearance-none block w-full font-roboto  text-external border border-500 rounded-full py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="example@gmail.com"
            />
          </div>
          <div class="xl:w-96 lg:w-[48rem]  md:w-84  px-3">
            <label
              class="block  tracking-wide font-roboto text-500 text-base font-semibold mb-2"
              for="grid-last-name"
            >
              Phone Number*
            </label>
            <input
              type="text"
              id="phone-input"
              aria-describedby="helper-text-explanation"
              class=" border border-500 text-external font-roboto text-sm rounded-full block w-full py-4 px-4"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              placeholder="123-456-7890"
              required
            />
          </div>
          <div class="xl:w-96 lg:w-[48rem]  md:w-84  px-3">
            <label
              class="block  tracking-wide font-roboto text-500 text-base font-semibold mb-2"
              for="grid-last-name"
            >
              Subject*
            </label>
            <input
              class="appearance-none block w-full font-roboto  text-external border border-500 rounded-full py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="ex.Collection"
            />
          </div>
        </div>
        <div className="grid grid-cols-1">
          <div class="  w-96 md:w-84 pt-7 px-3">
            <label
              class="block  tracking-wide font-roboto text-500 text-base font-semibold mb-2"
              for="grid-last-name"
            >
              Message*
            </label>
            <textarea
              id="message"
              rows="5"
              class="block p-2.5 font-roboto w-80  xl:w-[48rem] lg:w-[48rem] md:w-[40rem] sm:w-[37rem] text-sm text-external bg-gray-50 rounded-xl border border-500"
              placeholder="Type your message  here..."
            ></textarea>
          </div>
        </div>
        <button
          type="button"
          class="mt-7 ml-3 py-3 px-7 me-2 mb-2 text-sm font-roboto font-medium bg-500 text-primary focus:outline-none  rounded-full border border-gray-200 hover:bg-gray-100"
        >
          Send Message
        </button>
      </div>
    </div>
  );
}
