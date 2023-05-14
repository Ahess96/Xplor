# Xplor

Visit recreation sites easier.

## The App

Xplor provides a user friendly, clutter free platform to query all of the recreation sites provided by Recreation.gov's RESTful API and plan a trip. 

Authenticated users can query for recreation sites and view any information about these sites provided by Recreation.gov. Some sites provide more comprehensive details than others, such as activities that can be enjoyed at that destination. When this is the case, users can add those activities to their trip plan so that they have a quick overview of what to do when they arrive. In the near future, users will be able to add custom notes to their trips as well.

## Technologies

Xplor is a built as a MERN stack application to provide simple communication between the front end and backend using JavaScript. MongoDB with Mongoose allows felxible document schemas so this site can continue to expand and meet the needs of the modern user. ExpressJS routes quickly and seemlessly to MongoDB and provides structure to allow developers to maintain precise control of the routing and middlewear for Xplor. React's speed and intuitive component-based architecture makes it a clear choice for Xplor and allows developers to use JavaScript across the full stack of the application.

Users of Xplor can sign up for the platform and become authenticated with security driven JSON webtoken. This feature ensures users can save the details of their trip and edit these details. Users have full CRUD capabilities for their planned recreation areas.

Xplor is styled using TailwindCSS. This provides a consistent and modern design across the entire application. The design also allows mobile users to enjoy a clear, user first experience so they can consult and edit their plans on the go.

## Planning

Trello: https://trello.com/b/fDY6EFQ5/project4
ERD: https://lucid.app/lucidchart/92f54c9b-d25f-4d15-a5f5-e784ae5d975a/edit?page=0_0&invitationId=inv_73b0f439-c89c-48f7-98d0-a8e58b7f448b#
Wireframe: https://www.figma.com/file/QUysiNhgLIjLtdUPaZzAMw/Untitled?node-id=0-1&t=UtxWfmkC9EmqipT8-0

Xplor will be an app that utilizes API calls from recreation.gov to view campsites and activities and government ran recreation sites. Users will be able to create an account and search for campsites. Users will then be able to select a campsite to visit and add some activities they would like to do while there.
