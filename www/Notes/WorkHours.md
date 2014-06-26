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

### V2 H5

- Defines features
- Adding Provider Model for UserSettings

### V2 H6

- Add Provide Model
- Pass Feature 001 - View Passage
- Implementing 002 - Choose Passage

### V2 H7

- Modify Feature tests to share a context
- Implement 002 - Choose Passage - Simple Scenario
- Fix major Bug in choose passage implementation

### V2 H8

#### What is the most important thing I can accomplish in this hour for this app?

So that I can ensure the program is highest quality,
I should ensure all the feature tests are passing 100%

#### Completed

- Complete 002 - Choose Passage feature tests
- Enable calling of a step from within another step
- Began 003 - View Entry Color Coding


### V2 H9

#### What is the most important thing I can accomplish in this hour for this app?

- Refocus on the app and remove the system features that are causing trouble (Cucumber/Yadda Testing)
- Replace this framework with simple QUnit tests

#### Completed

- Remove yadda runner
- Reimplement first feature as simple qunit feature


### V2 H10

#### What is the most important thing I can accomplish in this hour for this app?

- Rewrite all the feature tests as simple feature unit tests
- Remove the feature folder
- Next hour must be implementation of new features

#### Completed

- Rewrite 002 - Choose Passage
- Fix Choose Passage to always display last chosen passage

### V2 H11

#### What is the most important thing I can accomplish in this hour for this app?

- Finish rewriting the feature steps as feature unit tests
- Remove the feature steps folder
- Extend features: Add Verse to DisplayPassage and ChangePassage

#### Completed

- Rewrite 003 - DisplayEntryColorCoding
- Pass 003 - DisplayEntryColorCoding

### V2 H12

#### What is the most important thing I can accomplish in this hour for this app?

- Clean Up
- Publish the app
	- GitHub
	- WebApp
	- PhoneGap
	- Blog

#### Completed

- Clean Up
	- Remove the feature steps folder
	- Refactor Display Entry Color Coding
	- Fix "refresh" error
- Publish
	- GitHub
	- Phone Gap
	- Web App
	- Blog


### V3 H1

#### What is the most important thing I can accomplish in this hour for this app?

Focus on one verse with context to improve usability

#### Completed

- Show loading message briefly every time when passage is changed
- Add verse to passage choosing


### V0.3 H2

#### What is the most important thing I can accomplish in this hour for this app?

Ensure the single verse is displayed with context

#### Completed

- Show only one verse
- Show adjacent verses in chapter


### V0.3 H3

#### What is the most important thing I can accomplish in this hour for this app?

Display Entry Popup with definition and details

#### Completed

- Tweaked Verse Display
- Add UI Model interfaces to enable typesafe ui only properties
- Add DisplayEntryDetails structure


### V0.3 H4

#### What is the most important thing I can accomplish in this hour for this app?

Finish Display Entry Details

#### Completed

- Load Entry Details in View Model



### V0.3 H5

#### What is the most important thing I can accomplish in this hour for this app?

Show details in UI

#### Completed

- Change back to Knockout with dustJS


### V0.3 H6

#### What is the most important thing I can accomplish in this hour for this app?

Show details as popup

#### Completed

- Show details as popup


### V0.3 H7

#### What is the most important thing I can accomplish in this hour for this app?

Link to references

#### Completed

- Show references in popup when clicked


### V0.3 H8

#### What is the most important thing I can accomplish in this hour for this app?

Remove jQueryMobile and other bloat libraries

#### Completed

- Remove jQueryMobile references
- Add skeleton css
- Remove unneeded files
- Fix orphaned verse number


### V0.3 H9

#### What is the most important thing I can accomplish in this hour for this app?

Implement navigation to next verse

#### Completed

- Fix scroll bar always visible
- Goto next and previous verses


### V0.3 H9

#### What is the most important thing I can accomplish in this hour for this app?

Upload the results for testing

#### Completed

- Tweak UI
- Fix failing tests
- Upload to website


### V0.3 H10

#### What is the most important thing I can accomplish in this hour for this app?

?Finish blog entry


### V1.0 H1

#### What is the most important thing I can accomplish in this hour for this app?

Prepare to Publish to AppStore


#### Tasks

- Make Screen Shots


### V1.0 H2

#### What is the most important thing to do?

Apply some shine to the UI:

- Improve styling for previous & next buttons


### V1.0 H3

#### What is the most important thing to do?

- Review Summary
- Create About page


### V1.0 H4

#### What is the most important thing to do?

- Add Icons to About Page
- Save Screenshots
- Sync with Github
- Fill out Google Play Info

### V1.0 H5

#### What is the most important thing to do?

- Publish to Google Play

#### Completed

- Created a signing key and built a release build on PhoneGapBuild

### V1.0 H6 (1st 30 Min)

#### What is the most important thing to do?

- Publish to Google Play
	- Upload apk to Google Play
	- Finish completing the Distribution agreements
	- Hit Publish!
	- Celebrate!

## V1.1

### 2014-06-26 6:04-6:05 Plan

I will fix the font problem on older Android

### 6:06-6:30

- Researching Fonts
- Add Google Analytics

### 6:40-6:55

- Add Font for Greek





### NEXT

- Confirm app submission to Google Play

- Submit to InMobi Publish
- Confirm app submission to InMobi

- Create Blog Post
- Update GitHub Readme info
- Update My Profile on Careers 2.0


- Submit to Windows Store
- Submit to Apple Store
