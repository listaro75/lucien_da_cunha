// ===== Loader avec animation "HELLO WORLD !!" =====
const loader = document.getElementById('loader');
const loaderText = document.getElementById('loaderText');
const text = "HELLO WORLD !!";
let index = 0;

function typeWriter() {
    if (index < text.length) {
        loaderText.textContent += text.charAt(index);
        index++;
        setTimeout(typeWriter, 150); // 150ms entre chaque lettre
    } else {
        // Une fois le texte terminé, attendre 500ms puis masquer le loader
        setTimeout(() => {
            loader.classList.add('hidden');
            // Supprimer le loader du DOM après la transition
            setTimeout(() => {
                loader.remove();
            }, 500);
        }, 500);
    }
}

function hideLoaderImmediately() {
    // Masquer immédiatement le loader sans animation
    if (loader) {
        loader.style.display = 'none';
        loader.remove();
    }
}

// Vérifier si c'est la première visite de la session
function isFirstVisit() {
    return !sessionStorage.getItem('hasVisited');
}

// Marquer que l'utilisateur a visité le site
function markAsVisited() {
    sessionStorage.setItem('hasVisited', 'true');
}

// Démarrer l'animation au chargement de la page seulement si c'est la première visite
window.addEventListener('load', () => {
    if (isFirstVisit()) {
        // Première visite : animation "Hello World"
        setTimeout(typeWriter, 300);
        markAsVisited();
    } else {
        // Retour sur le site : masquer immédiatement le loader
        hideLoaderImmediately();
    }
});

// ===== Menu Hamburger =====
const hamburger = document.getElementById('hamburger');
const navContainer = document.getElementById('navContainer');
const navLinks = document.querySelectorAll('.nav-link');
const header = document.querySelector('header');

// Effet de scroll sur le header
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

if (hamburger && navContainer) {
    // Toggle menu
    hamburger.addEventListener('click', (e) => {
        e.stopPropagation();
        hamburger.classList.toggle('active');
        navContainer.classList.toggle('active');
        document.body.classList.toggle('menu-open');
    });

    // Fermer le menu quand on clique sur un lien
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navContainer.classList.remove('active');
            document.body.classList.remove('menu-open');
        });
    });

    // Fermer le menu quand on clique en dehors
    document.addEventListener('click', (e) => {
        if (!navContainer.contains(e.target) && !hamburger.contains(e.target)) {
            hamburger.classList.remove('active');
            navContainer.classList.remove('active');
            document.body.classList.remove('menu-open');
        }
    });

    // Empêcher la propagation du clic dans le menu
    navContainer.addEventListener('click', (e) => {
        e.stopPropagation();
    });
}

// ===== Effet de lumière sur le logo =====
const logo = document.getElementById('logo');

if (logo) {
    logo.addEventListener('mousemove', (e) => {
        const rect = logo.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        
        logo.style.setProperty('--mouse-x', `${x}%`);
        logo.style.setProperty('--mouse-y', `${y}%`);
    });
    
    logo.addEventListener('mouseleave', () => {
        logo.style.setProperty('--mouse-x', '50%');
        logo.style.setProperty('--mouse-y', '50%');
    });
}

// ===== Effet de lumière sur les liens de navigation =====
// Utilisation de la variable navLinks déjà déclarée plus haut

navLinks.forEach(link => {
    // Effet de lumière au hover
    link.addEventListener('mousemove', (e) => {
        const rect = link.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        
        link.style.setProperty('--mouse-x', `${x}%`);
        link.style.setProperty('--mouse-y', `${y}%`);
    });
    
    link.addEventListener('mouseleave', () => {
        link.style.setProperty('--mouse-x', '50%');
        link.style.setProperty('--mouse-y', '50%');
    });
});

// ===== Effet de lumière sur le bouton CV =====
const btnCV = document.querySelector('.btn-cv');
if (btnCV) {
    btnCV.addEventListener('mousemove', (e) => {
        const rect = btnCV.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        
        btnCV.style.setProperty('--mouse-x', `${x}%`);
        btnCV.style.setProperty('--mouse-y', `${y}%`);
    });
    
    btnCV.addEventListener('mouseleave', () => {
        btnCV.style.setProperty('--mouse-x', '50%');
        btnCV.style.setProperty('--mouse-y', '50%');
    });
}

// ===== Effet de lumière sur les boutons de langue =====
const langBtns = document.querySelectorAll('.lang-btn');
langBtns.forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        
        btn.style.setProperty('--mouse-x', `${x}%`);
        btn.style.setProperty('--mouse-y', `${y}%`);
    });
    
    btn.addEventListener('mouseleave', () => {
        btn.style.setProperty('--mouse-x', '50%');
        btn.style.setProperty('--mouse-y', '50%');
    });
});

// ===== Bouton Mode Confort (Soft Mode) =====
const colorModeBtn = document.getElementById('colorModeBtn');
if (colorModeBtn) {
    // Charger la préférence depuis le localStorage
    const savedMode = localStorage.getItem('colorMode');
    if (savedMode === 'soft') {
        document.body.classList.add('soft-mode');
    }

    colorModeBtn.addEventListener('click', () => {
        document.body.classList.toggle('soft-mode');
        
        // Sauvegarder la préférence
        if (document.body.classList.contains('soft-mode')) {
            localStorage.setItem('colorMode', 'soft');
        } else {
            localStorage.setItem('colorMode', 'normal');
        }
    });
}

// ===== Changement de langue =====
let currentLang = 'en';

langBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const lang = btn.getAttribute('data-lang');
        if (lang !== currentLang) {
            currentLang = lang;
            
            // Mettre à jour l'état actif des boutons
            langBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Mettre à jour la langue du document
            document.documentElement.lang = lang;
            
            // Traduire tous les éléments avec data-fr et data-en
            const elements = document.querySelectorAll('[data-fr][data-en]');
            elements.forEach(el => {
                const translation = el.getAttribute(`data-${lang}`);
                if (translation) {
                    // Pour les titres avec highlight
                    if (el.querySelector('.highlight')) {
                        const highlightText = el.querySelector('.highlight').textContent;
                        el.innerHTML = `${translation} <span class="highlight">${highlightText}</span>`;
                    } else {
                        el.textContent = translation;
                    }
                }
            });
        }
    });
});

// ===== Initialiser la langue anglaise au chargement =====
document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('[data-fr][data-en]');
    elements.forEach(el => {
        const translation = el.getAttribute('data-en');
        if (translation) {
            if (el.querySelector('.highlight')) {
                const highlightText = el.querySelector('.highlight').textContent;
                el.innerHTML = `${translation} <span class="highlight">${highlightText}</span>`;
            } else {
                el.textContent = translation;
            }
        }
    });
    
    // Mettre à jour les placeholders
    const inputs = document.querySelectorAll('[data-en-placeholder]');
    inputs.forEach(input => {
        const placeholder = input.getAttribute('data-en-placeholder');
        if (placeholder) {
            input.placeholder = placeholder;
        }
    });
});

// ===== Smooth Scrolling =====
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

// ===== Navigation Active State =====
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.section, .hero');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 100)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ===== Animation au scroll =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observer les sections
document.querySelectorAll('.section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

console.log('Portfolio de Lucien Da Cunha - Chargé avec succès! 🚀');

// ===== Animation des barres de compétences =====
const animateSkillBars = () => {
    const skillBars = document.querySelectorAll('.skill-bar');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                const percentage = bar.getAttribute('data-percentage');
                setTimeout(() => {
                    bar.style.width = percentage + '%';
                }, 100);
                observer.unobserve(bar);
            }
        });
    }, { threshold: 0.5 });
    
    skillBars.forEach(bar => observer.observe(bar));
};

// Lancer l'animation au chargement
document.addEventListener('DOMContentLoaded', animateSkillBars);

// ===== Filtres de projets =====
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');
const seeMoreBtn = document.getElementById('seeMoreBtn');
let showingAll = false;

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const filterValue = button.getAttribute('data-filter');
        
        // Retirer la classe active de tous les boutons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        
        // Ajouter la classe active au bouton cliqué
        button.classList.add('active');
        
        // Réinitialiser l'état "voir plus"
        showingAll = false;
        if (seeMoreBtn) {
            seeMoreBtn.setAttribute('data-fr', 'Voir plus');
            seeMoreBtn.setAttribute('data-en', 'See more');
            seeMoreBtn.textContent = document.documentElement.lang === 'en' ? 'See more' : 'Voir plus';
        }
        
        // Filtrer les projets
        let visibleCount = 0;
        projectCards.forEach(card => {
            const cardCategory = card.getAttribute('data-category');
            
            if (filterValue === 'all' || cardCategory === filterValue) {
                visibleCount++;
                if (visibleCount <= 6) {
                    card.style.display = 'block';
                    card.classList.remove('project-hidden');
                } else {
                    card.style.display = 'none';
                    card.classList.add('project-hidden');
                }
            } else {
                card.style.display = 'none';
            }
        });
        
        // Afficher/cacher le bouton "Voir plus"
        if (seeMoreBtn) {
            const hiddenProjects = Array.from(projectCards).filter(card => {
                const cardCategory = card.getAttribute('data-category');
                return (filterValue === 'all' || cardCategory === filterValue) && card.classList.contains('project-hidden');
            });
            
            if (hiddenProjects.length > 0) {
                seeMoreBtn.classList.remove('hidden');
            } else {
                seeMoreBtn.classList.add('hidden');
            }
        }
    });
});

// Bouton "Voir plus"
if (seeMoreBtn) {
    seeMoreBtn.addEventListener('click', () => {
        const activeFilter = document.querySelector('.filter-btn.active');
        const filterValue = activeFilter ? activeFilter.getAttribute('data-filter') : 'all';
        
        if (!showingAll) {
            // Afficher tous les projets
            projectCards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');
                if (filterValue === 'all' || cardCategory === filterValue) {
                    card.style.display = 'block';
                    card.classList.remove('project-hidden');
                }
            });
            showingAll = true;
            seeMoreBtn.setAttribute('data-fr', 'Voir moins');
            seeMoreBtn.setAttribute('data-en', 'See less');
            seeMoreBtn.textContent = document.documentElement.lang === 'en' ? 'See less' : 'Voir moins';
        } else {
            // Cacher les projets au-delà du 6ème
            let visibleCount = 0;
            projectCards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');
                if (filterValue === 'all' || cardCategory === filterValue) {
                    visibleCount++;
                    if (visibleCount > 6) {
                        card.style.display = 'none';
                        card.classList.add('project-hidden');
                    }
                }
            });
            showingAll = false;
            seeMoreBtn.setAttribute('data-fr', 'Voir plus');
            seeMoreBtn.setAttribute('data-en', 'See more');
            seeMoreBtn.textContent = document.documentElement.lang === 'en' ? 'See more' : 'Voir plus';
            
            // Scroll vers les projets
            document.getElementById('projets').scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
}

// ===== Fonctionnalités Pages Projet =====

// Gestion des onglets
document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.getAttribute('data-tab');
            
            // Retirer la classe active de tous les boutons et contenus
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Ajouter la classe active au bouton cliqué et au contenu correspondant
            button.classList.add('active');
            const targetContent = document.getElementById(targetTab);
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });
});

// Gestion de la modal d'images
function openImageModal(img) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const modalCaption = document.querySelector('.modal-caption');
    
    if (modal && modalImg) {
        modal.style.display = 'block';
        modalImg.src = img.src;
        modalImg.alt = img.alt;
        if (modalCaption) {
            modalCaption.textContent = img.alt;
        }
        
        // Empêcher le scroll du body
        document.body.style.overflow = 'hidden';
    }
}

function closeImageModal() {
    const modal = document.getElementById('imageModal');
    if (modal) {
        modal.style.display = 'none';
        // Rétablir le scroll du body
        document.body.style.overflow = '';
    }
}

// Fermer la modal avec la touche Escape
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeImageModal();
    }
});

// Fonction pour copier le code
function copyCode(codeId) {
    const codeElement = document.getElementById(codeId);
    if (codeElement) {
        const text = codeElement.textContent;
        navigator.clipboard.writeText(text).then(() => {
            // Feedback visuel
            const copyBtn = event.target;
            const originalText = copyBtn.textContent;
            copyBtn.textContent = 'Copied!';
            copyBtn.style.background = 'rgba(0, 255, 0, 0.2)';
            
            setTimeout(() => {
                copyBtn.textContent = originalText;
                copyBtn.style.background = '';
            }, 2000);
        }).catch(err => {
            console.error('Erreur lors de la copie:', err);
        });
    }
}

// ===== Explorateur de fichiers =====
document.addEventListener('DOMContentLoaded', function() {
    console.log('Script chargé, recherche des éléments de l\'explorateur...');
    
    const fileItems = document.querySelectorAll('.file-item.file');
    const fileContent = document.getElementById('fileContent');
    const currentFileSpan = document.querySelector('.current-file');
    const copyBtn = document.getElementById('copyCurrentFile');
    
    console.log('Éléments trouvés:', {
        fileItems: fileItems.length,
        fileContent: !!fileContent,
        currentFileSpan: !!currentFileSpan,
        copyBtn: !!copyBtn
    });
    
    if (fileItems.length === 0) {
        console.log('Aucun fichier trouvé dans l\'explorateur');
        return;
    }
    
    fileItems.forEach((item, index) => {
        console.log(`Configuration du fichier ${index}:`, item.getAttribute('data-file'));
        
        item.addEventListener('click', () => {
            console.log('Fichier cliqué:', item.getAttribute('data-file'));
            
            // Retirer la classe active de tous les fichiers
            fileItems.forEach(file => file.classList.remove('active'));
            
            // Ajouter la classe active au fichier cliqué
            item.classList.add('active');
            
            // Récupérer les informations du fichier
            const fileId = item.getAttribute('data-file');
            const filePath = item.getAttribute('data-path');
            const fileName = item.querySelector('.file-name').textContent;
            
            console.log('Informations du fichier:', { fileId, filePath, fileName });
            
            // Mettre à jour l'en-tête
            if (currentFileSpan) {
                currentFileSpan.textContent = `$ cat ${filePath}`;
            }
            
            // Récupérer le contenu du fichier
            const fileSource = document.getElementById(`file-${fileId}`);
            console.log('Source du fichier trouvée:', !!fileSource);
            
            if (fileSource && fileContent) {
                // Afficher le contenu du fichier
                fileContent.innerHTML = `
                    <div class="file-display">
                        <div class="file-header-display">
                            <span class="terminal-prompt">lucien@portfolio:~/projects</span>$ cat ${filePath}
                        </div>
                        <pre class="code-display">${fileSource.innerHTML}</pre>
                    </div>
                `;
                
                // Afficher le bouton de copie
                if (copyBtn) {
                    copyBtn.style.display = 'block';
                    copyBtn.onclick = () => copyFileContent(fileSource);
                }
            } else {
                // Fichier non trouvé
                console.log('Fichier non trouvé:', `file-${fileId}`);
                if (fileContent) {
                    fileContent.innerHTML = `
                        <div class="file-placeholder">
                            <p>$ cat ${filePath}</p>
                            <p style="color: #ff4444;">Fichier non trouvé ou contenu non disponible</p>
                        </div>
                    `;
                }
                if (copyBtn) {
                    copyBtn.style.display = 'none';
                }
            }
        });
    });
});

// Fonction pour copier le contenu du fichier affiché
function copyFileContent(sourceElement) {
    const text = sourceElement.textContent;
    navigator.clipboard.writeText(text).then(() => {
        const copyBtn = document.getElementById('copyCurrentFile');
        const originalText = copyBtn.textContent;
        copyBtn.textContent = 'Copied!';
        copyBtn.style.background = 'rgba(0, 255, 0, 0.2)';
        
        setTimeout(() => {
            copyBtn.textContent = originalText;
            copyBtn.style.background = '';
        }, 2000);
    }).catch(err => {
        console.error('Erreur lors de la copie:', err);
    });
}

// Effet de frappe pour les éléments de code
function typeCodeEffect() {
    const codeBlocks = document.querySelectorAll('.code-block code');
    
    codeBlocks.forEach(block => {
        const text = block.textContent;
        block.textContent = '';
        let i = 0;
        
        function typeChar() {
            if (i < text.length) {
                block.textContent += text.charAt(i);
                i++;
                setTimeout(typeChar, 10); // Vitesse de frappe
            }
        }
        
        // Observer pour déclencher l'animation quand l'élément est visible
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(typeChar, 500); // Délai avant de commencer
                    observer.unobserve(entry.target);
                }
            });
        });
        
        observer.observe(block);
    });
}
