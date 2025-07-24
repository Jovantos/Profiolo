// Smooth scroll for nav links
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      window.scrollTo({
        top: target.offsetTop - 70,
        behavior: 'smooth'
      });
    }
  });
});

// Portfolio items (replace with real projects as needed)
const portfolioData = [
  {
    title: 'Modern Business Website',
    desc: 'A sleek, responsive site for a local business with booking integration.',
    img: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80',
    link: '#'
  },
  {
    title: 'Data Dashboard',
    desc: 'Interactive dashboard for data visualization and analytics.',
    img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
    link: '#'
  },
  {
    title: 'Portfolio Redesign',
    desc: 'A personal portfolio with advanced animations and dark mode.',
    img: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80',
    link: '#'
  }
];

const portfolioGrid = document.querySelector('.portfolio-grid');
portfolioData.forEach(item => {
  const div = document.createElement('div');
  div.className = 'portfolio-item';
  div.innerHTML = `
    <img src="${item.img}" alt="${item.title}" />
    <div class="item-content">
      <h3>${item.title}</h3>
      <p>${item.desc}</p>
      <a href="${item.link}" target="_blank">View Project</a>
    </div>
  `;
  div.style.opacity = 0;
  portfolioGrid.appendChild(div);
  setTimeout(() => {
    div.style.transition = 'opacity 0.7s cubic-bezier(.23,1.01,.32,1)';
    div.style.opacity = 1;
  }, 200);
});

// Contact form feedback
const form = document.getElementById('contact-form');
const formMsg = document.getElementById('form-message');
if (form) {
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    formMsg.textContent = 'Thank you for reaching out! I will get back to you soon.';
    form.reset();
    setTimeout(() => {
      formMsg.textContent = '';
    }, 5000);
  });
} 