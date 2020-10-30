# PicFlix ([Demo](https://youtu.be/9uz6iKWbueU))

## What is It?
PicFlix is a browser game you can play with your friends virtually. The game is simple: guess the name of a tv show or movie using images (no, you can't use a poster). 

## How to:
![Home Page](/screenshots/home.png)

### Create a Game
- Click on 'creating' or 'Create a Room' in the navbar
- Enter a username for yourself and a room name
![Create a Room](/screenshots/create-room.png)
- Once created, click on the 'Home' link in the navbar and you will be redirected to your room. At the top, a link has been generated for you. You'll need to send that link to your friends so they can join the game (see next section for joining a game)
![Created Room Home Screen](/screenshots/create-room-home.png)


### Join a Game
- Click on 'joining' or 'Join a Room' in the navbar
- Enter a username for yourself and use the room link that was sent to you (notice that room link is the same as in the previous section)
![Join a Room](/screenshots/join-room.png)
- Once joined, click on the 'Home' link in the navbar and you will be redirection to the room for which you were invited. Notice that the player list has been updated in the screenshot below
![Joined Room Home Screen](/screenshots/join-room-home.png)

### Play
- Once all players are in the room, the game can begin. 
- If you are making the other players guess the tv show/movie, use the searchbar to look for images for a given search term. Add images to and remove images from the 'Current Images' section as needed. Note: if you are a guesser, you will not be able to see the searchbar, search term, resulting images, or the 'remove' button on Current Images (that would defeat the purpose of the game). Note the difference in screenshots below between 'aneesh' (left) and 'jordan' (right, guesser):
![Side by Side](/screenshots/side-by-side.png)
- Use the chat to make guesses and signal to the room when a correct guess has been made
- Common methods:
    - search and add images for each word in a title. *Ex. [image for "game"] + [image for "throne"] = "game of thrones"*
    - incorporate a little puniness during your turn. *Ex. [image for "hair"] + [image for "pot"] = "harry potter"* (bit of a stretch, I know)

## Using this Repo
Once the repo has been downloaded and packages have been installed (for both *client* and *server*), change into the *client* directory (*cd client/*) and run *npm run full* (this will simultaneously start both servers)

## Future Work
- add the ability to make other people a host and give them a turn (currently, only the game creator can share images)
- add a way to flag correct guesses and add points accordingly (currently no point system in place)

## Technologies Used
- React: frontend
- Node + Express: backend
- Unsplash API: images
- SocketIO: connection management
- Boostrap: styling

## Contributors
- Aneesh Kodali @aneeshkodali
- Jordan Cavins @nykez