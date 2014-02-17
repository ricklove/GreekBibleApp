Feature: View a Greek Passage
As a user,
I can view a passage of greek
So that I can examine the greek words and their details


Scenario: should display a passage

   When the app is loaded
   Then a passage should be displayed


Scenario: should display a default passage

   Given this is the first run
   When the app is loaded
   Then a default passage should be displayed


Scenario: should display the last passage

   Given this is not the first run
   When the app is loaded
   Then the last passage should be displayed

