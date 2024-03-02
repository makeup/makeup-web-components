# makeup-switch-element

An HTML custom element (aka Web Component) that represents an ARIA switch.

This custom element utilises the [makeup-switch](https://github.com/makeup/makeup-js/tree/master/packages/makeup-switch) for all of its logic.

## Example

Markup:

```html
<span id="label1">makeup-switch 1</span>
<makeup-switch labelledby="label1" placeholder="true"></makeup-switch>
```

Style:

The following custom properties are available:

```
--switch-background-color-unchecked;
--switch-background-color-checked;
--switch-background-color-disabled;
--switch-foreground-color;
```

Script:

```js
import MakeupSwitchElement from 'makeup-switch-element';

document.querySelectorAll('makeup-switch').forEach(function(el, i) {
    el.addEventListener('makeup-switch-toggle', function(e) {
        console.log(e.type, e.detail);
    });
});
```

## Attributes

### label

The accessible label text. NOTE: `labelledby` is preferred.

### labelledby

The `id` of the labelling element.

### placeholder

Set to `true` to render a placeholder style while in non-JavaScript state.

Example placeholder style:

```css
makeup-switch[placeholder="true"] {
    align-items: center;
    display: inline-flex;
    height: 40px;
}
makeup-switch[placeholder="true"]::after {
    background-color: #eee;
    border-radius: 400px;
    content: '';
    height: 24px;
    width: 40px;
}
```

## Events

### makeup-switch-toggle

Fired when the switch is toggled.

* `detail.on`: true or false
