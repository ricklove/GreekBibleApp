Feature: 004 - View Entry Definition
As a user,
I can view the definition for an entry
So that I can understand the meaning of the greek word


Scenario: should display the definition of an entry

	Given a passage is loaded
	When the user selects an entry
	Then the definition should be displayed
