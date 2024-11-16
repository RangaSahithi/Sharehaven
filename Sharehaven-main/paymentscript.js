function processPayment() {
    var paymentMethod = document.getElementById('paymentMethod').value;

    if (paymentMethod === 'card') {
        var cardNumber = document.getElementById('cardNumber').value;
        var expiryDate = document.getElementById('expiryDate').value;
        var cvv = document.getElementById('cvv').value;

        // Here, you would typically send card details to a server for processing.
        document.getElementById('message').innerHTML = "Card Payment Successful!";
    } else if (paymentMethod === 'upi') {
        var upiId = document.getElementById('upiId').value;

        // Here, you would typically send UPI ID to a server for processing.
        document.getElementById('message').innerHTML = "UPI Payment Successful!";
    }
}

document.getElementById('paymentMethod').addEventListener('change', function() {
    var paymentMethod = this.value;

    if (paymentMethod === 'upi') {
        document.getElementById('cardDetails').style.display = 'none';
        document.getElementById('upiDetails').style.display = 'block';
    } else {
        document.getElementById('cardDetails').style.display = 'block';
        document.getElementById('upiDetails').style.display = 'none';
    }
});
