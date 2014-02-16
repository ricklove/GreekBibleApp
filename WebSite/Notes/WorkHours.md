## Greek Bible V1

### V1 H1

- [X] Created the structure for the DisplayGreekText feature
- [X] Problems:
	- [X] Running the qunit test for loading the sample text fails using Chutzpah


### V1 H2

- [X] Parsed the data from a chapter of text
	- [X] Used oldGreekBible's parsing code as a starting place
- [X] Passing Tests


### V1 H3

- [X] Displayed the passage text on screen with the details
	- [X] Used oldGreekBible's formatting of the details


### V1 H4

- [X] Started to implement ChoosePassage
- [X] Problems:
	- [X] TypeScript does not support Partial classes, so had to pause to think about how to implement that
	- [X] Slow Today
	- [X] Not finished implementing ChoosePassage


### V1 H5

- [X] Divided Data into Chapters
- [X] Binding Book and Chapter values to UI
- [X] Triggering Reload on Book/Chapter change
- [X] Started: Debugging UI binding
- [X] Started: LoadPassage


### V1 H6

- [X] BUG: Chapter Select was not updating
	- [X] FIX (1 hour): Finally discovered it was jQueryMobile not refreshing the UI


### V1 H7

- [X] Display Color Coding
- [X] Finished Up Tasks
- [X] Removed Unprintable Characters
- [X] Removed QUnit results


### V1 H8

- [X] Display Verse Numbers
- [X] Create Release Branch
- [X] Write Blog
- [X] Publish
- [X] Publish Blog



## 5HourAppSystem V1

### V1 H1

- [X] Working on Loading Screen


### V1 H2

- [X] Working on Loading Screen


### V1 H3

- [X] Working on Offline App Cache


### V1 H4

- [X] Automatic Online to Offline Web App


## 5HourAppSystem V2

### V2 H1

- [X] Started Integration of Yadda


### V2 H2

- [X] Debugging Integration of Yadda


### V2 H3

- [X] Debugging Integration of Yadda


### V2 H4

- [X] Debugging Integration of Yadda


### V2 H5

- [X] Finished Integration of Yadda



## 5HourAppSystem V3

### V1 H1

- [X] Rename "System" features to "Support" features

	- [X] Redefine "System Features": Features that provide non-app specific functionality
	- [X] Define "Support Features": Features that provide underlying functionality for User features

- [X] Refactor App Loader

- [X] Refactor Testing Framework
	- [X] Use #test for testing 
		- [X] Put Testing on its own page
		- [X] load with pure javascript with no server processing

- [X] Create Documentation for System Features in Developer's Notes


### V1 H2

- [X] Refactor Testing Framework
	- [X] Refactor Yadda test runner and QUnit library



## Greek Bible V2

### V1 H1

- [X] Show loading message when waiting for the chapter to download
- [X] Show error message if failed to download

### V1 H6

- [P] Focus on Chapter Choice after choosing Book
- [P] Reload Last Passage (using localStorage)