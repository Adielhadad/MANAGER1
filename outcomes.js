
let nameOfUser = localStorage.getItem("myName");
let sumOfUser = localStorage.getItem("sumTotal");
console.log(nameOfUser);
console.log(sumOfUser);
if(nameOfUser !=null){

    document.getElementById("p11").innerHTML += nameOfUser;
}
if(sumOfUser !=null){

    document.getElementById("Out11").innerHTML += sumOfUser;
}

function sumOutcomes1() {
  
    

    let num1 = 0;
    let num2 = 0;
    let num3 = 0;
    let num4 = 0;
    let num5 = 0;

    let Numtotal1 = 0;




    num1 = parseInt(document.getElementById("In01").value);
    num2 = parseInt(document.getElementById("In02").value);
    num3 = parseInt(document.getElementById("In03").value);
    num4 = parseInt(document.getElementById("In04").value);
    num5 = parseInt(document.getElementById("In05").value);


    Numtotal1 = num1 + num2 + num3 + num4 + num5;
    console.log(Numtotal1);
    document.getElementById("Out1").value = Numtotal1;

    localStorage.setItem('sum1',Numtotal1);

    
    
}

  document.getElementById("Out1").value = localStorage.getItem("sum1");



function sumOutcomes2() {


    let num11 = 0;
    let num12 = 0;
    let num13 = 0;
    let num14 = 0;
    let num15 = 0;
    let Numtotal2 = 0;



    num11 = parseInt(document.getElementById("In11").value);
    num12 = parseInt(document.getElementById("In12").value);
    num13 = parseInt(document.getElementById("In13").value);
    num14 = parseInt(document.getElementById("In14").value);
    num15 = parseInt(document.getElementById("In15").value);



    Numtotal2 = num11 + num12 + num13 + num14 + num15;
    console.log(Numtotal2);
    document.getElementById("Out2").value = Numtotal2;
    // localStorage.setItem('sum2',sum2);



}




function sumOutcomes3() {


    let num1 = 0;
    let num2 = 0;
    let num3 = 0;
    let num4 = 0;
    let num5 = 0;
    let Numtotal3 = 0;



    num1 = parseInt(document.getElementById("In21").value);
    num2 = parseInt(document.getElementById("In22").value);
    num3 = parseInt(document.getElementById("In23").value);
    num4 = parseInt(document.getElementById("In24").value);
    num5 = parseInt(document.getElementById("In25").value);



    Numtotal3 = num1 + num2 + num3 + num4 + num5;
    console.log(Numtotal3);

    document.getElementById("Out3").value = Numtotal3;
 


}




function sumOutcomes4() {


    let num1 = 0;
    let num2 = 0;
    let num3 = 0;
    let num4 = 0;
    let num5 = 0;
    let num6 = 0;
    let num7 = 0;
    let Numtotal = 0;



    num1 = parseInt(document.getElementById("In31").value);
    num2 = parseInt(document.getElementById("In32").value);
    num3 = parseInt(document.getElementById("In33").value);
    num4 = parseInt(document.getElementById("In34").value);
    num5 = parseInt(document.getElementById("In35").value);
    num6 = parseInt(document.getElementById("In36").value);
    num7 = parseInt(document.getElementById("In37").value);


    Numtotal += num1 + num2 + num3 + num4 + num5 + num6 + num7;
    console.log(Numtotal);
    document.getElementById("Out4").value = Numtotal;


}



const sumOutcomes5 = () => {


    let num1 = 0;
    let num2 = 0;
    let num3 = 0;

    let Numtotal = 0;



    num1 = parseInt(document.getElementById("In41").value);
    num2 = parseInt(document.getElementById("In42").value);
    num3 = parseInt(document.getElementById("In43").value);



    Numtotal += num1 + num2 + num3;
    console.log(Numtotal);
    document.getElementById("Out5").value = Numtotal;




}

const sumOutcomes6 = () => {


    let num1 = 0;
    let num2 = 0;
    let num3 = 0;
    let num4 = 0;

    let Numtotal = 0;



    num1 = parseInt(document.getElementById("In51").value);
    num2 = parseInt(document.getElementById("In52").value);
    num3 = parseInt(document.getElementById("In53").value);
    num4 = parseInt(document.getElementById("In54").value);



    Numtotal += num1 + num2 + num3+num4;
    console.log(Numtotal);
    document.getElementById("Out6").value = Numtotal;




}
const sumOutcomes7 = () => {


    let num1 = 0;
    let num2 = 0;
    let num3 = 0;
    let num4 = 0;
    let num5 = 0;

    let Numtotal = 0;



    num1 = parseInt(document.getElementById("In61").value);
    num2 = parseInt(document.getElementById("In62").value);
    num3 = parseInt(document.getElementById("In63").value);
    num4 = parseInt(document.getElementById("In64").value);
    num5 = parseInt(document.getElementById("In65").value);



    Numtotal += num1 + num2 + num3+num4+num5;
    console.log(Numtotal);
    document.getElementById("Out7").value = Numtotal;




}
const sumOutcomes8 = () => {


    let num1 = 0;
    let num2 = 0;
    let num3 = 0;

    let Numtotal = 0;



    num1 = parseInt(document.getElementById("In71").value);
    num2 = parseInt(document.getElementById("In72").value);
    num3 = parseInt(document.getElementById("In73").value);



    Numtotal += num1 + num2 + num3;
    console.log(Numtotal);
    document.getElementById("Out8").value = Numtotal;




}
const sumOutcomes9 = () => {


    let num1 = 0;
    let num2 = 0;
    let num3 = 0;

    let Numtotal = 0;



    num1 = parseInt(document.getElementById("In81").value);
    num2 = parseInt(document.getElementById("In82").value);
    num3 = parseInt(document.getElementById("In83").value);



    Numtotal += num1 + num2 + num3;
    console.log(Numtotal);
    document.getElementById("Out9").value = Numtotal;




}

const sumOutcomes10 = () => {


    let num1 = 0;
    let num2 = 0;
    let num3 = 0;
    let num4 = 0;

    let Numtotal = 0;



    num1 = parseInt(document.getElementById("In91").value);
    num2 = parseInt(document.getElementById("In92").value);
    num3 = parseInt(document.getElementById("In93").value);
    num4 = parseInt(document.getElementById("In94").value);



    Numtotal += num1 + num2 + num3+num4;
    console.log(Numtotal);
    document.getElementById("Out10").value = Numtotal;




}


const sumTotal=()=>{

   let sumTotalNum=0;

    sum1 = parseInt(document.getElementById("Out1").value);
    sum2 = parseInt(document.getElementById("Out2").value);
    sum3 = parseInt(document.getElementById("Out3").value);
    sum4 = parseInt(document.getElementById("Out4").value);
    sum5 = parseInt(document.getElementById("Out5").value);
    sum6 = parseInt(document.getElementById("Out6").value);
    sum7 = parseInt(document.getElementById("Out7").value);
    sum8 = parseInt(document.getElementById("Out8").value);
    sum9 = parseInt(document.getElementById("Out9").value);
    sum10 = parseInt(document.getElementById("Out10").value);
   

    
 sumTotalNum = sum1+sum2+sum3+sum4+sum5+sum6+sum7+sum8+sum9+sum10;
 console.log(sumTotalNum);

    document.getElementById("Out11").value = sumTotalNum;
}


const outcomesTotal1 =()=>{

    let sum1 =parseInt(document.getElementById('Out1').value) ;
    let sum2 = parseInt(document.getElementById('Out2').value);
    let sum3 =parseInt(document.getElementById('Out3').value) ;
    let sum4 =parseInt(document.getElementById('Out4').value) ;
    let sum5 =parseInt(document.getElementById('Out5').value) ;
    let sum6 =parseInt(document.getElementById('Out6').value) ;
    let sum7 =parseInt(document.getElementById('Out7').value) ;
    let sum8 =parseInt(document.getElementById('Out8').value) ;
    let sum9 =parseInt(document.getElementById('Out9').value) ;
    let sum10 =parseInt(document.getElementById('Out10').value) ;
    let sumTotal =parseInt(document.getElementById('Out11').value) ;
    let userName = localStorage.getItem("myName")
    console.log(sumTotal);
    
    
    fetch('/outcomes',{
    headers:{ 'Accept': 'application/json',
    'Content-Type': 'application/json'},
    method:'post',
    body:JSON.stringify({
        taxes:sum1,
        house:sum2,
        market:sum3,
        transportation:sum4,
        medical:sum5,
        education:sum6,
        pleasure:sum7,
        clothing:sum8,
        pets:sum9,
        net:sum10,
        totalsum:sumTotal,
       firstName:userName
    })
    
    })
    .then((res)=>{
        return res.json()
    }).then((data)=>{
    if(data ==null){
        alert('fill the outcomes data please')
    }}) 
    .catch((err)=>{
        if(err) throw err;
      }) 

    location.href="/welcome";
    
    
    
    }
    
    
    
    
    
    
    
    