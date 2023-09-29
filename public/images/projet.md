
# Projet REACTJS

# I- Sujet

## Application

L'objectif est la création, d'une application front en utilisant ReactJS.

## Ce qui est fournis

Une API Rest CRUD sur 2 objets:
- des marques: https://formation.inow.fr/demo/api/v1/brands
- des voitures: https://formation.inow.fr/demo/api/v1/cars

exemple:
- GET all: https://formation.inow.fr/demo/api/v1/cars
- GET element: https://formation.inow.fr/demo/api/v1/cars/1
- POST: https://formation.inow.fr/demo/api/v1/cars {car object}
- PUT: https://formation.inow.fr/demo/api/v1/cars/1 {car object}
- DELETE: https://formation.inow.fr/demo/api/v1/cars/1

## Fonctionnalités

### Layout
Afficher un header avec menu, un footer (présents sur toutes les pages)
Menu:
- Home
- Voir toutes les voitures
- Ajouter une voiture (uniquement disponible si l'utilisateur est connecté)
- Se connecter / Se déconnecter

### Page d'accueil

Afficher les marques (nom et image).
Pour chaque marque, un lien qui emmène vers la page de la marque.

### Page Marque

Affiche les détails de la marque et toutes les voitures de cette marque.

### Page Toutes les voitures

Afficher toutes les voitures (nom et marque).
Pour chaque voiture si l'utilisateur est connecté un bouton pour modifier, un bouton pour supprimer.
Pour la suppression, un message de confirmation à l'utilisateur sera indispensable.

### Page Créer une voiture

Un formulaire de création d'une voiture avec les éléments nom, date de mise en circulation, prix, marque (liste déroulante)
Tous les champs sont obligatoires pour créer une voiture
Cette page est uniquement accessible par les utilisateurs connectés.

### Page Modifier une voiture

Un formulaire de modification d'une voiture avec les éléments nom, date de mise en circulation, prix, marque (liste déroulante)
Tous les champs sont obligatoires pour créer une voiture
Cette page est uniquement accessible par les utilisateurs connectés.

### Page Login

Formulaire de login sans appel serveur afin d'authentifier un utilisateur.
Format de mail pour le login, Format pour le mot de passe: 6 caractères min, majuscule, minuscule, numérique et caractères spéciaux.
La gestion du user en mémoire peut se faire avec ContextAPI ou Redux.

### Alert
Sur les actions d'ajout, de modification et de supression, vous afficherez une alerte à l'utilisateur. Pour un effet plus sympa vous pouvez utiliser un composant perso (style toast) à la place du 'alert' standard JS.

### Internationalisation (vrai bonus)

Vous allez internationaliser votre application: la rendre multi-langues.
aide: https://react.i18next.com/

# Groupes et fonctionnement

Le projet est a faire seul ou à deux.

Les étudiants sont encouragés (obligés) à mettre en place un système de contrôle des sources de type Git ou équivalent, afin d'affecter et partager efficacement les fichiers de codes et autres composants numériques du projet (fichiers sources, descripteurs de déploiement, documents de recherche, cas d'utilisation, etc.).

# Rendu

Le rendu se fera le vendredi 29 septembre 2023.
Le rendu se fera via votre lien du repo GIT.
Toute absence à la présentation entrainera un 0 (ZERO).
Vous devrez présenter chacun votre tour votre travail réalisé et le résultat obtenu.