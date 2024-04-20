import images from "../constants/images"


const About = () => {
  return (
    <div>
      <div className="relative isolate overflow-hidden py-24 sm:py-32">
        <img
          src={images.about}
          alt="about image"
          className="absolute inset-0 opacity-55  -z-10 h-full w-full object-cover object-right md:object-center"
        />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Our Vision</h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
            At Pawsupplies, our vision is inspired by the joy and companionship that pets bring to our lives. We envision a world where every cat and dog is cherished, nurtured, and provided with the finest quality essentials to thrive and flourish alongside their loving families.
            Our commitment to excellence is reflected in every aspect of our store, from the carefully curated selection of premium pet products to the personalized service and expertise we offer to our customers. We believe that every pet deserves the very best, which is why we handpick each item in our inventory to ensure it meets the highest standards of quality, safety, and durability.
            </p>
          </div>
          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-1 md:flex lg:gap-x-10">
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About