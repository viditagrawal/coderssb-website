# Coders SB Website

- Prod deploy: https://coders-sb-website.herokuapp.com
- QA deploy: https://dashboard.heroku.com/apps/coders-sb-website-qa

# How to set up a local version of the website: 

- Clone the repo using the git clone command
- Navigate to the repo in your terminal and type:
  - **npm install**. This will install all the necessary node modules used by the wesbite
  - **npm run dev**. This will start up a local instance of the website, usually on localhost:3000. Navigate to your web browser to see the local version of the website.
  
 # Implementing a Feature
 
 - Make sure to a card on the **Kanban board** under the *Projects* tab at the top that has bullet-point details in its body before you start coding. This is important so that future Coders SB officers can see at a glance what features have been built into the website
 - **Make sure you are never working directly on master** always work on your own branch and open a PR
  - **Link your PRs with the card on the Kanban Board** there should be an option to do so on the right side of the page for your open PR. Move your card on the Kanban Board to the "Under Review" column
 - Once you've opened a PR, deploy your changes to coders-sb-website-qa on Heroku
 - After your PR has been reviewed by at least 1-2 other officers, you may merge your work
 - Once your PR has been approved, close the issue on the kanban board and move it to the "Done" column
