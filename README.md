
## LedMatrixMaker16X ##
*Un simple système de création interactive de matrice led 16x16 Comment utiliser*
Comment utiliser le logiciel ?
-----------------------------
Télécharger le dépôt (bouton "clone ou download") puis ouvrez le fichier index.html dans le navigateur Google chrome. Pour le moment le projet n'est qu'a un stade expérimentale. C'est bidon pour le moment mais ca vas vite évoluer....

Quelques mots
-------------
Salut a toutes et a tous, bienvenue sur ce petit dépot l'objectif est de fournir une alternative open source a ceux qui comme moi on déja été confronter a la programmation de matrices led en binaires. Le but du jeux final est de fournir une interface html et js avec Jquery qui permettra de programmer facilement une suite de 256 caractéres dont chacun permet l'affichage d'une couleur 
Les couleurs sont les suivantes : 

 - Noire : 0 
 - Blanc : 1 
 - Rouge : 2 
 - Vert : 3 
 - Bleu : 4 
 - Jaune : 5 
 - Violet : 6
 - Turcoise : 7
## Fonctionnalités ##
Création de matrice en 16 x 16 avec 8 couleurs.
Création de plusieurs ecrans sur le meme espace.
Possibilité de sauvegarde des ecrans créer.
Possibilité de chargement des matrices.
Export grace aux format .mxt
## Démonstration vidéo ##
Une petite vidéo pour bien comprendre l'utilisation.
https://www.youtube.com/watch?v=g6PYFsZFaz0

## Evolution possibles ##
L'idéale serais de porter le code source dans un build en .exe de facon à le rendre compatible windows. Je dois encore y réfléchir mais je pense que nodeJs et nodeWebkit devraient faire l'affaire. Je ne sais pas encore comment ca va se passer. 
## Le hardware ! ##
L'objectit est de porter le projet sur arduino pour permettre a qui veux de controller des matrice de led de différents modeles. Quant le soft de création de matrice seras terminé je mettrais des sketchs arduino ainsi que des shemats et pourquoi pas faire un partenariat avec une boutique qui acceptera de me fournir du matériel en echange d'une pub.... Bref beaucoup de choses sont envisageables. Dans l'etat actuelle les fichier .mxt sont des suite de caractéres séparés par les pipes, ce qui permet de sauvegarder plussieurs matrices. L'idée serais par exemple de televerser un fichier .mxt vers un arduino via un protocole (i2c, rs232, ethernet ...). Ainsi il serais possible de controller une matrice de led pour informer des usagers de tel ou tel choses.... 
## Comment contribuer ##
Comme vous avez pu vous en rendre compte je suis une bonne mergez en orthographe et grammaire, donc si vous désirez participer a ce projet forkez et faitent des pull request ... 
