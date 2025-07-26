type cart = {
  id: number;
  name: string;
  price: number;
  qty: number;
};

type props = {
  cart: cart[];
  subtotal: number;
  tax: number;
  total: number;
};

export default function Summary({ cart, subtotal, tax, total }: props) {
  return (
    <div className="md:w-1/3 bg-gray-100/90 h-screen p-4 flex flex-col">
      {/* Top section: Cart items */}
      <h2 className="text-lg font-bold mb-4">Order</h2>
      <div className="overflow-y-auto flex-1 pr-2">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex justify-between mb-2"
          >
            <span>
              {item.name} x{item.qty}
            </span>
            <span>${(item.price * item.qty).toFixed(2)}</span>
          </div>
        ))}
      </div>

      {/* Bottom section: Totals and buttons */}
      <div className="mt-4">
        <hr className="my-2" />
        <div className="flex justify-between">
          <span>Subtotal:</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Tax:</span>
          <span>${tax.toFixed(2)}</span>
        </div>
        <div className="flex justify-between font-bold">
          <span>Total:</span>
          <span>${total.toFixed(2)}</span>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-2">
          <button className="bg-yellow-400 p-2 rounded">Cash</button>
          <button className="bg-blue-500 text-black p-2 rounded">Card</button>
          <button className="bg-gray-300 col-span-2 p-2 rounded">Print Receipt</button>
        </div>
      </div>
    </div>
  );
}
