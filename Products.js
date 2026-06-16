import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import SearchBar from "../components/SearchBar";
import Card from "../components/Card";

import "./Products.css";

function Products() {
    const role = localStorage.getItem("role");
    
  // State for storing products
  const [products, setProducts] = useState([]);
  // Edit States


  // State for search input
  const [search, setSearch] = useState("");
  // Edit States

const [editingId, setEditingId] =
  useState(null);

const [editTitle, setEditTitle] =
  useState("");

const [editPrice, setEditPrice] =
  useState("");

  // Fetch products from Fake Store API
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) =>
        console.log("Error fetching products:", error)
      );
  }, []);

  // Filter products based on search
  const filteredProducts = products.filter((product) =>
    product.title
      .toLowerCase()
      .includes(search.toLowerCase())
  );
  // DELETE PRODUCT

const handleDelete = (id) => {

  const updatedProducts =
    products.filter(
      (product) =>
        product.id !== id
    );

  setProducts(updatedProducts);
};

// EDIT PRODUCT

const handleEdit = (product) => {

  // set current editing product
  setEditingId(product.id);

  // set existing values
  setEditTitle(product.title);

  setEditPrice(product.price);
};
// Save Edited Product

const handleSave = (id) => {

  const updatedProducts =
    products.map((product) => {

      if (product.id === id) {

        return {

          ...product,

          title: editTitle,

          price: editPrice,
        };
      }

      return product;
    });

  setProducts(updatedProducts);

  // close edit mode
  setEditingId(null);
};

  return (

    
    <div className="products-container">
      {/* Page Title */}
      <h1 className="products-title">
        Products
      </h1>

      {/* Search Bar */}
      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      {/* Products Grid */}
      {/* Admin Add Button */}

{role === "admin" && (

  <button
    className="add-product-btn"
  >
    Add Product
  </button>

)}
      <div className="products-grid">
        {filteredProducts.map((product) => (
          <Card key={product.id}>
            <div className="product-card">
              {/* Product Image */}
              <img
                src={product.image}
                alt={product.title}
                className="product-image"
              />

              {/* Product Title */}
              {/* Edit Mode */}

{editingId === product.id ? (

  <div className="edit-form">

    <input
      type="text"
      value={editTitle}
      onChange={(e) =>
        setEditTitle(e.target.value)
      }
    />

    <input
      type="number"
      value={editPrice}
      onChange={(e) =>
        setEditPrice(e.target.value)
      }
    />

    <button
      onClick={() =>
        handleSave(product.id)
      }
    >
      Save
    </button>

  </div>

) : (

  <>
    <h3>{product.title}</h3>

   <p>${product.price}</p>


  </>

)}

              {/* Product Details Link */}
              <Link
  to={`/products/${product.id}`}
  className="product-link"
>
  View Details
</Link>

{/* Admin Controls */}

{role === "admin" && (

  <div className="admin-buttons">

    <button
  onClick={() =>
    handleEdit(product)
  }
>
  Edit
</button>
    <button
      onClick={() =>
        handleDelete(product.id)
      }
    >
      Delete
    </button>

  </div>

)}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Products;