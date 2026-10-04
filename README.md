# Marigold Shop

This is the finished project for the course **AI Powered - Frontend Development with Bootstrap**.

Marigold Stores is a small neighbourhood shop with three branches: Central, Northgate and Lakeside. The manager is Ms. Ruth Nakato. Marigold Shop is its website. The shop is made up, and so is every name, phone number and address in it.

Open `index.html` in your browser and click around. By the end of the course, you will have built every page you see, yourself, one lesson at a time.

## What is inside

| File or folder | What it is |
|---|---|
| `index.html` | Home page |
| `products.html` | All 16 products, with filters and sorting |
| `product.html` | One product: Rice, 5 kg |
| `cart.html` | The cart, with totals |
| `about.html` | The shop's story and team |
| `contact.html` | Contact form and common questions |
| `login.html` | Log in |
| `register.html` | Create an account |
| `admin/index.html` | Staff dashboard |
| `admin/product-new.html` | Add a product |
| `css/style.css` | Our colours, fonts and a few small touches |
| `js/marigold.js` | Four small blocks copied from the Bootstrap docs |
| `images/` | Logo, product pictures, banners and branch pictures |
| `products.txt` | The product list. Course 3 turns it into data |

## Which page teaches what

Every page starts with a comment that lists the Bootstrap parts it uses. Here is the short version.

| Module | What you learn | Where you see it |
|---|---|---|
| 1 | The CSS Bootstrap is made of, and adding Bootstrap | Every page: the CDN links in `<head>` |
| 2 | Working with an AI assistant | The footer, built from a five part prompt |
| 3 | Containers and the grid | Home page sections, the product grid, the product page columns |
| 4 | Type, colours, tables, images and flex | The hero, the cart table, the stock box, the price row |
| 5 | Alerts, buttons, icons, badges, lists and cards | Free delivery alert, cart badge, category list, product cards |
| 6 | Dropdowns, collapse, tabs, navbar and carousel | Navbar, Sort by menu, delivery collapse, product tabs, promotions carousel, FAQ |
| 7 | Modal, toast, tooltips, offcanvas, scrollspy and the dashboard | Quick view, "Added to your cart", the filters panel on phones, the About page, `admin/` |
| 8 | Forms and validation | Contact, log in, register, add a product |
| 9 | Your own theme, dark mode, accessibility, speed and publishing | `css/style.css`, the moon button, image sizes, GitHub Pages |
| 10 | Where the AI gets it wrong | Fixes you will make all through the project |

## Names that course 3 needs

Course 3 adds JavaScript to this site. It looks for these names, so please keep them exactly as they are:

- Products: `#productGrid`, `.product-card` with `data-id`, `.js-add-to-cart`
- Navbar: `#cartCount`, `#siteSearch`, `#themeToggle`
- Filters: `#categoryFilter`, `#sortSelect` with `data-sort` on each choice
- Footer: `#year`
- Forms: `#contactForm`, `#loginForm`, `#registerForm`, all with `needs-validation`
- Other: `#quickView`, `#cartToast`, `#cartItems`

## Try these

1. Click the moon button at the top. The whole site turns dark.
2. Make your browser narrow, like a phone. Watch the menu fold away and the filters move into a slide-in panel.
3. On the Register page, press **Create my account** with the form empty. See how each box tells you what is missing.
4. Press **Tab** on the home page. You can reach everything without a mouse.

## Put it online

1. Make a new repository on GitHub called `marigold-shop`.
2. Upload everything in this folder.
3. Go to **Settings**, then **Pages**, and choose the `main` branch.
4. Wait one minute, then open the link GitHub gives you. Send it to a friend.

You built a real website. Be proud of it.
