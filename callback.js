var setResult = function(result) {
    var element = document.getElementById('result');
    element.innerHTML = result;
};

var noResult = function() {
    setResult('ERROR: getRtcCapabilities did not invoke the callback within 30 secs');
};

var getRtcCapabilitiesTest = function() {
    if (!window.cef) {
        setResult('Please run this test in a Symphony Wrapper');
        return;
    }

    var hasGetRtcCapabilities = !!window.cef.getRtcCapabilities;
    if (!hasGetRtcCapabilities) {
        return setResult('This wrapper does not support getRtcCapabilities');
    }

    var timeoutId = setTimeout(noResult, 30000);

    window.cef.getRtcCapabilities(function(capabilities) {
        clearTimeout(timeoutId);
        if (typeof capabilities !== 'object') {
            return setResult('ERROR: getRtcCapabilities did not return an object');
        }

        if (typeof capabilities.allowSources === 'undefined') {
            return setResult('ERROR: getRtcCapabilities did not return an object with a key allowSources');
        }

        setResult('SUCCESS: getRtcCapabilities returned the expected response');
    });
};


getRtcCapabilitiesTest();
