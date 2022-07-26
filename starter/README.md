# MyReads Project

Clone this project into your local machine  `git clone git@github.com:Safei-Ashraf/Book-App.git` 

#### note: this cloning uses SSH credentials.
## install project:

>   run `yarn` on root level
>   navigate to starter file `cd starter`
>   run `yarn` to install all dependencies

## Start up your application:

Use `yarn start` to start your application at port `3080`, might ask for port change (Y/N).


## How to Use: 

>   Navigate to the home page at "/" ( project should be open there in browser by default)
>   You can view a list of 3 shelfes representing your books's reading status
>   you can change a book Shelf/state by clicking the green drop down button and select the new shelf.
>   book should move to the new assigned shelf (if any) 
>   if you seleceted "none" the book should leave the screen

>   Navigate to the search page by clicking the "+" green button on your bottom-right side of the screen
>   you can type a search term e.g: "react" and then you will see all the related books.
>   you can add a book from there to your reading shelves just by updating it via the dropdown menu (same as before)
>   if you click the same book again on the search page after adding it, you will notice it already updated the selected shelf.

## Files Structur

```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── App.css # Styles for your app. Feel free to customize this as you desire.
    ├── App.js # This is the root of your app. Contains static HTML right now.
    ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── icons # Helpful images for your app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── components # Helpful images for your app. Use at your discretion.
    │   ├── addButton.js
    │   ├── Book.js
    │   ├── Header.js
    │   ├── HomePage.js
    │   ├── SearchPage.js
    │   └── shelf.js
    ├── index.css # Global styles. You probably won't need to change anything here.
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.
```


## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebook/create-react-app/blob/main/packages/cra-template/template/README.md).

## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.

For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).
