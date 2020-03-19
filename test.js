var list = document.querySelector("p");
var a = document.querySelector(".a");
var b = document.querySelector(".b");
var c = document.querySelector(".c");
var d = document.querySelector(".d");
var index;

var response = [];
var answer = [
    {"a":1,"b":1,"c":0,"d":0},
    {"a":0,"b":1,"c":0,"d":0},
    {"a":0,"b":1,"c":1,"d":0},
    {"a":0,"b":0,"c":0,"d":1},
    {"a":0,"b":1,"c":0,"d":0},
    {"a":1,"b":1,"c":0,"d":1},
    {"a":0,"b":0,"c":1,"d":1},
    {"a":1,"b":0,"c":0,"d":0},
    {"a":1,"b":0,"c":0,"d":1},
    {"a":1,"b":1,"c":1,"d":0},
    {"a":0,"b":0,"c":1,"d":0},
]




for(i=0;i<=10;i++){
    response.push({"a":0,"b":0,"c":0,"d":0});
}
console.log(response);

for(i=0;i<=10;i++){
    
    document.querySelectorAll(".ques")[i].addEventListener("click" ,function(){
        var content = this.innerHTML;
        switch(content) {
            case "01":
                index = 0;
                list.innerHTML = "Question 1  The characteristic distance at which quantum gravitational effects are significant, the Planck length, can be determined from a suitable combination of the fundamental physical constants G,<del>h</del>  and c.  Which of the following correctly gives the Planck length ? ";
                a.innerHTML = "(A). G<del>h</del><sup>2</sup>c<sup>3</sup>"
                b.innerHTML = "(B). G<sup>2</sup><del>h</del>c"
                c.innerHTML = "(C). G<sup>1/2</sup><del>h</del><sup>2</sup>c"
                d.innerHTML = "(D). (G<del>h</del>/c<sup>3</sup>)<sup>1/2</sup>"
                if(response[0].a === 0){
                    document.querySelector(".a1").checked = false;
                }
                else{
                    document.querySelector(".a1").checked = true;
                }
                if(response[0].b === 0){
                    document.querySelector(".b2").checked = false;
                }
                else{
                    document.querySelector(".b2").checked = true;
                }
                if(response[0].c === 0){
                    document.querySelector(".c3").checked = false;
                }
                else{
                    document.querySelector(".c3").checked = true;
                }
                if(response[0].d=== 0){
                    document.querySelector(".d4").checked = false;
                }
                else{
                    document.querySelector(".d4").checked = true;
                }
                console.log("hello");
                
                break;

            case "02":
                index = 1
                list.innerHTML = "Question 2 A man in a car at location Q on a straight highway is moving with speed v.  He decides to reach a point P in a field at a distance d from the highway (point M) as shown in the figure.  Speed of the car in the field is half to that on the highway. What should be the distance RM, so that the time taken to reach P is minimum ";
                a.innerHTML = "(A). d"
                b.innerHTML = "(B). d/sqrt(2)"
                c.innerHTML = "(C). d/2"
                d.innerHTML = "(D). d/sqrt(3)"
                if(response[1].a === 0){
                    document.querySelector(".a1").checked = false;
                }
                else{
                    document.querySelector(".a1").checked = true;
                }
                if(response[1].b === 0){
                    document.querySelector(".b2").checked = false;
                }
                else{
                    document.querySelector(".b2").checked = true;
                }
                if(response[1].c === 0){
                    document.querySelector(".c3").checked = false;
                }
                else{
                    document.querySelector(".c3").checked = true;
                }
                if(response[1].d=== 0){
                    document.querySelector(".d4").checked = false;
                }
                else{
                    document.querySelector(".d4").checked = true;
                }
                console.log("world")
                break;  
            case "03":
                index = 2
                list.innerHTML = "Question 3  A body of mass 2 kg slides down with an acceleration of 3 m/s2 on a rough inclined plane having a slope of 30.  The external force required to take the same body up the plane with the same acceleration will be : (g=10 m/s2) ";
                a.innerHTML = "(A). 14 N"
                b.innerHTML = "(B). 20 N"
                c.innerHTML = "(C). 06 N"
                d.innerHTML = "(D). 04 N"
                if(response[2].a === 0){
                    document.querySelector(".a1").checked = false;
                }
                else{
                    document.querySelector(".a1").checked = true;
                }
                if(response[2].b === 0){
                    document.querySelector(".b2").checked = false;
                }
                else{
                    document.querySelector(".b2").checked = true;
                }
                if(response[2].c === 0){
                    document.querySelector(".c3").checked = false;
                }
                else{
                    document.querySelector(".c3").checked = true;
                }
                if(response[2].d=== 0){
                    document.querySelector(".d4").checked = false;
                }
                else{
                    document.querySelector(".d4").checked = true;
                }
                break;
            case "04":
                index = 3
                list.innerHTML = "Question 4 A proton of mass m collides elastically with a particle of unknown mass at rest.  After the collision, the proton and the unknown particle are seen moving at an angle of 90 with respect to each other.  The mass of unknown particle is";
                a.innerHTML = "(A). m/2"
                b.innerHTML = "(B). m"
                c.innerHTML = "(C). m/sqrt(3)"
                d.innerHTML = "(D). 2m"
                if(response[3].a === 0){
                    document.querySelector(".a1").checked = false;
                }
                else{
                    document.querySelector(".a1").checked = true;
                }
                if(response[3].b === 0){
                    document.querySelector(".b2").checked = false;
                }
                else{
                    document.querySelector(".b2").checked = true;
                }
                if(response[3].c === 0){
                    document.querySelector(".c3").checked = false;
                }
                else{
                    document.querySelector(".c3").checked = true;
                }
                if(response[3].d=== 0){
                    document.querySelector(".d4").checked = false;
                }
                else{
                    document.querySelector(".d4").checked = true;
                }
                break;
            case "05":
                index = 4
                list.innerHTML = "Question 5  A disc rotates about its axis of symmetry in a horizontal plane at a steady rate of 3.5 revolutions per second.  A coin placed at a distance of 1.25 cm from the axis of rotation remains at rest on the disc.  The coefficient of friction between the coin and the disc is : (g=10 m/s2) ";
                a.innerHTML = "(A). 0.5"
                b.innerHTML = "(B). 0.3"
                c.innerHTML = "(C). 0.7"
                d.innerHTML = "(D). 0.6"
                if(response[4].a === 0){
                    document.querySelector(".a1").checked = false;
                }
                else{
                    document.querySelector(".a1").checked = true;
                }
                if(response[4].b === 0){
                    document.querySelector(".b2").checked = false;
                }
                else{
                    document.querySelector(".b2").checked = true;
                }
                if(response[4].c === 0){
                    document.querySelector(".c3").checked = false;
                }
                else{
                    document.querySelector(".c3").checked = true;
                }
                if(response[4].d=== 0){
                    document.querySelector(".d4").checked = false;
                }
                else{
                    document.querySelector(".d4").checked = true;
                }
                break;
            case "06":
                index = 5
                list.innerHTML = "Question 6 A thin uniform bar of length L and mass 8 m lies on a smooth horizontal table.  Two point masses m and 2 m are moving in the same horizontal plane from opposite sides of the bar with speeds 2v and v respectively.  The masses stick to the bar after collision at a distance L/3 and L/6 respectively from the centre of the bar.  If the bar starts rotating about its center of mass as a result of collision, the angular speed of the bar will be ";
                a.innerHTML = "(A). v/5L"
                b.innerHTML = "(B). 6v/5L"
                c.innerHTML = "(C). 3v/5L"
                d.innerHTML = "(D). v/6L"
                if(response[5].a === 0){
                    document.querySelector(".a1").checked = false;
                }
                else{
                    document.querySelector(".a1").checked = true;
                }
                if(response[5].b === 0){
                    document.querySelector(".b2").checked = false;
                }
                else{
                    document.querySelector(".b2").checked = true;
                }
                if(response[5].c === 0){
                    document.querySelector(".c3").checked = false;
                }
                else{
                    document.querySelector(".c3").checked = true;
                }
                if(response[5].d=== 0){
                    document.querySelector(".d4").checked = false;
                }
                else{
                    document.querySelector(".d4").checked = true;
                }
                break;
            case "07":
                index = 6;
                list.innerHTML = "Question 7 A thin rod MN, free to rotate in the vertical plane about the fixed end N, is held horizontal.  When the end M is released the speed of this end, when the rod makes an angle α with the horizontal, will be proportional to";
                a.innerHTML = "(A). sqrt(sin α)"
                b.innerHTML = "(B). sin α"
                c.innerHTML = "(C). sqrt(cos α)"
                d.innerHTML = "(D). cos α"
                if(response[6].a === 0){
                    document.querySelector(".a1").checked = false;
                }
                else{
                    document.querySelector(".a1").checked = true;
                }
                if(response[6].b === 0){
                    document.querySelector(".b2").checked = false;
                }
                else{
                    document.querySelector(".b2").checked = true;
                }
                if(response[6].c === 0){
                    document.querySelector(".c3").checked = false;
                }
                else{
                    document.querySelector(".c3").checked = true;
                }
                if(response[6].d=== 0){
                    document.querySelector(".d4").checked = false;
                }
                else{
                    document.querySelector(".d4").checked = true;
                }
                break;
            case "08":
                index = 7;
                list.innerHTML = "Question 8  As shown in the figure, forces of 105 N each are applied in opposite directions, on the upper and lower faces of a cube of side 10 cm, shifting the upper face parallel to itself by 0.5 cm.  If the side of another cube of the same material is 20 cm, then under similar conditions as above, the displacement will be ";
                a.innerHTML = "(A). 0.25 cm"
                b.innerHTML = "(B). 0.37 cm"
                c.innerHTML = "(C). 0.75 cm"
                d.innerHTML = "(D). 1.00 cm"
                if(response[7].a === 0){
                    document.querySelector(".a1").checked = false;
                }
                else{
                    document.querySelector(".a1").checked = true;
                }
                if(response[7].b === 0){
                    document.querySelector(".b2").checked = false;
                }
                else{
                    document.querySelector(".b2").checked = true;
                }
                if(response[7].c === 0){
                    document.querySelector(".c3").checked = false;
                }
                else{
                    document.querySelector(".c3").checked = true;
                }
                if(response[7].d=== 0){
                    document.querySelector(".d4").checked = false;
                }
                else{
                    document.querySelector(".d4").checked = true;
                }
                break; 
            case "09":
                index = 8;
                list.innerHTML = "Question 9 When an air bubble of radius r rises from the bottom to the surface of a lake, its radius becomes 5r/4. Taking the atmospheric pressure to be equal to 10 m height of water column, the depth of the lake would approximately be (ignore the surface tension and the effect of temperature) ";
                a.innerHTML = "(A). 11.2 m"
                b.innerHTML = "(B). 8.7 m"
                c.innerHTML = "(C). 9.5 m"
                d.innerHTML = "(D). 10.5 m"
                if(response[8].a === 0){
                    document.querySelector(".a1").checked = false;
                }
                else{
                    document.querySelector(".a1").checked = true;
                }
                if(response[8].b === 0){
                    document.querySelector(".b2").checked = false;
                }
                else{
                    document.querySelector(".b2").checked = true;
                }
                if(response[8].c === 0){
                    document.querySelector(".c3").checked = false;
                }
                else{
                    document.querySelector(".c3").checked = true;
                }
                if(response[8].d=== 0){
                    document.querySelector(".d4").checked = false;
                }
                else{
                    document.querySelector(".d4").checked = true;
                }
                break;
            case "10":
                index  = 9;
                list.innerHTML = "Question 10  Two Carnot engines A and B are operated in series.  Engine A receives heat from a reservoir at 600 K and rejects heat to a reservoir at temperature T.  Engine B receives heat rejected by engine A and in turn rejects it to a reservoir at 100 K.  If the efficiencies of the two engines A and B are represented by ηA and ηB, respectively then what is the value of nB/nA?";
                a.innerHTML = "(A). 12/7"
                b.innerHTML = "(B). 7/12"
                c.innerHTML = "(C). 12/5"
                d.innerHTML = "(D). 5/12"
                if(response[9].a === 0){
                    document.querySelector(".a1").checked = false;
                }
                else{
                    document.querySelector(".a1").checked = true;
                }
                if(response[9].b === 0){
                    document.querySelector(".b2").checked = false;
                }
                else{
                    document.querySelector(".b2").checked = true;
                }
                if(response[9].c === 0){
                    document.querySelector(".c3").checked = false;
                }
                else{
                    document.querySelector(".c3").checked = true;
                }
                if(response[9].d=== 0){
                    document.querySelector(".d4").checked = false;
                }
                else{
                    document.querySelector(".d4").checked = true;
                }
                break;
            case "11":
                index = 10;
                list.innerHTML = "Question 11  The value closest to the thermal velocity of a Helium atom at room temperature (300 K) in ms−1 is : [ kB=1.4×10−23 J/K; mHe=7×10−27 kg ] ";
                a.innerHTML = "(A). 1.3 x 10<sup>4</sup>"
                b.innerHTML = "(B). 1.3 x 10<sup>3</sup>"
                c.innerHTML = "(C). 1.3 x 10<sup>5</sup>"
                d.innerHTML = "(D). 1.3 x 10<sup>2</sup>"
                if(response[10].a === 0){
                    document.querySelector(".a1").checked = false;
                }
                else{
                    document.querySelector(".a1").checked = true;
                }
                if(response[10].b === 0){
                    document.querySelector(".b2").checked = false;
                }
                else{
                    document.querySelector(".b2").checked = true;
                }
                if(response[10].c === 0){
                    document.querySelector(".c3").checked = false;
                }
                else{
                    document.querySelector(".c3").checked = true;
                }
                if(response[10].d=== 0){
                    document.querySelector(".d4").checked = false;
                }
                else{
                    document.querySelector(".d4").checked = true;
                }

        }

    })
}



for(j=0;j<=3;j++){
    document.querySelectorAll(".check")[j].addEventListener("click",function(){
        if(document.querySelector(".a1").checked){
            response[index].a = 1;
        }
        else{
            response[index].a = 0;
        }
        if(document.querySelector(".b2").checked){
            response[index].b = 1;
        }
        else{
            response[index].b = 0;
        }
        if(document.querySelector(".c3").checked){
            response[index].c = 1;
        }
        else{
            response[index].c = 0;
        }
        if(document.querySelector(".d4").checked){
            response[index].d = 1;
        }
        else{
            response[index].d = 0;
        }
        color();
        console.log(response);
    })
}

var sum = 0;
function result(){
    var sum = 0;
    var value = 0;
    for( i = 0; i<=10;i++){
        var one=0, two=0, three=0, four=0;
        var num1 = response[i];
        var num2 = answer[i];
        if(num1.a===num2.a){
            one =1;
        }
        if(num1.b===num2.b){
            two = 1;
        }
        if(num1.c===num2.c){
            three = 1;
        }
        if(num1.d===num2.d){
            four = 1;
        }


        if((one)*(two)*(three)*(four)===1){
            value = 4;
        }else{
            value = 0;
        }
        sum += value;
    }
    alert(sum);
}


function color(){
            if( document.querySelectorAll(".ques")[index].style.backgroundColor != "#9be9ad"){
                if(document.querySelectorAll(".ques")[index].style.backgroundColor != "red"){
                    document.querySelectorAll(".ques")[index].style.backgroundColor = "red";
                }else{
                    if((response[index].a === 1) || (response[index].b === 1) || (response[index].c === 1) || (response[index].d === 1)){
                        document.querySelectorAll(".ques")[index].style.backgroundColor = "#9be9ad";
                    }
                }
                
                console.log("hiii");
            }
         

var to = "YOUR SCORE : " + sum;
    
}
function change(){
    document.querySelector(".card-title").innerText = "to";
}
