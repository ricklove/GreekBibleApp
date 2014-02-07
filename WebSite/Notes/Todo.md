- Create simple UI for a single hardcoded Chapter (James 1)
	- User Features:
		- DisplayPassageText
	- System Features:
		- X: ParsePassageText
	- Core:
		- Passage Interfaces
	- Tasks
		- X: Refactor User and System File Structure
			- X: Move Data Interfaces to Core Folder
			- X: Move ParsePassageText to System Folder
			- X: Move SampleData to ParsePassageText_TestData
			- X: Rename DisplayGreekText to DisplayPassageText
		- Create Tests for ParsePassageText
			- X: Move Tests to correct file: "Will load first word from Sample - James 1"
		- Create Tests for DisplayPassageText


Future:
- Allow User to select a book and chapter
	- User Features:
		- ChangePassage
	- System Features:
		- LoadPassageText
