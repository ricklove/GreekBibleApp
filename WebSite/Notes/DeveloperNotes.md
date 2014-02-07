### File Structure

- Notes
	- Developer Notes
		- Required Tools
		- Setup
		- Interesting Techniques
	- Release Notes
		- Summary
		- Feature Descriptions
		- Version Changes
	- ScreenShots
- Scripts
	- js
		- Javascript Source Files (Not Generated)
		- External: Code from outside sources and libraries
	- ts
		- TypeScript
		- *.ts files: TypeScript Source Code
		- *.js files: Generated Javascript
		- External: Code from outside sources and libraries
- Styles
	- css
		- CSS Source Files (not generated)
	- sass
		- Sass Files created using Compass
		- *.scss - Sassy CSS source
		- *.css - Generated CSS


### Environment & Project Setup (Pre-Project)

#### Tools

- Visual Studio Express 2012 - Web
- Git Extensions for Windows
- TypeScript for VS
	- To Enable Compile on Save:
		- Tools/Options
		- > Text Editor/TypeScript/Project/General
		- > Automatically Compile...
	- TODO: Create a bat file to produce one js file for release (Indivudual files is good during Testing)
- NuGet Package Manager - VS Extension
- FAIL: Chutzpah Console (Extensions not Enabled for VS Express)
	- Download Console and unzipped to my Tools Folder
	- Created a bat file to run all the tests in the ts directory
		- chutzpah.console.exe ../WebSite/Scripts/ts /testMode TypeScript /openInBrowser
	- FAIL: This takes a long time to run and it failed to run a valid test. Testing in browser with a qunit tag enables debugging in browser and is fast.
	 
#### Libraries

- jQuery Mobile
	- Copied Code from Demo to get started
		- jQuery.js
		- jQueryMobile.js
		- Default Theme Css
		- Images
	- TypeScript Definitions
		- NuGet PM> Install-Package jquery.TypeScript.DefinitelyTyped
		- FAILED: NuGet PM> Install-Package jquerymobile.TypeScript.DefinitelyTyped
		- NuGet PM> Install-Package jquerymobile.TypeScript.DefinitelyTyped -Version 0.1.2
- qUnit
	- qUnit JS & CSS
	- TypeScript Definitions
		- NuGet PM> Install-Package qunit.TypeScript.DefinitelyTyped

- KnockoutJS
	- knockout JS
	- TypeScript Definitions
		- NuGet PM> Install-Package knockout.TypeScript.DefinitelyTyped