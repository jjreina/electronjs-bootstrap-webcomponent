class ButtonsTab extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <div class="grid-container">
                <div class="grid-item">
                    <button type="button" class="btn btn-primary">Primary</button>
                </div>
                <div class="grid-item">
                    <button type="button" class="btn btn-secondary">Secondary</button>
                </div>
                <div class="grid-item">
                    <button type="button" class="btn btn-success">Success</button>
                </div>  
                <div class="grid-item">
                    <button type="button" class="btn btn-danger">Danger</button>
                </div>
                <div class="grid-item">
                    <button type="button" class="btn btn-warning">Warning</button>
                </div>
                <div class="grid-item">
                    <button type="button" class="btn btn-info">Info</button>
                </div>  
                <div class="grid-item">
                    <button type="button" class="btn btn-light">Light</button>
                </div>
                <div class="grid-item">
                    <button type="button" class="btn btn-dark">Dark</button>
                </div>
                <div class="grid-item">
                    <button type="button" class="btn btn-link">Link</button>
                </div>  
            </div>
        `
    }
}

window.customElements.define("button-tab", ButtonsTab);