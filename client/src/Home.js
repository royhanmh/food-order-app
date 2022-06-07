import React from "react";

function Home() {
  return (
    <div class="flex justify-center min-h-screen bg-gray-100">
      <section class="pt-5 md:mt-0 md:h-screen flex flex-col justify-center text-center md:text-left md:flex-row md:justify-between md:items-center lg:px-48 md:px-12 px-4 bg-secondary">
        <div class="md:flex-1 md:mr-20">
          <h1 class="font-pt-serif text-5xl font-bold mb-7">
            Foods
            <span class="bg-underline1 bg-left-bottom bg-no-repeat pb-2 bg-100%">
              {" "}
              App
            </span>
          </h1>
          <p class="font-pt-serif font-normal mb-7">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            harum tempore consectetur voluptas, cumque nobis laboriosam
            voluptatem.
          </p>
          <div class="font-montserrat">
            <a
              href="/foods"
              class="bg-black px-6 py-4 rounded-lg border-2 border-blue border-solid text-white mr-2 mb-2"
            >
              Shop
            </a>
          </div>
        </div>
        <div class="flex justify-around md:block ml-20 mt-8 md:mt-0 md:flex-1">
          <img
            src="https://www.freepnglogos.com/uploads/food-png/food-png-transparent-images-png-only-6.png"
            alt="banner"
          />
        </div>
      </section>
    </div>
  );
}

export default Home;
