tabs = document.querySelectorAll(".tab");

tabs.forEach( tab => {
    tab.addEventListener('click', () => {
        activeTabs = document.querySelector(".tab-active");
        activeTabs.classList.remove("tab-active");
        tab.classList.add("tab-active");
    })
})