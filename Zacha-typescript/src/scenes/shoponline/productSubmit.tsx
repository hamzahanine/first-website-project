import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

// Define the product type
type Product = {
  id: string;
  name: string;
  price: string;
  category: string;
};

// Sample products array
const products: Product[] = [
  {
    id: "1",
    name: "ZACHA T-SHIRTS1",
    price: "280 MAD",
    category: "tshirt",
  },
  {
    id: "2",
    name: "ZACHA T-SHIRTS2",
    price: "280 MAD",
    category: "tshirt",
  },
  {
    id: "3",
    name: "ZACHA T-SHIRTS3",
    price: "280 MAD",
    category: "tshirt",
  },
  {
    id: "4",
    name: "ZACHA HOODIES",
    price: "300 MAD",
    category: "hoodie",
  },
  {
    id: "5",
    name: "ZACHA HOODIES2",
    price: "300 MAD",
    category: "hoodie",
  },
  {
    id: "6",
    name: "ZACHA HOODIES3",
    price: "300 MAD",
    category: "hoodie",
  },
];

const ProductSubmit = () => {
  const { productId } = useParams<{ productId: string }>(); // Retrieve product ID from URL
  const inputStyles = `mb-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white`;

  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const selectedProduct = products.find((p) => p.name === productId);
    if (selectedProduct) {
      setProduct(selectedProduct);
    } else {
      console.warn("Product not found with ID:", productId);
    }
  }, [productId]);

  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    const isValid = await trigger();
    if (isValid) {
      console.log("Submitted data:", data);
      alert("Form submitted successfully!");
    }
  };

  if (!product) {
    return <div className="text-white">Product not found. Please check the URL.</div>;
  }

  return (
    <section id="product-submit" className="mx-auto w-6/6 pt-24 pb-32 bg-black text-white">
      <motion.div>
        {/* HEADER */}
        <motion.div
          className="md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <h2 className="text-3xl font-bold text-primary-500">
            Submit Product Information
          </h2>
          <p className="my-5">
            Add your address, a description, and any customization notes. Submit your information, and we will process your request.
          </p>
        </motion.div>

        {/* FORM */}
        <motion.div
          className="mt-10 justify-between gap-8 md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <form
            target="_blank"
            onSubmit={onSubmit}
            action="https://formsubmit.co/ad1a76066f29036ee824d24ed3944adc"
            method="POST"
            className="bg-white p-8 rounded-lg shadow-lg w-full"
          >
            {/* Product Name */}
            <div className="mb-6">
              <label htmlFor="productName" className="block text-gray-700 font-semibold mb-2">
                Product Name
              </label>
              <input
                id="productName"
                type="text"
                className="w-full px-4 py-2 border rounded-lg bg-gray-200"
                value={product.name}
                readOnly
                {...register("productName", { required: true })}
                />
                
            </div>

            {/* Price */}
            <div className="mb-6">
              <label htmlFor="price" className="block text-gray-700 font-semibold mb-2">
                Price
              </label>
              <input
                id="price"
                type="text"
                className="w-full px-4 py-2 border rounded-lg bg-gray-200"
                value={product.price}
                readOnly
                {...register("price", { required: true })}
                />
                
            </div>

            {/* Address */}
            <div className="mb-6">
              <label htmlFor="address" className="block text-gray-700 font-semibold mb-2">
                Address
              </label>
              <input
                id="address"
                type="text"
                className={inputStyles}
                placeholder="Enter your address"
                {...register("address", { required: true })}
              />
              {errors.address && (
                <p className="mt-1 text-primary-500">Address is required.</p>
              )}
            </div>

            {/* Description */}
            <textarea
              className={inputStyles}
              placeholder="Description"
              rows={4}
              cols={50}
              {...register("description", { required: true, maxLength: 2000 })}
            />
            {errors.description && (
              <p className="mt-1 text-primary-500">
                {errors.description.type === "required" && "Description is required."}
                {errors.description.type === "maxLength" &&
                  "Max length is 2000 characters."}
              </p>
            )}

            <button
              type="submit"
              className="mt-5 rounded-lg bg-primary-500 px-20 py-3 transition duration-500 hover:bg-secondary-500"
            >
              Submit
            </button>
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ProductSubmit;
