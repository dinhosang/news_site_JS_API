### Node JS News Site - 3 Day Project

Prototype was built during the weekend of Week 12 of the CodeClan programming course (This being week 1 of Front End JS & week 3 of JS as a whole). The goal was to practise connecting to an API.

Original site used XMLHttpRequests on the front-end, in attempting to place on heroku after the end of the course this fact needed to be changed to have requests made via the back-end server.js using the request package. Other than that change the site is still in the same form as it was after designing and building it over the week-end.

### [Link to Heroku Hosting of News Site](https://fierce-woodland-96129.herokuapp.com/)

### Achievements

- Reactive design using CSS3 and the @media tags
  * Re-sizing the window changes how the articles are presented, their size and number shown in a row, as well as the size of the fonts and areas of the search field to allow easier readability and use on smaller devices or when screen is minimised. Use of relative fonts like em or vh/vw.
  * Reactive to user activity - highlighting and modifying style of article when hovered over by user. Search field appearing and clearing on user action.
- Single-Page-Application, allowing for a faster and cleaner ux provided they have access to JavaScript.
  * This may not be possible on all browsers, and many people use javascript blockers while browsing.
- Connecting to an API using a key, without including it in the uri but rather through headers and values.
  *  Originally through XMLHttpRequests, but then spending a day moving using the XMLHttpRequests to make a request to routes in a Node js server and using CORS and the request package to accept and facilitate the query to the API.
- Using Two APIs (RESTcountries and News API) to provide a fuller experience to a user than would be achieved by using just one.
- (Post original 3-Days) Porting site to Heroku.

### Final Thoughts

- I went a little overboard with converting areas of the screen to classes in JS, which lead to it being a little confusing to understand what those classes were responsible for and perhaps cluttering up the models folder. Naming could be improved to make that a little easier as well.

- As this was a prototype designed and built over three days not all features planned were included in the end, the login and the searching through all articles rather than just headlines. But the points of interaction are there for mock-up purposes, and just need to be hooked up to actual back-end code.

- The reactive design was a nice feature, but I believe now that using vh/vw to determine the relative sizes of elements is potentially a bit of a trap. I should have instead made more use of em, or rem for consistency.

- All of the planning was made on paper, which lead to it being easier to lose track of and not have to show at the end when trying to build a full view of the project. Future planning should preferably be made using electronic resources, or immediately scanned for posterity.

- More functionality had been dreamt of for the site in terms of actions available to the user, for example the sectioning of the screen into parts which are set to display specific types of articles which are tied to the account and the settings the user has chosen. All of this information would need to be stored in some manner of database as well. This wasn't possible in the time frame, and time period, but would be more than achievable now if I was to return to this project.

- Having a default image for when the article source cannot provide one.
