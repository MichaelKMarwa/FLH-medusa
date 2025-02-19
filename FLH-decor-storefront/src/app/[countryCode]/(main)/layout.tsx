// src/app/[countryCode]/(main)/layout.tsx
// Mark as a client component since it uses Navbar
import { Metadata } from 'next';
import { listCartOptions, retrieveCart } from '@/lib/data/cart';
import { retrieveCustomer } from '@/lib/data/customer';
import { getBaseURL } from '@/lib/util/env';
import { StoreCartShippingOption } from '@medusajs/types';
import CartMismatchBanner from '@modules/layout/components/cart-mismatch-banner';
import {Footer} from '@modules/layout/templates/footer';
import Navbar from '@modules/layout/templates/nav';
import FreeShippingPriceNudge from '@modules/shipping/components/free-shipping-price-nudge';

export const metadata: Metadata = {
  metadataBase: new URL(getBaseURL()),
  title: 'Your Store Title',
  description: 'Your store description',
  viewport: 'width=device-width, initial-scale=1',
};

export default async function PageLayout({ children }: { children: React.ReactNode }) {
  const customer = await retrieveCustomer();
  const cart = await retrieveCart();
  let shippingOptions: StoreCartShippingOption[] = [];
  if (cart) {
    const { shipping_options } = await listCartOptions();
    shippingOptions = shipping_options;
  }

  return (
    <html lang="en">
      <body className="bg-gray-100 font-sans antialiased">
        <Navbar />
        {customer && cart && (
          <CartMismatchBanner customer={customer} cart={cart} />
        )}
        {cart && (
          <FreeShippingPriceNudge
            variant="popup"
            cart={cart}
            shippingOptions={shippingOptions}
          />
        )}
        <main className="container mx-auto px-4 py-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}