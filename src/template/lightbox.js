class LightBox{
    constructor(media)
    {
        this.media = media;
        console.log("CONSTRUCTOR",this.media);
        this.wrapper = document.querySelector(".popUp-media");
        this.wrapper.style.display = "flex";
        this.mediaApi = new MediaApi('../data/data.json');
        this.creationTemplate();


    }

    creationTemplate(){
        var affichage ;
        if(this.media.image)
        {
            affichage = `<img src="${this.media.image}" alt="Lilac breasted roller">`;
        }
        else if(this.media.video)
        {
            affichage = `<video class=imgMedia controls width="350" alt="Lilac breasted roller">
                            <source src="${this.media.video}">
                        </video>`;
        }
        const TemplateMedia = `<div class=container-media role="dialog" aria-label="image closeup view">
        <div class="close" role="button" aria-label="Close dialog"><i class="fa-solid fa-xmark"></i></div>   
        <div class="media">
            <div class="chevron before" role="link" aria-label="Previous Image"><i class="fa-solid fa-chevron-left fa-2xl"></i></div>
            <div class="imgMedia">
                ${affichage}
                <div class="detailsMedia" role="text">
                    ${this.media.title}
                </div>
            </div>
            <div class="chevron after" role="link" aria-label="Next Image" ><i class="fa-solid fa-chevron-right fa-2xl"></i></div>
        </div>
        </div>`;
        this.wrapper.innerHTML = TemplateMedia;
        const close = document.querySelector(".close").addEventListener("click",()=>{
            this.closePopUp();
        })
        const chevron = document.querySelectorAll(".chevron");
        chevron.forEach(chevron=>chevron.addEventListener("click",(e)=>{
            var target = e.target.classList.value;
            if(target.search("chevron")>0)
            {
                target = e.target.parentNode.classList.value;
            }
            
            if(target.search("after")>0) // clic chevron right
            {
                console.log(this.media);
                this.mediaApi.changeMedia(this.media,1);
            }
            else if(target.search("before")>0) // clic chevron left
            {
                console.log(this.media);
                this.mediaApi.changeMedia(this.media,-1);
            }
        }))
        // removeEventListener("keyup",document);
        document.addEventListener("keyup",(e)=>{ // Pas possible sur la div ?
            //e.stopImmediatePropagation();
            console.log(e.keyCode);
            if(e.keyCode == 39) // Next
            {
                this.mediaApi.changeMedia(this.media,1);
                console.log(this.media);
            }
            else if(e.keyCode == 37){
                this.mediaApi.changeMedia(this.media,-1);
                console.log(this.media);
            }
        })

    }
    
    closePopUp(){
        this.wrapper.style.display = "none";
    }
}