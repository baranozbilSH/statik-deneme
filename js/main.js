const guncelProjeler = [
{
  title: "Gülten Konutları",
  desc: "Modern mimarisi ve merkezi konumuyla öne çıkan Gülten Konutları, konforlu yaşam alanları sunuyor.",
  img: "front/images/images (1).jpg",
  location: "Antalya, Lara"
},
{
  title: "Harika Rezidans",
  desc: "Şehir merkezinde, çağdaş tasarım ve üst düzey konforun buluştuğu rezidans projesi.",
  img: "front/images/images (2).jpg",
  location: "Antalya, Konyaaltı"
},
{
  title: "Şahane Plaza",
  desc: "İş dünyası için prestijli ve fonksiyonel ofis alanları sunan modern plaza.",
  img: "front/images/images (3).jpg",
  location: "Antalya, Muratpaşa"
}
];
const guncelProjeImg = document.getElementById('guncel-proje-img');
const guncelProjeTitle = document.getElementById('guncel-proje-title');
const guncelProjeDesc = document.getElementById('guncel-proje-desc');
const guncelProjeLocation = document.querySelector('.guncel-proje-location');
const guncelProjeTabs = document.querySelectorAll('.guncel-proje-tab');
guncelProjeTabs.forEach((tab, idx) => {
  tab.addEventListener('click', () => {
    guncelProjeTabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    const proje = guncelProjeler[idx];
    guncelProjeImg.src = proje.img;
    guncelProjeImg.alt = proje.title;
    guncelProjeTitle.textContent = proje.title;
    guncelProjeDesc.textContent = proje.desc;
    guncelProjeLocation.innerHTML = `<span class='location-emoji'><svg width='16' height='16' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M8 15s5-4.5 5-8.5A5 5 0 0 0 3 6.5C3 10.5 8 15 8 15Z' stroke='#bfa76a' stroke-width='1.5'/></svg></span> ${proje.location}`;
  });
});
function getStatusText(status) {
    const statusMap = {
        'completed': 'Tamamlandı',
        'in_progress': 'Devam Ediyor',
        'planning': 'Planlama',
        'active': 'Aktif'
    };
    return statusMap[status] || 'Proje';
}
function trackPagePerformance() {
    window.addEventListener('load', () => {
        const perfData = performance.getEntriesByType('navigation')[0];
    });
}
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}
function initPageAnimations() {
    window.addEventListener('load', () => {
        const elements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .scale-in');
        elements.forEach((el, index) => {
            setTimeout(() => {
                el.classList.add('active');
            }, index * 100);
        });
    });
}
function initMobileMenu() {
    const toggle = document.getElementById('navbarToggle');
    const menu = document.getElementById('navbarMenu');
    if(toggle && menu) {
        toggle.addEventListener('click', function() {
            menu.classList.toggle('active');
            const icon = toggle.querySelector('span');
            if (menu.classList.contains('active')) {
                icon.innerHTML = '✕';
            } else {
                icon.innerHTML = '☰';
                menu.querySelectorAll('.nav-link').forEach(link => {
                    link.style.removeProperty('background');
                    link.style.removeProperty('border-radius');
                    link.style.removeProperty('padding-left');
                    link.style.removeProperty('padding-right');
                });
            }
        });
        
        menu.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', function() {
                menu.classList.remove('active');
                toggle.querySelector('span').innerHTML = '☰';
                menu.querySelectorAll('.nav-link').forEach(link => {
                    link.style.removeProperty('background');
                    link.style.removeProperty('border-radius');
                    link.style.removeProperty('padding-left');
                    link.style.removeProperty('padding-right');
                });
            });
        });
        
        document.addEventListener('click', function(event) {
            if (!menu.contains(event.target) && !toggle.contains(event.target)) {
                menu.classList.remove('active');
                toggle.querySelector('span').innerHTML = '☰';
                menu.querySelectorAll('.nav-link').forEach(link => {
                    link.style.removeProperty('background');
                    link.style.removeProperty('border-radius');
                    link.style.removeProperty('padding-left');
                    link.style.removeProperty('padding-right');
                });
            }
        });
    }
}

function initContactCardEffects() {
    document.querySelectorAll('.contact-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}
function createProjectCard(project) {
    return `
        <a class="project-card-link" href="projelerimiz.html">
            <img src="${project.image}" alt="${project.title}" class="project-image" loading="lazy">
            <h3 class="project-title">${project.title}</h3>
        </a>
    `;
}
function createProjectCardForProjectsPage(project) {
    return `
        <a class="project-card-link" href="projelerimiz.html">
            <img src="${project.image}" alt="${project.title}" class="project-image" loading="lazy" style="width: 100%; height: 250px; object-fit: cover; border-radius: 12px;">
            <h3 class="project-title">${project.title}</h3>
        </a>
    `;
}
function loadFeaturedProjects() {
    const container = document.getElementById('featuredProjects');
    if (container) {
        container.innerHTML = '';
        const featuredProjects = PROJECTS_DATA.slice(0, 3);
        
        featuredProjects.forEach(project => {
            const projectCard = document.createElement('div');
            projectCard.className = 'project-card fade-in';
            projectCard.innerHTML = createProjectCard(project);
            container.appendChild(projectCard);
        });
    }
}
function loadAllProjects() {
    const container = document.getElementById('projectsGrid');
    if (container) {
        container.innerHTML = '';
        
        PROJECTS_DATA.forEach(project => {
            const projectCard = document.createElement('div');
            projectCard.className = 'project-card fade-in';
            projectCard.innerHTML = createProjectCardForProjectsPage(project);
            container.appendChild(projectCard);
        });
    }
}

function initCommonFunctions() {
    trackPagePerformance();
    initSmoothScroll();
    initPageAnimations();
    initMobileMenu();
    initContactCardEffects();
    initHomePageFeatures();
    checkCookieConsent();
}

document.addEventListener('DOMContentLoaded', () => {
    initCommonFunctions();
    
    if (document.getElementById('featuredProjects')) {
        loadFeaturedProjects();
    }
    
    if (document.getElementById('projectsGrid')) {
        loadAllProjects();
    }
});

let homeCurrentImageIndex = 0;

const homeImages = [
    'front/images/images (1).jpg',
    'front/images/images (2).jpg',
    'front/images/images (3).jpg',
    'front/images/images (4).jpg',
    'front/images/images (5).jpg',
    'front/images/images (6).jpg',
    'front/images/images (7).jpg',
    'front/images/images (8).jpg',
    'front/images/images (9).jpg',
    'front/images/images (10).jpg',
    'front/images/images (11).jpg',
    'front/images/images (12).jpg',
    'front/images/images (13).jpg',
    'front/images/images (14).jpg',
    'front/images/images (15).jpg'
];

function openHomeLightbox(index) {
    homeCurrentImageIndex = index;
    const modal = document.getElementById('homeLightboxModal');
    const image = document.getElementById('homeLightboxImage');
    const currentIndexSpan = document.getElementById('homeCurrentImageIndex');
    const totalImagesSpan = document.getElementById('homeTotalImages');
    
    if (modal && image && currentIndexSpan && totalImagesSpan) {
        image.src = homeImages[index];
        currentIndexSpan.textContent = index + 1;
        totalImagesSpan.textContent = homeImages.length;
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

function closeHomeLightbox() {
    const modal = document.getElementById('homeLightboxModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

function changeHomeImage(direction) {
    homeCurrentImageIndex = (homeCurrentImageIndex + direction + homeImages.length) % homeImages.length;
    const image = document.getElementById('homeLightboxImage');
    const currentIndexSpan = document.getElementById('homeCurrentImageIndex');
    
    if (image && currentIndexSpan) {
        image.src = homeImages[homeCurrentImageIndex];
        currentIndexSpan.textContent = homeCurrentImageIndex + 1;
    }
}



let currentSlide = 0;
let slideInterval;
function showSlide(slideIndex) {
    const slides = document.querySelectorAll('.premium-proje-slide');
    const dots = document.querySelectorAll('.dot');
    
    if (slides.length === 0) return;
    
    // Tüm slide'ları gizle
    slides.forEach(slide => {
        slide.classList.remove('active');
    });
    
    // Dots güncelle
    dots.forEach(dot => {
        dot.classList.remove('active');
    });
    
    // Hedef slide'ı göster
    if (slides[slideIndex]) {
        slides[slideIndex].classList.add('active');
    }
    if (dots[slideIndex]) {
        dots[slideIndex].classList.add('active');
    }
    
    currentSlide = slideIndex;
}
function nextSlide() {
    const slides = document.querySelectorAll('.premium-proje-slide');
    const totalSlides = slides.length;
    if (totalSlides === 0) return;
    
    const next = (currentSlide + 1) % totalSlides;
    showSlide(next);
}
function startAutoSlide() {
    slideInterval = setInterval(nextSlide, 3000); // 3 saniye
}
function stopAutoSlide() {
    clearInterval(slideInterval);
}

function setCookie(name, value, days) {
    const expires = new Date();
    expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
    document.cookie = name + "=" + value + ";expires=" + expires.toUTCString() + ";path=/";
}

function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function showCookiePopup() {
    const popup = document.getElementById('cookiePopup');
    if (popup) {
        popup.style.display = 'block';
    }
}

function closeCookiePopup() {
    const popup = document.getElementById('cookiePopup');
    if (popup) {
        popup.style.display = 'none';
    }
}

function acceptSelectedCookies() {
    const analytics = document.getElementById('analyticsCookies').checked;
    const marketing = document.getElementById('marketingCookies').checked;
    
    setCookie('cookie_preferences', JSON.stringify({
        necessary: true,
        analytics: analytics,
        marketing: marketing,
        timestamp: new Date().getTime()
    }), 365);
    
    closeCookiePopup();
    
    if (analytics) {
        console.log('Analytics çerezleri aktifleştirildi');
    }
    
    if (marketing) {
        console.log('Marketing çerezleri aktifleştirildi');
    }
}

function rejectAllCookies() {
    setCookie('cookie_preferences', JSON.stringify({
        necessary: true,
        analytics: false,
        marketing: false,
        timestamp: new Date().getTime()
    }), 365);
    
    closeCookiePopup();
}

function checkCookieConsent() {
    const preferences = getCookie('cookie_preferences');
    
    if (!preferences) {
        setTimeout(() => {
            showCookiePopup();
        }, 2000);
    } else {
        try {
            const prefs = JSON.parse(preferences);
            const lastConsent = new Date(prefs.timestamp);
            const now = new Date();
            const daysSinceConsent = (now - lastConsent) / (1000 * 60 * 60 * 24);
            
            if (daysSinceConsent > 30) {
                setTimeout(() => {
                    showCookiePopup();
                }, 2000);
            }
        } catch (e) {
            setTimeout(() => {
                showCookiePopup();
            }, 2000);
        }
    }
}

function initHomePageFeatures() {
    const homeLightboxModal = document.getElementById('homeLightboxModal');
    if (homeLightboxModal) {
        homeLightboxModal.addEventListener('click', function(e) {
            if (e.target === this) {
                closeHomeLightbox();
            }
        });
    }
    
    document.addEventListener('keydown', function(e) {
        const modal = document.getElementById('homeLightboxModal');
        if (modal && modal.style.display === 'block') {
            if (e.key === 'Escape') {
                closeHomeLightbox();
            } else if (e.key === 'ArrowLeft') {
                changeHomeImage(-1);
            } else if (e.key === 'ArrowRight') {
                changeHomeImage(1);
            }
        }
    });
    
    const slides = document.querySelectorAll('.premium-proje-slide');
    const dots = document.querySelectorAll('.dot');
    const slider = document.getElementById('featuredProjectsSlider');
    
    if (slides.length > 0) {
        showSlide(0);
        startAutoSlide();
        
        dots.forEach((dot, index) => {
            dot.addEventListener('click', function() {
                stopAutoSlide();
                showSlide(index);
                startAutoSlide();
            });
        });
        
        if (slider) {
            slider.addEventListener('mouseenter', stopAutoSlide);
            slider.addEventListener('mouseleave', startAutoSlide);
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
  const slides = document.querySelectorAll('.premium-proje-slide');
  const tabs = document.querySelectorAll('.premium-proje-tab');
  
  if (slides.length && tabs.length) {
    tabs.forEach((tab, idx) => {
      tab.addEventListener('click', function() {
        tabs.forEach(t => t.classList.remove('active'));
        slides.forEach(s => s.classList.remove('active'));
        
        tab.classList.add('active');
        slides[idx].classList.add('active');
      });
    });
  }
});

document.addEventListener('DOMContentLoaded', function() {
  if (document.querySelector('.premium-projeler-slider.swiper')) {
    new Swiper('.premium-projeler-slider.swiper', {
      loop: true,
      speed: 800,
      effect: 'fade',
      fadeEffect: { crossFade: true },
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }
});

document.addEventListener('DOMContentLoaded', function() {
  if (window.Fancybox) {
    Fancybox.bind('[data-fancybox="premium-projeler"]', {
      animated: true,
      showClass: "f-zoomInUp",
      hideClass: "f-zoomOutDown",
      dragToClose: true,
      closeButton: "top",
      Thumbs: false,
      Toolbar: {
        display: ["close"],
      },
    });
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const parallaxElements = document.querySelectorAll('.parallax-bg');
  
  window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    
    parallaxElements.forEach(element => {
      const speed = 0.5;
      const yPos = -(scrolled * speed);
      element.style.transform = `translateY(${yPos}px)`;
    });
  });

  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  const animatedElements = document.querySelectorAll('.scroll-fade-in, .scroll-slide-left, .scroll-slide-right, .scroll-zoom-in');
  animatedElements.forEach(el => observer.observe(el));

  const navbar = document.querySelector('.luxury-navbar');
  if (navbar) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 100) {
        navbar.classList.add('blur');
      } else {
        navbar.classList.remove('blur');
      }
    });
  }
});

function initMarquee() {
  const marqueeContainer = document.querySelector('.marquee-container');
  if (marqueeContainer) {
    const marqueeContent = marqueeContainer.querySelector('.marquee-content');
    if (marqueeContent) {
      const existingClones = marqueeContainer.querySelectorAll('.marquee-content:not(:first-child)');
      existingClones.forEach(clone => clone.remove());
      
      const clone = marqueeContent.cloneNode(true);
      marqueeContainer.appendChild(clone);
    }
  }
}

document.addEventListener('DOMContentLoaded', function() {
  const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
  
  smoothScrollLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      let targetElement = document.querySelector(targetId);
      
      if (!targetElement && targetId === '#projects') {
        targetElement = document.querySelector('.premium-projects-section');
      }
      
      if (!targetElement && targetId === '#about') {
        targetElement = document.querySelector('.about-hero-section');
      }
      
      if (targetElement) {
        const offsetTop = targetElement.offsetTop - 80;
        
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
});

window.addEventListener('load', function() {
  const loader = document.querySelector('.page-loader');
  if (loader) {
    loader.style.opacity = '0';
    setTimeout(() => {
      loader.style.display = 'none';
    }, 500);
  }
  
  initMarquee();
  
  const heroTitle = document.querySelector('.hero-title');
  const heroSubtitle = document.querySelector('.hero-subtitle');
  
  if (heroTitle) {
    heroTitle.style.animation = 'heroTitleFade 1.5s ease-out';
  }
  
  if (heroSubtitle) {
    heroSubtitle.style.animation = 'heroSubtitleFade 1.5s ease-out 0.3s both';
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const cards = document.querySelectorAll('.premium-card, .project-card');
  
  cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-10px) scale(1.02)';
      this.style.boxShadow = '0 20px 40px rgba(212, 175, 55, 0.3)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0) scale(1)';
      this.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
    });
  });
  
  const buttons = document.querySelectorAll('.premium-btn, .btn-primary');
  
  buttons.forEach(button => {
    button.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-2px) scale(1.05)';
    });
    
    button.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0) scale(1)';
    });
  });
}); 