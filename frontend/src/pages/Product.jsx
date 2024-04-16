import Breadcrum from "../components/Breadcrum"
import { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import ProductDisplay from "../components/ProductDisplay";
import RelatedProducts from "../components/RelatedProducts";

const Product = () => {

  const {all_product} = useContext(ShopContext);
  const {productId} = useParams();
  const product = all_product.find((e) => e.id === Number(productId)); 

  return (
    <div className="bg-[#ffffff]">
      <div className="pt-6">
        <Breadcrum product={product} />
        <ProductDisplay product={product} />
        <RelatedProducts />
      </div>
    </div>
  )
}

export default Product