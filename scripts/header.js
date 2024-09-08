const header = `
    <header class="page-header-cont z-10 w-full h-header drop-shadow-2xl bg-white dark:bg-dark-mode">
        <div class="page-header grid grid-rows-2 h-full">
            <div class="flex items-center justify-between">
                <a href="/"><img class="header-logo" src="./resources/bgl_white.png"></a>
                <button class="basis-8 view-mode">
                    <img class="dark-mode header-logo" src="./resources/Icons/dark_mode.svg">
                    <img class="light-mode header-logo hidden" src="./resources/Icons/light_mode.svg">
                </button>
            </div>
            <div class="flex items-center justify-start gap-4">
                <a class="header-icon" href="/"><img class="float-left" src="./resources/Icons/home.svg"> Home</a>
                <a class="header-icon" href="/"><img class="float-left" src="./resources/Icons/book.svg"> Documentation</a>
            </div>
        </div>
    </header>
`;

function AddHeader() {
    let header = document.createElement("header");
    header.classList.add("page-header-cont", "z-10", "w-full", "h-header", "drop-shadow-xl", "bg-white", "dark:bg-dark-mode");
    document.querySelector('body').appendChild(header);

    let page_header = document.createElement("div");
    page_header.classList.add("page-header", "grid", "grid-rows-2", "h-full");
    header.appendChild(page_header);

    let logo = document.createElement("a");
    logo.innerHTML = '<img class="header-logo" src="./resources/bgl_white.png">';
    logo.setAttribute("href", "/");
    page_header.appendChild(logo);

    let view_mode_button = document.createElement("button");
    view_mode_button.classList.add("basis-8", "view-mode");
    view_mode_button.innerHTML = '<img class="header-logo" src="./resources/Icons/dark_mode.svg"></img>';
    view_mode_button.addEventListener('click', (e) => {
    let list = document.querySelector("html").classList;
        if (list.length == 0) {
            document.querySelector("html").classList.add('dark')
        }else {
            document.querySelector("html").classList.remove('dark')
        }
    });
    page_header.appendChild(view_mode_button)
    // ----------

    let menu = document.createElement("div");
    menu.classList.add("flex", "items-center", "justify-start", "gap-4");
    
    menu.innerHTML =`
    <a class="header-icon" href="/"><img class="float-left" src="./resources/Icons/home.svg"> Home</a>
    <a class="header-icon" href="/"><img class="float-left" src="./resources/Icons/book.svg"> Documentation</a>`
    header.appendChild(menu)
}


const body_html = document.querySelector('body').innerHTML;
document.querySelector('body').innerHTML = header + body_html;