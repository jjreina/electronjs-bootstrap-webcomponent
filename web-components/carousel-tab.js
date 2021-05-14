class CarouselTab extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-interval="false">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner" style="padding-top: 10px;">
                <div class="carousel-item active"> 
                <img src="./images/img_1.jpg" class="mx-auto d-block w-75" alt="...">
                </div>
                <div class="carousel-item">
                <img src="./images/img_2.jpg" class="mx-auto d-block w-75" alt="...">
                </div>
                <div class="carousel-item">
                <img src="./images/img_3.jpg" class="mx-auto d-block w-75" alt="...">
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true" style="filter: invert(100%);"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true" style="filter: invert(100%);"></span>
                <span class="visually-hidden">Next</span>
            </button>
            </div>
        `
    }
}

window.customElements.define("carousel-tab", CarouselTab);