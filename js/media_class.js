

class CreatePod{
    constructor(_parent,_imgSrc,_imgWidth){
        this.parent=_parent;
        this.imgSrc=_imgSrc;
        this.imgWidth=_imgWidth
     }

    render(){

        let parentDiv=document.getElementById(this.parent);

        let containerDiv=document.createElement('div');
         
        let img= document.createElement('img');
        img.src=`${this.imgSrc}`;
        img.width=285;
        img.className='p-1 multy_imges'
         parentDiv.append(img);

         $("img").on("click",(e)=>{
            
             $(".dark").css("display","flex");
             $("#big_img").attr("src",e.target.currentSrc);
             $("#big_img").attr("width","580")
             
         })

         $("#btn_close").on("click",()=>{
             $(".dark").css("display","none");
         })

          let close_pic =(e)=>{
              
              if(e.target.nodeName!=="IMG"){
              $(".dark").css("display","none");}
         } 
         $(document).on("click",close_pic);
        }
}

export default CreatePod;