class Router {

    constructor (node, routes) {

        this.node = node;
        this.routes = routes;

    }

    start () {
        this.render();
        window.addEventListener("hashchange", (event) => {
            this.render();
        });
    }


    activeRoute () {
        const currentRoute = window.location.hash.replace("#", "");
        return this.routes[currentRoute];
    }



    render () {

        let component = this.activeRoute();
     
        this.node.innerHTML = "";

        if (!component) {
            this.node.innerHTML = "";
        } else {
    
            let newNode = component.render();
            this.node.appendChild(newNode);
        }

    }









}


module.exports = Router;