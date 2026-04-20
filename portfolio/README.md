# Kiran Bajirao Mane — Portfolio Website

A professional, industry-ready personal portfolio for an AI/ML/Deep Learning engineer.

## 📁 Project Structure

```
portfolio/
├── index.html          ← Main HTML (all sections)
├── css/
│   └── style.css       ← Full stylesheet (CSS variables, responsive)
├── js/
│   └── main.js         ← Interactions, animations, scroll effects
└── README.md
```

## ✏️ How to Customize

### Personal Info
Edit `index.html` and replace:
- `kiran@example.com` → your real email
- `linkedin.com/in/kiranmane` → your LinkedIn
- `github.com/kiranmane` → your GitHub
- All placeholder numbers (Years Experience, Projects, Publications)

### Add Your Photo
Replace the avatar placeholder in the Hero section:
```html
<!-- Find .hero__avatar div and replace with: -->
<img src="assets/photo.jpg" alt="Kiran Bajirao Mane" />
```

### Projects, Experience, Education
Each card/item in `index.html` is self-contained — just copy/paste/edit the blocks.

### Contact Form (Real Submissions)
Replace the `setTimeout` simulation in `js/main.js` with:

**Option A — Formspree (free, no backend):**
```html
<form action="https://formspree.io/f/YOUR_ID" method="POST">
```

**Option B — EmailJS:**
```js
emailjs.send('service_id', 'template_id', { name, email, message });
```

## 🚀 Deployment

### GitHub Pages (Free)
1. Push to GitHub: `git push origin main`
2. Go to repo Settings → Pages → Deploy from `main` branch
3. Live at: `https://yourusername.github.io/portfolio`

### Netlify (Free, Recommended)
1. Drag & drop the `portfolio/` folder at [netlify.com/drop](https://netlify.com/drop)
2. Get instant URL. Connect domain later.

### Vercel (Free)
```bash
npx vercel --prod
```

### Custom Domain
Point your domain's DNS A record to your host's IP after deployment.

## 🎨 Theming

All colors are in CSS variables at the top of `css/style.css`:
```css
:root {
  --clr-accent:      #1A3A2A;   /* Primary green — change to your brand */
  --clr-gold:        #B8960C;   /* Accent gold */
  --clr-bg:          #F7F5F0;   /* Background */
}
```

## 📋 Sections Included

- ✅ Hero (name, tagline, stats, availability badge)
- ✅ About (bio, personal details card)
- ✅ Skills (progress bars + tech tags, 4 categories)
- ✅ Experience (timeline with 3 roles)
- ✅ Projects (6 cards with filter by category)
- ✅ Education (4 cards: degree + certifications)
- ✅ Achievements (6 cards with hover animation)
- ✅ Contact (info + form)
- ✅ Footer

---
Built for Kiran Bajirao Mane · Mumbai, India 🇮🇳
