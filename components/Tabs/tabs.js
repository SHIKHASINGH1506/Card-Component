tabs = document.querySelectorAll(".tab");
tabsTopIcon = document.querySelectorAll(".tab__icon");
tabsLeadIcon = document.querySelectorAll(".tab__icon-lead");

tabs.forEach( tab => {
    tab.addEventListener('click', () => {
        activeTabs = document.querySelector(".tab-active");
        activeTabs.classList.remove("tab-active");
        tab.classList.add("tab-active");
    })
})

tabsTopIcon.forEach( tab => {
    tab.addEventListener('click', () => {
        activeTabs = document.querySelector(".tab__icon-active");
        activeTabs.classList.remove("tab__icon-active");
        tab.classList.add("tab__icon-active");
    })
})

tabsLeadIcon.forEach( tab => {
    tab.addEventListener('click', () => {
        activeTabs = document.querySelector(".tab__icon-lead-active");
        activeTabs.classList.remove("tab__icon-lead-active");
        tab.classList.add("tab__icon-lead-active");
    })
})