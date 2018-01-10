class cards 
{
    constructor(id,check,src,correct)
    {
        this.id=id
        this.check=check
        this.src=src
        this.correct=correct
    }
    set_img(new_src)
    {
        //this.src=new_src
        var img_id=document.getElementById(this.id)
        img_id.setAttribute('src',new_src)
        this.check=!this.check;
    }
}
function ch_img(obj,src)
{
    return function()
    {
        obj.set_img(src);
    }
}
var c1=new cards('img1',false,'green.png',false);
var img_img1=document.getElementById('img1');
img_img1.addEventListener('click',ch_img(c1,'red.png'));

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}