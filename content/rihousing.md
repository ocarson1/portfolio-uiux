
<div class="flex-row">
<div class="flex-1 flex-center">

<div>

## RIHousing

Redesigning a useful housing resource for Rhode Islanders.

<br>

<span class="grey">DURATION: </span> March 2024 (2 weeks)

<span class="grey">SKILLS: </span> Web Design, Design Systems

</div>

</div>

<div class="flex-1">
<img class="rounded" src='./images/rihousing/preview.png'></img>

</div>

</div>

### Overview

RIHousing.com provides important housing resources to Rhode Island homeowners, renters, landlords, and more. As a government-affiliated site, it is important that it is trustworthy and appealing to a diverse user base. After finding some frustrating pain points with their original site, I created a redesign that is lightweight and approachable.

<br>
<br>

<img class="rounded" src='./images/rihousing/rihousing-old.png'>

<div style="font-size: 14px; color: white; padding-top: 10px; display: flex; justify-content: center">

*How RIHousing.com currently appears on my 13" laptop*

</div>

### BACKGROUND

The current user experience of RIHousing.com is riddled with usability and accessibility concerns. I organized my observations into five categories:
<br />
<br />

<div class="highlight-grid">
<div class="font-lg">
Learnability
</div>

<div>

- There is no immediate explanation of the organization upon entering
- Abbreviations with no explanation are used
- Inconsistent line spacing for links creates navigation confusion
- The navigation-based home page doesn’t match with the options available in the navbar, making it unclear what the scope of the site includes

</div>
</div>




<div class="highlight-grid">
<div class="font-lg">
Efficiency
</div>

<div>

- A popup with important links and contact information creates an unnecessary barrier to regular site navigation
- Important resources are hidden behind slow and segmented fade-in effects, making it time consuming to see an overview of everything
- A slow transition for the navigation feature creates the same sense of frustration

</div>
</div>




<div class="highlight-grid">
<div class="font-lg">
Conceptual Model
</div>

<div>

- Portions of text are underlined in the same style as hyperlinks, but do not link anywhere
- Some hyperlinks also have no underline.
- Large icons are used randomly within larger sections, creating incorrect associations between the icons and their category
- Breaking the conventional navbar layout may cause readers to only read the left or right side of the logo.
- The outline around Mortgage Customers suggests that this is a “call to action” for the main purpose of the website. Other types of users may think that this site is not for them.

</div>
</div>





<div class="highlight-grid">
<div class="font-lg">
Memorability
</div>

<div>

- Layouts for each of the four main categories are slightly different in organization, text alignment, icons, and language style. This can establish an immediate sense of uncertainty when navigating the rest of the site.
- On other site pages, there are more important links that aren’t available on the home page. For users who have performed certain actions before, this can create confusion
- The footer with important organizational information (ex. employee portal, careers, contact) that is included in most other pages on site is not available on the home page.

</div>
</div>



<div class="highlight-grid">
<div class="font-lg">
Accessibility (including WebAIM Findings)</div>

<div>

- WebAIM WAVE detected that two images do not have alt text. Additionally, images on the site include text that cannot be read by a screen reader.
- WebAIM alerted the use of justified text, which creates uneven spacing that decreases legibility and communicates untrustworthiness to users.
- Navigation via tab for keyboard users does not expand content for each header in the same way that mouse hovering does

</div>
</div>

### STYLE GUIDE

I condensed the style guidelines of the site into an organized color scheme, text hierarchy, and set of components. Because the site is primarily an informational resource for users, I wanted to create a look that was trustworthy and uncomplicated.

<br />

<img class="rounded" src='./images/rihousing/style-guide.png' alt="Style guide for redesigned RIHousing site">

<br> 
<br> 

<br>

<img class="rounded" src='./images/rihousing/style-guide-annotated.png' alt="Annotated style guide for redesigned RIHousing site">

<br />
<br />

### FINAL DESIGNS

<br />

<div class="rounded" style="display: grid; grid-template-columns: 1fr 1fr 1fr; align-items: center; gap: 20px; background-color: black">

<img class="rounded flex-1" src='./images/rihousing/laptop.png' alt="preview of redesigned RIHousing site on laptop">

<img class="rounded flex-1" src='./images/rihousing/ipad.png' alt="preview of redesigned RIHousing site on ipad">

<img class="rounded flex-1" src='./images/rihousing/iphone.png' alt="preview of redesigned RIHousing site on iphone">

</div>

<br />
<br />
<div>

<img src='./images/rihousing/redesign-notes.png' alt="annotations on the RIhousing redesign">

<br>
<br>

<div class="flex-row">
<div class="flex-1 flex-center">
<div>

### PREPARING FOR DEVELOPMENT

Utilizing my background in front end development, I left notes for developers with specifics on layout and sizing. I also coded <a href="https://ocarson1.github.io/rihousing/" style="color: white">this live site</a> as a ready-for-production preview of my design.

</div>

</div>
<div class="flex-1">
<img style="height: 500px; transform: translateX(80px)" src="./images/rihousing/code-annotations.png" alt="annotations on my design for developers">
</div>
</div>
</div>

### CONCLUSION

Working in both design and development for this case study taught me a lot about design considerations for future websites. Often times, my prototype ideas in Figma didn't always look as great when coded, causing me to go back and forth between code and no-code in my process. I now am more confident in making the decisions about sizing, spacing, and responsiveness that only can be informed by hands-on experience.