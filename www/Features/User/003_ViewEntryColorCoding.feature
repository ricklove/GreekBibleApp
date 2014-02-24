Feature: 003 - View the Color Coding for an Entry
As a user,
I can view the color coding for each entry of a passage
So that I can see the entries which have a commonality


Scenario: should display the same color coding for the same code

	Given a passage is displayed
	Then entries with the same [PART] code should have the same color
	Where:
		PART
		PartOfSpeech
		Morph

Scenario: should display a different color coding for a different code

	Given a passage is displayed
	Then entries with a different [PART] code should have the same color
	Where:
		PART
		PartOfSpeech
		Morph