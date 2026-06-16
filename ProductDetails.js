import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();

  const navigate = useNavigate();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) return <h2>Loading...</h2>;

  return (
    <div>
      <button onClick={() => navigate(-1)}>
        Back
      </button>

      <h1>{product.title}</h1>

      <img src={product.image} width="200" />

      <p>{product.description}</p>

      <h3>${product.price}</h3>
    </div>
  );
}

export default ProductDetails;