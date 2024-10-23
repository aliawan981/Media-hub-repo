'use client';
import { useState } from 'react';
// import { FaPlus, FaMinus } from 'react-icons/fa';
const teamFaq = [
  {
    id: 'question#01',
    text: 'How do I upload a design resource?',
    answer:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur.',
  },
  {
    id: 'question#02',
    text: 'How do I claim ownership of a design resource?',
    answer:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur.',
  },
  {
    id: 'question#03',
    text: 'How do I become an author?',
    answer:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur.',
  },
  {
    id: 'question#04',
    text: 'Can I upload my design resources on another stock site?',
    answer:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur.',
  },
  {
    id: 'question#05',
    text: 'What payment methods do you accept?',
    answer:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur.',
  },
  {
    id: 'question#06',
    text: 'How can I contact customer support?',
    answer:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur.',
  },
];

export default function AboutFaq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = index => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <div className=" bg-[url('/img/mediahub.png')] bg-cover bg-no-repeat ">
        <div className="flex flex-col justify-center items-center text-center py-3 px-3 container xl:mx-auto xl:py-20 lg:px-8 md:px-6 md:py-4 sm:text-xl sm:px-3 sm:py-3">
          <div>
            <h1 className="text-3xl xl:text-5xl font-semibold font-roboto text-primary md:text-3xl sm:text-3xl">
              Frequently Asked Questions
            </h1>
            <p className="text-lg font-roboto text-primary py-4">
              Your questions answered: Find everything you need to know about Media Hub.
            </p>
          </div>
          <div class="flex justify-center items-center space-x-6 text-lg py-4 bg-black">
            <a href="#" class="text-primary font-roboto font-bold border-r border-primary pr-4">
              General
            </a>
            <a href="#" class="text-primary font-roboto border-r border-primary pr-4 pl-4">
              Payment
            </a>
            <a href="#" class="text-primary font-roboto pl-4">
              Other
            </a>
          </div>
        </div>

        <div className="xl:pb-16 md:pb-12 lg:pb-[4rem] px-4 xl:px-40 xl:flex">
          <div className="container xl:px-32 sm:px-2 sm:py-3 grid grid-cols-1 gap-8">
            <div className="cols-span-2">
              {teamFaq.map(item => (
                <div key={item.id} className="accordion-item mb-16">
                  <button
                    className={`accordion-toggle flex justify-between w-full text-[1rem] xl:text-2xl font-normal md:text-xl sm:text-[1rem] ${
                      activeIndex === item.id ? 'text-primary' : 'text-primary'
                    }`}
                    onClick={() => toggleAccordion(item.id)}
                  >
                    <span className="font-roboto font-normal capitalize">{item.text}</span>
                    <span
                      className={`transition-transform duration-300 ${
                        activeIndex === item.id ? 'rotate-180' : ''
                      }`}
                    >
                      {activeIndex === item.id ? (
                        <img src="/img/minus.svg" alt="Minus" />
                      ) : (
                        <img src="/img/plus.svg" alt="Plus" />
                      )}
                    </span>
                  </button>

                  {/* Accordion Content */}
                  <div
                    className={`overflow-hidden transition-max-height duration-500 ease-in-out mt-4 ${
                      activeIndex === item.id ? 'max-h-screen' : 'max-h-0'
                    }`}
                  >
                    <p className="font-roboto text-primary">{item.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
