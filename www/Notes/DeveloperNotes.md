### Testing Organization

#### Types

- Behavior Tests

	- The user concerns: 
		- "What does the user want to accomplish?"
		- "Are we creating the right feature?"
	- ".feature" files with Gherkin language using GWT scenarios
		- Given ...
		- When ...
		- Then ...
	- "_Steps" files to provide Step Definitions for the .feature files
	- Run by YaddaRunner using QUnit

- Unit Tests

	- Verification of correctness for a single unit (method)
		- "Does this work correctly?"
	- "_Tests" file paired with each code file
	- Using QUnit directly
	- If possible, indicate GWT in comments:
		- //Given ...
		- //When ...
		- //Then ...

- Integration Tests

	- Tests whole system to verify all parts are working
	- Use real system components instead of using mock objects
	- Built on basic step definitions, but overrides steps to remove mock objects
		- "_ITSteps"
	- Alternatively can be built as Unit Tests
		- "_ITTests"
	- Example:
		- Test Browser DOM (intead of just the ViewModel)
		- Load data from files (instead of hard-coded data)
		- Call web services (instead of mock services)


#### Naming

- User concern's
	- Named from user's perspective
	- "What does the user want to accomplish?"
	- I want to [NAME]
	- Examples: 
		- ViewPassage
		- ChoosePassage
- Feature Implementations
	- Named from program's perspective
	- "What does the program do?"
	- Examples
		- DisplayPassage
		- ChangePassage

#### File Organization

- Feature Folder

	- .feature files
		- Named after UserConcern
	- StepLibrary Folder
		- "_Steps" Step Definition files
			- Named after FeatureImplementation
	- IntegrationStepLibrary Folder
		- "_ITSteps" Step Definition files
			- Override default step definitions as needed to remove use of mock objects
			 
- Code Folders

	- System
		- System Feature Implementations
		- "_Tests" Unit Tests
		- "_ITTests" Integration Unit Tests
	- Core
		- Core Definitions
	- Support
		- Support Feature Implementations
		- "_Tests" Unit Tests
		- "_ITTests" Integration Unit Tests
	- User
		- User Feature Implementations
		- Testing done by Behavior tests	


### 5HourAppSystem V1-V3 Overview

I added a few system features to improve the usability:

- App Loader:
	- Display a simple loading splash screen while loading dependencies
	- Load all css and javascript dependencies after loading page
- Online to Offline Web App
	- Load the offline web app files without slowing down the initial page visit
	- Original page is Online web app
	- It loads the appCache using an iframe
	- Upon the appCache being loaded, it redirects to the offline version
- BDD Testing
	- Enable BDD "feature" testing with good QUnit formatting output
	- Define features with Cucumber style .feature files
	- Test features using step definitions as part of a step library
	- User a Yadda/QUnit test runner


### Greek Bible V1 Overview

The project was a great success for my first 5HourApp. Although, it took about 8 hours plus some extra time researching tools and setting up the environment.

I was able to rewrite the entire GreekBible. I only used a few pieces of logic from the oldGreekBible. 
It was unneccesary to reuse code because the frameworks I used actually made the code very simple to write from scratch.

Bottom Line: I was able to write a $5,000 web app that runs everywhere in about 8 hours. That's not bad!

#### 5-Hour App

This proves that the 5HourApp concept is valid. I can actually create a fully functioning app to release in around 5 hours. 
The important part is to trim features and identify the most important user features to implement.

#### Feature Oriented Software Development

I feature organized my code files. This enabled me to focus on one feature at a time. It also allowed me to have a good separation of concerns between user features
and the underlying system features that they need to function.

I identified two possible ways to divide a ViewModel across multiple files. In this project I used a mainViewState with a sub object for each feature. 

An alternative would be to use typescript interfaces and a static object that is gradually implemented.

#### KnockoutJS

KnockoutJS is great! This was my first time to use it and it was a pleasure. I highly recommend it! I will be using it as my UI framework of choice.

#### jQueryMobile

jQueryMobile worked fine with all the defaults in place. 
However, one bug cost me about an hour because the generated jQueryMobile UI did not match the native UI behind it.

Next time something is not changing, inspect the DOM and see if there is a lone SPAN tag that doesn't match the actual $(element).val() or $(element).text().
Ensure that the proper refresh call is being made for jQueryMobile, which is different for each element type.

I created a refreshJQM Knockout binding to deal with this. I will expand it to automatically call the proper refresh code according to the bound element type.



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
		- Core: Definitions for core types
		- System: Features that are invisible to the user, but provide functionality for the User Features
		- User: Features which represent the user tasks and concerns
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
- QUnit
	- QUnit JS & CSS
	- TypeScript Definitions
		- NuGet PM> Install-Package qunit.TypeScript.DefinitelyTyped

- KnockoutJS
	- knockout JS
	- TypeScript Definitions
		- NuGet PM> Install-Package knockout.TypeScript.DefinitelyTyped

- LinqJS
	- linq JS
	- TypeScript Definitions
		- NuGet PM> Install-Package linq.TypeScript.DefinitelyTyped

- Yadda - BDD - Behavior Driven Design Testing in Browser (similar to cucumber)
	- yadda JS
	- Created own simple TypeScript Definition placeholders using "any"



#### Optional

- requirejs
	- Advantages:
		- Async script loading as needed
	- Disadvantages:
		- Complexity
			- Namespaces works fine and is simple
		- Difficult to concat and min js
		- Problems with PhoneGap:
		- Workaround for PhoneGap basically requires concatenating and removing require dependencies
		- https://www.nothing.ch/en/research/using-optimised-requirejs-combination-phonegap


### Bugs

- BUG: jQueryMobile was not updating the visible part of a select element (the native element was being updated, but the span on top was remaining an old value)
	- FIX: (<any>$(element)).selectmenu('refresh');
- FAIL: Chutzpah Console caused wasted time and is unneccessary
- DESIGN BUG: Conflict with TypeScript and componentized view models and knockout:
	- TypeScript does not run constructors until the field are constructed
	- The viewModel components are given a reference to their "owner viewModel" in the constructor
	- This "owner viewModel" is null while the component fields are being constructed
	- Knockout computed properties run the "read" method at initializing in order to setup dependencies
	- RESULT: Child components cannot have a computed field that accesses the viewModel in the "read" calculation
	- SOLUTION: Set "deferEvaluation: true" on the computed object 
		- X Static view model object that implements multiple interfaces, still using component structure
			- NO: Static does not enable us to create a view model to work with in testing


### Git Commit Messages Format

I have been pingballing back and forth trying to figure out a good format for the git commits. After some research I found this:

	Capitalized, short (50 chars or less) summary

	More detailed explanatory text, if necessary.  Wrap it to about 72
	characters or so.  In some contexts, the first line is treated as the
	subject of an email and the rest of the text as the body.  The blank
	line separating the summary from the body is critical (unless you omit
	the body entirely); tools like rebase can get confused if you run the
	two together.

	Write your commit message in the present tense: "Fix bug" and not "Fixed
	bug."  This convention matches up with commit messages generated by
	commands like git merge and git revert.

	Further paragraphs come after blank lines.

	- Bullet points are okay, too

	- Typically a hyphen or asterisk is used for the bullet, preceded by a
	  single space, with blank lines in between, but conventions vary here

	- Use a hanging indent

So, I will be using this from now on and forget about trying to track the hours