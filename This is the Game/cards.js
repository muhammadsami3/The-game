var cards = function(checked){
    Object.defineProperty(this,'checked',{
        get: function () {
            return checked
        },
        set:function (v) {
            checked=v
        }
    }
    )};
cards.prototype.set_Img = function(src,id){
    var f_Img=document.getElementById(id);
    f_Img.setAttribute('src',src);
};

var c1 = new  cards('false');
c1.set_Img('red.png','img1');
