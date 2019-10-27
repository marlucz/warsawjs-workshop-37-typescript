const url = "http://localhost:3000/cart";

async function makeRequest<T>(url: string): Promise<T> {
  const result = await fetch(url);
  return result.json();
}

interface Product {
  name: string;
  price: number;
}

interface Tomato extends Product {
  color: string;
}

type Products = Array<Product>;

async function displayProducts() {
  return makeRequest<Products>(url);
}

function addProduct(product: Product) {
  return fetch(url, {
    method: "POST",
    body: JSON.stringify(product),
    // body: new URLSearchParams((product as any) as Record<
    //   string,
    //   string
    // >).toString(),
    headers: { "Content-Type": "application/json" }
  });
}

async function main() {
  const tomato = {
    name: "pomidor",
    price: 5,
    color: "czerwony"
  };

  await addProduct(tomato);
  await displayProducts();
}

function renderProducts() {
  const div = document.getElementById("product");
}

main();
