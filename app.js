var setResult = function(result) {
    var element = document.getElementById('result');
    element.text = result;
}

var getRtcCapabilitiesTest = function() {
    if (!window.cef) {
        setResult('Please run this test in a Symphony Wrapper');
    }
}
