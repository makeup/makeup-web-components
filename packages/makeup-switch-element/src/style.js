export default `
<style>
    .switch {
        --switch-background-color-unchecked: #767676;
        --switch-background-color-checked: #382aef;
        --switch-background-color-disabled: #c7c7c7;
        --switch-foreground-color: #fff;
        }
    @media (prefers-color-scheme: dark) {
        .switch {
            --switch-background-color-checked: #5192ff;
        }
    }
    .switch {
        -webkit-box-sizing: border-box;
                box-sizing: border-box;
        height: 40px;
        position: relative;
        vertical-align: middle;
    }
    div.switch {
        display: -webkit-box;
        display: flex;
    }
    span.switch {
        display: -webkit-inline-box;
        display: inline-flex;
    }
    span.switch__button {
        align-self: center;
        background: gray none repeat scroll 0 0;
        background-color: #767676;
        background-color: var(--switch-background-color-unchecked, #767676);
        border-radius: 400px;
        color: transparent;
        display: inline-block;
        height: 24px;
        position: relative;
        text-indent: 100%;
        -webkit-transition: left 0.15s ease-out 0s;
        transition: left 0.15s ease-out 0s;
        width: 40px;
    }
    span.switch__button::after {
        background: white none repeat scroll 0 0;
        background-color: #fff;
        background-color: var(--switch-foreground-color, #fff);
        border-radius: 50%;
        content: "";
        display: block;
        height: 18px;
        left: 3px;
        position: absolute;
        top: 3px;
        -webkit-transform: translate3d(0, 0, 0);
                transform: translate3d(0, 0, 0);
        -webkit-transition: left 0.15s ease-out 0s;
        transition: left 0.15s ease-out 0s;
        width: 18px;
    }
    input.switch__control,
        span.switch__control {
        height: 24px;
        left: 0;
        margin: 0;
        padding: 0;
        position: absolute;
        top: 8px;
        width: 40px;
        z-index: 1;
    }
    input.switch__control {
        opacity: 0;
    }
    input.switch__control:focus + span.switch__button {
        outline: 1px dotted #767676;
    }
    input.switch__control[disabled] + span.switch__button {
        background-color: #c7c7c7;
        background-color: var(--switch-background-color-disabled, #c7c7c7);
    }
    input.switch__control:checked + span.switch__button::after {
        left: 19px;
    }
    span.switch__control[aria-disabled="true"] + span.switch__button {
        background-color: #c7c7c7;
        background-color: var(--switch-background-color-disabled, #c7c7c7);
    }
    span.switch__control[aria-checked="true"] + span.switch__button::after {
        left: 19px;
    }
    input.switch__control:not([disabled]):checked + span.switch__button,
    span.switch__control:not([aria-disabled="true"])[aria-checked="true"] + span.switch__button {
        background-color: #3665f3;
        background-color: var(--switch-background-color-checked, #3665f3);
    }
    @media screen and (-ms-high-contrast: active) {
        input.switch__control {
            opacity: 1;
        }
    }
</style>
`;