- Create simple UI for a single hardcoded Chapter (James 1)
	- User Features:
		- X: DisplayPassageText
	- System Features:
		- X: ParsePassageText
	- Core:
		- X: Passage Interfaces
	- Tasks
		- X: Refactor User and System File Structure
			- X: Move Data Interfaces to Core Folder
			- X: Move ParsePassageText to System Folder
			- X: Move SampleData to ParsePassageText_TestData
			- X: Rename DisplayGreekText to DisplayPassageText
		- X: Create Tests for ParsePassageText
			- X: Move Tests to correct file: "Will load first word from Sample - James 1"
			- X: Test that the codes are loaded
			- Test that the codes are parsed correctly
		- Create Tests for DisplayPassageText
		- X: Display Text on page
		- X: Display Details on page as text
		- Display the Book Chapter and Verse at proper divisions

- Display Details on page with color
	- Tasks
		- Fix the color coding of the details


Future:
- Allow User to select a book and chapter
	- User Features:
		- ChangePassage
	- System Features:
		- LoadPassageText
