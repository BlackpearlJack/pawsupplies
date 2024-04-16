import images from "../constants/images"

const features = [
    { name: 'New Spring', description: "Our cat self-grooming arch scratcher offers a convenient solution for keeping your feline friend's coat clean and free of loose fur. Featuring a sturdy base and a curved arch with soft bristles, this scratcher allows your cat to self-groom as they rub against it." },
    { name: 'Summer Drainer', description: 'Say goodbye to pet hair on your furniture and clothes with our pet hair removal and massage roller scratcher. This versatile tool features a textured roller that easily picks up and traps pet hair from upholstery, carpets, and clothing. Simply roll the device over surfaces to lift away fur and lint, leaving your home clean and hair-free.' },
    { name: 'Winter Breather', description: "Treat your dog to a luxurious grooming experience with our deshedding and massage glove scratcher. This innovative glove features soft rubber bristles that effectively remove loose fur and massage your dog's skin, promoting circulation and healthy coat growth. Simply slide the glove onto your hand and gently stroke your dog's fur to lift away dirt, dander, and excess hair. Not only does this scratcher help reduce shedding and minimize allergens in your home, but it also strengthens the bond between you and your furry companion." },
    { name: 'Autumn Wood', description: "Our pet grooming and fur removal scratcher is a versatile solution for pet owners looking to keep their home clean and their pet happy. This innovative scratcher features a unique design that effectively removes loose fur and dander from your pet's coat while they scratch and play. The textured surface of the scratcher gently massages your pet's skin, promoting healthy circulation and reducing shedding. Say goodbye to pet hair on furniture and floors as your furry friend enjoys a satisfying scratching experience. " },

  ]
  
  export default function Offers() {
    return (
      <div className="bg-dark-magenta">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-blue sm:text-4xl">Special Offer: Save on Cat and Dog Scratchers for Happy and Healthy Pets</h2>
            <p className="mt-4 text-light-grayish-red">
            Take advantage of our special offer on cat and dog scratchers! Keep your furry friends happy and healthy with our high-quality scratchers designed to satisfy their natural instincts. Shop now and save!
            </p>
  
            <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
              {features.map((feature) => (
                <div key={feature.name} className="border-t border-magenta pt-4">
                  <dt className="font-medium text-gray-blue">{feature.name}</dt>
                  <dd className="mt-2 text-sm text-light-grayish-red">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
            <img
              src={images.spring_scratcher}
              alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
              className="rounded-lg bg-gray-100"
            />
            <img
              src={images.summer_scratcher}
              alt="Top down view of walnut card tray with embedded magnets and card groove."
              className="rounded-lg bg-gray-100"
            />
            <img
              src={images.winter_scratcher}
              alt="Side of walnut card tray with card groove and recessed card area."
              className="rounded-lg bg-gray-100"
            />
            <img
              src={images.wood_scratcher}
              alt="Walnut card tray filled with cards and card angled in dedicated groove."
              className="rounded-lg bg-gray-100"
            />
          </div>
        </div>
      </div>
    )
  }
  