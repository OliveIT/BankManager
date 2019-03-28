# Employee bank account list management.

Implement Create, Search, Edit, Delete operations for a list.

## Frontend

Used ReactJS and TypeScript.
This project uses Bootstrap 4 and Fontawesome 5.

### View Model

Bank model for bank account list items, here is an example:

- Account Holder's name ("Gregory House", "Elliot Alderson")
- Employee name ("Dr. Gregory House", "Mr. Robot")
- Bank name ("Citibank", "JP Morgan Chase")
- Branch name ("LA Central", "Branch 42")
- Account type ("Savings", "Checking")
- Account number ("0000042", a number up to 7 digits, zero-left-padded)
- Employee number ("012345678901234", a number up to 15 digits, zero-left-padded)
- Last update ("2019-Mar-19 18:14", a datetime)

### Create/edit

Create/Edit operation should be implemented as a "Wizard" - a multi-step editing using modals, or without them such as in this example: [link](https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-bootstrap-wizard-25.jpg).

Implement at least two steps. For example, I followed these steps:

1. Bank name and bank branch name input.
2. Account holder's name, account type, account number input.
3. Employee name, employee number input.
4. Confirmation step that presents information input in previous steps to preview before saving.

#### Searching

On the list view, added any type of Search criteria. 

#### Sorting

List view should be sortable by any field displayed in the list view.

#### Deleting

Using a checkbox column for selecting the items, and a "Delete" button below the list. Pressing the delete button will display a delete confirmation modal showing a summary of the items to be deleted and "Cancel" and "Confirm" buttons.

## Backend

Uses GraphQL for server.

## Tests

Uses Jest for covering your ReactJS app, and a corresponding tooling for the Backend.

## Delivery

Please share the link to your GitHub repository for this task. The repository should contain a short README.md with a link to a deployed application and a brief summary of how much time it took to implement the task. 
("**Frontend**: *8* hours, **Backend**: *3* hours, **Deployment**: *0.5* hours").

## Available Scripts

In the project directory, you can run:

### `npm install`

Install node modules

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

