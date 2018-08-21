

function setnav() {
document.getElementById('test').innerHTML = (
                    '<button class="accordion">preparation</button>' +
                        '<div class="submenu">' +
                            '<ul>' +
                            '<li><a id="know-your-audience" href="know-your-audience.html" class="page">know your audience</a></li>' +
                            '<li><a id="craft-your-message" href="craft-your-message.html" class="page">craft your message</a></li>' +
                            '<li><a id="draft-your-report" href="draft-your-report.html" class="page">draft your report</a></li>' +
                            '</ul>' +
                        '</div>' +
                    '<button class="accordion">tools</button>' +
                        '<div class="submenu">' +
                            '<ul>' +
                            '<li><a id="filters" href="filters.html" class="page">filters</a></li>' +
                            '</ul>' +
                        '</div>' +
                    '<button class="accordion">communication</button>' +
                        '<div class="submenu">' +
                            '<ul>' +
                            '<li><a id="report_level_text" href="report-level_text.html" class="page">report-level text</a></li>' +
                            '<li><a id="object_level_text" href="object-level_text.html" class="page">object-level text</a></li>' +
                            '</ul>' +
                        '</div>' +        
                    '<button class="accordion">layout</button>' +
                        '<div class="submenu">' +
                            '<ul>' +
                            '<li><a id="add_whitespace" href="add_white_space.html" class="page">embrace whitespace</a></li>' +
                            '<li><a id="layout_simplification" href="layout-simplification.html" class="page">layout simplification</a></li>' +
                            '</ul>' +
                        '</div>' +      
                '<!--' +
                    '<button class="accordion">style</button>' +
                        '<div class="submenu">' +
                            '<ul>' +
                            '<li><a id="color_harmony" class="page">color harmony</a></li>' +
                            '<li><a id="color_meaning" class="page">color meaning</a></li>' +
                            '</ul>' +
                        '</div>' +
                '-->')
}
//'<button class="menu-icon white" onclick="openNav()">&#9776;</button>');




$.when(setnav()).done(function () {
console.log("done");

$(document).ready(function () {
//if(document.URL.indexOf("index") > -1) {
//$("#home").addClass("selected");
//}
if(document.URL.indexOf("filters") > -1) {
$("#filters").addClass("selected");
}
else if(document.URL.indexOf("report-level_text") > -1) {
$("#report_level_text").addClass("selected");
}
else if(document.URL.indexOf("object-level_text") > -1) {
$("#object_level_text").addClass("selected");
}
else if(document.URL.indexOf("add_white_space") > -1) {
$("#add_whitespace").addClass("selected");
}
else if(document.URL.indexOf("layout-simplification") > -1) {
$("#layout_simplification").addClass("selected");
}
else if(document.URL.indexOf("know-your-audience") > -1) {
$("#know-your-audience").addClass("selected");
}
else if(document.URL.indexOf("draft-your-report") > -1) {
$("#draft-your-report").addClass("selected");
}
else if(document.URL.indexOf("craft-your-message") > -1) {
$("#craft-your-message").addClass("selected");
}

})
});

    
    
    
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
document.getElementById("sidenav").style.left = "-20rem";
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





