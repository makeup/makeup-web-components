window.onload = function(e) {
    const switchEls = document.querySelectorAll('ebayui-switch');

    switchEls.forEach(function(e, i) {
        console.log(e, i);
    });
};
