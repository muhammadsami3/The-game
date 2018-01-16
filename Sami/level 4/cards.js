var first_obj;
var viewed = 0;
var first_src = "";
var first_id = "";
var points = 0;
var how_many_checked=0;
var points_par = document.getElementById("point");
points_par.innerText = points;

function shuffleArray(img_arr) {
    for (let i = img_arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [img_arr[i], img_arr[j]] = [img_arr[j], img_arr[i]];
    }
}
var img_arr = ['imgs/pic1.jpg', 'imgs/pic2.png', 'imgs/pic3.jpg', 'imgs/pic4.png', 'imgs/pic5.jpg', 'imgs/pic6.png', 'imgs/pic7.jpg', 'imgs/pic8.png', 'imgs/pic1.jpg', 'imgs/pic2.png', 'imgs/pic3.jpg', 'imgs/pic4.png', 'imgs/pic5.jpg', 'imgs/pic6.png', 'imgs/pic7.jpg', 'imgs/pic8.png'];
shuffleArray(img_arr);
class cards {
    constructor(id, check, correct) {
        this.id = id
        this.check = check
        this.correct = correct
    }
    set_img(new_src) {
        var img_id = document.getElementById(this.id)
        img_id.setAttribute('src', new_src)
        this.check = !this.check;
    }
}
function ch_img(obj, src, index) {
    return function () {
        if (!obj.correct) {
            if (obj.id != first_id) {
                if (viewed < 2) {
                    obj.set_img(src);
                    viewed++;
                    if (viewed == 1) {
                        first_src = src;
                        first_id = obj.id;
                        first_obj = obj
                    }
                    if (viewed == 2) {
                        var delay_fun = function () {
                            if (first_src == src) {
                                var first_elem = document.getElementById(first_id)
                                first_obj.correct=true;
                                var second_elem = document.getElementById(obj.id)
                                obj.correct = true;
                                how_many_checked+=2;
                                points += 5;
                                points_par.innerText = points;
                                if(how_many_checked==img_arr.length)
                                {
                                    document.getElementById("score").innerHTML=points
                                    document.getElementById("tableImg").setAttribute('style',"display:none")
                                    document.getElementById("img_comp").setAttribute('style',"display:all")
                                    document.getElementById("enddiv").setAttribute('style',"display:all")
                                }
                                

                            } else {
                                var first_elem = document.getElementById(first_id)
                                first_elem.setAttribute('src', 'green.png')

                                var second_elem = document.getElementById(obj.id)
                                second_elem.setAttribute('src', 'green.png')

                                points -= 2;
                                points_par.innerText = points;

                            }

                            viewed = 0;
                            first_src = "";
                            first_id = "";
                        }
                        setTimeout(delay_fun, 1000);
                    }


                }

            }
        }
    }
}
//function declartion ()
var c1 = new cards('img1', false, false);
var c2 = new cards('img2', false, false);
var c3 = new cards('img3', false, false);
var c4 = new cards('img4', false, false);
var c5 = new cards('img5', false, false);
var c6 = new cards('img6', false, false);
var c7 = new cards('img7', false, false);
var c8 = new cards('img8', false, false);
var c9 = new cards('img9', false, false);
var c10 = new cards('img10', false, false);
var c11 = new cards('img11', false, false);
var c12 = new cards('img12', false, false);
var c13 = new cards('img13', false, false);
var c14 = new cards('img14', false, false);
var c15 = new cards('img15', false, false);
var c16 = new cards('img16', false, false);
var obj_arr = {obj1 : c1,obj2 : c2,obj3 : c3,obj4 : c4,obj5 : c5,obj6 : c6,obj7 : c7,obj8 : c8,obj9 : c9,obj10 : c10,obj11 : c11,obj12 : c12,obj13 : c13,obj14 : c14,obj15 : c15,obj16 : c16}
var img_img1 = document.getElementsByTagName('img');
var i=0
var obj;
for(obj in obj_arr)
{
    obj_arr[obj].set_img(img_arr[i]);
    i++;
}
function init_cards()
{
    var obj1;
    for(obj1 in obj_arr)
    {
        obj_arr[obj1].set_img("green.png");
    }  
}
setTimeout(init_cards,1500);
i=0;
for(obj in obj_arr)
{
    console.log(obj_arr[obj])
    img_img1[i].addEventListener('click', ch_img(obj_arr[obj], img_arr[i], i));
    i++
}