/* ============================================================
   KIRAN BAJIRAO MANE — PORTFOLIO JS
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ── NAVBAR SCROLL ──────────────────────────────────────────
  const navbar = document.getElementById('navbar');
  const backToTop = document.getElementById('backToTop');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
      backToTop.classList.add('visible');
    } else {
      navbar.classList.remove('scrolled');
      backToTop.classList.remove('visible');
    }
  }, { passive: true });

  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // ── HAMBURGER MENU ─────────────────────────────────────────
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navLinks.classList.toggle('open');
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      navLinks.classList.remove('open');
    });
  });

  // ── REVEAL ON SCROLL ───────────────────────────────────────
  const revealEls = document.querySelectorAll('.reveal, .project-card, .skill-category, .edu-card, .achievement-card');

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, idx) => {
      if (entry.isIntersecting) {
        // Stagger children of same parent
        const siblings = entry.target.parentElement.querySelectorAll('.project-card, .skill-category, .edu-card, .achievement-card');
        let delay = 0;
        siblings.forEach((sib, i) => {
          if (sib === entry.target) delay = i * 80;
        });
        setTimeout(() => {
          entry.target.classList.add('visible');
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }, delay);
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  revealEls.forEach(el => {
    if (!el.classList.contains('reveal')) {
      el.style.opacity = '0';
      el.style.transform = 'translateY(24px)';
      el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    }
    revealObserver.observe(el);
  });

  // ── SKILL BAR ANIMATION ────────────────────────────────────
  const skillBars = document.querySelectorAll('.skill-bar__fill');

  const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bar = entry.target;
        const target = bar.dataset.width;
        setTimeout(() => {
          bar.style.width = target + '%';
        }, 200);
        skillObserver.unobserve(bar);
      }
    });
  }, { threshold: 0.3 });

  skillBars.forEach(bar => skillObserver.observe(bar));

  // ── COUNTER ANIMATION ──────────────────────────────────────
  const counters = document.querySelectorAll('.stat__num[data-count]');

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.dataset.count);
        let start = 0;
        const duration = 1800;
        const step = (timestamp) => {
          if (!start) start = timestamp;
          const progress = Math.min((timestamp - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          el.textContent = Math.floor(eased * target);
          if (progress < 1) requestAnimationFrame(step);
          else el.textContent = target;
        };
        requestAnimationFrame(step);
        counterObserver.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(c => counterObserver.observe(c));

  // ── PROJECT FILTER ─────────────────────────────────────────
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      projectCards.forEach(card => {
        const cat = card.dataset.category;
        if (filter === 'all' || cat === filter) {
          card.classList.remove('hidden');
          card.style.animation = 'fadeIn 0.4s ease forwards';
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });


  // ── ACTIVE NAV LINK ON SCROLL ──────────────────────────────
  const sections = document.querySelectorAll('section[id]');
  const navLinkEls = document.querySelectorAll('.nav__links a');

  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinkEls.forEach(link => {
          link.classList.toggle('active-link', link.getAttribute('href') === `#${id}`);
        });
      }
    });
  }, { threshold: 0.4 });

  sections.forEach(s => navObserver.observe(s));

  // ── SMOOTH SCROLL FOR ALL ANCHOR LINKS ─────────────────────
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = target.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top: offset, behavior: 'smooth' });
      }
    });
  });

  // ── HERO NAME LETTER ANIMATION ─────────────────────────────
  const heroName = document.querySelector('.hero__name');
  if (heroName) {
    heroName.style.opacity = '0';
    heroName.style.transform = 'translateY(30px)';
    setTimeout(() => {
      heroName.style.transition = 'opacity 0.9s ease, transform 0.9s ease';
      heroName.style.opacity = '1';
      heroName.style.transform = 'translateY(0)';
    }, 300);
  }

  // ── TYPING TAGLINE ─────────────────────────────────────────
  const tagline = document.querySelector('.hero__tagline');
  if (tagline) {
    const text = tagline.innerHTML;
    tagline.style.opacity = '0';
    setTimeout(() => {
      tagline.style.transition = 'opacity 0.7s ease';
      tagline.style.opacity = '1';
    }, 600);
  }

  // ── IMAGE GALLERY MODAL ────────────────────────────────────
  const galleryModal = document.getElementById('galleryModal');
  const modalImg = document.getElementById('modalImage');
  const prevBtn = document.getElementById('prevImage');
  const nextBtn = document.getElementById('nextImage');
  const closeBtns = document.querySelectorAll('[data-close-modal]');
  const currIdxSpan = document.getElementById('currentImageIdx');
  const totalIdxSpan = document.getElementById('totalImages');

  // Placeholder image gallery config
  const galleries = {
    "1": ["images/SheInspires.jpeg"],
    "2": ["images/Mastek.jpeg"],
    "3": ["images/WWT.jpg"],
    "4": ["images/stage-hp.JPG", "images/intro-hp.JPG", "images/grp-hp.JPG", "images/arushi-hp-grp.JPG"]
  };

  let currentGallery = [];
  let currentIdx = 0;

  function updateModalImage() {
    modalImg.src = currentGallery[currentIdx];
    currIdxSpan.textContent = currentIdx + 1;
    totalIdxSpan.textContent = currentGallery.length;

    prevBtn.style.display = (currentGallery.length > 1) ? 'flex' : 'none';
    nextBtn.style.display = (currentGallery.length > 1) ? 'flex' : 'none';
  }

  function openModal(galleryId) {
    if (!galleries[galleryId] || galleries[galleryId].length === 0) return;
    currentGallery = galleries[galleryId];
    currentIdx = 0;
    updateModalImage();
    galleryModal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    if (galleryModal) {
      galleryModal.classList.remove('open');
      document.body.style.overflow = '';
    }
  }

  if (galleryModal) {
    document.querySelectorAll('.clickable-card').forEach(card => {
      card.addEventListener('click', () => {
        const gId = card.getAttribute('data-gallery');
        openModal(gId);
      });
    });

    closeBtns.forEach(btn => btn.addEventListener('click', closeModal));

    nextBtn.addEventListener('click', () => {
      currentIdx = (currentIdx + 1) % currentGallery.length;
      updateModalImage();
    });

    prevBtn.addEventListener('click', () => {
      currentIdx = (currentIdx - 1 + currentGallery.length) % currentGallery.length;
      updateModalImage();
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && galleryModal.classList.contains('open')) {
        closeModal();
      }
      if (e.key === 'ArrowRight' && galleryModal.classList.contains('open')) {
        nextBtn.click();
      }
      if (e.key === 'ArrowLeft' && galleryModal.classList.contains('open')) {
        prevBtn.click();
      }
    });
  }

  // ── EMAILJS CONTACT FORM SUBMISSION ────────────────────────
  const contactForm = document.getElementById('contactForm');
  const formNote = document.getElementById('formNote');

  if (contactForm && typeof emailjs !== 'undefined') {
    // IMPORTANT: Replace 'YOUR_PUBLIC_KEY' with your actual public key from the EmailJS dashboard
    emailjs.init("DJltvMeZPBeiRYob0");

    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      submitBtn.textContent = 'Sending...';
      submitBtn.disabled = true;

      const serviceID = 'service_zyfxmvd';
      const templateID = 'template_dskmbmc';

      const templateParams = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        user_message: document.getElementById('message').value
      };

      emailjs.send(serviceID, templateID, templateParams)
        .then(() => {
          submitBtn.textContent = 'Sent Successfully!';
          formNote.textContent = 'Thank you! Your message has been sent.';
          formNote.style.color = '#10b981'; // Green success color
          contactForm.reset();

          setTimeout(() => {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
            formNote.textContent = '';
          }, 4000);
        }, (err) => {
          submitBtn.textContent = originalText;
          submitBtn.disabled = false;
          formNote.textContent = 'Oops! Something went wrong. Check console for details.';
          formNote.style.color = '#ef4444'; // Red error color
          console.error('EmailJS Error:', err);
        });
    });
  }

  console.log('%cKiran Bajirao Mane — Portfolio', 'color: #06b6d4; font-size: 18px; font-weight: bold;');
  console.log('%cBuilt with precision. AI/ML Engineer.', 'color: #a855f7; font-size: 12px;');
});

// ── FADE-IN KEYFRAMES (injected) ───────────────────────────
const style = document.createElement('style');
style.textContent = `
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(12px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .nav__links a.active-link {
    color: var(--clr-accent) !important;
  }
  .nav__links a.active-link::after {
    right: 0 !important;
  }
`;
document.head.appendChild(style);
