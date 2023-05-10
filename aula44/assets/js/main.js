function myForm(){
    const form = document.querySelector('.form');

    function eventForm(event){
        event.preventDefault();

        const weight = form.querySelector('.weight');
        const height = form.querySelector('.height');
        const result = document.querySelector('#result');

        const imc = Number(weight.value)/(Number(height.value)**2);

        console.log(imc);
    }

    form.addEventListener('submit', eventForm);
}
myForm();
