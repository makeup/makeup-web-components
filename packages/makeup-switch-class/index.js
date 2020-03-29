window.onload = function(e) {
    const switchClasses = document.querySelectorAll('.ebayui-switch');

    switchClasses.forEach(function(e, i) {
        const widget = new EbayUISwitchClass(e);
    });
};
