# Revisions Express et EJS

Exercice préparé pour s'entrainer au lancement d'un serveur localhost avec express, travailler les modules, gérer des routes avec express et utiliser les templates ejs.

# Enoncé

Enoncé (la liste n'est forcément pas à prendre dans l'ordre)
- Créer un serveur Express
- Gérer 3 routes :
   - `/home`
   - `/saison/:slug` : route paramétrée pour tous les articles
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

## Construction d'un article sur la home page

A insérer les uns à la suite des autres dans le container
```html
<article>
    <a> <!-- liens vers la page de l'article -->
        <div></div> <!-- classe "article-header" et doit faire apparaitre le titre et prendra le background color de l'article-->
        <div>
            <img> <!-- classe "article-img" et source de l'image -->
            <p></p> <!-- infos courte de l'article  -->
            <img> <!-- classe "check-img et source de l'image "check.jpg" ou "cross.png" -->
        </div>
    </a>
</article>
```

## Construction du main sur la page d'un article

```html
<main> <!-- Doit prendre le background color de l'article -->
    <h1></h1>  <!-- Titre sous la forme "Saison # - Titre", ex "Saison 2 - Javascript" -->
    <img>  <!-- classe "article-img" et la source de l'image -->
    <div></div>  <!-- texte donnant la date sours la forme "date de début : #date" -->
    <div> <!-- classe "barre-container" -->
        <div></div>  <!-- classe "barre-level" et width en fonction du niveau et doit afficher le niveau sous forme "level #/10" -->
    </div>
    <p></p>  <!-- doit afficher "terminé" ou "en cours" suivant l'état du finished -->
    <img>  <!-- classe "check-img" et source de l'image -->
    <p></p>   <!-- doit afficher la description de l'article -->
</main>
```

# Technologies utilisées

- Javascript
- Node.js
- Express
- Ejs

# Auteurs

- [François G.](https://github.com/frapuks)

# Version

- v1 : première mise en ligne
- v1.5 : corrections mineures + ajout des exemples html attendus + modification des liens images dans l'objet articles
- v2 (actuelle) : modification d'une span en div + test complet

# Ressources

Modules Node.js :
- express
- ejs

Images :
- google images

Contenu inspiré de la formartion (aucune de ces données n'est officielle) :
- [O'Clock](https://oclock.io/)

Articles :
- Wikipedia