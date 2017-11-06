# **Exercice Beedeez**

Pour cet exercice vous devrez créer une application listant différentes leçons (appelé "des capsules"). Pour cela vous devrez faire une requête sur la route d'API fournit, stocker les capsules dans un reducer ([redux](http://redux.js.org/)) et afficher les capsules sur la page. Une fonctionnalité devra être mis en place pour rechercher une capsule sur la page via une barre de recherche.

La route devant être utilisé est la suivante :

    GET https://www.beedeez.com/api/v1/public/lessons/200/1

Pour cela vous devrez impérativement utiliser les technologies suivantes:

- [node](https://nodejs.org/en/) (Vous pouvez faire un simple serveur [express](https://expressjs.com/) pour renvoyer votre app)
- [react](https://reactjs.org/) (>15.0.0)
- [redux](http://redux.js.org/) & [react-redux](https://github.com/reactjs/react-redux)
- [webpack](https://webpack.github.io/) & [babel](https://babeljs.io/)

Chaque fonctionnalité supplémentaire sera prise en compte en tant que BONUS ! Alors lâchez-vous ;)

## **Recommandation et Bonus**

- **Recommandation** :

- Utilisez [Immutable JS](https://facebook.github.io/immutable-js/) peut s'avérer utile pour être sûr garder des fonctions pur dans les reducers
- Utiliser [reselect](https://github.com/reactjs/reselect) peut s'avérer utile pour récupérer les données stocker par redux

- **Bonus**:
*Sachez que ce ne sont que des recommandations, vous être libre de mettre en place n'importe quelle type de bonus tant qu'elle apporte un plus à l'application*

- Implémentation de [Jest](http://facebook.github.io/jest/) pour faire des tests unitaires en react
- Implémentations de [eslint](https://eslint.org/) pour normaliser l'application
- Implémenter [Flow](https://flow.org/) pour typer l'application (bon courage pour celle là x') )
- Implémenter un système de pagination (vous récupérez 200 leçons). (Attention à pas casser la recherche).
- Implémentation de [i18next](https://www.i18next.com/) pour traduire votre app.

## ***BONNE COURAGE ! ;-)***

![Beedeez](http://www.jaimelesstartups.fr/wp-content/uploads/2015/07/logo-Beedeez-01.png)
