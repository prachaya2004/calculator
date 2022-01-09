var exp = '', number , decimal, equal, opertor, allowSR = true;
var textview = document.forms['myform']['textview'];

function insertNum(num) {
    if (equal) {
        exp = num;
        textview.value = exp;
        number = true;
        equal = false;
    }
    else {
        exp = textview.value + num;
        textview.value = exp;
        number = true ;
    }
    if (opertor) decimal =false;
    // SR ('a');
}

function insertop(op) {
    textview.value = exp + op;
    opertor = true;
    equal = false;
    allowSR  = false;
    // SR ('a');
}

function inserDec() {
    if(number && !decimal) {
        (textview.value =exp + '.')
        decimal = true
        opertor= false
    }

}
function equalto() {
    if (exp) {
        exp = eval(exp)
        textview.value = exp;
        equal = true;
        decimal = false;
        number = false;
        allowSR = true;
        //SR('a');
    }

}


function clean() {
    exp = '';
    textview.value = exp;
    decimal = false;
}
 
function back() {
    exp =textview.value;
    exp =exp.substring (0,exp.length - 1);
    textview.value = exp;
}

function SR(x){
    if (x=='r') {
        exp = Math.sqrt(exp);
        textview.value=exp;
    }
    else if (x=='s') {
        exp = exp*exp;
        textview.value=exp;
    }
    else if (x=='a' && allowSR){
        document.getElementById('r').disabled =false;
        document.getElementById('s').disabled =false;
    } 
    else if (!allowSR){
        document.getElementById('r').disabled =true;
        document.getElementById('s').disabled =true;
    }
}