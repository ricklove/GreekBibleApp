### Version 1

- [X] Create simple UI for a single hardcoded Chapter (James 1)
	- [X] User Features:
		- [X] DisplayPassage
			- [X] DisplayEntryText
			- [X] DisplayEntryDetails
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

- [ ] Allow User to select a book and chapter
	- [ ] User Features:
		- [S] ChangePassage
	- [X] System Features:
		- [X] LoadPassageText
	- [ ] Tasks
		- [X] Populate Book Names
		- [X] Populate Chapter Count when the Book is chosen
		- [S] Reset Chapter to 1 when the Book is chosen
			- [X] Change to Options binding
			- [X] BUG: jQueryMobile does not update select when the value has changed, trying selectOptions as workaround
		- [ ] Focus on Chapter Choice after choosing Book
		- [X] Load Passage after choosing chapter
		- [ ] Apply jQueryMobile Template after repopulating
			- [X] Create RefreshJQM binding
		- [X] Divide Data into Chapters
		- [X] Download Chapter with Ajax

- [ ] Publish
	- [ ] Upload Source to Website
	- [ ] Verify that App is Working Online
	- [ ] Publish Blog about App


### Version 2

- [ ] Reload Last Passage (using localStorage)

- [ ] Display Entry Details (James 1)
	- [ ] User Features:
		- [ ] DisplayPassage
			- [ ] DisplayEntryColors
			- [ ] DisplayEntryConcordancePopup
	- [ ] System Features:
		- [ ] LoadConcordance
	- [ ] Core:
		- [ ] Concordance Definitions
	- [ ] Tasks
		- [X] Create Tests for ParsePassageText
			- [ ] Test that the codes are parsed correctly
		- [ ] Display the Book Chapter and Verse at proper divisions
		- [ ] Rename DisplayPassageText to DisplayPassage
		- [ ] Create Tests for DisplayPassage
		- [ ] Display the color coding of each entry

- [ ] Enable Offline Mode
	- [ ] Create AppManifest to allow offline 
	- [ ] Add Device Metadata to enable web app features
	- [ ] Use CDN for External sources where possible