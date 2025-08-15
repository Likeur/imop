# imop (Image Optimizer) CLI

Un outil en ligne de commande (CLI) simple et puissant pour optimiser vos images en vrac. Il vous permet de compresser et de convertir facilement plusieurs images à la fois, ce qui est idéal pour améliorer les performances de vos sites web ou de vos applications.

## Fonctionnalités

- Optimisation par lot : Optimisez toutes les images d'un dossier en une seule commande.

- Choix du format : Convertissez les images en formats modernes et optimisés comme JPEG, PNG ou WebP.

- Interface interactive : Un shell interactif vous guide à travers les options d'optimisation.

- Dossier de sortie dédié : Les images optimisées sont sauvegardées dans un dossier séparé, sans écraser les fichiers originaux.

## Installation

Pour utiliser l'outil, vous devez l'installer globalement via npm. Assurez-vous d'avoir Node.js installé sur votre machine.

---

```bash
npm install -g imop
```

## Utilisation

Pour optimiser vos images éffectuez juste la commande suivante dans votre terminal du projet :

```bash
imop
```

Le script vous posera alors trois questions :

1. Le chemin du dossier source : Le dossier qui contient les images à optimiser.

2. Le dossier de destination : Le nom du dossier où les images optimisées seront sauvegardées.

3. Le format de sortie : Le format de l'image optimisée (JPEG, PNG ou WebP).

---

## Exemple d'utilisation

Supposons que vous ayez un dossier nommé assets avec plusieurs images à optimiser. Vous pouvez lancer l'outil et fournir les informations suivantes :

```bash
$ optimize-images
✨ Bienvenue dans l'outil d'optimisation d'images !
? Quel est le chemin du dossier contenant les images à optimiser ? (./images) assets
? Quel est le nom du dossier pour les images optimisées ? (./optimized-images) output
? Quel format d'image de sortie souhaitez-vous ? (Use arrow keys)
❯ JPEG (parfait pour les photos)
  PNG (idéal pour les graphiques avec transparence)
  WebP (format moderne et très compressé)
```

Après avoir fait vos choix, l'outil traitera les images et les sauvegardera dans le dossier output.

coded with love by @likeur