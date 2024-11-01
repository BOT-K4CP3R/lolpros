# lolpros

A Node.js library for interacting with the LolPros API. It allows you to search player profiles, retrieve game details, and access the leaderboard.

## Installation

Install the library via npm:
```bash
npm install lolpros
```
Usage
Initialization
Create an instance of the lolpros library to access the API methods.

Endpoints
1. Profile Search
Search for a player's profile by their username.

Method: searchProfile(username)

Parameters:

username (string): The username to search for.
Example:

```javascript
const lolpros = require('lolpros');

lolpros.searchProfile('username')
  .then(profile => console.log(profile))
  .catch(error => console.error(error));
```
2. Game Details
Retrieve details of a specific game using its ID.

Method: getGameDetails(gameId)

Parameters:

gameId (string): The ID of the game to retrieve details for.
Example:

```javascript
const lolpros = require('lolpros');
lolpros.getGameDetails('8cc850c6-c8dc-4188-b4b1-b2f81f86572b')
  .then(gameDetails => console.log(gameDetails))
  .catch(error => console.error(error));
```

3. Leaderboard
Retrieve the leaderboard with customizable pagination, sorting, and ordering.

Method: getLadder(page, pageSize, sort, order)

Parameters:

page (number): The page number (default is 1).
pageSize (number): The number of results per page (default is 50).
sort (string): The sorting field, such as rank.
order (string): The sorting order, asc for ascending or desc for descending.
Example:

```javascript
const lolpros = require('lolpros');

lolpros.getLadder(1, 50, 'rank', 'desc')
  .then(ladder => console.log(ladder))
  .catch(error => console.error(error));
```