### Hour 1

- Created the structure for the DisplayGreekText feature
- Problems:
	- Running the qunit test for loading the sample text fails using Chutzpah


### Hour 2

- Parsed the data from a chapter of text
	- Used oldGreekBible's parsing code as a starting place
- Passing Tests


### Hour 3

- Displayed the passage text on screen with the details
	- Used oldGreekBible's formatting of the details


### Hour 4

- Started to implement ChoosePassage
- Problems:
	- TypeScript does not support Partial classes, so had to pause to think about how to implement that
	- Slow Today
	- Not finished implementing ChoosePassage


### Hour 5

- Divided Data into Chapters
- Binding Book and Chapter values to UI
- Triggering Reload on Book/Chapter change
- Started: Debugging UI binding
- Started: LoadPassage


### Hour 6

- BUG: Chapter Select was not updating
	- FIX (1 hour): Finally discovered it was jQueryMobile not refreshing the UI


### Hour 7

- Display Color Coding
- Finished Up Tasks
- Removed Unprintable Characters
- Removed QUnit results


### Hour 8

#### Goals:
- [X] Display Verse Numbers
- [X] Create Release Branch
- [X] Write Blog
- [X] Publish
- [X] Publish Blog

### V 1.1

- [S] Working on Loading Screen

### V 1.2

- [X] Working on Loading Screen

### V 1.3

- [X] Working on Offline App Cache

### V 1.4

- [X] Automatic Online to Offline Web App

### V 1.5

- [X] Show loading message when waiting for the chapter to download
- [X] Show error message if failed to download

### V 1.6

- [P] Focus on Chapter Choice after choosing Book
- [P] Reload Last Passage (using localStorage)