// flh-storefront/src/modules/layout/components/cart-button.tsx
import { retrieveCart } from "@lib/data/cart";
import CartDropdown from "../cart-dropdown";

export default async function CartButton() {
  const cart = await retrieveCart().catch(() => null); // Fetch cart data
  return <CartDropdown cart={cart} />;
}