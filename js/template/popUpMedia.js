class PopUpMedia{
    constructor(media)
    {
        this.media = media;
        this.wrapper = document.querySelector(".popUp-media");
        this.wrapper.style.display = "flex";
        this.mediaApi = new MediaApi('./data/data.json');
        this.creationTemplate();
    }

    creationTemplate(){
        var affichage ;
        if(this.media.image)
        {
            affichage = `<img src="${this.media.image}" alt="">`;
        }
        else if(this.media.video)
        {
            affichage = `<video class=imgMedia controls width="350">
                            <source src="${this.media.video}">
                        </video>`;
        }
        const TemplateMedia = `<div class=container-media>
        <div class="close">X</div>   
        <div class="media">
            <div class="chevron before"><i class="fa-solid fa-chevron-left fa-2xl"></i></div>
            <div class="imgMedia">
                ${affichage}
                <div class="detailsMedia">
                    ${this.media.title}
                </div>
            </div>
            <div class="chevron after"><i class="fa-solid fa-chevron-right fa-2xl"></i></div>
        </div>
        </div>`;
        this.wrapper.innerHTML = TemplateMedia;
        const close = document.querySelector(".close").addEventListener("click",()=>{
            this.closePopUp();
        })
        const chevron = document.querySelectorAll(".chevron");
        chevron.forEach(chevron=>chevron.addEventListener("click",(e)=>{
            var target = e.target.classList.value;
            //console.log(target.search("chevron")>0);
            if(target.search("chevron")>0)
            {
                target = e.target.parentNode.classList.value;
            }
            
            if(target.search("after")>0) // clic chevron right
            {
                this.mediaApi.changeMedia(this.media,1);
            }
            else if(target.search("before")>0) // clic chevron left
            {
                this.mediaApi.changeMedia(this.media,-1);
            }
            //this.mediaApi.changeMedia(this.media,1);
        }))
    }

    closePopUp(){
        this.wrapper.style.display = "none";
    }
}