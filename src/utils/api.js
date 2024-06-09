import { BASE_URL } from "./constants";

export default async function getProducts(path) {
  try {
    const res = await fetch(`${BASE_URL}${path}`);
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const body = await res.json();
    return body;
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
}
