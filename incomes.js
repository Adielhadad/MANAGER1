let nameOfUser = localStorage.getItem("myName");
console.log(nameOfUser);
if(nameOfUser !=null){

    document.getElementById("p11").innerHTML += nameOfUser;
}




    const sumOfSal=()=>{
        let num01 = 0;
        let num02 = 0;
     
        let sumTotal1 = 0;
    
          
    
    
        num01 = parseInt(document.getElementById("In01").value);
        num02 = parseInt(document.getElementById("In02").value);
        sumTotal1 = num01 + num02;
        console.log(sumTotal1);
    
        document.getElementById("Out1").value = sumTotal1;
}
const sumOfGrnt=()=>{
    let num21 = 0;
    let num22 = 0;

 
    let sumTotal1 = 0;



    num21 = parseInt(document.getElementById("In21").value);
    num22 = parseInt(document.getElementById("In22").value);

    sumTotal1 = num21 + num22;
    console.log(sumTotal1);

    document.getElementById("Out3").value = sumTotal1;
}


const sumOfExtInc=()=>{
    let sum1=0;
    let sum2=0;
    let num11 = 0;
    let num12 = 0;
    let num13 = 0;
    let num14 = 0;
    let sumOfExt1 = 0;
    let month1 = 0;
    let month2 = 0;
    let month3 = 0;
    let month4 = 0;
    let oneMon=0;
    let inc01 = 0;
    let inc02 = 0;
    let inc03 = 0;
    let inc04 = 0;
    let inc05 = 0;
    let inc06 = 0;
    let inc07 = 0;
    let inc08 = 0;
    let inc09 = 0;
    let inc10 = 0;
    let inc11 = 0;
    let inc12 = 0;
let monthArr=[1,2,3,4,5,6,7,8,9,10,11,12];
let monthExtArr=[0,0,0,0,0,0,0,0,0,0,0,0];
let totalMonthInc=[0,0,0,0,0,0,0,0,0,0,0,0];
let nameOfUser = localStorage.getItem("myName");

     sum1 = parseInt(document.getElementById("Out1").value);
     sum2 = parseInt(document.getElementById("Out3").value);
let monthInc = 0;

monthInc=parseInt(sum1+sum2) ;
console.log(monthInc);


    num11 = parseInt(document.getElementById("In11").value);
    num12 = parseInt(document.getElementById("In12").value);
    num13 = parseInt(document.getElementById("In13").value);
    num14 = parseInt(document.getElementById("In14").value);
    month1 = parseInt(document.getElementById("In11A").value);
    month2 = parseInt(document.getElementById("In12A").value);
    month3 = parseInt(document.getElementById("In13A").value);
    month4 = parseInt(document.getElementById("In14A").value);


if (month1==month2==month3==month4 ) {
    oneMon=month1
      sumOfExt1 = num11+num12+num13+num14;

      for (i=0; i<12;i++){
       if( oneMon==i){
       monthExtArr[i]+=sumOfExt1;
    
       }
        

      }
     
}else{

    for ( x = 0; x < monthArr.length; x++) {
     if(monthArr[x]==month1){
        monthExtArr[x]+=num11;
    
    
     }
     if(month2==monthArr[x]){
        monthExtArr[x]+=num12
    
    
     }
     if(month3==monthArr[x]){
        monthExtArr[x]+=num13
    
    
     }
     if(month4==monthArr[x]){
        monthExtArr[x]+=num14
    
    
     }
    
     
    }
}

for (j=0; j<monthExtArr.length;j++){
    
        totalMonthInc[j]+=monthExtArr[j]+monthInc
        
        
        
    }
    
    console.log(totalMonthInc);
    inc01=totalMonthInc[0];
    inc02=totalMonthInc[1];
    inc03=totalMonthInc[2];
    inc04=totalMonthInc[3];
    inc05=totalMonthInc[4];
    inc06=totalMonthInc[5];
    inc07=totalMonthInc[6];
    inc08=totalMonthInc[7];
    inc09=totalMonthInc[8];
    inc10=totalMonthInc[9];
    inc11=totalMonthInc[10];
    inc12=totalMonthInc[11];


console.log(monthExtArr);
document.getElementById("Out11").value = monthInc;
console.log(inc08);
console.log(inc01);
console.log(inc11);



fetch('/incomes',{
headers:{ 'Accept': 'application/json',
'Content-Type': 'application/json'},
method:'post',
body:JSON.stringify({
    jan:inc01,
    feb:inc02,
    mar:inc03,
    apr:inc04,
    may:inc05,
    jun:inc06,
    jul:inc07,
    aug:inc08,
    sep:inc09,
    oct:inc10,
    nov:inc11,
   dec:inc12,
   firstName:nameOfUser
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



