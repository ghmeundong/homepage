function isMobile() {  //모바일이라면 true반환, PC라면 false 반환
	let filter = "win16|win32|win64|mac";

	let return_value = false;
	if(navigator.platform){
		if(0 > filter.indexOf(navigator.platform.toLowerCase())){
			return_value = true;
		}
		else{
			return_value = false;
		}
	}
	return return_value;
}
window.onload = function(){
    console.clear();
    console.warn("%c @ghmeundong", `font-size: 50px; color: #FB7A01; background-color: gold;`);
    if(isMobile()) { //모바일이라면 alert 실행
        alert('모바일에서 접속하면 화면이 불안정할 수 있습니다. 되도록이면 PC로 접속해주시기 바랍니다.');
    }
}
$(window).on("keydown", function (e) {
    if (e.keyCode == 122) {
        console.clear();
        console.warn("%c @ghmeundong", `font-size: 50px; color: #FB7A01; background-color: gold;`);
        console.log("scroll: " + Math.round(scroll));
        if (!document.fullscreenElement == 1) {
            console.log('Fullscreen');
        }
        else {
            console.log('Not Fullscreen');
        }
    }
})
function opacityChange() {
    nav.style.opacity = "0.7"
    nav.addEventListener("mouseover", function(){ // 마우스 다가가면 navs 선명해지기
        nav.style.opacity = "0.9"
    })
    nav.addEventListener("mouseout", function(){
        nav.style.opacity = "0.7"
    })
}
$(function(){
    const nav = document.getElementById("nav");
    const waterMarkColor = document.getElementById("waterMarkColor");
    const hiddenHeader = document.getElementById("hiddenHeader");
    const footer = document.querySelector("footer")
    let scroll = 0;
    $(window).scroll(function(){
        scroll=$(window).scrollTop();
        console.clear();
        console.warn("%c @ghmeundong", `font-size: 50px; color: #FB7A01; background-color: gold;`);
        console.log("scroll: " + Math.round(scroll));
        if(scroll < 60){
            footer.style.visibility = "hidden"
        }
        else{
            footer.style.visibility = "visible"
        }
        if ((screen.availHeight || screen.height - 30) <= window.innerHeight) {
            console.log('Fullscreen'); // 전체화면 일 때
            nav.style.height = "88.875vh";
            if(scroll < screen.height - 60){ // 스크롤 원하는 위치 전까지는 헤더 숨기기
                hiddenHeader.style.visibility = "hidden"
                waterMarkColor.style.color = "white"
                opacityChange(); // 마우스 over 시 진해지기
            }
            else{ // 스크롤 도달 시 헤더 나타나기         
                hiddenHeader.style.visibility = "visible"
                waterMarkColor.style.color = "black"
                nav.style.top = "60px"
                opacityChange();
            }
        }
        else {
            console.log('Not Fullscreen'); // 전체화면이 아닐 때
            nav.style.height = "87.125vh";
            if(scroll < screen.availHeight - 162.5){ // 스크롤 원하는 위치 전에는 헤더 숨기기
                hiddenHeader.style.visibility = "hidden"
                waterMarkColor.style.color = "white"
                opacityChange();
            }
            else{ // 스크롤 도달 시 헤더 나타나기         
                hiddenHeader.style.visibility = "visible"
                waterMarkColor.style.color = "black"
                nav.style.top = "60px"
                opacityChange();
            }
        }
    })
})
function menuHide(menu_id){ // 메뉴가 숨겨져 있으면 보이고, 보여져 있으면 숨기기
    if(document.getElementById(menu_id).className == "hidden") {
        document.getElementById(menu_id).className = "active";
        nav.style.boxShadow = "0px 30px 30px gray";
        nav.style.backgroundColor = "#b0d390";
    }
    else if(document.getElementById(menu_id).className == "active") {
        document.getElementById(menu_id).className = "hidden";
        nav.style.boxShadow = "none";
        nav.style.backgroundColor = "transparent";
    }
}

let today = new Date();   

let year = today.getFullYear() - 2006; // 년도
let month = today.getMonth() + 1;  // 월
if (month < 6){
    year--;
    month += 6;
}
else {
    month -= 6;
}

document.getElementById('age').innerText = (year + '년' + month + '개월');
