// document.addEventListener('click', function(){
// 	// console.log(event)
// 	// window.alert('Click event called!')



// });
// var x = setInterval(function(){
//   window.scrollBy(0, 3);

// }, 10);
// var x=0;
// var bodyheadercontent = document.querySelector('#body-header-content');
// console.log(bodyheadercontent);

// var y = 10;

// var x = setInterval(function(){
//     window.scrollTo(0,y);
//     y = y+10;
//     if(y==1000)
//     {
//         clearInterval(x)}
// },10);

// bodyheadercontent.addEventListener('click',function(){

// 	this.style.backgroundColor="red";
// });

// bodyheadercontent.addEventListener('click',function(){

// 	a = ["red","green","blue"];
// 	this.style.backgroundColor = a[x++];
// 	if(x==3)
// 	{
// 		x=0;
// 	}


// 	// this.style.fontSize = "50px"

// });

// window.addEventListener('scroll',function(){

// 	console.log(window.scrollY);


// });


var x = document.querySelector("#work-link");
x.addEventListener("click",abc);


function abc(){
	var p = document.querySelector(".section-heading");
var rect = p.getBoundingClientRect();
var y = rect.y;
var z=10;
var k = window.setInterval(function(){
    window.scrollTo(0,z);
    z = z+10;
    if(z>=y)
    {
        clearInterval(k);
    }
},20);

}


