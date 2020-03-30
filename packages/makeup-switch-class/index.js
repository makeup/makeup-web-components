window.onload = function(e) {
    const switchClasses = document.querySelectorAll('.makeup-switch');

    switchClasses.forEach(function(e, i) {
        const widget = new MakeupUISwitchClass(e);
    });
};
