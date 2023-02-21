function waitForFrame() {
  return new Promise((resolve) => {
    window.requestAnimationFrame(() => {
      resolve()
    })
  })
}

const testFuncs = {}
testFuncs.changeClassNameAndDisplay = function() {
  document.getElementById("testElementOne").className = "red";
  document.getElementById("testElementTwo").className = "red";
  var forceStyleRecalc = document.body.offsetTop;
  return waitForFrame();
}

testFuncs.changeIdWithoutStyleChangeAndDisplay = function() {
  document.getElementById("testElementOne").id = "testElementNoMatchingStyles1";
  document.getElementById("testElementTwo").id = "testElementNoMatchingStyles2";
  var forceStyleRecalc = document.body.offsetTop;
  return waitForFrame();
}

testFuncs.changeIdAndDisplay = function() {
  document.getElementById("testElementNoMatchingStyles1").id =
    "testElementFour";
  document.getElementById("testElementNoMatchingStyles2").id =
    "testElementFive";
  var forceStyleRecalc = document.body.offsetTop;
  return waitForFrame();
}

testFuncs.changeStyleAttributeAndDisplay = function() {
  document
    .getElementById("testElementFour")
    .setAttribute("style", "color: purple");
  document
    .getElementById("testElementFive")
    .setAttribute("style", "color: pink");
  var forceStyleRecalc = document.body.offsetTop;
  return waitForFrame();
}

testFuncs.changeAttributeAndDisplay = function() {
  document.getElementById("testElementFour").setAttribute("dir", "rtl");
  document.getElementById("testElementFive").setAttribute("dir", "rtl");
  var forceStyleRecalc = document.body.offsetTop;
  return waitForFrame();
}

testFuncs.changePseudoAndDisplay = function() {
  var element1 = document.getElementById("testElementFour");
  var element2 = document.getElementById("testElementFive");
  eventSender.mouseMoveTo(element2.offsetLeft + 2, element2.offsetTop + 2);
  return waitForFrame().then(function () {
    var forceStyleRecalc = document.body.offsetTop;
    return waitForFrame();
  });
}

const buttons = document.querySelectorAll('.buttons button');
for (const button of buttons) {
  const funcToRun = testFuncs[button.id]
  button.addEventListener('click', async () => {
    await funcToRun()
    console.log('Completed run of function ', button.id)
  })
}
