
var dltIcon = document.getElementById("Dlt");
var dltIcon2 = document.getElementById("Dlt2");
var Icon2 = document.getElementById("dltIcon2");
var dltText = document.getElementById("dltText");
var doc = document.getElementById("doc");
var docIcon = document.getElementById("docSvg");
var dlt3 = document.getElementById("Dlt3");
var success = document.getElementById("success");
var ml = 0;
document.getElementById("delete").addEventListener("click", () => {
    dltIcon.hidden = true;
    dltText.hidden = true;
    Icon2.style.transition = "2s";

    dltIcon2.hidden = false;
    const time = setInterval(() => {

        doc.hidden = false;
        docIcon.style.marginTop = 2 * ml;
        Icon2.style.marginLeft = ml;
        ml = ml + 5;
        if (ml == 35) {
            doc.hidden = true;
            dltIcon2.hidden = true;
            dlt3.hidden = false;
            setTimeout(() => {
                dlt3.hidden = true;
                success.style.display="flex";
                success.hidden = false;
            }, 500);
            clearInterval(time);
        }
    }, 1000);

})

