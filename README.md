# Nostra E-Commerce

Nostra is a fashion e-commerce website built with HTML, CSS, and JavaScript. It was created as a learning project to practise building a real, multi-page shopping site from scratch, covering layout, responsive design, interactive UI, and filtering product data in the browser.

## Features

- **Home page:** full-width image slider with auto-advance and arrow controls, brand strip, service highlights, new arrivals, a "most wanted" grid with like buttons, a limited-offer banner, and a newsletter sign-up.
- **Collections page:** product grid built from JavaScript data, with checkbox filters (occasion, colour, arrivals), live name search, a reset button, a product count, and a "no results" message.
- **Contact Us page:** contact details and a validated form that shows a confirmation message.
- **Responsive layout:** works on desktop, tablet, and mobile, with a slide-out menu on small screens.
- **Small touches:** dismissible offer bar, scroll-reveal animations, and hover effects.

## Tech Stack

- **HTML5** for page structure
- **CSS3** for styling, CSS Grid and Flexbox for layout, and media queries for responsiveness
- **JavaScript (ES6)** for interactivity, DOM manipulation, event handling, and ES module imports
- **Font Awesome** for icons and **Google Fonts** (Playfair Display, Poppins)

## Project Structure

```
Nostra-Ecommerce/
├── index.html        # Home page
├── collections.html  # Product listing with filters and search
├── contactus.html    # Contact form page
├── style.css         # Shared styles for all pages
├── script.js         # Home page: slider, likes, scroll animations
├── contact.js        # Contact page: menu, offer bar, form handling
├── README.md
└── img/
    ├── icons/        # Brand logos and heart icons
    ├── others/       # Slider and offer banner images
    └── products/     # Product photos
```

## What I Learned

- Structuring a multi-page website with shared navigation and styling
- Writing responsive layouts with CSS Grid, Flexbox, and media queries
- Handling DOM events (clicks, input, change, scroll) and updating the page without reloading
- Generating HTML from a JavaScript data array
- Building filter and search logic that works together and can be reset
- Debugging page-to-page behaviour, such as making sure every page loads the scripts its controls need

## Possible Next Steps

- Connect the contact form and newsletter to a backend or form service
- Add a shopping cart and checkout flow
- Save likes and cart items with `localStorage`
- Replace placeholder text and contact details with real content

## Author

Built as a personal learning project to showcase progress in front-end web development.
