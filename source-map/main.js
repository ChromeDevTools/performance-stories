function myTopFunction(){
    helperFunction();
    extraCall(true);
    console.log('done');
}

function helperFunction() {
    myBottomFunction(300);
    const div = document.createElement('div');
    div.innerText = 'Hi'
    document.body.append(div);
    console.log('hi');
}

function myBottomFunction(breakDuration) {
    console.trace();
    const started = performance.now();
    while (performance.now() - started < breakDuration);
}

function extraCall(shouldThrowError) {
    if (!shouldThrowError)return;
    throwError();
}

function throwError() {
    function getRandomNumber() {
        return  Math.random();
    }
    myBottomFunction(1000);
    if ( getRandomNumber() * 5 >  0) throw Error();
}

myTopFunction();
extraCall(false);
