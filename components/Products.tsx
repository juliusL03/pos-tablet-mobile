type products = {
  id: number;
  name: string;
  price: number;
  category: string;
}[];
type props = {
  products: products;
  selectedCategory: string;
  addToCart: (product: products[0]) => void;
};
export default function Products({ products, selectedCategory, addToCart }: props) {
  return (
    <div className="md:max-w-screen-xl md:overflow-x-hidden">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {products
          .filter((p) => selectedCategory === "All" || p.category === selectedCategory)
          .map((product) => (
            <button
              key={product.id}
              className="p-4 border-gray-500 rounded-xl text-center shadow bg-white hover:bg-blue-50"
              onClick={() => addToCart(product)}
            >
              <h3 className="md:text-md md:font-semibold lg:text-lg lg:font-bold">
                {product.name}
              </h3>
              <p className="text-sm text-gray-600">${product.price.toFixed(2)}</p>
            </button>
          ))}
      </div>
    </div>
  );
}
