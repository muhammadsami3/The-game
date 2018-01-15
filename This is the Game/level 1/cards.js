var secondsRemaining;//timer
var intervalHandle;//imer
var minutes=1;//timer
var timePadge = true;
var timePadgeMargin;

var two_right=0;
var first_obj;
var viewed = 0;
var first_src = "";
var first_id = "";
var points = 0;
var maxscore=10;
var heartslost=0;
var how_many_checked = 0;
var points_par = document.getElementById("point");
points_par.innerText = points;

function shuffleArray(img_arr) {
    for (let i = img_arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [img_arr[i], img_arr[j]] = [img_arr[j], img_arr[i]];
    }
}
var img_arr = ['imgs/pic1.jpg', 'imgs/pic10.jpg', 'imgs/pic1.jpg', 'imgs/pic10.jpg'];
var hearts = ['hearts.png', 'hearts1.png', 'hearts2.png','hearts3.png'];

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
        //if card is not correct
        if (!obj.correct) {
            //if it's not the same card
            if (obj.id != first_id) {
                //if the shown less than 2 card
                if (viewed < 2) {

                    obj.set_img(src);
                    viewed++;
                    //first card shown just save it
                    if (viewed == 1) {
                        first_src = src;
                        first_id = obj.id;
                        first_obj = obj
                    }
                     //if it's the second card shown
                    if (viewed == 2) {

                        var delay_fun = function () {
                            if (first_src == src) {
                                var first_elem = document.getElementById(first_id)
                                first_obj.correct = true;
                                var second_elem = document.getElementById(obj.id)
                                obj.correct = true;
                                how_many_checked += 2;
                                points += 5;
                                two_right++;
                                if(two_right>=2)
                                {
                                    if(two_right==2)
                                    {
                                        points+=2; 
                                    }
                                    else{points+=3;}
                                    
                                }
                                points_par.innerText = points;


                                //local storage
                                if (localStorage.getItem("max_points") < points) 
                                    {
                                    localStorage.setItem("max_points", points)
                                    }
                                    document.getElementById("bestscore").innerText=localStorage.getItem("max_points")

                                //level complete
                                if(how_many_checked==img_arr.length)
                                {
                                    clearInterval(intervalHandle);
                                    document.getElementById("score").innerHTML=points
                                    var passed_sec=minutes*60-secondsRemaining;
                                    min = Math.floor(passed_sec / 60);////
                                    sec = passed_sec- (min * 60)-1;////
                                    if (sec < 10) {
                                        sec = "0" + sec;///
                                    }
                                    // concatenate with colon////
                                    message = min + ":" + sec;///
                                    document.getElementById("finshtime").innerHTML= message;
                                    document.getElementById("tableImg").setAttribute('style',"display:none")
                                  
                                    var result=document.getElementsByClassName('result')
                                    for(var i=0; i< result.length; i++)
                                    {
                                        result[i].style.display="block";
                                    }
                                    
                                    if (heartslost==0)
                                    {
                                        document.getElementById("padge1").setAttribute('src',"padge/pergold.png")
                                    }
                                    if(points==maxscore)
                                    {
                                        document.getElementById("padge3").setAttribute('src',"padge/goldenstar.png")
                                    }
                                    if(timePadge==true)
                                    {
                                        document.getElementById("padge2").setAttribute('src', "padge/timegold.png")   
                                    }
                                }

                            } else {
                                two_right=0;
                                var first_elem = document.getElementById(first_id)
                                first_elem.setAttribute('src', 'cardback.jpg')

                                var second_elem = document.getElementById(obj.id)
                                second_elem.setAttribute('src', 'cardback.jpg')
                                heartslost++;
                                document.getElementById("heartImg").setAttribute('src',hearts[heartslost]);
                                if (heartslost==3)
                                {
                                    clearInterval(intervalHandle);
                                    document.getElementById("tableImg").setAttribute('style', "display:none");
                                    document.getElementById("tryagain").setAttribute('style', "display:all");
                                }

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
//creating objects
var c1 = new cards('img1', false, false);
var c2 = new cards('img2', false, false);
var c3 = new cards('img3', false, false);
var c4 = new cards('img4', false, false);
//adding then to array
var obj_arr = { obj1: c1, obj2: c2, obj3: c3, obj4: c4 }
var img_img1 = document.getElementsByClassName('gameImgs');
var i = 0
var obj;
//showing cards
for (obj in obj_arr) {
    obj_arr[obj].set_img(img_arr[i]);
    i++;
}
//closing cards 
function init_cards() {
    var obj1;
    for (obj1 in obj_arr) {
        obj_arr[obj1].set_img("cardback.jpg");
    }
    startCountdown();//timer
}
setTimeout(init_cards, 1500);
//add listener
i = 0;
for (obj in obj_arr) 
    {
    img_img1[i].addEventListener('click', ch_img(obj_arr[obj], img_arr[i], i));
    i++
    }

    function startCountdown() {//timer
        // how many seconds?
        secondsRemaining =  minutes * 60;
        // every second, call the "tick" function
        intervalHandle = setInterval(tick, 1000);
    }   

var timePadgeMargin = 0.5 * secondsRemaining;

    function tick() {
        // grab the h1
        var timeDisplay = document.getElementById("time");
        
        // turn seconds into mm:ss
        var min = Math.floor(secondsRemaining / 60);
        var sec = secondsRemaining - (min * 60);
        
        // add a leading zero (as a string value) if seconds less than 10
        if (sec < 10) {
            sec = "0" + sec;
        }
        // concatenate with colon
        var message = min + ":" + sec;
        // now change the display
        timeDisplay.innerHTML = message;
        
        // stop if down to zero
        if (secondsRemaining === 0) {
            document.getElementById("tableImg").setAttribute('style',"display:none");
            document.getElementById("tryagain").setAttribute('style',"display:all");
            clearInterval(intervalHandle);
        }
        if (secondsRemaining < timePadgeMargin)
        {
            timePadge=false;
        }
        // subtract from seconds remaining
        secondsRemaining--;
    }
    