import { useContext, /*useState*/} from "react";
import { ShopContext } from "../Context/ShopContext";
import { StarIcon } from '@heroicons/react/20/solid'
import PropTypes from "prop-types";
//import { RadioGroup } from "@headlessui/react";

const products = {
    name: 'Basic Tee 6-Pack',
    price: '$192',
    href: '#',
    breadcrumbs: [
      { id: 1, name: 'Men', href: '#' },
      { id: 2, name: 'Clothing', href: '#' },
    ],
    images: [
      {
        src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg',
        alt: 'Two each of gray, white, and black shirts laying flat.',
      },
      {
        src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg',
        alt: 'Model wearing plain black basic tee.',
      },
      {
        src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg',
        alt: 'Model wearing plain gray basic tee.',
      },
      {
        src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg',
        alt: 'Model wearing plain white basic tee.',
      },
    ],
    colors: [
      { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
      { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
      { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
    ],
    sizes: [
      { name: 'XXS', inStock: false },
      { name: 'XS', inStock: true },
      { name: 'S', inStock: true },
      { name: 'M', inStock: true },
      { name: 'L', inStock: true },
      { name: 'XL', inStock: true },
      { name: '2XL', inStock: true },
      { name: '3XL', inStock: true },
    ],
    description:
      'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
    highlights: [
      'Hand cut and sewn locally',
      'Dyed with our proprietary colors',
      'Pre-washed & pre-shrunk',
      'Ultra-soft 100% cotton',
    ],
    details:
      'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
  }
const reviews = { href: '', average: 4, totalCount: 117 }
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }


const ProductDisplay = (props) => {
    //const [selectedColor, setSelectedColor] = useState(products.colors[0])
    //const [selectedSize, setSelectedSize] = useState(products.sizes[2])
    const {product} = props;
    const {addToCart} = useContext(ShopContext);
  
    return (
    <div>
        <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
            <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
                <img src={product.image} alt="product" className="h-full w-full object-cover object-center"/>
            </div>
            <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
                <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                    <img src={product.image} alt="product" className="h-full w-full object-cover object-center"/>
                </div>
                <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                    <img src={product.image} alt="product" className="h-full w-full object-cover object-center"/>
                </div>
            </div>
            <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
                <img
                src={product.image}
                alt="product"
                className="h-full w-full object-cover object-center"
                />
            </div>
        </div>

        {/* Product info */}
        <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
            <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{product.name}</h1>
            </div>

            {/* Options */}
            <div className="mt-4 lg:row-span-3 lg:mt-0">
                <h2 className="sr-only">Product information</h2>
                <p className="font-bold tracking-tight text-gray-blue line-through">{product.old_price}</p>
                <p className="text-3xl font-bold tracking-tight text-dark-magenta">{product.new_price}</p>

                {/* Reviews */}
                <div className="mt-6">
                    <h3 className="sr-only">
                        Reviews
                    </h3>
                    <div className="flex items-center">
                        <div className="flex items-center">
                            {[0, 1, 2, 3, 4].map((rating) => (
                                <StarIcon
                                    key={rating}
                                    className={classNames(
                                    reviews.average > rating ? 'text-dark-magenta' : 'text-gray-200',
                                    'h-5 w-5 flex-shrink-0'
                                    )}
                                    aria-hidden="true"
                                />
                            ))}
                        </div>
                        <p className="sr-only">{reviews.average} out of 5 stars</p>
                        <a href={reviews.href} className="ml-3 text-sm font-medium text-dark-magenta underline">
                            {reviews.totalCount} reviews
                        </a>
                    </div>
                </div>

                <button
                    onClick={()=>{addToCart(product.id)}}
                    className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                    Add to bag
                </button>    
            </div>
            <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
                <div>
                    <h3 className="text-sm font-medium text-gray-blue">Description</h3>
                    <div className="space-y-8">
                        <p className="text-base text-gray-blue">{product.description}</p>
                    </div>
                </div>
                <div className="mt-10">
                    <h3 className="text-sm font-medium text-gray-blue">Highlights</h3>
                    <div className="mt-4">
                        <ul className="list-disc space-y-2 pl-4 text-sm">
                            {products.highlights.map((highlight) => (
                                <li key={highlight} className="text-gray-blue">
                                    <span className="text-dark-magenta">{highlight}</span> 
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="mt-10">
                    <h3 className="text-sm font-medium text-gray-blue">Details</h3>
                    <div className="mt-4 space-y-6">
                        <p className="text-sm text-gray-blue">{products.details}</p>
                    </div>
                </div>
            </div>
        </div>  
    </div>
    )
}

ProductDisplay.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        old_price: PropTypes.number.isRequired,
        new_price: PropTypes.number.isRequired,
        // Add more prop types for other properties of the product object
    }).isRequired,
};


export default ProductDisplay