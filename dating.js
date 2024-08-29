document.addEventListener('DOMContentLoaded', function() {
    // Add active class to current page in navigation
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.sidebar ul li a');
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
});

const bassImage = document.getElementById('bassImage');
        const bassRight = document.getElementById('bassRight');
        const bassLeft = document.getElementById('bassLeft');
        let bassCurrent = './images/bass1.jpg';
        bassRight.addEventListener('click', () => {
        if (bassCurrent === './images/bass1.jpg') {
            bassImage.src = './images/bass2.jpeg';
            bassCurrent = './images/bass2.jpeg';
        } else if (bassCurrent === './images/bass2.jpeg') {
            bassImage.src = './images/bass3.jpg';
            bassCurrent = './images/bass3.jpg';
        } else if (bassCurrent === './images/bass3.jpg') {
            bassImage.src = './images/bass4.jpg';
            bassCurrent = './images/bass4.jpg';
        }
        else if (bassCurrent === './images/bass4.jpg') {
            bassImage.src = './images/bass1.jpg';
            bassCurrent = './images/bass1.jpg';
        }
    });
    bassLeft.addEventListener('click', () => {
        if (bassCurrent === './images/bass4.jpg') {
            bassImage.src = './images/bass3.jpg';
            bassCurrent = './images/bass3.jpg';
        } else if (bassCurrent === './images/bass3.jpg') {
            bassImage.src = './images/bass2.jpeg';
            bassCurrent = './images/bass2.jpeg';
        } else if (bassCurrent === './images/bass2.jpeg') {
            bassImage.src = './images/bass1.jpg';
            bassCurrent = './images/bass1.jpg';
        }
        else if (bassCurrent === './images/bass1.jpg') {
            bassImage.src = './images/bass4.jpg';
            bassCurrent = './images/bass4.jpg';
        }
});

const marcoImage = document.getElementById('marcoImage');
        const marcoRight = document.getElementById('marcoRight');
        const marcoLeft = document.getElementById('marcoLeft');
        let currentMarco = './images/marco1.jpg';
        marcoRight.addEventListener('click', () => {
        if (currentMarco === './images/marco1.jpg') {
            marcoImage.src = './images/marco2.jpg';
            currentMarco = './images/marco2.jpg';
        } else if (currentMarco === './images/marco2.jpg') {
            marcoImage.src = './images/marco3.jpg';
            currentMarco = './images/marco3.jpg';
        } else if (currentMarco === './images/marco3.jpg') {
            marcoImage.src = './images/marco4.jpg';
            currentMarco = './images/marco4.jpg';
        }
        else if (currentMarco === './images/marco4.jpg') {
            marcoImage.src = './images/marco1.jpg';
            currentMarco = './images/marco1.jpg';
        }
    });
    marcoLeft.addEventListener('click', () => {
        if (currentMarco === './images/marco4.jpg') {
            marcoImage.src = './images/marco3.jpg';
            currentMarco = './images/marco3.jpg';
        } else if (currentMarco === './images/marco3.jpg') {
            marcoImage.src = './images/marco2.jpg';
            currentMarco = './images/marco2.jpg';
        } else if (currentMarco === './images/marco2.jpg') {
            marcoImage.src = './images/marco1.jpg';
            currentMarco = './images/marco1.jpg';
        }
        else if (currentMarco === './images/marco1.jpg') {
            marcoImage.src = './images/marco4.jpg';
            currentMarco = './images/marco4.jpg';
        }
});

setTimeout(function(){
    var datingMusic = document.getElementById("datingMusic");
    datingMusic.volume = 0.9;
    datingMusic.play();}, 24200);

    const interestButtons = document.querySelectorAll('.interest-buttons button');
    
    interestButtons.forEach((button) => {
      button.addEventListener('click', () => {
        const interest = button.dataset.interest;
        button.classList.toggle('active');
      });
    });