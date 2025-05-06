
<div class="flex-row">
<div class="flex-1 flex-center">

<div>

## VSCode

Improving navigation components for a popular code editor.

<br>

<span class="grey">DURATION: </span> February 2025 (2 Weeks)

<span class="grey">SKILLS: </span> State diagrams, component analysis

</div>

</div>

<div class="flex-1">
<img class="rounded" src='./images/vscode/preview.png' alt="vscode logo"></img>

</div>
</div>

### Overview

Accordion-based organization has become a common practice for applications requiring many items, whether they be files in a computer or layers in a design. 

<br>

I compared the functionality of three widely used accordion systems -- Figma, Finder, and VSCode -- and found a usability opportunity to improve the VSCode's efficiency and accessibility for users. Because accessibility is never a "complete" accomplishment, even industry standard tools always have room for improvement.

<br>


</div>
<div class="image"></div></div>

<div class="spacer-50"></div>

<div style="padding: 1rem; display: flex; align-items: center; justify-content: space-between; margin-bottom: 20px;">
  <div style="width: 30%;">
    <img style="border: 1px solid grey; border-radius: 5px" src="./images/vscode/figma.png" alt="screenshot of Figma's layers panel" style="width: 100%;">
    <div style="text-align: center; width: 100%">Figma's Layers panel</div>
  </div>
  <div style="width: 30%;">
    <img style="border: 1px solid grey; border-radius: 5px" src="./images/vscode/finder.png" alt="screenshot of Finder's file navigation" style="width: 100%;">
    <div style="text-align: center; width: 100%">Finder's file navigation</div>
  </div>
  <div style="width: 30%;">
    <img style="border: 1px solid grey; border-radius: 5px" src="./images/vscode/vscode.png" alt="screenshot of VSCode's explorer panel" style="width: 100%;" alt="Image 3" style="width: 100%;">
    <div style="text-align: center; width: 100%">VSCode's Explorer panel</div>
  </div>
</div>

### INPUTS and Outputs

My analysis began with creating input and output tables for the three applications. They all use similar UIs, but small differences in functionality revealed a potential source of frustration:

<br>

  <table style="border-collapse: collapse; width: 100%; border: 1px solid grey;">
    <thead>
      <tr>
        <th style="border: 1px solid white; padding: 8px 12px;">INPUTS</th>
        <th style="border: 1px solid white; padding: 8px 12px;">Figma</th>
        <th style="border: 1px solid white; padding: 8px 12px;">Finder</th>
        <th style="border: 1px solid white; padding: 8px 12px;">VSCode</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th style="border: 1px solid white; padding: 8px 12px;">Mouse/Touchpad</td>
        <td style="border: 1px solid white; padding: 8px 12px;">
        
- Click arrow to expand/collapse layers/groups
- Click layer to select
- Double-click layer name to rename

</td>
        <td style="border: 1px solid white; padding: 8px 12px;">
        
- Click triangle to expand/collapse folders
- Click file/folder to select/open
- Click name once, pause, click again to rename

</td>
        <td style="border: 1px solid white; padding: 8px 12px;">
        
- Click arrow to expand/collapse folders
- Click file to open in editor
- Right click, then select "Rename..." in popup

</td>
      </tr>
            <tr>
        <th style="border: 1px solid white; padding: 8px 12px;">Keyboard</td>
        <td style="border: 1px solid white; padding: 8px 12px;">
        
- Arrow keys to move between layers
- Enter to select
- Cmd + R to rename a selected layer

</td>
        <td style="border: 1px solid white; padding: 8px 12px;">

- Arrow keys to move between file
- Space to preview a file
- Enter to rename a selected file

</td>
        <td style="border: 1px solid white; padding: 8px 12px;">
        
- Arrow keys to move focus
- Space to open a file
- Enter to rename an item

</td>
      </tr>
            <tr>
        <th style="border: 1px solid white; padding: 8px 12px;">Touch (if available)</td>
        <td style="border: 1px solid white; padding: 8px 12px;">
        
- Tap arrow to expand/collapse
- Tap layer to select (mobile app limited)

</td>
        <td style="border: 1px solid white; padding: 8px 12px;">
        
- Tap triangle to expand/collapse
- Tap to open file/folder

</td>
        <td style="border: 1px solid white; padding: 8px 12px;">
        
- Tap arrow to expand/collapse
- Tap file to open

</td>
      </tr>
    </tbody>
  </table>

  <br>

<br>

  <table style="border-collapse: collapse; width: 100%; border: 1px solid grey;">
    <thead>
      <tr>
        <th style="border: 1px solid white; padding: 8px 12px;">OUTPUTS</th>
        <th style="border: 1px solid white; padding: 8px 12px;">Figma</th>
        <th style="border: 1px solid white; padding: 8px 12px;">Finder</th>
        <th style="border: 1px solid white; padding: 8px 12px;">VSCode</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th style="border: 1px solid white; padding: 8px 12px;">Mouse/Touchpad</td>
        <td style="border: 1px solid white; padding: 8px 12px;">
        
- Items include a grey hover state and light blue selected state
- Renaming state opens text editor view, with name fully selected

</td>
        <td style="border: 1px solid white; padding: 8px 12px;">
        
- Light grey hover state matches selected item state
- Selected state gives item blue background and bright border
- Renaming state initally selects text in front of file type suffix

</td>
        <td style="border: 1px solid white; padding: 8px 12px;">
        
- No visible hover state
- Renaming state initially selects text in front of file type suffix

</td>
      </tr>
            <tr>
        <th style="border: 1px solid white; padding: 8px 12px;">Keyboard</td>
        <td style="border: 1px solid white; padding: 8px 12px;">
        
- Focus state is light blue, matching selected state
- Renaming state looks consistent regardless of input method

</td>
        <td style="border: 1px solid white; padding: 8px 12px;">

- Instead of having a focus state, items are selected with keyboard navigation
- Renaming state behaves the same as with mouse input

</td>
        <td style="border: 1px solid white; padding: 8px 12px;">

- Focused state puts bright blue border around item, unique to keyboard use
- Renaming state uses consistent visual text editing, but background depends on selection status

</td>
     <tr>
  <th style="border: 1px solid white; padding: 8px 12px;">Screen Reader</th>
  <td style="border: 1px solid white; padding: 8px 12px;">

- Elements labels are announced (e.g., layers, frames, groups)
- Role-based commands (e.g., "list", "button")
- Limited feedback for hover/selection

</td>
  
<td style="border: 1px solid white; padding: 8px 12px;">

- Items are read with type and name (e.g., "Folder: Projects")
- Selection and renaming states are announced
- Keyboard navigation feedback is consistent

</td>

<td style="border: 1px solid white; padding: 8px 12px;">

- File explorer content is accessible, with file names and types read aloud
- Selection is announced
- Code editing area has line-by-line navigation

</td>
</tr>
      <!-- Add more rows as needed -->
    </tbody>
  </table>

<br>

<br>

Input/output analysis showed that across platforms, navigation through accordion menus is somewhat similar. This is a great aspect for learnability and memorability. However, VSCode's functionality for renaming stood out to me.

<br>

<br>

<div class="flex-row">

<div class="flex-1 flex-center">

<div>

Requiring mouse users to right click, then navigate to "Rename" requires users to slow down and read through a dense menu of items. This is a diversion from the traditional double clicking functionality that both Figma and Finder utilize. This presents a gap in both <strong>efficiency</strong> and <strong>learnability.</strong>

<br>

Additionally, renaming files is a relatively common action to take. Given the ease of access to this feature by pressing Enter for keyboard users, it seems like VSCode want to encourage this to happen. Having to read closely to perform a standard action may present <strong>accessibility</strong> concerns for users who struggle with reading.

</div>

</div>


<div class="flex-1">

<img style="border: 1px solid grey; border-radius: 5px" src="./images/vscode/vscode-nav.gif" alt="right clicking then selecting Rename within VSCode">

</div>

</div>


<br>

### state models

With this usability gap in mind, I created state models to improve VSCode accordion items for both mouse and keyboard users.

<br>

<div class="tabs">
  <input type="radio" id="tabset1-before" name="tabset-1" checked>
  <input type="radio" id="tabset1-after" name="tabset-1">

  <div class="tab-labels">
    <label for="tabset1-before" tabindex=0>Before</label>
    <label for="tabset1-after" tabindex=0>After</label>
  </div>



  <div class="tab-content content-before">

  #### Mouse Users

<div style="max-width: 600px; margin: auto" class="flex-1">
    <img src="./images/vscode/pre-mouse.png" alt="accordion item state diagram for mouse users before redesign" width="100%"></div>
  </div>


  <div class="tab-content content-after">

  #### Mouse Users

<div style="max-width: 600px; margin: auto" class="flex-1">
    <img src="./images/vscode/post-mouse.png" alt="accordion item state diagram for mouse users after redesign" width="100%"></div>
  </div>  </div>
</div>

<br>

Comparing the state diagrams for mouse users, double click functionality fills in gaps for the component. Something I realized afterwards was that the right click and "Rename..." feature doesn't even have to be removed for this to be successful. Having multiple options aids with memorability in this case!

<br>

<div class="tabs">
  <input type="radio" id="tabset2-before" name="tabset-2" checked>
  <input type="radio" id="tabset2-after" name="tabset-2">

  <div class="tab-labels">
    <label for="tabset2-before"  tabindex=0>Before</label>
    <label for="tabset2-after"  tabindex=0 >After</label>
  </div>

  <div class="tab-content content-before">

  #### Keyboard Users

<div style="max-width: 600px; margin: auto" class="flex-1">
    <img src="./images/vscode/pre-keyboard.png" alt="accordion item state diagram for keyboard users before redesign" width="100%"></div>
  </div>


  <div class="tab-content content-after">

  #### Keyboard Users

<div style="max-width: 600px; margin: auto" class="flex-1">
    <img src="./images/vscode/post-keyboard.png" alt="accordion item state diagram for keyboard users after redesign" width="100%"></div>
  </div>  </div>
</div>

<br>

Making a state diagram for keyboard users revealed an additional gap in the component's usability. If users want to rename their current file, but are in the middle of browsing through others, they can jump straight to renaming through Cmd+Enter, a slight variation of the existing renaming input for focused files.

<br>

<br>


<div class="highlight-grid">
<div class="font-lg">
Considering tradeoffs before finalizing</div>

<div>

- Using a code editor requires switchiing between files often, meaning that many clicking actions occur. Clicking actions are thus prone to accidental renaming. This risk is minimized by the use of double clicking, rather than a single reclick like Finder.
- Implementing keyboard shortcuts for otherwise inaccessible functionality can sacrifice learnability for efficiency. However, because renaming a selected file rather than a focused one is a small use case, utilizing unused shortcuts that are listed in VSCode's docs is net positive.

</div>
</div>







### a Revised accordion item

Using Figma, I created a visual for my newly revised component's varying states. [Access the file here for closer reading](https://www.figma.com/design/uN4aEPJfk1cqVcwM9JQwRH/Untitled?node-id=0-1&t=00GuMwJu46h6rRvo-1).

<br>

<div style="max-width: 650px; margin: auto">
<img src ="./images/vscode/revised-annotations.png" alt="annotations on improved functionality for a redesigned component mockup"></div>


<br>

### Reflection

- The accordion items I observed to inform this project were successful through their simplicity. Transforming item names directly into text editors provides a direct visual metaphor for name replacement that seems to be universal across many applications. Because item renaming is so important, accessibility to both mouse and keyboard users (with varying efficiency) is always available.

- In examining how VSCode offers renaming via mouse, I recognized accessibility concerns in requiring readers to scan a large block of text in order to perform an important & somewhat frequent action.

- [Kat Holmes](https://www.youtube.com/watch?v=-iccWRhKZa8&ab_channel=99U) describes inclusive design as a relationship of "matches" and "mismatches" between people and their environments, as opposed to a fix for personal conditions. Making VSCode unintimidating through accessible and familiar navigation helps solve a common "mismatch" for people who believe coding is not "meant" for them.

### Future redesigns

- Renaming using a screenreader in Finder has inconsistencies between the text in the editor and what is read aloud. This has potential for negative impact on users who navigate primarily through audio.

- The renaming text editors in Figma, Finder, and VSCode usefully include double and triple clicking to select larger portions of text. It would be great to see this kind of efficiency made accessible to keyboard users.

- Although this case study focused on expanding mouse functionality, mouse users are usually the priority in the creation of these kinds of components, because they live in laptop-based applications. This often creates a mouse-centric user experience with negative effects for other types of users. It is important that redesigns inspired by this keep this in mind.











<!-- 

Augue efficitur sapien tincidunt aliquam fermentum nec habitant torquent vehicula. Nisi posuere ante aliquet ligula fames. Nec nunc metus tristique aenean volutpat eleifend. Amet viverra bibendum primis erat tempor sem nisl fermentum rutrum? Convallis primis odio cursus metus tristique. Varius commodo ultricies maximus class vivamus, malesuada conubia platea.

### My Solution
Magna natoque porttitor sollicitudin accumsan himenaeos pulvinar gravida. Fringilla ipsum lorem; eu dui rhoncus habitant tellus maecenas. Class tortor orci adipiscing tempus adipiscing ullamcorper. Varius velit cras condimentum enim netus nunc ut rhoncus. Facilisis phasellus cursus nascetur integer erat purus ridiculus vulputate. Hendrerit ac dolor et ut, blandit lorem rhoncus mollis vel. Facilisi nullam montes auctor ligula inceptos fusce. Nunc gravida lorem elementum; nascetur dignissim leo. Potenti molestie egestas nisl euismod purus vitae.

Fermentum laoreet venenatis malesuada pellentesque sit dictum sagittis. Tempus vehicula turpis integer finibus; suspendisse malesuada vestibulum. Turpis diam dis diam ad duis iaculis ridiculus nascetur. Hac varius curabitur; vestibulum quisque gravida aptent tristique hac. Ligula pretium porta nibh dui maximus inceptos litora porta. Suspendisse nunc litora nullam tortor iaculis ultrices eget. Justo ac cursus accumsan est, class tempor hendrerit id. Leo pulvinar leo nullam vitae nunc accumsan mi magnis euismod.

### Reflection

With the [social model of disability](https://www.youtube.com/watch?v=-iccWRhKZa8&ab_channel=99U) in mind, I did x y and z.

Fermentum aliquet taciti consequat eros accumsan nisl. Sollicitudin phasellus lorem nibh eros donec felis aptent massa. Nunc tempor nisi cubilia fames nisl. Gravida aenean porta lectus tempus eleifend tempor litora. Mus varius consectetur litora nascetur netus. Eget dictum et ornare curae mollis posuere. Gravida malesuada porta arcu aptent dictum turpis. Platea tortor tortor morbi ornare proin suspendisse est eget. At maximus gravida; interdum blandit est inceptos. Nec ex leo finibus fermentum faucibus at, nullam integer!
 -->
