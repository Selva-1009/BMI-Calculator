function calculate(){
    let weight = prompt('Enter your Weight: ');
    let height = prompt('Enter your Height: ')

    let height1 = height/100;
    let a = '';

    result = weight/height1**2;
    
    switch (true){
        case (result<18.5) : a='Under Weight';
        break;
        case (result>18.5 && result<=24.9) : a='Normal Weight';
        break;
        case (result>=25 && result<=29.9) : a='Over Weight';
        break;
        case (result>=30 && result<=34.9) : a='Obesity Class I';
        break;
        case (result>=35 && result<39.9) : a='Obesity Class II';
        break;
        case (result>=40) : a='Obesity Class III'     
    }
    
    document.getElementById('result').innerText=`Your BMI Weight is ${result.toFixed(2)}`
    document.getElementById('concern').innerText=`${a}`
   
    
}


