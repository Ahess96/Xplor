# Xplor

Visit recreation sites easier.

![logo](public/Firefly%20leafy%20pothos%2091921.png)

## The App

Xplor provides a user friendly, clutter free platform to query all of the recreation sites provided by Recreation.gov's RESTful API and plan a trip. 

![Home Page](public/Screenshot%202023-05-14%20at%203.39.34%20PM.png)

Authenticated users can query for recreation sites and view any information about these sites provided by Recreation.gov. Some sites provide more comprehensive details than others, such as activities that can be enjoyed at that destination. When this is the case, users can add those activities to their trip plan so that they have a quick overview of what to do when they arrive. Users can also add custom notes to their trips.

![Search Results](public/Screenshot%202023-05-14%20at%203.45.22%20PM.png)

## Technologies

![JS badge](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![Heroku badge](https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white)
![Tailwind badge](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![MongoDB badge](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![Express.js badge](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![React badge](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Node.js badge](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)


Xplor is a built as a MERN stack application to provide simple communication between the front end and backend using JavaScript. MongoDB with Mongoose allows felxible document schemas so this site can continue to expand and meet the needs of the modern user. ExpressJS routes quickly and seemlessly to MongoDB and provides structure to allow developers to maintain precise control of the routing and middlewear for Xplor. React's speed and intuitive component-based architecture makes it a clear choice for Xplor and allows developers to use JavaScript across the full stack of the application.

Users of Xplor can sign up for the platform and become authenticated with security driven JSON webtoken. This feature ensures users can save the details of their trip and edit these details. Users have full CRUD capabilities for their planned recreation areas.

![GIF](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYTYxZGVhOTAyYjdjOTZmYTg0Njg2OWY4ZTRiZjg2ZmM5YTE5Yzg0MCZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/AM5CzfHJfb6LkTFHXd/giphy.gif)

Xplor is styled using TailwindCSS. This provides a consistent and modern design across the entire application. The design also allows mobile users to enjoy a clear, user first experience so they can consult and edit their plans on the go.

## Planning



|  |    Planning                |                    |
|:--------:|:-----------------:|:------------------:|
|          |    [Trello](https://trello.com/b/fDY6EFQ5/project4)        | User Stories       |
|          |     [ERD](https://lucid.app/lucidchart/92f54c9b-d25f-4d15-a5f5-e784ae5d975a/edit?page=0_0&invitationId=inv_73b0f439-c89c-48f7-98d0-a8e58b7f448b#)     | Data Relations     |
|          |     [Wireframe](https://www.figma.com/file/QUysiNhgLIjLtdUPaZzAMw/Untitled?node-id=0-1&t=UtxWfmkC9EmqipT8-0)     | Design             |

## Future Enhancements

One of the most important features of Xplor is that it is clutter free. Future enhancements will be designed with this in mind, and include incorporating OpenAI to give users some guidance on where they would like to visit based on their desires. 

