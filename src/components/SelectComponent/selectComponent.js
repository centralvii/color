import "./selectComponent.css"

export default function initializeSelect(onFilterChange) {
    const filter = document.querySelector(".filter")
    const select = document.querySelector(".products-top-filter")
    const selectElementTemplate =
        document.querySelector("#select-template").content
    const selectBody = document.querySelector(".select")
    const selectedText = document.querySelector(".select-text")
    const defaultSelectedText = "Сначала популярные"

    const selectElements = [
        "Сначала популярные",
        "Сначала дорогие",
        "Сначала недорогие",
        "Сначала новые",
    ]

    selectedText.textContent = defaultSelectedText

    selectElements.forEach((item) => {
        const selectClone = selectElementTemplate.cloneNode(true)
        const selectElement = selectClone.querySelector(".select-element")
        selectElement.textContent = item
        selectBody.append(selectClone)

        if (item === defaultSelectedText) {
            selectElement.classList.add("selected")
        }
    })

    select.addEventListener("click", () => {
        filter.classList.toggle("active")
        select.classList.toggle("active")
    })

    const selectContent = selectBody.querySelectorAll(".select-element")
    selectContent.forEach((item) => {
        item.addEventListener("click", () => {
            const selectedItemText = item.textContent
            selectedText.textContent = selectedItemText

            selectBody.prepend(item)

            selectContent.forEach((e) => e.classList.remove("selected"))
            item.classList.add("selected")

            if (onFilterChange) {
                onFilterChange(selectedItemText)
            }
        })
    })
}
