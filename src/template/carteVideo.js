class CarteVideo {
    constructor(media) {
        this.media = media; // xxxxxxxxxxxxxxxxx
        this.like = false;
        this.observers = [];
    }

    creationCarte() {
        // console.log("media",this.media);
        const $wrapper = document.createElement("div");
        $wrapper.classList.add("media");
        $wrapper.setAttribute("role", "Image link");
        $wrapper.setAttribute("aria-label", "Lilac breasted roller, closeup view");
        const movieCard = `
            <a href=photographe.html?id=${this.media.photographeID}&media=${this.media.id} >
                <div>
                    <video class=imgMedia controls width="350" alt="Lilac breasted roller, closeup view">
                        <source src="${this.media.video}">
                    </video>
                </div>
            </a>
                <div class="infoMedia">
                    <div class=titreMedia role="text">${this.media.title}</div>
                    <div class="likeMedia"><span class=numberLike>${this.media.like}</span><i class="fa-sharp fa-solid fa-heart like" id="like-${this.media.id}" aria-label="likes"></i></div>
                </div>

            `;
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
        }, 500);

        $wrapper.innerHTML = movieCard;
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
