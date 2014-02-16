### Version 1

- [X] Create simple UI for a single hardcoded Chapter (James 1)
	- [X] User Features:
		- [X] DisplayPassage
			- [X] DisplayEntryText
			- [X] DisplayEntryDetails
			- [X] DisplayEntryColors
	- [X] System Features:
		- [X] ParsePassageText
	- [X] Core:
		- [X] Passage Definitions
	- [X] Tasks
		- [X] Refactor User and System File Structure
			- [X] Move Data Interfaces to Core Folder
			- [X] Move ParsePassageText to System Folder
			- [X] Move SampleData to ParsePassageText_TestData
			- [X] Rename DisplayGreekText to DisplayPassageText
		- [X] Create Tests for ParsePassageText
			- [X] Move Tests to correct file: "Will load first word from Sample - James 1"
			- [X] Test that the codes are loaded
		- [X] Display Text on page
		- [X] Display Details on page as text
		- [X] Rename DisplayPassageText to DisplayPassage
		- [X] Display Verse Numbers

- [X] Allow User to select a book and chapter
	- [X] User Features:
		- [X] ChangePassage
	- [X] System Features:
		- [X] LoadPassageText
	- [X] Tasks
		- [X] Populate Book Names
		- [X] Populate Chapter Count when the Book is chosen
		- [X] Reset Chapter to 1 when the Book is chosen
			- [X] Change to Options binding
			- [X] BUG: jQueryMobile does not update select when the value has changed, trying selectOptions as workaround
		- [X] Load Passage after choosing chapter
		- [X] Apply jQueryMobile Template after repopulating
			- [X] Create RefreshJQM binding
		- [X] Divide Data into Chapters
		- [X] Download Chapter with Ajax


- [X] Publish
	- [X] Verify that App is Working Online
	- [X] Create Release Branch
	- [X] Write Blog Entry
	- [X] Screen Shots
	- [X] Publish Website
	- [X] Publish Blog about App
	- [X] Push to GitHub


### Version 2

- [X] Show loading screen

	- [X] Minimal files for loading (all in html)
		- [X] Single script dependency
		- [X] Single style dependency
		- [X] Single image dependency

- [X] Enable Offline Mode

	- [X] Create AppManifest to allow offline 
	- [X] Load in iframe from online app, then switch over with prompt
		-  [X] download all resources

- [X] Show loading message when waiting for the chapter to download
- [X] Show error message if failed to download

- [X] Focus on Chapter Choice after choosing Book


### Version 3

- [ ] Refactor ViewModel
	- [ ] Move Passage data to DisplayPassage
		- [ ] Change LoadPassage to ShowPassage
		- [ ] Reload Last Passage (using localStorage)
	- [ ] Change to static object with interfaces instead of classes


- [ ] Display Entry Details (James 1)
	- [ ] User Features:
		- [ ] DisplayPassage
			- [ ] DisplayEntryConcordancePopup
	- [ ] System Features:
		- [ ] LoadConcordance
	- [ ] Core:
		- [ ] Concordance Definitions
	- [ ] Tasks
		- [X] Create Tests for ParsePassageText
			- [ ] Test that the codes are parsed correctly

- [ ] Improve Performance
	- [ ] Add Device Metadata to enable web app features
	- [ ] Use CDN for External sources where possible

- [ ] Create Tests for Every Feature
	- [ ] BDD Tests for every user feature
	- [ ] TDD Tests for every system feature

- [ ] Rename "System" features to "Support" features
	- [ ] Redefine "System Features": Features that provide non-app specific functionality
	- [ ] Define "Support Features": Features that provide underlying functionality for User features

- [ ] Create Documentation for Every Feature

- [ ] Enable PhoneGap

- [ ] Publish
	- [ ] WebApp
		- [ ] Make ScreenShots
	- [ ] PhoneGap
	- [ ] GitHub
	- [ ] Blog

