import MakeupSwitchElement from "../../packages/makeup-switch-element";
import "../../packages/makeup-switch-element/src/index.css";
import "../../packages/makeup-switch-element/src/skeleton.css";

window.onload = function() {
    document.querySelectorAll('makeup-switch').forEach(function(el, i) {
        console.log(el, i);

        el.addEventListener('makeup-switch-toggle', function(e) {
            console.log(e.type, e.detail);
        });
    });
};
