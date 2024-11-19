import "./products.css"

const productsTemplate = document.querySelector("#products").content
const productsBody = document.querySelector(".products")
const prodCount = document.querySelector("#prod-count")

export const fetchProducts = async () => {
    const response = await fetch(
        "https://67349d76a042ab85d11aee4d.mockapi.io/api/products"
    )
    if (!response.ok) {
        throw new Error("Failed to fetch products")
    }
    const products = await response.json()
    return products
}

const renderProducts = (products) => {
    productsBody.innerHTML = ""
    console.log(products)
    products.forEach((item) => {
        const producstClone = productsTemplate.cloneNode(true)

        producstClone.querySelector(".product-name").textContent = item.name
        producstClone.querySelector(".product-image").src = item.imafg
        producstClone.querySelector(
            ".product-price .price"
        ).textContent = `${parseInt(item.price)} ₽`

        productsBody.append(producstClone)
    })
    prodCount.textContent = products.length
}

// Логика фильтрации
const applyFilter = (products, filter) => {
    switch (filter) {
        case "Сначала дорогие":
            return [...products].sort((a, b) => b.price - a.price)
        case "Сначала недорогие":
            return [...products].sort((a, b) => a.price - b.price)
        case "Сначала новые":
            return [...products].sort(
                (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
            )
        default:
            return products
    }
}

// Загружаем и фильтруем продукты
export const loadProducts = async (filter = "Сначала популярные") => {
    try {
        const products = await fetchProducts()
        const filteredProducts = applyFilter(products, filter)
        renderProducts(filteredProducts)
    } catch (error) {
        console.error("Error fetching products:", error)
    }
}

loadProducts()
