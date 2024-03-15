document.addEventListener('DOMContentLoaded', function() {
    const combination = '1337'; 
    let userInput = ''; 

    const modal = document.createElement('div');
    modal.classList.add('overlay');
    const popup = document.createElement('div');
    popup.classList.add('popup');
    modal.appendChild(popup);
    const closeButton = document.createElement('a');
    closeButton.href = '#';
    closeButton.classList.add('close');
    closeButton.innerHTML = '&times;';
    popup.appendChild(closeButton);
    const content = document.createElement('div');
    content.classList.add('content');
    content.innerHTML = '<strong <h1>KONTAKTUPPGIFTER</strong></h1><p>Mobil: +46(0)706459330 <br>ludwig.gifrod@hotmail.com <br>Krabbes väg 21, 43252 VARBERG, Sverige</p><br>';
    popup.appendChild(content);

    document.body.appendChild(modal);


    document.addEventListener('keydown', function(event) {
        userInput += event.key;

        if (userInput === combination) {
 
            modal.style.visibility = 'visible';
            modal.style.opacity = 1;

            userInput = '';
        }
    });

    closeButton.addEventListener('click', function(event) {
        event.preventDefault();
        modal.style.visibility = 'hidden';
        modal.style.opacity = 0;
    });
});