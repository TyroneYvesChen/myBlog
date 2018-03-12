
let docEl = document.documentElement,
resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
recalc = function () {
    var clientWidth = docEl.clientWidth;
    if (!clientWidth) return;
    if (clientWidth >= 750) {
        docEl.style.fontSize = '100px';
    } else {
        docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
    }
};
if (document.addEventListener) {
    window.addEventListener(resizeEvt, recalc, false);
    document.addEventListener('DOMContentLoaded', recalc, false);
    recalc();
}
