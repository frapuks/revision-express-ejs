# Revisions Express et EJS

Exercice préparé pour s'entrainer au lancement d'un serveur localhost avec express, travailler les modules, gérer des routes avec express et utiliser les templates ejs.

# Enoncé

Enoncé (la liste n'est forcément pas à prendre dans l'ordre)
- Créer un serveur Express
- Gérer 3 routes :
   - `/home`
   - `/:slug` : route paramétrée pour tous les articles
   - `/contact`
- Chaque route paramétrée doit utiliser le slug de chaque article et doit afficher toutes les infos d'un seul article 
- Transformer les fichiers html en fichiers ejs
- Organiser tous les fichiers de la bonne manière (voir les cours)
- Appeler le fichier css statique
- liste des points qui doivent être crées avec ejs sur la home page
  - liens du header : slug
  - h1 : à créer manuellement pour chaque page
  - liens sur les articles vers chaque page de chaque article : slug
  - background-color du header d'article : color
  - image de chaque article : image
  - contenu du p de l'article : infos
  - image check ou cross : finished true/false
- liste des points qui doivent être crées avec ejs sur les articles
  - background-color du main : color
  - liens du header : slug
  - h1 : numéro de saison et title
  - date de début : date
  - taille de la barre-level : level
  - p (afficher terminé ou en cours) : finished
  - image : image
  - p : description
- liste des points qui doivent être crées avec ejs sur la page contact
  - h1
  - tout ce que vous voulez faire d'autre

# Technologies utilisées

- Javascript
- Node.js
- Express
- Ejs

# Auteurs

- [François G.](https://github.com/frapuks)

# Version

- v1 (actuelle)
	- première mise en ligne

# Ressources

Modules Node.js :
- express
- ejs

Images :
- google images

Programme formation :
- [O'Clock](https://oclock.io/)