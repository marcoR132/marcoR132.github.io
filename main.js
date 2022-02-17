const firstrow = document.querySelector(".first-row");
const secondrow = document.querySelector(".second-row");
const thirdrow = document.querySelector(".third-row");
const fourthrow = document.querySelector(".fourth-row");
const fyfthrow = document.querySelector(".fifth-row");
   

firstrow.innerHTML = "OPEN WHEN YOU MISS ME"
firstrow.style.textAlign ="center"
firstrow.style.backgroundColor ="white"
 
firstrow.addEventListener('mouseover', function(){
    firstrow.style.width = "50%";
    firstrow.style.height = "120px"
    firstrow.style.backgroundColor = "red";
    firstrow.style.transition = "all 2s ease "

    firstrow.innerHTML =" So ek sien iemand mis my so biedjie, my lief ek weet dis moeilik en ek mis my engel so baie maar dis nou darm die laaste jaar dan is ons heeltyd saam en ek gaan jou soveel soene gee en drukkies en baie baie baie baie liefde ek belowe en weet net jys my als en soos jy die lees dink ek aan jou eks ongelooflik lief vir jou my engel";
})
firstrow.addEventListener('mouseleave', function(){
    firstrow.style.width = "25%";
    firstrow.style.height = "100px"
    firstrow.style.backgroundColor = "red";
    firstrow.style.transition = "all 500ms ease "
    firstrow.innerHTML = "Open Me Again"
    
})


secondrow.innerHTML = "OPEN ME WHEN YOU HAD A BAD";
secondrow.style.textAlign ="center";
secondrow.style.backgroundColor ="white"


secondrow.addEventListener('mouseover', function(){
    secondrow.style.width = "50%";
    secondrow.style.backgroundColor = "red";
    secondrow.style.transition = "all 2s ease "

    secondrow.innerHTML = "So iemand het biedjie n slegte dag gehad, my babby eks so jammer dat jou daggie sleg was jy verdien dit nie , ek gaan jou baie soene gee en n baie stuiwe drukkies okay, en onthou jys perfek en het die beste hartjie wat bestaan me love you lots";
})

secondrow.addEventListener('mouseleave', function(){
    secondrow.style.width = "25%";
    secondrow.style.backgroundColor = "red";
    secondrow.style.transition = "all 500ms ease "
    secondrow.innerHTML = "Open Me Again"
    
})

thirdrow.innerHTML = "OPEN ME WHEN YOU HAVE A NIGHTMARE";
thirdrow.style.textAlign ="center";
thirdrow.style.backgroundColor ="white"


thirdrow.addEventListener('mouseover', function(){
    thirdrow.style.width = "50%";
    thirdrow.style.backgroundColor ="red";
    thirdrow.style.transition = "all 2s ease "

    thirdrow.innerHTML = "So my engel het n slegte droom gehad,my babby eks so jammer en ek hoop dit was nie te erg, weet net eks lief vir jou en gaan jou n baie stuiwe drkke en soene gee , weet net dat ek sos so so lief vir jou is en altyd hier is vir jou my babby me love you so so much";
})

thirdrow.addEventListener('mouseleave', function(){
    thirdrow.style.width = "25%";
    thirdrow.style.backgroundColor = "red";
    thirdrow.style.transition = "all 500ms ease "
    thirdrow.innerHTML = "Open Me Again"

})

fourthrow.innerHTML = "OPEN ME WHEN YOU ARE FEELING STRESSED";
fourthrow.style.textAlign ="center";
fourthrow.style.backgroundColor ="white"


fourthrow.addEventListener('mouseover', function(){
    fourthrow.style.width = "50%";
    fourthrow.style.backgroundColor ="red";
    fourthrow.style.transition = "all 500ms ease "

    fourthrow.innerHTML = "So my babbu is stressed out , my baby watookal jy oor stress op hierdie oomblik weet net jy het dit niks gaan jou onder kry jys franzelle roodt die slimste,mooiste,pragtigste,funnyste mens wat bestaan en jy kan enigeiets doen wat jy wil my babby jys wonderlik moene dat enigieiets jou onder kry"
})

fourthrow.addEventListener('mouseleave', function(){
    fourthrow.style.width = "25%";
    fourthrow.style.backgroundColor = "red";
    fourthrow.style.transition = "all 2s ease "
    fourthrow.innerHTML = "Open Me Again"

})

fyfthrow.innerHTML = "OPEN WHEN YOU NEED TO BE REMINDED HOW MUCH I LOVE YOU";
fyfthrow.style.textAlign ="center";
fyfthrow.style.backgroundColor ="white"


fyfthrow.addEventListener('mouseover', function(){
    fyfthrow.style.width = "50%";
    fyfthrow.style.height ="170px"
    fyfthrow.style.backgroundColor ="red";
    fyfthrow.style.transition = "all 2s ease "

    fyfthrow.innerHTML = "So iemand het biedjie vergeet hoe baie ek jou lief het, my babby daars nie genoeg woorde om tese hoe ek voel oor jou maar eks marco so ek gaan probeer, my babby jy is my als ,wanneer ek opstaan dink ek aan jou ,wannneer ek badkamer toe gaan dink ek aan jou dalk biedjie weird ma jah, ek dink 24/7 et aan jou en die hoeveelheid liefde wat ek vir jou het is ver meer as wat my woorde se maar weet net ek marco roodt is onbeskryflik lief vir jou en wil sy hele lewe saam jou spandeer";
})

fyfthrow.addEventListener('mouseleave', function(){
    fyfthrow.style.width = "25%";
    fyfthrow.style.backgroundColor = "red";
    fyfthrow.style.height ="100px"
    fyfthrow.style.transition = "all 2s ease "
    fyfthrow.innerHTML = "Open Me Again"

})

