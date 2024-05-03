import { Link } from "react-router-dom"


const Item = (props) => {
  return (
    <div className="group relative">
      <div className="aspect-h-1 aspect-w-1 w-ful overflow-hidden rounded-md bg-gray-magenta lg:aspect-none group-hover:opacity-75 lg:h-80">
        <Link to={`/product/${props.id}`}><img onClick={window.scrollTo(0,0)} src={props.image} alt="product one" className="h-full w-full object-cover object-center lg:h-full lg:w-full" /></Link>
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm font-bold text-dark-magenta">
            <Link to={`/product/${props.id}`}>
              <span aria-hidden="true" className="absolute inset-0" />
              {props.name}
            </Link>
          </h3>
          <p className="mt-1 text-sm text-magenta">{props.description}</p>
        </div>
          <p className="text-sm font-medium text-gray-blue line-through">${props.old_price}</p>
          <p className="text-sm font-medium text-dark-magenta">${props.new_price}</p>
      </div>
    </div>
  )
}



export default Item