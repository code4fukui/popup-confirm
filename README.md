# popup-confirm
日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

A simple pop-up confirmation dialog component for web applications.

## Demo
[Interactive demo](https://code4fukui.github.io/popup-confirm/)

## Features
- Customizable message and button text
- Configurable button order (OK/Cancel or Cancel/OK)
- Keyboard support (Enter, Escape, Tab, Arrow keys)
- Focused button indication
- Closes on background click

## Usage
To use the `popup-confirm` component, import it and call the `show()` method:

```javascript
import { PopupConfirm } from './popup-confirm.js';

const result = await PopupConfirm.show('Are you sure?');
console.log(result); // true if OK, false if Cancel
```

You can also pass options to customize the dialog:

```javascript
const result = await PopupConfirm.show('Are you sure?', { opposite: true, focusCancel: true });
```

## License
This project is licensed under the [MIT License](LICENSE).
