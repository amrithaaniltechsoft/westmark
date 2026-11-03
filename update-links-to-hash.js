const fs = require('fs');

// Helper to replace href values while keeping elements exactly the same
function replaceInFile(filePath, replacements) {
  let content = fs.readFileSync(filePath, 'utf8');
  for (const [target, replacement] of replacements) {
    if (typeof target === 'string') {
      content = content.split(target).join(replacement);
    } else {
      content = content.replace(target, replacement);
    }
  }
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Updated ${filePath}`);
}

// 1. components/global/header.tsx
// Nav links:
//   ["About us", "/about"] -> ["About us", "#"]
//   ["Products & Services", "/products"] -> ["Products & Services", "#products"]
//   ["Testimonials", "/testimonials"] -> ["Testimonials", "#"]
//   ["Contact", "/contact"] -> ["Contact", "#contact"]
// Request quote -> href="#contact"
// Category bar View all -> href="#products"
replaceInFile('components/global/header.tsx', [
  ['["About us", "/about"],', '["About us", "#"],'],
  ['["Products & Services", "/products"],', '["Products & Services", "#products"],'],
  ['["Testimonials", "/testimonials"],', '["Testimonials", "#"],'],
  ['["Contact", "/contact"],', '["Contact", "#contact"],'],
  ['href="/contact"', 'href="#contact"'],
  ['href="/products"', 'href="#products"']
]);

// 2. components/global/footer.tsx
// Links:
//   href="/about" -> href="#"
//   href="/contact" -> href="#contact"
//   href="/products" -> href="#products"
// Category click -> router.push disabled or scroll to #products
replaceInFile('components/global/footer.tsx', [
  ['href="/about"', 'href="#"'],
  ['href="/contact"', 'href="#contact"'],
  ['href="/products"', 'href="#products"'],
  [
    'router.push(`/products?category=${encodeURIComponent(catName)}`);',
    'const el = document.getElementById("products"); if (el) el.scrollIntoView({ behavior: "smooth" });'
  ]
]);

// 3. components/global/search-dropdown.tsx
// href={`/products/${productSlug}`} -> href="#products"
replaceInFile('components/global/search-dropdown.tsx', [
  ['href={`/products/${productSlug}`}', 'href="#products"']
]);

// 4. components/home/about-section.tsx
// href="/about" -> href="#"
replaceInFile('components/home/about-section.tsx', [
  ['href="/about"', 'href="#"']
]);

// 5. components/home/categories-section.tsx
// href="/products" -> href="#products"
// href={categoryHref} -> href="#products"
replaceInFile('components/home/categories-section.tsx', [
  ['href="/products"', 'href="#products"'],
  ['href={categoryHref}', 'href="#products"']
]);

// 6. components/home/contact-section.tsx
// href="/contact" -> href="#contact"
replaceInFile('components/home/contact-section.tsx', [
  ['href="/contact"', 'href="#contact"']
]);

// 7. components/home/product-listing.tsx
// href="/products" -> href="#products"
// href="/contact" -> href="#contact"
replaceInFile('components/home/product-listing.tsx', [
  ['href="/products"', 'href="#products"'],
  ['href="/contact"', 'href="#contact"']
]);

// 8. components/home/shipping-banner.tsx
// href="/contact" -> href="#contact"
// href="/about" -> href="#"
replaceInFile('components/home/shipping-banner.tsx', [
  ['href="/contact"', 'href="#contact"'],
  ['href="/about"', 'href="#"']
]);

// 9. components/ui/product-card.tsx
// productHref -> "#" (or "#contact")
// enquiryHref -> "#contact"
replaceInFile('components/ui/product-card.tsx', [
  ['const productHref = `/products/${productSlug}`;', 'const productHref = "#";'],
  ['const enquiryHref = `/products/${productSlug}/enquiry`;', 'const enquiryHref = "#contact";']
]);

