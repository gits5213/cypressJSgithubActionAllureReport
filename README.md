# CypressIO - Allure Report - Github Action - Github page
- CypressIO allure report posted on github page through the github action

## Step by Step process
```
- Create a github public repo
- Clone the repo into your local machine VS editor 
- Create a folder > use npm package manager to install cypressIO
- install Allure report and Allure command line 
- Add some basic test 
- Configure the script inside the package.json file for running test 
- Make sure your test runing by executing the command called `npm run test`
- Make sure you have a command for generating allure report i.e. `npm run report`
- Going back to the github repo > click on action on header > select workflow 
- For javascript/nodeJS > Select NodeJS > Commit 
- Pull the latest in your local and push something
- Validate, workflow is up and running for NodeJS
- Inside the .github > workflows > add jekyll-gh-pages.yml configuration for github page
- Inside the .github > workflows > add alluree-report.yml configuration for the allure report to publishing on the github page
- push the code to the remote branch/master 
- Going back to github > settings > pages > on the branch (select gh-pages > root)
- Re run the build and wait until finish up 
- When build is finish > click on the github page that is automatically provide by the build 
- TaDa!!
- You have a allure report on the github page and and history also 
```
