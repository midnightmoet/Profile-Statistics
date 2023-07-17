const countersEl = document.querySelectorAll('.counter');


countersEl.forEach((counterEl) => {
    counterEl.innerText = '0';

    incrementCounter(); // call function

    function incrementCounter(){
        let currentNum = +counterEl.innerText;
        const dataCeil = +counterEl.getAttribute('data-ceil');

        // console.log(dataCeil); // test, debug

        const increment = dataCeil / 15;
        //console.log(increment); // test, debug

        currentNum = Math.ceil(currentNum + increment);


        if(currentNum < dataCeil){
            counterEl.innerText = currentNum;
            setTimeout(incrementCounter, 50)
        } else {
            counterEl.innerText = dataCeil;
        }
    }
    
})