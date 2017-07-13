<h1>Linked List Project</h1>
<p>by Michael Marlow and Rufus Welsh</p>
<h2>Project Goals</h2>
<ul>
  <li>Build a web app to store bookmarks</li>
  <li>Design app with UX in mind</li>
  <li>Allow users to flag cards as read</li>
  <li>Manage submitted links with delete and mass delete</li>
  <li>Use JQuery to build the app</li>
  <li>Use Waffle.io integration to GitHub for Kanban project management</li>
  <li>Manage Pair relationship</li>
  <li>Use multiple Pairing techniques</li>
  <li>Style page responsively using liquid css techniques and media queries</li>
</ul>
<h2>Approach</h2>
<p>We met initially to discuss the project and organize work. We established a GitHub repo early in the project, and integrated waffle.io for issue management using the Kanban board.</p>
<p>After establishing the HTML skeleton, we worked independently to style portions of the page, merging our branches on GitHub. With initial styling complete, we used driver-navigatoring pairing style to build the jquery for page functionality. We managed each phase of the project with the Kanban board, working only on posted issues and committing frequently as issues passed testing. We created pull requests at the end of each milestone or at the end of a pairing session.</p>
<p>We discussed all required changes that varied from the given comp as we progressed through the phases. We decided hiding the "Clear All Read" button on load established a simple flow. Once a card was added, the appearance of the button and counters provided clues to the user of the additional functionality of the app. When a user added enough cards to be overflow the page, the scroll bar appears and shifts the cards slightly. We considered adjusting the CSS to remove the shift, but decided the shift provides a visual clue to the scroll bar needed to view all cards.</p>
<p>Near the end of the project, we discussed and split the remaining issues on the Kanban board for individual work. We worked separately at the same table, providing constant feedback for each issue.</p>
<h2>App Basics</h2>
<p>The initial state of the app is 2 input fields with an enter button below. The user is required to enter values in both fields before the Enter button is enabled. The enter button toggles color and font style for a strong user cue when enabled.</p>
<p>When a card is added, the Clear All Read button and Total/Read/Unread counters appear on the page. There are no instructions for the Read functionality, so the button and counter reveal cues the user that more functionality is available. The Clear All Read button starts in the disabled state as a reference to the initial disabled state of the Enter button. This signals that other actions are possible to enable the button. The button mentions the exact text in the Read button on the card, creating a link between the two objects. The Card and Clear Button effects added after clicking the Read button on a card solidifies the relationship between the buttons.</p>
