
    var count = 0; 
    var counter = document.getElementById('counter'); // prikaz broja
    var buttons = document.getElementsByTagName('button'); // dohvat svih dugmadi

    // dodaj funkcionalnost svakom dugmetu
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].onclick = function() {
            var action = this.getAttribute('data-action'); // provjeri akciju dugmeta

            switch(action) {
                case 'increase':
                    count = count + 1;
                    break;
                case 'decrease':
                    count = count - 1;
                    break;
                default:
                    alert('Nepoznata akcija');
            }

            counter.innerHTML = count; // prikaz broja
        };
    }

