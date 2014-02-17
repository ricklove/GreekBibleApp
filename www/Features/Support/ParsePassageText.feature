Feature: Parse the Passage Text
As a feature,
I can parse text into a passage object
So that I can access the details of the passage

Scenario: should parse the first entry

	Given a sample text
	When the text is parsed
	And the first entry is accessed
	Then the greek word should be correct
	And the entry details should be correct

Scenario: should parse the last entry

	Given a sample text
	When the text is parsed
	And the last entry is accessed
	Then the greek word should be correct
	And the entry details should be correct


