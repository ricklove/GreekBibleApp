### Overview

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

### Future

- QUnit Pavlov Plugin - BDD
	- This looks like a good plugin to enable Behavior Driven Design language for QUnit tests
	- Would Require a TypeScript Definition File to be created

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
	- SOLUTION: Consider alternative constructions for the viewModel
		- Flat static view model object that that implements multiple interfaces
		- Late construction of computed knockout fields