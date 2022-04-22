function rangeSlide(value) {
    document.getElementById('amount').innerHTML = value;
}

function returntrip() {
    if (document.getElementById('return').checked) {
        document.getElementById('roundtrip').style.display = 'block';

    } else {
        document.getElementById('roundtrip').style.display = 'none';
    }
}