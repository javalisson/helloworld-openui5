# Hello World, OpenUI5 

_To navigate the examples just clone the repo and run `npm install` and `npm run start`._

This repository contains the three steps from OpenUI5 documentation "Quick Start"/"Hello World" tutorial in three different files/entry points: index_1.html, index_2.html and index_3.html. Also, views and controllers have a number indicating the step they are part of.

- [App 1](webapp/index_1.html) constructs the view using JavaScript code inside the controller. Source:
  - Entry point: [webapp/index_1.html](webapp/index_1.html)
  - Main: [webapp/index_1.js](webapp/index_1.js)
- [App 2](webapp/index_2.html) instantiates the view using the declarative XML syntax and handles one simple interaction from the user. Source:
  - Entry point: [webapp/index_2.html](webapp/index_2.html)
  - Main: [webapp/index_2.js](webapp/index_2.js)
  - View: [webapp/App_2.view.xml](webapp/App_2.view.xml)
  - Controller: [webapp/App_2.controller.js](webapp/App_2.controller.js)
- [App 3](webapp/index_3.html) also instantiates the view using the XML syntax. This view has more than one page and more elements and user interactions, what makes the view itself and the controller more complex. Source:
  - Entry point: [webapp/index_3.html](webapp/index_3.html)
  - Main: [webapp/index_3.js](webapp/index_3.js)
  - View: [webapp/App_3.view.xml](webapp/App_3.view.xml)
  - Controller: [webapp/App_3.controller.js](webapp/App_3.controller.js)

All pages/apps use the CDN to load OpenUI5 libraries.

Original [tutorial][1] and [source code][2] can be found at [OpenUI5 documentation website][3].


 [1]: https://openui5.hana.ondemand.com/#/topic/592f36fd077b45349a67dcb3efb46ab1
 [2]: https://openui5.hana.ondemand.com/#/entity/sap.m.tutorial.quickstart
 [3]: https://openui5.org/documentation/
