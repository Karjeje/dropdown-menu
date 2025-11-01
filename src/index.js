import "./styles.css";

console.log("Init");

export function setupDropdown(dropdownContainer) {
  const button = dropdownContainer.querySelector(".menubtn");
  const dropdown = dropdownContainer.querySelector(".dropdown");

  button.addEventListener("click", () => {
    dropdown.classList.toggle("invisible");
  });

  document.addEventListener("click", (e) => {
    if (!dropdownContainer.contains(e.target)) {
      dropdown.classList.add("invisible");
    }
  });
}

export function initDropdowns() {
  document.querySelectorAll(".menucontainer").forEach(setupDropdown);
}
