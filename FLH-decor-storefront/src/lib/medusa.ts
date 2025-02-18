// src/lib/medusa.ts
export async function getProducts() {
  try {
    const response = await fetch(`${process.env.MEDUSA_BACKEND_URL}/store/products`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Failed to fetch products: ${response.statusText} - ${errorText}`);
    }

    const data = await response.json();
    return data.products; // Assuming the API returns an array of products
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error; // Re-throw the error to be handled by the caller
  }
}