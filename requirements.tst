1) The goal of the task is to implement SPA application with just one view. 
// ✔️ created with React
2) You should use the below API endpoint to display the paginated list of products. 
// ✔️ connected with custom hook useFetch,
3) At the top of the view, there should be text input, which allows the user to filter results by id.
// ✔️ text input implemented with Chakra
4) The input should accept only numbers, other signs should not even appear.
// ✔️ implemented with controlled component and regex to make sure dots and "e" aren't allowed
5) Below this input user should see a table displaying the following items’ properties: id, name, and year.
// ❌ no table
6) Additionally, the background colour of each row should be taken from the colour property.
// ✔️ implemented
7) After clicking on a row a modal should be displayed and should present all item data.
// ❌ 
8) The table should display 5 items per page.
// ✔️ done with api requests
9) Under the table, there should be a pagination component, which allows switching between pages with “next” and “previous” arrows.
// ✔️ done with PageDisplayer component - i hope it's proper name :P 
10) Please remember about handling situations when API endpoint returns a 4XX or 5XX error. In such a case the user should be informed about the error.
// ✔️ implemented with Error component and conditional rendering instead of ResultrsDisplayer component.
11) Apart from React, the technology stack totally ups to you, the same applies to styling.
// ✔️ chosen Chakra-UI
12) As a result of the task, we expect a link to a repository on GitHub, GitLab, or bitbucket.
// ✔️ https://github.com/PioterAndrzejewski/products_getter
13) Your app should start after running npm install & npm start.
// ✔️ 
14) Please reflect pagination and filtering in the address URL, so users can copy and share the URL with each other.
// ❌ 
15) filtering and pagination should be performed within the API, not on the frontend side
// ✔️ 
16) take into account that API returns 12 items in total
// ✔️ 
17) after changing the page it should be possible to copy-paste web browser URL to another tab, where this exact page should be displayed on the start
// ❌ 
18) per_page field lets you set the number of items per page
// ✔️
19) page field lets you set the page number of results
// ✔️
20) id field lets you filter results by id
// ✔️
21) Proposed styling library(contains also icons): https://mui.com/
// ✔️ chosen Chakra-UI

https://reqres.in/api/products

started:

19.01
    00:10 - 00:30 - reading the task, creating this list and testing the endpoint
    00:30 - 01:30 - create app structure
    11:10 - 11:40 - create custom hook to handle data fetching
    11:40 - 18:00 - implement most functions, correct mistakes
    18:00 - ? - refresh react router