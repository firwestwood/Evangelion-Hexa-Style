(function(window, document, undefined) {
    var el = {};

    el.calcBox = document.querySelector('.calc');
    el.warnBox = document.querySelector('.hexwarn');

    el.warnBox.addEventListener('click', function () {
        el.warnBox.classList.add('hide');
    }, false);

    el.calcBox.addEventListener('dblclick', function () {
        el.warnBox.classList.remove('hide');
    }, false);

    setTimeout(function () {
        el.warnBox.classList.add('hide');
    }, 5000);

    // Enable 3D effect toggle
    el.enable3dBTN = document.getElementById('enable3d');
    el.body = document.getElementsByTagName('body')[0];
    el.enable3dBTN.addEventListener('click', function () {
        el.body.classList.toggle('enable3d');
    }, false);

})(window, document, undefined);
