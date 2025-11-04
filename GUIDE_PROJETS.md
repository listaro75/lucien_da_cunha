# 📋 Guide de remplissage des pages de projets

## ✅ Pages créées (18 au total)

Toutes les pages de projets ont été créées avec une structure complète à remplir. Chaque page contient :

- **3 onglets** : Détail, Code, Images
- **Navigation** complète vers toutes les sections du site
- **Design terminal** cohérent avec le reste du portfolio
- **Emplacements marqués 🔧 À REMPLIR** pour faciliter l'édition

---

## 📁 Liste des projets

### ✅ Projets complets (déjà remplis)
1. **libft.html** - Bibliothèque C personnalisée
2. **minishell.html** - Shell Bash simplifié
3. **lampes-3d.html** - Conception de lampes imprimées en 3D
4. **systeme-telemetrique.html** - Drone de surveillance avec télémétrie

### 🔧 Projets à remplir

#### Projets École 42
5. **ft_printf.html** - Recréation de printf
   - Ajouter : formats supportés, exemples de code
   
6. **get-next-line.html** - Lecture de fichiers ligne par ligne
   - Ajouter : gestion des file descriptors, buffer management
   
7. **born2beroot.html** - Administration système Linux
   - Ajouter : configuration VirtualBox, scripts Bash, sécurité
   
8. **push-swap.html** - Algorithme de tri optimisé
   - Ajouter : complexité, stratégies de tri, visualisation
   
9. **so-long.html** - Jeu 2D avec MiniLibX
   - Ajouter : gameplay, graphismes, captures d'écran
   
10. **pipex.html** - Gestion de pipes Unix
    - Ajouter : redirections, processus, exemples
    
11. **philosophers.html** - Problème des philosophes (threading)
    - Ajouter : synchronisation, mutex, deadlock prevention

#### Projets Hardware/IoT
12. **inmoov.html** - Robot humanoïde open-source
    - Ajouter : composants, servo-moteurs, IA, photos du robot
    
13. **raspberry-pi-5.html** - Projets embarqués
    - Ajouter : projets réalisés, GPIO, capteurs
    
14. **airsamu-drone.html** - Drone médical
    - Ajouter : photos, système de largage, électronique
    
15. **station-meteo.html** - Station météo connectée
    - Ajouter : capteurs utilisés, dashboard web, données collectées

#### Projets Créatifs
16. **figurine.html** - Modélisation 3D
    - Ajouter : modèles créés, process Blender, impressions
    
17. **zonart.html** - Projet artistique
    - Ajouter : description, images, galerie
    
18. **portfolio.html** - Ce site web
    - Ajouter : technologies utilisées, design system, évolutions

---

## 🎨 Comment remplir une page

### 1. Onglet **Détail**

Chercher les marqueurs `🔧 À REMPLIR` et remplacer par :

```html
<h3>📋 Description détaillée</h3>
<p>Description complète du contexte, de la problématique, des solutions apportées...</p>

<h3>🎯 Objectifs</h3>
<ul>
    <li>Objectif 1 : Description précise</li>
    <li>Objectif 2 : Description précise</li>
    <li>Objectif 3 : Description précise</li>
</ul>

<h3>⚙️ Technologies utilisées</h3>
<div class="tech-stack">
    <span class="tech-tag">C</span>
    <span class="tech-tag">Python</span>
    <span class="tech-tag">Arduino</span>
    <!-- Ajouter autant que nécessaire -->
</div>

<h3>🔗 Liens</h3>
<div class="project-links">
    <a href="https://github.com/username/repo" target="_blank" class="project-link">
        <span class="terminal-prompt">$</span> git clone https://github.com/username/repo.git
    </a>
    <a href="https://demo.com" target="_blank" class="project-link">
        <span class="terminal-prompt">$</span> open demo
    </a>
</div>
```

### 2. Onglet **Code**

#### Structure de fichiers :

```html
<div class="file-tree">
    <pre class="code-block">
nom-projet/
├── src/
│   ├── main.c
│   ├── utils.c
│   └── parser.c
├── include/
│   └── header.h
├── Makefile
└── README.md
    </pre>
</div>
```

#### Exemples de code :

```html
<h3>💻 Fonction principale</h3>
<div class="code-section">
    <div class="code-header">
        <span class="file-name">main.c</span>
        <button class="copy-btn" onclick="copyCode('main-code')">Copy</button>
    </div>
    <pre class="code-block" id="main-code">
<code>#include "header.h"

int main(int argc, char **argv)
{
    // Ton code ici
    return (0);
}</code>
    </pre>
</div>
```

### 3. Onglet **Images**

#### Structure pour ajouter des images :

```html
<div class="images-grid">
    <div class="image-item">
        <img src="../assets/projects/nom-projet/image1.jpg" alt="Description" onclick="openImageModal(this)">
        <div class="image-caption">
            <span class="terminal-prompt">./</span>image1.jpg
        </div>
    </div>
    <div class="image-item">
        <img src="../assets/projects/nom-projet/image2.jpg" alt="Description" onclick="openImageModal(this)">
        <div class="image-caption">
            <span class="terminal-prompt">./</span>image2.jpg
        </div>
    </div>
    <!-- Répéter pour chaque image -->
</div>
```

**Important** : Créer le dossier correspondant dans `assets/projects/` :
```bash
mkdir -p assets/projects/nom-projet/
```

---

## 📝 Checklist par projet

Pour chaque projet à remplir :

- [ ] Mettre à jour la description dans le hero
- [ ] Compléter les métadonnées (date, technologies, statut)
- [ ] Remplir l'onglet Détail avec objectifs et description
- [ ] Ajouter la structure de fichiers dans l'onglet Code
- [ ] Inclure des extraits de code pertinents
- [ ] Créer le dossier dans `assets/projects/`
- [ ] Ajouter des images/captures d'écran
- [ ] Vérifier les liens GitHub
- [ ] Tester la navigation et les onglets

---

## 🎯 Priorités suggérées

### Priorité 1 : Projets École 42 (CV professionnel)
1. ft_printf
2. philosophers
3. push-swap
4. pipex

### Priorité 2 : Projets hardware (impact visuel)
1. inmoov (avec photos du robot)
2. airsamu-drone
3. raspberry-pi-5

### Priorité 3 : Projets créatifs (personnalité)
1. figurine
2. zonart

---

## 💡 Conseils

1. **Photos avant code** : Des images valent mieux que de longs paragraphes
2. **Code concis** : Montrer les parties intéressantes, pas tout le projet
3. **Résultats mesurables** : "Réduit le temps de 40%" plutôt que "Améliore les performances"
4. **Storytelling** : Problème → Solution → Résultat
5. **Cohérence** : Garder le même ton et niveau de détail entre projets

---

## 🚀 Prochaines étapes

1. Choisir 2-3 projets prioritaires
2. Rassembler photos/captures d'écran
3. Remplir les sections une par une
4. Tester sur mobile et desktop
5. Demander des retours

---

**Tous les fichiers sont prêts à être personnalisés !** 🎉

Les liens dans `index.html` sont déjà mis à jour et pointent vers les bonnes pages.
