<p>
<h1> Javascript-Hangman-Game </h1>
Available to view here: https://emcglackenr1.github.io/Vanilla-Javascript-Hangman-Game/
</p>
<p align="center">
<img src="https://user-images.githubusercontent.com/64873698/131227623-cd5cb41d-8985-411b-89c2-5ed54fd645b5.JPG" width="500" alt="Hangman Design Mid Game">
</p>
<p>
Pure JS Hangman Game. Inspired by Codepen projects such as: 
<a href="https://codepen.io/simonjsuh">simonjsuh</a>,
<a href="https://codepen.io/tallulahh">tallulahh</a>
and
<a href="https://codepen.io/mevko">mevko.</a>
</p>

<p>
  As well as content from: Isaacks, J.D. (2018) <a href="https://www.manning.com/books/get-programming-with-javascript-next"><i> Get Programming with JavaScript Next</i></a>
</p>

<p>
I am currently in the process of adding to this and editing it.  
</p>

<p>
<h3> Keyboard </h3>

The site is responsive so that it works on any type of device. The layout, text and image size adjust to maintain usability. One example of this can be seen in the keyboard design:

<table align="center">
  <tr>
    <th> Keyboard Mobile </th> 
    <th> Keyboard Desktop </th>
  </tr>
   <tr> 
<td><img src="https://user-images.githubusercontent.com/64873698/131227845-e89ca6c7-63db-4786-b8d1-06ed86469ee6.JPG" width="auto" alt="Keyboard mobile"></td>
<td><img src="https://user-images.githubusercontent.com/64873698/131227878-a9928c98-ac76-44d0-9605-9083e8ee0c04.JPG" width="auto" alt="Keyboard desktop"></td>
   </tr>
  </table>
</p>

<p>
The keys also respond to user interaction by changing colour when the user hovers over them:
  </p>
  
  <p align="center">
<img src="https://user-images.githubusercontent.com/64873698/131762127-673bb335-e293-47eb-8cb8-b851cf97363f.jpg" width="200" alt="Demonstrating Hover1">
  <img src="https://user-images.githubusercontent.com/64873698/131762119-5faaced9-2ebb-4dce-8b4c-a649168870e9.jpg" width="200" alt="Demonstrating Hover2">
</p>
  
  <p>
  And fading when they have already been selected. Once a letter is guessed using the keyboard there would be no need to guess the letter a second time. So it is disabled. By fading previously selected letters the user is reminded which they have already guessed.
  </p>
    <p align="center">
  <img src="https://user-images.githubusercontent.com/64873698/131762185-0c8c0004-f433-4d89-95a1-0db46af14d48.JPG" width="auto" alt="disabled buttons">
   </p>

<p>
  
<h3> Hangman Art </h3>

<table align="center">
  <tr>
        <th> 0 Mistakes </th>
      <th> 1 Mistakes </th>
    <th> 2 Mistakes </th>
  </tr>
<tr>
  
  <td> <img src="https://user-images.githubusercontent.com/64873698/131161134-3c006101-38e0-48ed-8c21-f0b61a66c535.jpg" width="200" alt="Hangman 1 Guess Taken"></td>
  <td> <img src="https://user-images.githubusercontent.com/64873698/131161138-188fa0f0-5926-42db-9b08-7ca98bb439e5.jpg" width="200"  alt="Hangman 2 Guesses Taken"></td>
  <td> <img src="https://user-images.githubusercontent.com/64873698/131161141-44c3eb7f-9f9c-4d58-b20a-30589238d711.jpg" width="200"  alt="Hangman 3 Guesses Taken"></td>
</tr>
    <tr>
        <th> 4 Mistakes </th>
      <th> 5 Mistakes </th>
    <th> 6 Game Lost </th>
  </tr>
<tr>
  <td> <img src="https://user-images.githubusercontent.com/64873698/131161145-60f7729d-72f4-4c12-9c14-1a86a02141aa.jpg" width="200"  alt="Hangman 4 Guesses Taken"></td>
  <td> <img src="https://user-images.githubusercontent.com/64873698/131161153-df1e96f1-3437-43c1-92d6-0b41b17fb221.jpg" width="200"  alt="Hangman 5 Guesses Taken"></td>
  <td> <img src="https://user-images.githubusercontent.com/64873698/131161155-373b82f1-3daa-403b-abe5-a05f884292eb.jpg" width="200"  alt="Hangman 6 Guesses Taken"></td>
</tr>
</table>

<table align="center">
  <tr>
    <th> Win </th>
      <th> Lose </th> 
   <tr> 
   <td>
       <img src="https://user-images.githubusercontent.com/64873698/131195318-08784260-96cd-4fd7-aa12-43fded006a26.jpg" width="200"  alt="Hangman Image Win">
   </td>
   <td>
    <img src="https://user-images.githubusercontent.com/64873698/131189413-9b6253a6-09ba-4d14-a131-d7bf48455a4e.jpg" width="200"  alt="Hangman Image Lose">
   </td>
   </tr>
</table>
</p>
