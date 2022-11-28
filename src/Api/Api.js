const API = process.env.REACT_APP_API_BACKEND

export async function  loadProducts() {
    const data = await fetch(`${API}/api/v1/products`)
    const products = await data.json()
    return products 
}

export async function createOrder(product, user) {
    const data = await fetch(`${API}/api/v1/order`)
}