import { useParams,Link } from "react-router-dom";

const ProductDetailsPage = () => {
  const params = useParams();
  console.log(params);
  return (
    <>
      <h1>Product details!</h1>
      <p>{params.productId}</p>
      <Link to=".." relative="path">
        Back
      </Link>
    </>
  );
};
export default ProductDetailsPage;
