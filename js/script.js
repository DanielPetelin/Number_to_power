document.getElementById('step2').onclick = function() {
    var num = document.getElementById('num').value;
    var result = num * num;

    document.getElementById('out').innerHTML = result;
};

document.getElementById('step3').onclick = function() {
    var num = document.getElementById('num').value;
    var result = num * num * num;

    document.getElementById('out').innerHTML = result;
};

document.getElementById('step4').onclick = function() {
    var num = document.getElementById('num').value;
    var result = num * num * num * num;

    document.getElementById('out').innerHTML = result;
};