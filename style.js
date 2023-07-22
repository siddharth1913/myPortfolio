var tablinks = document.getElementsByClassName("tab-links")
var tabcontents = document.getElementsByClassName("tab-contents")

function opentab(tabname){
    // on clicking any tablink (skill, exp, edu) it will remove line under them
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    // on clicking any tablink (skill, exp, edu) it will remove content written under them
    for(tabcontent of tabcontents){
         tabcontent.classList.remove("active-tab")
    }

    // after performing previous two loops, this add function will add the under line under specific tab-link
    event.currentTarget.classList.add("active-link");

    // this will add the content after clicking on specific tab-link
    document.getElementById(tabname).classList.add("active-tab");
}

