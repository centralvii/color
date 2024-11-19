import "./fonts/inter.css"
import "./normalize.css"
import "./styles.css"

import "./components/ProductsComponent/productsComponent"
import initializeSwiper from "./components/SwiperComponent/swiperComponent"
import initializeSelect from "./components/SelectComponent/selectComponent"
import initializeLogo from "./components/LogoComponent/logoComponent"
import initializeToggleSwitches from "./components/SwitchComponent/switchComponent"

import { loadProducts } from "./components/ProductsComponent/productsComponent"

const toggleData = [
    { label: "Новинки", checked: true },
    { label: "Есть в наличии", checked: false },
    { label: "Контрактные", checked: false },
    { label: "Эксклюзивные", checked: false },
    { label: "Распродажа", checked: false },
]

initializeLogo()
initializeToggleSwitches(toggleData)

initializeSwiper()
initializeSelect((selectedFilter) => {
    loadProducts(selectedFilter)
})

loadProducts()
