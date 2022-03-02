<p align="center">
  <a href="https://nonpeep.github.io/newsify/"><img src="https://github.com/nonpeep/newsify_frontend/blob/master/public/logo-128.png" alt="Newsify" width="100" height="100"></a><br>
  <h1 align="center"><a href="https://nonpeep.github.io/newsify/"><b>Newsify</b></a></h1>
  <p align="center">
  <b>Maintainers</b>
  </p>
  <p align="center">
  <table align='center' rules='none'>
    <tr align='center'>
      <td>
        <a href="https://github.com/thennal10"><img src="https://avatars.githubusercontent.com/u/49022771?v=4" alt="Thennal DK" width="35" height="35"></a> 
      </td>
      <td>
         <a href="https://github.com/AkshayWarrier"><img src="https://avatars.githubusercontent.com/u/58233418?v=4" alt="Akshay Warrier" width="35" height="35"></a> 
      </td> 
      <td>
        <a href="https://github.com/Welf06"><img src="https://avatars.githubusercontent.com/u/85446331?s=400&u=58dad9ebb2b0319a4c61e88724e097c5220bf004&v=4" alt="Ganesh Nathan" width="35" height="35"></a>
      </td> 
    </tr>
    <tr>
      <td>
        <a href="https://github.com/thennal10">Thennal DK</a>
      </td> 
      <td>
        <a href="https://github.com/AkshayWarrier">Akshay Warrier</a>
      </td>  
      <td>
        <a href="https://github.com/Welf06">Ganesh Nathan</a>
      </td>  
    </tr>  
  </table>
</p>


## About
Ever read a headline and wanted the answer to a simple question about it without having to parse through paragraphs on paragraphs of fluff? **Newsify** gets the latest headlines from different news sources and topics of your choice, and answers your questions about the headline directly, without ever needing to skim the article.

Newsify uses a publicly available question-answering machine learning model behind the scenes. We get the headlines from a Google News search with your given input, and extract the content of the articles to feed it to the model as context. As such, the model cannot deal with questions which do not have an answer within the article itself. The wording of the questions also might impact the quality of results, so remember to phrase them appropriately.

This repository houses the frontend, while [this is the link for the backend.](https://github.com/nonpeep/newsify_backend) All contributions are welcome.

## Technologies Used:
### Front-End
- Tailwind CSS
-  React JS
### Back-End
- Flask
- Docker
- Cloud Run
  
## Installation
Clone the repository, `cd` into it, and run:
```
npm install
```
## Running the App
  
In the project directory, you can run:

### npm start

Runs the app in the development mode.\
Open [http://localhost/:3000](http//localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### npm run build

Builds the app for production to the build folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
The app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

  
