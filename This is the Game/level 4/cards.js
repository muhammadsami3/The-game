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
var maxscore=15;
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
var img_arr = ['imgs/pic12.jpg', 'imgs/pic12.jpg', 'imgs/pic3.jpg', 'imgs/pic3.jpg', 'imgs/pic4.png', 'imgs/pic4.png', 'imgs/pic5.jpg', 'imgs/pic5.jpg', 'imgs/pic8.png', 'imgs/pic8.png', 'imgs/pic11.jpg', 'imgs/pic11.jpg', 'imgs/pic9.jpg', 'imgs/pic9.jpg', 'imgs/pic10.jpg', 'imgs/pic10.jpg'];

var hearts = ['hearts.png', 'hearts1.png', 'hearts2.png','hearts3.png'];
var card = ['card1', 'card2', 'card3', 'card4', 'card5', 'card6', 'card7', 'card8', 'card9', 'card10', 'card11', 'card12', 'card13', 'card14', 'card15', 'card16']

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

function ch_img(obj, src, index,activeImg) {
    return function () {
        function PlaySound() {
            var activeImg1="";
            var sound = document.getElementById("sound1");
            var audio = new Audio(sound.src);
            audio.play();
        }
        PlaySound();
        if(secondsRemaining>0){
        //if card is not correct
        if (!obj.correct) {
            //if it's not the same card
            if (obj.id != first_id) {
                //if the shown less than 2 card
                if (viewed < 2) {
                    activeImg.classList.add('active');
                    obj.set_img(src);
                    viewed++;
                    //first card shown just save it
                    if (viewed == 1) {
                        first_src = src;
                        first_id = obj.id;
                        first_obj = obj;
                        activeImg1=activeImg;
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
                                        points+=5; 
                                    }
                                    else{points+=3;}
                                    
                                }
                                
                                points_par.innerText =points;
                                //local storage
                                if (localStorage.getItem("max_points1") < points) 
                                    {
                                    localStorage.setItem("max_points1", points)
                                    }
                                document.getElementById("bestscore").innerText ="Best Score is : " +localStorage.getItem("max_points1")
                                //level complete
                                if(how_many_checked==img_arr.length)
                                {
                                    clearInterval(intervalHandle);
                                    document.getElementById("score").innerHTML = "Your Score is : "+points
                                    var passed_sec=minutes*60-secondsRemaining;
                                    min = Math.floor(passed_sec / 60);////
                                    sec = passed_sec- (min * 60)-1;////
                                    if (sec < 10) {
                                        sec = "0" + sec;///
                                    }
                                    // concatenate with colon////

                                    message = min + ":" + sec;
                                    document.getElementById("finshtime").innerHTML = "Your Time is : "+ message;
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
                                activeImg.classList.remove('active');
                                activeImg1.classList.remove('active');
                                heartslost++;
                                document.getElementById("heartImg").setAttribute('src',hearts[heartslost]);
                                if (heartslost==3)
                                {
                                    clearInterval(intervalHandle);
                                    document.getElementById("tableImg").setAttribute('style', "display:none");
                                    var fail = document.getElementsByClassName('fail')
                                    for (var i = 0; i < fail.length; i++) {
                                        fail[i].setAttribute('style',"display:block");
                                    }
                                  
                                    document.getElementById("scoreOut").setAttribute('style', 'height:0px');
                                }

                            }

                            viewed = 0;
                            first_src = "";
                            first_id = "";
                        }
                        setTimeout(delay_fun,800);
                    }
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
var obj_arr = { obj1: c1, obj2: c2, obj3: c3, obj4: c4, obj5: c5, obj6: c6, obj7: c7, obj8: c8, obj9: c9, obj10: c10, obj11: c11, obj12: c12, obj13: c13, obj14: c14, obj15: c15, obj16: c16}

var img_img1 = document.getElementsByClassName('gameImgs');
var i = 0
var obj;

//showing cards
var intial=document.getElementsByClassName("flip")
for (obj in obj_arr) {
    intial[i].classList.add("active");
    obj_arr[obj].set_img(img_arr[i]);
    i++;
}
//closing cards 
function init_cards() {
    var obj1,i=0;
    for (obj1 in obj_arr) {
        // obj_arr[obj1].set_img("cardback.jpg");
        intial[i].classList.remove("active");
        i++;
    }

    startCountdown();//timer
}

setTimeout(init_cards, 3100);
//add listener
i = 0;
var active=[];
for (obj in obj_arr) 
    {
        active[i]=document.getElementById(card[i]);
    img_img1[i].addEventListener('click', ch_img(obj_arr[obj], img_arr[i], i,active[i]));
    i++
   
    }

    function startCountdown() {//timer
        // how many seconds?
        secondsRemaining =  minutes * 60;
        // every second, call the "tick" function
        intervalHandle = setInterval(tick, 1000);
    }   

 

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
        if (secondsRemaining === 0) { /// checking
            document.getElementById("tableImg").setAttribute('style',"display:none");
            var fail = document.getElementsByClassName('fail')
            for (var i = 0; i < fail.length; i++) {
                fail[i].setAttribute('style', "display:block");

            }
            document.getElementById("scoreOut").setAttribute('style','height:0px');
            clearInterval(intervalHandle);
        }
        timePadgeMargin = 0.5 * minutes*60;
        if (secondsRemaining < timePadgeMargin)
        {
            timePadge=false;
        }
        // subtract from seconds remaining
        secondsRemaining--;
    } 







