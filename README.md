# Couture_Link

## Project Name


 Couture Link.
 
 ----
## Project Description

This is a Pinterest-inspired tailoring web application that connects users with skilled tailors for custom clothing requests.

 **Live Site:** [myminiwrldsht.github.io/Couture-Link](https://myminiwrldsht.github.io/Couture-Link/)



## About The Project

Couture Link allows users to submit their Pinterest fashion inspirations alongside their measurements and styling preferences to place a custom tailoring order. Orders are saved to the browser's local storage and displayed on the orders page, giving users a simple way to track their requests.

This project was built as a final project for a Software Development Foundations course — 5 weeks in the making!

---

## Pages

| Page | Description |
|------|-------------|
| `index.html` | Homepage with featured inspirations and how it works section. |
| `submit.html` | Form page for submitting a new custom order. |
| `orders.html` | Orders page that displays submitted orders dynamically. |

---

## Features

- **Custom Order Form**: collect personal info, outfit inspirations, style preferences, and body measurements.
- **Form Validation**: JavaScript validation checks all fields before submission.
- **localStorage**: submitted orders are saved to the browser and retrieved on the orders page.
- **Dynamic Order Cards**: orders are generated and displayed dynamically using JavaScript DOM manipulation.
- **Responsive Design**: media queries for tablet (768px) and mobile (480px) screens.
- **Glassmorphism UI**: modern frosted glass styling on form sections and confirmation message.

---

## Technologies Used

| Technology | Purpose |
|------------|---------|
| HTML5 | Page structure and semantic markup. |
| CSS3 | Styling, flexbox, grid, and glassmorphism effects. |
| Vanilla JavaScript | DOM manipulation, event handling, form validation, localStorage. |
| GitHub Pages | Deployment and hosting. |

---

## JavaScript Concepts Used

- `addEventListener` — listens for form submission events.
- `event.preventDefault()` — prevents default browser form behaviour.
- `localStorage.setItem / getItem` — saves and retrieves order data.
- `JSON.stringify / JSON.parse` — converts data for storage and retrieval.
- `document.createElement` — dynamically creates order cards.
- `forEach` — loops through orders array to render cards.
- `array.slice(-5)` — limits displayed orders to the 5 most recent.

---

## Known Bugs

- **Error messages**: inline field-level error messages are not fully implemented; validation currently uses a browser `alert()` instead of styled error messages per field.
- **Order status**: order progress (Pending → In Progress → Completed) cannot currently be updated by the user; all orders display as "Pending" by default.

---

## Future Improvements

- [ ] Styled inline error messages per form field.
- [ ] Order status update functionality.
- [ ] Delete individual orders.
- [ ] Filter orders by status.
- [ ] Backend integration to persist data beyond the browser.

---

## Project Structure

```
Couture-Link/
├── index.html        # Homepage
├── submit.html       # Order submission form
├── orders.html       # Orders display page
├── style.css         # Homepage styles
├── submit.css        # Submit page styles
├── orders.css        # Orders page styles
├── index.js          # Homepage JavaScript
├── submit.js         # Form validation and localStorage logic
├── orders.js         # Dynamic order card rendering
└── README.md
```

---

## Author

Name:Lakeisha Maya.
Location:Nairobi, Kenya.
Role:Junior Developer | [@Myminiwrldsht](https://github.com/Myminiwrldsht)

---

## License

This project is licensed under the Apache-2.0 License.

 © 2026 Lakeisha Maya. All rights reserved.

 This project was created for educational purposes only.
