# 444_driftr
A basic React prototype for matching adoptees with potential parents

# System Installation
This prototype is to be built as a React App - instructions on how to do so are detailed in REACT_README.md

# Operation
The prototype launches onto the application's home page, from which the user can read the "About Us"
section, and log in.  Clicking Log In redirects the user to the login page, in which temporary or permanent 
credentials may be entered.  If temporary credentials are entered, the user will be taken to a page to enter 
their permanent credentials.  Once permanent credentials are entered (either on the login screen or in the 
aforementioned screen), users will be taken to their respective landing page, as an Adult, a Child, or a Facilitator.
From here, Parents and Children are able to view prospective profiles, and proceed through their matching processes.
Facilitators are able to review completed matches, and approve matches to move forward in the adoption process.

# Unsupported Features and Known Bugs

## Unsupported Features
- Matching algorithm
    - Matching is simulated in order to demonstrate the front end
- Filters
    - Filters are present on the evaluation pages, but have no impact on the displayed list
- Account Creation
    - Faciliators can enter information for a new account, but new accounts cannot be created
- Account Registration
    - A dummy account that is not registered exists, but cannot be fully registered
    - Creating a  username and password as part of this step has no impact on the dummy account
- Matching
    - Accepting or decling a match has no impact

## Known Bugs
- The system currentlyt has no known bugs