import "./switchComponent.css"

export default function initializeToggleSwitches(toggleData) {
    const aside = document.querySelector(".section-aside")
    const toggleTemplate = document.querySelector("#toggle-template").content

    aside.innerHTML = ""

    toggleData.forEach((item) => {
        const toggleClone = toggleTemplate.cloneNode(true)
        const labelText = toggleClone.querySelector(".label-text")
        const input = toggleClone.querySelector("input")

        labelText.textContent = item.label
        input.checked = item.checked || false

        aside.append(toggleClone)
    })
}
