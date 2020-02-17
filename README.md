# _Doctor Lookup_

#### _An application that utilizes the BetterDoctor API to provide information about available doctors in Portland, OR who treat numerous medical needs. , Feb 2020_

#### By _**Benjamin Thom**_

## Description

Users can enter a medical issue (ie: “sore throat”, "rash", etc.) or name into our form, submit it, and receive a list of doctors in Portland, OR who match the treatment or name specified.

## Preview
![Landing Page Preview](img/doctor-lookup-preview.png)

## Project Specifications

| Behavior | Input | Output |
|---|:---:|:---:|
|A user enters a medical issue and receives a list of doctors in the Portland area that fit the search query|sore throat|Doctors who provide treatment for "sore throat" in Portland, OR|
|A user enters a name to receive a list of doctors in the Portland area that fit the search query|Bill|Doctors whose names include "Bill" in Portland, OR|
|If the query response includes any doctors, the following information is included about each doctor: first name, last name, address, phone number, website and whether or not the doctor is accepting new patients|NA|first name, last name, address, phone number, website, and doctor is accepting new patients: true or false|
|If the API call results in an error, the application will return a notification to the user stating what the error is|NA|"There was an error handling your request"|
|If the query response doesn't include any doctors (for instance, if no doctors meet the search criteria), the application will return a notification that states that no doctors meet the criteria|user input|"No doctors found based on your search"|

## Setup/Installation Requirements

_In Terminal:_

* Navigate to where you want this application to be saved, i.e.:
```cd desktop```
* Clone the file from GitHub with HTTPS
```git clone https://github.com/benjamin-thompdx/doctor-lookup.git```
* Open file in your preferred text editor
* On Mac: ```open -a {your text editor} doctor-lookup```
* On Windows: ```doctor-lookup```

_Download Manually:_

* Navigate to https://github.com/benjamin-thompdx/doctor-lookup.
* Click the green "Clone or Download" button.
* Click "Download ZIP".
* Click downloaded file to unzip.
* Open folder called "doctor-lookup".
* Right-click "index.html" and select your preferred browser or text editor.

_Note For Editors:_ 
* Once cloned/downloaded, to run and make changes, in the terminal simply run **$ npm install** to download necessary dependencies
* Run **$ npm run build** to create your dist folder with a bundle.js file
* Obtain API key from https://developer.betterdoctor.com/
* Create .env file in the root directory of doctor-lookup
* Add the API key to .env file (```API_KEY: input your API key here```)
* **IMPORTANT** Add .env file to .gitignore file 
* The API key will now be referenced within the doctor-service.js file
* Lastly, run **$ npm run start** to run the application

## Known Bugs

_No known bugs at this time._

## Support and contact details

_Have a bug or an issue with this application? [Open a new issue](https://github.com/benjamin-thompdx/doctor-lookup/issues) here on GitHub._

## Technologies Used

* HTML
* CSS
* Bootstrap
* Javascript
* jQuery
* Webpack
* Node.js
* BetterDoctor API

### License

[MIT](https://choosealicense.com/licenses/mit/)

Copyright (c) 2020 **_Benjamin Thom_**