import { HomeIcon, ChevronRightIcon } from '@heroicons/react/20/solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';



const Breadcrum = (props) => {
    const { product } = props;
    return (
        <nav className="flex" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-4">
                <li>
                    <div className="flex items-center">
                        <Link><HomeIcon className="h-5 w-5 text-gray-blue" aria-hidden="true" /></Link>
                        <Link><span className="hidden md:inline ml-1 mr-2 text-gray-blue">Home</span></Link>
                    </div>
                </li>
                <li>
                    <ChevronRightIcon className="flex-shrink-0 h-5 w-5 text-gray-blue" aria-hidden="true" />
                </li>
                <li>
                    <Link to="/"><span className="text-gray-blue">Shop</span></Link>
                </li>
                <li>
                    <Link><FontAwesomeIcon icon={faAngleRight} className="mx-2 text-gray-blue" /></Link>
                </li>
                <li>
                    <Link><span className=" text-gray-blue">{product.category}</span></Link>
                </li>
                {/* Add more breadcrumb items as needed */}
                <li>
                    <FontAwesomeIcon icon={faAngleRight} className="mx-2 text-gray-blue" />
                </li>
                <li>
                    <span className="text-gray-blue">{product.name}</span>
                </li>
            </ol>
        </nav>
    );
};


export default Breadcrum;
