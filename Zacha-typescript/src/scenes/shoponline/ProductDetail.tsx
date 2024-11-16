import { useParams, useNavigate } from "react-router-dom";
import image1 from "@/assets/image-1.jpeg";

// Sample products array (ensure each product has a unique ID)
const products = [
  {
    id: "1",
    name: "ZACHA T-SHIRTS1",
    description: "Upgrade your casual look with our newest trendy t-shirt collection. For just 280MAD",
    image: image1,
    price: "280 MAD",
    category: "tshirt",
  },
  {
    id: "1",
    name: "ZACHA T-SHIRTS2",
    description: "Upgrade your casual look with our newest trendy t-shirt collection. For just 280MAD",
    image: image1,
    price: "280 MAD",
    category: "tshirt",
  },
  {
    id: "1",
    name: "ZACHA T-SHIRTS3",
    description: "Upgrade your casual look with our newest trendy t-shirt collection. For just 280MAD",
    image: image1,
    price: "280 MAD",
    category: "tshirt",
  },
  {
    id: "2",
    name: "ZACHA HOODIES",
    description: "Experience ultimate comfort and style with our new hoodies. Stay warm with a touch of fashion for just 300MAD",
    image: image1,
    price: "300 MAD",
    category: "hoodie",
  },
  {
    id: "2",
    name: "ZACHA HOODIES2",
    description: "Stay stylish with our latest hoodies. For just 300MAD",
    image: image1,
    price: "300 MAD",
    category: "hoodie",
  },
  {
    id: "2",
    name: "ZACHA HOODIES3",
    description: "Keep warm and fashionable with our hoodies collection. For just 300MAD",
    image: image1,
    price: "300 MAD",
    category: "hoodie",
  },
];

const ProductDetail = () => {
  const { productId } = useParams(); // Get productId from the URL
  const navigate = useNavigate();

  // Find the selected product based on the ID
  const selectedProduct = products.find((product) => product.id === productId);

  if (!selectedProduct) {
    return <div className="text-black">Product not found!</div>;
  }

  // Filter for products in the same category as the selected product and limit to 9 items
  const relatedProducts = products
    .filter((product) => product.category === selectedProduct.category)
    .slice(0, 9);

  return (
    <section className="w-full bg-gray-100 py-10">
      <div className="mx-auto w-4/5">
        {/* Selected Product */}
        <h1 className="text-4xl font-bold mb-8">{selectedProduct.name}</h1>
        <p className="text-gray-700 text-lg mb-10">{selectedProduct.description}</p>
        <p className="text-lg font-bold mb-6">Price: {selectedProduct.price}</p>

        {/* Related Products */}
        <h2 className="text-3xl font-semibold mb-6">Related Products</h2>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {relatedProducts.map((product) => (
            <div key={product.id} className="bg-white p-4 rounded-lg shadow-md">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h2 className="text-2xl font-semibold">{product.name}</h2>
              <p className="text-gray-700 mt-2">{product.description}</p>
              <p className="text-lg font-bold mt-3">Price: {product.price}</p>
              {/* Button to navigate to Product Submit */}
              <button
                onClick={() => navigate(`/product-submit/${product.name}`)} // Pass the specific product's ID
                className="bg-primary-500 text-white py-2 px-4 rounded-lg hover:bg-secondary-500 transition duration-200"
              >
                Submit Product Info
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
