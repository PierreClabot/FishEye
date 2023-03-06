class CarteVideo {
    constructor(media) {
        // this._movie = movie
        this.media = media;  // xxxxxxxxxxxxxxxxx
        // console.log(this.media);
        
        // document.addEventListener("click",(e)=>{
        //     console.log(this);
        // })
        this.like = false;
    }

    creationCarte() {
        //console.log("media",this.media);
        const $wrapper = document.createElement('div');
        $wrapper.classList.add('media');
        const movieCard = `
        <a href=photographe.html?id=${this.media.photographeID}&media=${this.media.id} >
            <div>
                <video class=imgMedia controls width="350">
                    <source src="${this.media.video}">
                </video>
            </div>
        </a>
            <div class="infoMedia">
                <div class=titreMedia>${this.media.titre}</div>
                <div class="likeMedia"><span class=numberLike>${this.media.like}</span><i class="fa-sharp fa-solid fa-heart like" id="like-${this.media.id}" aria-label="likes"></i></div>
            </div>

        `;
        setTimeout(()=>{
            document.getElementById(`like-${this.media.id}`).addEventListener("click",(e)=>{
                // console.log("je click");
                let like = this.media.like;
                let nodeParent = e.target.parentNode;
                
                if(this.like == false)
                {
                    like++;
                    this.like = true;
                }
                else{
                    like = this.media.like;
                    this.like = false;
                }
                
                nodeParent.querySelector(".numberLike").innerHTML = like;
            })
        },500);
        
        $wrapper.innerHTML = movieCard
        return $wrapper

    }
}