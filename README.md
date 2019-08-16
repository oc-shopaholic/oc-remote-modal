# oc-remote-modal

## Installation

```bash
npm install @lovata/remote-modal
```

## Initialization

### Javascript

```javascript
import RemoteModal from '@lovata/remote-modal';
```

## Methods

### load(partials, callback)

Load to DOM modals window from partials

| Property | Type | Description |
| --- | --- | --- |
| partials | `array` or `string` | Paths to partials
| callback | `function` _Optional_ | Function runs after modals load

__Example__

```javascript
import RemoteModal from '@lovata/remote-modal';

// Load modal
RemoteModal.load('path/to/modal');

// Or load some modals
RemoteModal.load(['path/to/modal-1', 'path/to/modal-2']);
```

### show(partial, callback)

Load and show modal window from partial

| Property | Type | Description |
| --- | --- | --- |
| partial | `string` | Path to partial |
| callback | `function` _Optional_ | Function runs after modal load |

__Example__

```javascript
import RemoteModal from '@lovata/remote-modal';

button.addEventListener('click', () => {
	RemoteModal.show('path/to/modal');
});
```

### addClickListener(element, partial, callback)

Add click listener to element

| Property | Type | Description |
| --- | --- | --- |
| element | `HTMLElement` or `string` (with css selector) |  |
| partial | `string` | Path to partial |
| callback | `function` _Optional_ | Function runs after modal load |

__Example__

```javascript
import RemoteModal from '@lovata/remote-modal';

// CSS selector
RemoteModal.addClickListener('.open-modal-element', 'path/to/modal');

// HTML element
const button = document.querySelector('#button');

RemoteModal.addClickListener(button, 'path/to/modal');
```
