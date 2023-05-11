function myForm(){
    const form = document.querySelector('.form');

    function eventForm(event){
        event.preventDefault();

        const weight = form.querySelector('.weight');
        const height = form.querySelector('.height');
        const result = document.querySelector('#result');

        const imc = Number(weight.value)/(Number(height.value)*Number(height.value));

        console.log(imc);

        if (imc < 18.5) {
            return `Your IMC is ${imc} and you're bellow weight` 
        }
        }

        result.innerHTML = `${calculateImc(imc)}`;
        if 
    }

    form.addEventListener('submit', eventForm);
}
myForm();
