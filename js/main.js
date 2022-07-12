// function([string1, string2],target id,[color1,color2])    
consoleText(['Developer', 'Freelancer', 'Web Design'], 'text', ['var(--text-theme)']);

function consoleText(words, id, colors) {
    if (colors === undefined) colors = ['#000'];
    var visible = true;
    var con = document.getElementById('subtitle');
    var letterCount = 1;
    var x = 1;
    var waiting = false;
    var target = document.getElementById(id)
    target.setAttribute('style', 'color:' + colors[0])
    window.setInterval(function() {

        if (letterCount === 0 && waiting === false) {
            waiting = true;
            target.innerHTML = words[0].substring(0, letterCount)
            window.setTimeout(function() {
                var usedColor = colors.shift();
                colors.push(usedColor);
                var usedWord = words.shift();
                words.push(usedWord);
                x = 1;
                target.setAttribute('style', 'color:' + colors[0])
                letterCount += x;
                waiting = false;
            }, 1000)
        } else if (letterCount === words[0].length + 1 && waiting === false) {
            waiting = true;
            window.setTimeout(function() {
                x = -1;
                letterCount += x;
                waiting = false;
            }, 1000)
        } else if (waiting === false) {
            target.innerHTML = words[0].substring(0, letterCount)
            letterCount += x;
        }
    }, 120)
    window.setInterval(function() {
        if (visible === true) {
            con.className = 'subtitle hidden'
            visible = false;

        } else {
            con.className = 'subtitle'

            visible = true;
        }
    }, 400)
}


// -----------------------------------Nav-PC
window.addEventListener("load", function() {
    // store tabs variable
    var myTabs = document.querySelectorAll(".top-menu >ul> li");

    function myTabClicks(tabClickEvent) {
        for (var i = 0; i < myTabs.length; i++) {
            myTabs[i].classList.remove("active");
        }
        var clickedTab = tabClickEvent.currentTarget;
        clickedTab.classList.add("active");
        tabClickEvent.preventDefault();

        var myContentPanes = document.querySelectorAll(".card-inner");
        console.log('a', myContentPanes);
        for (i = 0; i < myContentPanes.length; i++) {
            myContentPanes[i].classList.remove("active", "animate__fadeInLeft");
            myContentPanes[i].classList.add("hidden", "animate__fadeOutLeft");
        }
        var anchorReference = tabClickEvent.target;
        var activePaneId = anchorReference.getAttribute("href");
        var activePane = document.querySelector(activePaneId);
        activePane.classList.add("active", "animate__fadeInLeft");
        activePane.classList.remove("hidden", "animate__fadeOutLeft");


    }
    for (i = 0; i < myTabs.length; i++) {
        myTabs[i].addEventListener("click", myTabClicks)
    }

});


//------------------------------------------Nav-mobile
window.addEventListener("load", function() {
    // store tabs variable
    var myTabs_mobile = document.querySelectorAll(".top-menu_mobile >ul> li");

    function myTabClicks_mobile(tabClickEvent) {
        for (var i = 0; i < myTabs_mobile.length; i++) {
            myTabs_mobile[i].classList.remove("active");
        }
        var clickedTab_mobile = tabClickEvent.currentTarget;
        clickedTab_mobile.classList.add("active");
        clickedTab_mobile.preventDefault();

        var myContentPanes_mobile = document.querySelectorAll(".card-inner");
        for (i = 0; i < myContentPanes_mobile.length; i++) {
            myContentPanes_mobile[i].classList.remove("active");
            // myContentPanes[i].classList.add("hidden");
        }
        var anchorReference_mobile = tabClickEvent.target;
        var activePaneId_mobile = anchorReference_mobile.getAttribute("href");
        var activePane_mobile = document.querySelector(activePaneId_mobile);
        activePane_mobile.classList.add("active");


    }
    for (i = 0; i < myTabs_mobile.length; i++) {
        myTabs_mobile[i].addEventListener("click", myTabClicks_mobile)
    }

});

// ---------------------------remote control
var controller = document.querySelector('.social-setting');
controller.addEventListener('click', () => {
    if (document.querySelector('.tab-controller').classList.contains("animate__fadeInRight")) {
        document.querySelector('.tab-controller').classList.remove("animate__fadeInRight");
        document.querySelector('.tab-controller').classList.add("animate__fadeOutRight");
        window.setTimeout(function() {
            document.querySelector('.tab-controller').style.display = "none";
        }, 1000)
    } else {
        document.querySelector('.tab-controller').classList.toggle("animate__fadeInRight");
        document.querySelector('.tab-controller').style.display = "block";


    }
})



// ---------------------------Theme default and dark

var darkmode = document.querySelector('.social-dark-light');

darkmode.addEventListener('click', () => {
    if (document.querySelector('#page').classList.contains(".dark")) {
        document.querySelector('#page').classList.toggle("dark");
        darkmode.querySelector('i').classList.toggle("bxs-moon");
        darkmode.querySelector('i').classList.toggle("bxs-sun");
    } else {
        darkmode.querySelector('i').classList.toggle("bxs-sun");
        darkmode.querySelector('i').classList.toggle("bxs-moon");
        document.querySelector('#page').classList.toggle("dark");
    }
})

//-------------------------------color theme
function theme_color(className) {
    if (document.querySelector('#page').classList.contains("dark")) {
        if (document.querySelector('#page').classList.contains(className)) {
            document.querySelector("#page").removeAttribute("class");
            document.querySelector("#page").setAttribute("class", "dark");
            document.querySelector('#page').classList.toggle(className);
        } else {
            document.querySelector("#page").removeAttribute("class");
            document.querySelector("#page").setAttribute("class", "dark");
            document.querySelector('#page').classList.toggle(className);
        }
    } else {
        if (document.querySelector('#page').classList.contains(className)) {
            document.querySelector("#page").removeAttribute("class");
            document.querySelector('#page').classList.toggle(className);
        } else {
            document.querySelector("#page").removeAttribute("class");
            document.querySelector('#page').classList.toggle(className);
        }
    }
}

// --------------------------------send email
function sendEmail() {
    var templateParams = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    emailjs.send('service_hkvk5ec', 'template_8j91nan', templateParams)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
        }, function(error) {
            console.log('FAILED...', error);
        });

    document.getElementById('name').value = "";
    document.getElementById('email').value = "";
    document.getElementById('message').value = "";

}