var inputStream = '';
var lastOperand = '';
var lastOperator = '';

function onClickNum(num){
    
    switch(num) {
        case '1':
            updateDisplay('1');
            break;
        case '2':
            updateDisplay('2');
            break;
        case '3':
            updateDisplay('3');
            break;
        case '4':
            updateDisplay('4');
            break;
        case '5':
            updateDisplay('5');
            break;
        case '6':
            updateDisplay('6');
            break;
        case '7':
            updateDisplay('7');
            break;
        case '8':
            updateDisplay('8');
            break;
        case '9':
            updateDisplay('9');
            break;
        case '0':
            updateDisplay('0');
            break;
    }
}

function onClickOperand(operator){
    
    if(lastOperand != ''){
        onClickEquals(operator);
        lastOperand = inputStream;
        lastOperator = operator;
    }
    else{
        lastOperand = inputStream;
        lastOperator = operator;    
    }
    inputStream = '';    
}

function onClickEquals(){
    switch(lastOperator) {
        case '+':
            result = parseFloat(inputStream) + parseFloat(lastOperand);
            inputStream = result;
            lastOperator = '';
            lastOperand = '';
            document.getElementById("display").innerHTML = result;
            break;
        case '-':
            result = parseFloat(lastOperand) - parseFloat(inputStream);
            inputStream = result;
            lastOperator = '';
            lastOperand = '';
            document.getElementById("display").innerHTML = result;
            break;
        case '*':
            result = parseFloat(inputStream) * parseFloat(lastOperand);
            inputStream = result;
            lastOperator = '';
            lastOperand = '';
            document.getElementById("display").innerHTML = result;
            break;
        case '/':
            result = parseFloat(lastOperand) / parseFloat(inputStream);
            inputStream = result;
            lastOperator = '';
            lastOperand = '';
            document.getElementById("display").innerHTML = result;
            break;
        case '':
            //Add some sort of warning that no operand was chosen
            break;
    }
}

function onClickClear(){
    inputStream = '';
    lastOperand = '';
    lastOperator = '';
    document.getElementById("display").innerHTML = "0";
}

function onClickBackspace(){
    var strLen = inputStream.length;
    if(strLen > 1){
        inputStream = inputStream.slice(0,strLen-1);
        document.getElementById("display").innerHTML = inputStream;
    }
    else{
        inputStream = "0";
        document.getElementById("display").innerHTML = "0";
    }
}

function updateDisplay(number){
    inputStream += number;
    document.getElementById("display").innerHTML = inputStream;
}
