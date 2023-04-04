class CartePhoto {
    constructor(media) {
        this.media = media;
        this.like = false;
        this.observers = [];
        console.log(this.media);
    }

    creationCarte() {
        const $wrapper = document.createElement("div");
        $wrapper.classList.add("media");
        $wrapper.setAttribute("role", "Image link");
        $wrapper.setAttribute("aria-label", "Lilac breasted roller, closeup view");
        const movieCard = `
        <div id="media-${this.media.id}">
            <img class=imgMedia src='${this.media.image}' alt="Lilac breasted roller, closeup view"> 
        </div>
        <div class="infoMedia">
            <div class=titreMedia role="text">${this.media.title}</div>
            <div class="likeMedia"><span class=numberLike>${this.media.like}</span><i class="fa-sharp fa-solid fa-heart like" id="like-${this.media.id}" aria-label="likes"></i></div>
        </div>
        `;

        $wrapper.innerHTML = movieCard;

        setTimeout(() => {
            document.getElementById(`like-${this.media.id}`).addEventListener("click", (e) => {
                // console.log("je click");
                let { like } = this.media;
                const nodeParent = e.target.parentNode;

                if (this.like === false) {
                    like += 1;
                    this.like = true;
                    this.fire("like");
                } else {
                    like = this.media.like;
                    this.like = false;
                    this.fire("dislike");
                }

                nodeParent.querySelector(".numberLike").innerHTML = like;
            });

            document.querySelector(`#media-${this.media.id}`).addEventListener("click", (e) => {
                console.log(this.media);
                new LightBox(this.media);
            });
        }, 500);
        return $wrapper;
    }

    subscribe(obj) {
        this.observers.push(obj);
    }

    unsubscribe(fn) {
        this.observers = this.observers.filter(
            (item) => {
                if (item !== fn) {
                    return item;
                }
            },
        );
    }

    fire(evt) {
        this.observers.forEach((item) => {
            item.likeMedia(evt);
        });
    }
}
