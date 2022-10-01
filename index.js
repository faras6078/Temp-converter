const calculateTemp = () =>{

const numberTemp = document.getElementById('temp').value;
//console.log(numberTemp);

const tempS = document.getElementById('temp_diff')
const valuetemp = temp_diff.options[tempS.selectedIndex].value;
//console.log(valuetemp);

const celToFah = (cel) =>{
    let fahrenhite = Math.round((cel * 9/5) + 32);
    return fahrenhite;
}

const fahToCel = (fehr) =>{
    let  celcius = Math.round((fehr - 32) * 5/9);
    return celcius;
}



let result;

if (valuetemp == 'cel') {

    result = celToFah(numberTemp);
    document.getElementById('result_cont').innerHTML = `= ${result}  °F`;
    
} else {
    result = fahToCel(numberTemp);
    document.getElementById('result_cont').innerHTML = `= ${result}  °C`;
    
}


}