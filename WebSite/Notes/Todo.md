### Version 1

- [ ] Create simple UI for a single hardcoded Chapter (James 1)
	- [ ] User Features:
		- [ ] DisplayPassage
			- [X] DisplayEntryText
			- [X] DisplayEntryDetails
			- [ ] DisplayEntryColors
	- [ ] System Features:
		- [X] ParsePassageText
	- [ ] Core:
		- [X] Passage Definitions
	- [ ] Tasks
		- [X] Refactor User and System File Structure
			- [X] Move Data Interfaces to Core Folder
			- [X] Move ParsePassageText to System Folder
			- [X] Move SampleData to ParsePassageText_TestData
			- [X] Rename DisplayGreekText to DisplayPassageText
		- [X] Create Tests for ParsePassageText
			- [X] Move Tests to correct file: "Will load first word from Sample - James 1"
			- [X] Test that the codes are loaded
			- [ ] Test that the codes are parsed correctly
		- [X] Display Text on page
		- [X] Display Details on page as text
		- [ ] Display the Book Chapter and Verse at proper divisions
		- [ ] Rename DisplayPassageText to DisplayPassage
		- [ ] Create Tests for DisplayPassage
		- [ ] Display the color coding of each entry


- [ ] Allow User to select a book and chapter
	- [ ] User Features:
		- [ ] ChangePassage
	- [ ] System Features:
		- [ ] LoadPassageText

- [ ] Publish
	- [ ] Create AppManifest to allow offline 
	- [ ] Add Device Metadata to enable web app features
	- [ ] Use CDN for External sources where possible


### Version 2