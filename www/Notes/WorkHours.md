## Greek Bible V1

### V1 H1

- [x] Created the structure for the DisplayGreekText feature
- [x] Problems:
	- [x] Running the qunit test for loading the sample text fails using Chutzpah


### V1 H2

- [x] Parsed the data from a chapter of text
	- [x] Used oldGreekBible's parsing code as a starting place
- [x] Passing Tests


### V1 H3

- [x] Displayed the passage text on screen with the details
	- [x] Used oldGreekBible's formatting of the details


### V1 H4

- [x] Started to implement ChoosePassage
- [x] Problems:
	- [x] TypeScript does not support Partial classes, so had to pause to think about how to implement that
	- [x] Slow Today
	- [x] Not finished implementing ChoosePassage


### V1 H5

- [x] Divided Data into Chapters
- [x] Binding Book and Chapter values to UI
- [x] Triggering Reload on Book/Chapter change
- [x] Started: Debugging UI binding
- [x] Started: LoadPassage


### V1 H6

- [x] BUG: Chapter Select was not updating
	- [x] FIX (1 hour): Finally discovered it was jQueryMobile not refreshing the UI


### V1 H7

- [x] Display Color Coding
- [x] Finished Up Tasks
- [x] Removed Unprintable Characters
- [x] Removed QUnit results


### V1 H8

- [x] Display Verse Numbers
- [x] Create Release Branch
- [x] Write Blog
- [x] Publish
- [x] Publish Blog



## 5HourAppSystem V1

### V1 H1

- [x] Working on Loading Screen


### V1 H2

- [x] Working on Loading Screen


### V1 H3

- [x] Working on Offline App Cache


### V1 H4

- [x] Automatic Online to Offline Web App


## 5HourAppSystem V2

### V2 H1

- [x] Started Integration of Yadda


### V2 H2

- [x] Debugging Integration of Yadda


### V2 H3

- [x] Debugging Integration of Yadda


### V2 H4

- [x] Debugging Integration of Yadda


### V2 H5

- [x] Finished Integration of Yadda



## 5HourAppSystem V3

### V3 H1

- [x] Rename "System" features to "Support" features

	- [x] Redefine "System Features": Features that provide non-app specific functionality
	- [x] Define "Support Features": Features that provide underlying functionality for User features

- [x] Refactor App Loader

- [x] Refactor Testing Framework
	- [x] Use #test for testing 
		- [x] Put Testing on its own page
		- [x] load with pure javascript with no server processing

- [x] Create Documentation for System Features in Developer's Notes


### V3 H2

- [x] Refactor Testing Framework
	- [x] Refactor Yadda test runner and QUnit library


## Greek Bible V2

### V2 H1

- [x] Show loading message when waiting for the chapter to download
- [x] Show error message if failed to download

### V2 H2

- [x] Focus on Chapter Choice after choosing Book

### V2 H3

- [x] Refactor ViewModel Passage Data
- [x] Reload Last Passage (using localStorage)

### V2 H4

- Use dust template for passage rendering
- Load feature list
- Define choose passage feature