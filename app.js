document.getElementById('calculate').addEventListener('click', function() {
    let base = document.getElementById('capital').value;
    let years = document.getElementById('years').value;
    let interest = document.getElementById('interest').value;
    let isCompound = document.getElementById('compound').checked;
    let frequency = document.getElementById('compoundFrequency').value;

    base = parseFloat(base);
    years = parseFloat(years);
    interest = parseFloat(interest) / 100;


    frequency = isCompound ? parseFloat(frequency) : 1;


    if (isNaN(base) || isNaN(years) || isNaN(interest) || (isCompound && isNaN(frequency))) {
        document.getElementById('compoundFrequency').value = 'Invalid input';
        return;
    }

    let result;
    if (isCompound && frequency > 0) {
        result = base * Math.pow((1 + (interest / frequency)), frequency * years);
    } else {
        result = base * (1 + interest * years);
    }

    document.getElementById('compoundFrequency').value = result.toFixed(2);
});
