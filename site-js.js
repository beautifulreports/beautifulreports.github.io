//create html classes for overlay
var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $caption = $("<p></p>");

//add image and caption to overlay
$overlay.append($image);
$overlay.append($caption);
$("body").append($overlay);

//display overlay on click
$("section img").click(function(event){
    var imageLocation = $(this).attr("src");
    $image.attr("src", imageLocation);
    $overlay.show();
    var captionText = $(this).attr("alt");
    $caption.text(captionText);
    //prevent scrolling the page
    document.body.style.overflow='hidden';
});

//hide overlay on second click
$overlay.click(function(){
    $overlay.hide();
    //resort normal body scrolling
    document.body.style.overflow= 'auto';
    document.body.style.filter="blur(0px)";
});


//open nav on click
function openNav() {
document.getElementById("sidenav").style.left = "0";
}
//close nav on click
function closeNav() {
document.getElementById("sidenav").style.left = "-15rem";
}

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length;
     i++) {
    acc[i].onclick = function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling; 
        if
            (panel.style.display === "inline"){
                panel.style.display = "none";}
        else{
            panel.style.display ="inline";
        }
            }
    }

