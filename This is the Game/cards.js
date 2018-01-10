

var img_arr=['imgs/pic1.jpg','imgs/pic2.png','imgs/pic3.jpg','imgs/pic4.png','imgs/pic5.jpg','imgs/pic6.png','imgs/pic7.jpg','imgs/pic8.png','imgs/pic1.jpg','imgs/pic2.png','imgs/pic3.jpg','imgs/pic4.png','imgs/pic5.jpg','imgs/pic6.png','imgs/pic7.jpg','imgs/pic8.png'];
function shuffleArray(img_arr) {
    for (let i = img_arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [img_arr[i], img_arr[j]] = [img_arr[j], img_arr[i]];
    }
}
var obj_arr=[c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,c13,c14,c15,c16]

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
img_img1.addEventListener('click',ch_img(c1,img_arr[0]));

var c2=new cards('img2',false,'green.png',false);
var img_img2=document.getElementById('img2');
img_img2.addEventListener('click',ch_img(c2,img_arr[1]));

var c3=new cards('img3',false,'green.png',false);
var img_img3=document.getElementById('img3');
img_img3.addEventListener('click',ch_img(c3,img_arr[2]));

var c4=new cards('img4',false,'green.png',false);
var img_img4=document.getElementById('img4');
img_img4.addEventListener('click',ch_img(c4,img_arr[3]));

var c5=new cards('img5',false,'green.png',false);
var img_img5=document.getElementById('img5');
img_img5.addEventListener('click',ch_img(c5,img_arr[4]));

var c6=new cards('img6',false,'green.png',false);
var img_img6=document.getElementById('img6');
img_img6.addEventListener('click',ch_img(c6,img_arr[5]));

var c7=new cards('img7',false,'green.png',false);
var img_img7=document.getElementById('img7');
img_img7.addEventListener('click',ch_img(c7,img_arr[6]));

var c8=new cards('img8',false,'green.png',false);
var img_img8=document.getElementById('img8');
img_img8.addEventListener('click',ch_img(c8,img_arr[7]));

var c9=new cards('img9',false,'green.png',false);
var img_img9=document.getElementById('img9');
img_img9.addEventListener('click',ch_img(c9,img_arr[8]));

var c10=new cards('img10',false,'green.png',false);
var img_img10=document.getElementById('img10');
img_img10.addEventListener('click',ch_img(c10,img_arr[9]));

var c11=new cards('img11',false,'green.png',false);
var img_img11=document.getElementById('img11');
img_img11.addEventListener('click',ch_img(c11,img_arr[10]));

var c12=new cards('img12',false,'green.png',false);
var img_img12=document.getElementById('img12');
img_img12.addEventListener('click',ch_img(c12,img_arr[11]));

var c13=new cards('img13',false,'green.png',false);
var img_img13=document.getElementById('img13');
img_img13.addEventListener('click',ch_img(c13,img_arr[12]));

var c14=new cards('img14',false,'green.png',false);
var img_img14=document.getElementById('img14');
img_img14.addEventListener('click',ch_img(c14,img_arr[13]));

var c15=new cards('img15',false,'green.png',false);
var img_img15=document.getElementById('img15');
img_img15.addEventListener('click',ch_img(c15,img_arr[14]));

var c16=new cards('img16',false,'green.png',false);
var img_img16=document.getElementById('img16');
img_img16.addEventListener('click',ch_img(c16,img_arr[15]));