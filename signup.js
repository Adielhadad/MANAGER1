const valid =()=>{

    let firstName = document.forms['form_details']['firstName'].value;
    let lastName = document.forms['form_details']['lastName'].value;
    let email = document.forms['form_details']['userEmail'].value;
    let userId = document.forms['form_details']['userId'].value;
    let password = document.forms['form_details']['userPassword'].value;
    let confirmPassword = document.forms['form_details']['conPass'].value;
    
    
    
    if(firstName.length <2 && firstName.length > 20){
        alert('name wrong')
        return false;
    }
    if(lastName.length <2 && lastName.length > 20){
        alert('last name wrong')
        return false;
    }
    if(userId.length <9 ){
        alert('name wrong')
        return false;
    }
    for (let x = 0; x < userId.length; x++) {
        if (userId.charAt(x) >= "a" && userId.charAt(x) <= "z" && userId.charAt(x) >= "A" && userId.charAt(x) <= "Z") {
            alert('Numbers Only');
            return false;
        }
        
    }
      
    if(password.indexOf('$')== -1){
        alert('password wrong');
        return false;
    }
    if(password != confirmPassword){
        alert('pass not equal');
        return false;
    }

    
    return true;
    
     
    }
    


const signin =()=>{

    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    
    
    fetch('/signIn',{
    headers:{ 'Accept': 'application/json',
    'Content-Type': 'application/json'},
    method:'post',
    body:JSON.stringify({
    email:email,
    password:password
    })
    
    }).then((res)=>{
        return res.json()
    }).then((data)=>{
    if(data ==null){
        alert('user not found')
    }else{
    let userName =data.firstName;
    localStorage.setItem('myName',userName);
    console.log(userName);
    location.href="/welcome";
    let totalsum = data.totalsum;
    localStorage.setItem('sumTotal',totalsum);
    let housesum = data.house;
    localStorage.setItem('house',housesum);
    let taxessum = data.taxes;
    localStorage.setItem('taxes',taxessum);
    let marketsum = data.market;
    localStorage.setItem('market',marketsum);
    let transportationsum = data.transportation;
    localStorage.setItem('transportation',transportationsum);
    let medicalsum = data.medical;
    localStorage.setItem('medical',medicalsum);
    let educationsum = data.education;
    localStorage.setItem('education',educationsum);
    let pleasuresum = data.pleasure;
    localStorage.setItem('pleasure',pleasuresum);
    let clothingsum = data.clothing;
    localStorage.setItem('clothing',clothingsum);
    let petssum = data.pets;
    localStorage.setItem('pets',petssum);
    let netsum = data.net;
    localStorage.setItem('net',netsum);
     console.log(totalsum);
    let incJan = data.incomes.jan;
    localStorage.setItem('incomesJan',incJan);
    let incFeb = data.incomes.feb;
    localStorage.setItem('incomesFeb',incFeb);
    let incMar = data.incomes.mar;
    localStorage.setItem('incomesMar',incMar);
    let incApr = data.incomes.apr;
    localStorage.setItem('incomesApr',incApr);
    let incMay = data.incomes.may;
    localStorage.setItem('incomesMay',incMay);
    let incJun = data.incomes.jun;
    localStorage.setItem('incomesJun',incJun);
    let incJul = data.incomes.jul;
    localStorage.setItem('incomesJul',incJul);
    let incAug = data.incomes.aug;
    localStorage.setItem('incomesAug',incAug);
    let incSep = data.incomes.sep;
    localStorage.setItem('incomesSep',incSep);
    let incOct = data.incomes.oct;
    localStorage.setItem('incomesOct',incOct);
    let incNov = data.incomes.nov;
    localStorage.setItem('incomesNov',incNov);
    let incDec = data.incomes.dec;
    localStorage.setItem('incomesDec',incDec);
    let monthOutcome = data.monthOutcome;
    localStorage.setItem('monthOut',monthOutcome);

    
    }
    
    
    })
    
    
    
    
    
    
    
    }  
    
    
