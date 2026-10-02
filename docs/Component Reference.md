# Component Reference

## 📁 File Index

| File | Purpose | Lines | Dependencies |
|------|---------|-------|--------------|
| `index.html` | Page composition, controls, inline handlers | ~150 | jQuery, Bootstrap, Font Awesome, local CSS/JS |
| `css/custom.css` | Local presentation overrides | ~10 | Bootstrap, Start Bootstrap |
| `js/password-generator.js` | Password generation, clipboard copy | ~80 | jQuery, Browser DOM APIs |

---

## 🏛️ Component: `index.html`

### Purpose
Defines the page structure, controls, element identifiers, inline action handlers, and asset load order.

### Location
`/home/horatiu/Proiecte/password-generator/index.html`

### Entry Points
- **Navigation**: GitHub link to repository
- **Generator controls**: Length input, character class checkboxes
- **Action buttons**: Generate, Copy

### DOM Elements

| Element ID | Type | Purpose | Default State |
|------------|------|---------|---------------|
| `length` | `<input type="number">` | Password length | 32 |
| `password` | `<input type="text">` | Generated password output | Empty |
| `digitsCheckbox` | `<input type="checkbox">` | Include digits 0-9 | Checked |
| `lowercaseLettersCheckbox` | `<input type="checkbox">` | Include lowercase a-z | Checked |
| `uppercaseLettersCheckbox` | `<input type="checkbox">` | Include uppercase A-Z | Checked |
| `symbolsCheckbox` | `<input type="checkbox">` | Include standard symbols | Checked |
| `symbolsExtraCheckbox` | `<input type="checkbox">` | Include extra symbols | Unchecked |
| `bracketsCheckbox` | `<input type="checkbox">` | Include brackets | Unchecked |
| `othersCheckbox` | `<input type="checkbox">` | Include other characters | Unchecked |
| `generate` | `<span>` | Generate button | Always visible |
| `copy` | `<span>` | Copy button | Always visible |

### Inline Handlers
- `generatePassword()` - Called on Generate button click
- `copyPassword()` - Called on Copy button click

### External Assets Loaded
```html
<!-- jQuery -->
<script src="https://code.jquery.com/jquery-3.7.0.slim.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.12.1/jquery.easing.min.js"></script>

<!-- Bootstrap -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>

<!-- Start Bootstrap -->
<link href="https://startbootstrap.github.io/startbootstrap-freelancer/css/styles.css">
<script src="https://startbootstrap.github.io/startbootstrap-freelancer/js/scripts.js"></script>

<!-- Font Awesome -->
<script src="https://use.fontawesome.com/releases/v6.4.0/js/all.js"></script>

<!-- Local assets -->
<link href="css/custom.css">
<script src="js/password-generator.js"></script>
```

---

## 🎨 Component: `css/custom.css`

### Purpose
Provides local presentation overrides for the generator label and GitHub icon hover state.

### Location
`/home/horatiu/Proiecte/password-generator/css/custom.css`

### Style Rules

| Selector | Property | Value | Purpose |
|----------|----------|-------|---------|
| `#generator > div.container > div > p` | `font-size` | `x-large` | Label styling |
| `.icoGitHub:hover` | `color` | `#211F1F` | GitHub icon hover state |

### Dependencies
- Bootstrap classes (inherited styling)
- Start Bootstrap styles (base styles)

---

## ⚙️ Component: `js/password-generator.js`

### Purpose
Defines character sets, generates passwords, updates the password field, and invokes the copy command.

### Location
`/home/horatiu/Proiecte/password-generator/js/password-generator.js`

### Character Set Constants

| Constant | Value | Characters |
|----------|-------|------------|
| `digits` | `"0123456789"` | 10 digits |
| `lowercase` | `"abcdefghijklmnopqrstuvwxyz"` | 26 lowercase letters |
| `uppercase` | `"ABCDEFGHIJKLMNOPQRSTUVWXYZ"` | 26 uppercase letters |
| `symbols` | `"?-*%!@#_$.:; /"` | 15 standard symbols |
| `symbolsExtra` | `"€¢£¥₦§®©™∑∆µπ"` | 12 extra symbols |
| `brackets` | `"[]{}()<>` | 10 bracket characters |
| `others` | `",|\\'\"+=`~^& "` | 14 other characters |

### Functions

#### `generatePassword()`
**Purpose**: Generate a password based on user selections.

**Execution Flow**:
1. Read length from `#length` input
2. Initialize empty password string
3. Build character pool from enabled checkboxes
4. Loop `length` times, selecting random characters
5. Write result to `#password` input

**DOM Dependencies**:
- `$("#length")` - Password length
- `$("#digitsCheckbox")` - Digits toggle
- `$("#lowercaseLettersCheckbox")` - Lowercase toggle
- `$("#uppercaseLettersCheckbox")` - Uppercase toggle
- `$("#symbolsCheckbox")` - Symbols toggle
- `$("#symbolsExtraCheckbox")` - Extra symbols toggle
- `$("#bracketsCheckbox")` - Brackets toggle
- `$("#othersCheckbox")` - Others toggle
- `$("#password")` - Output field

**Algorithm**:
```
password = ""
characters = ""
if digits checked: characters += digits
if lowercase checked: characters += lowercase
if uppercase checked: characters += uppercase
if symbols checked: characters += symbols
if symbolsExtra checked: characters += symbolsExtra
if brackets checked: characters += brackets
if others checked: characters += others

for i = 0 to length-1:
    randomPos = Math.floor(Math.random() * characters.length)
    password += characters.charAt(randomPos)

set #password value to password
```

#### `copyPassword()`
**Purpose**: Copy the generated password to the system clipboard.

**Execution Flow**:
1. Get reference to `#password` element
2. If secure context and Clipboard API available:
   - Use `navigator.clipboard.writeText()`
   - On failure, fall back to legacy method
3. Otherwise, use legacy fallback directly

**Dependencies**:
- `navigator.clipboard.writeText()` - Modern clipboard API
- `document.execCommand("copy")` - Legacy clipboard API

#### `fallbackCopy(copyText)`
**Purpose**: Legacy clipboard copy implementation.

**Execution Flow**:
1. Focus the password input
2. Select all text in the input
3. Execute `document.execCommand("copy")`

---

## 🔄 Data Flow

```
User Input ──→ DOM Controls ──→ generatePassword() ──→ Character Pool
                                                              │
                                                              ▼
                                                       Random Selection ──→ Password String
                                                              │
                                                              ▼
                                                         #password Field ──→ User Display
                                                              │
                                                              ▼
                                                         copyPassword() ──→ System Clipboard
```

---

## ⚠️ Known Limitations

| Limitation | Impact | Mitigation |
|------------|--------|------------|
| `Math.random()` not cryptographic | Generated passwords not suitable for high-assurance secrets | Use Web Crypto API for secure generation |
| No input validation | Invalid length or all checkboxes disabled produces unusable results | Add validation before generation |
| Silent clipboard failures | User unaware if copy fails | Add success/failure feedback |
| External asset dependency | CDN unavailability affects page | Self-host critical assets |
| No automated tests | Manual verification required | Add test suite |