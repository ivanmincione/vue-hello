// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.

// BONUS: Aggiungere un’immagine presa anch’essa da un data


// richiamo Vue.Js
var app = new Vue({
    el: "#root", // per convenzione il contenitore generale in cui lavora Vue viene indicato con il nome root
    data: { // contenitore dei dati necessari
        message: "Hello Vue!",
        title: "style-title",
        image: " https://d585tldpucybw.cloudfront.net/sfimages/default-source/default-album/vuel_870x220bf59eb56a270429dafdbc9ae3513253c.png?sfvrsn=49fafa3a_1 ",
    },
    methods: {
        change() {
            if (this.title == "style-title") {
                this.title = "style-title-dark root-dark ";
            } else {
                this.title = "style-title";
            }
        }
    }
});
