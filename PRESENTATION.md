# Portfolio presentation walkthrough — 19-minute study guide

## Phase 7 current media status (supersedes earlier placeholder notes)

The real photograph is assets/images/eno-profile.jpg. The supplied 56.26-second introduction is now assets/video/eno-introduction.mp4 (H.264/AAC, 1620×1080, about 8.9 MB), with a real still at assets/images/eno-intro-poster.jpg. About uses controls, playsinline, preload="metadata", and a source of type video/mp4. CSS preserves the 3:2 video aspect ratio. Both obsolete SVG placeholders were removed; no website page references placeholder media. The separate assignment presentation recording is not hosted or included in the website ZIP.

Captions and a reviewed transcript remain missing, as do public contact details and resolution of the assignment’s 10% external-code restriction. Earlier sections describing missing photographs/video are historical. Do not claim the package is fully submission-ready. The Phase 7 source ZIP includes these updated notes.

Prepared in Phase 6 after inspecting index.html, about.html, projects.html, contact.html, css/styles.css, js/contact.js, README.md, TESTING.md, the previous PRESENTATION.md, ATTRIBUTION.md, and the two existing Git commits. Testing results below are recorded Phase 4–5 results, not new Phase 6 validation runs. Only these notes are being updated in this phase.

Use the timed sections for a 19-minute webcam presentation, including demonstrations. The study appendix is for preparation, not an additional script to read aloud. Rehearse with a timer; aim for 17–19 minutes to leave room for pauses. Keep the webcam visible as required by your course, use readable editor zoom, and switch between the website and the named source file. Use your own words and only describe learning you can demonstrate.

AI disclosure: OpenAI Codex generated these notes and the previously attributed implementation using the user's supplied content. Lecture examples were unavailable. The assignment's 10% external-code restriction remains unresolved; these notes do not establish compliance or independent authorship. See ATTRIBUTION.md.

Before recording, open the live site, source editor, TESTING.md, and repository history. The 45–60-second personal introduction at the end is a separate outline for the About-page video, not the 15–20-minute technical presentation.

## 0:00–1:00 — Purpose and scope

Open https://eboabasietuk-rgb.github.io/eno-portfolio/. Explain: “This portfolio introduces me, Eno Etuk, and my interests in software, AI, games, and entrepreneurship. It uses four separate HTML pages and a shared stylesheet. The contact form is a validation demonstration.” State that the personal media are still placeholders.

## 1:00–3:00 — Four-page tour

Show Home's introduction, interests, and project calls to action. About uses the supplied biography, including cars and creative media. Projects contains Wevelo, O1O, Sauga City Rentals, and Payment Sharing. Read their status labels: ongoing development, experimental project, website project, and early-stage concept. Avoid calling any an established launched product. Contact includes required name, email, message, and optional phone. Follow the shared header links to demonstrate four actual documents.

## 3:00–5:00 — HTML structure

Open index.html. Walk through doctype, html lang=en, UTF-8, viewport, description, title, and external CSS. Explain how the viewport allows mobile styles to behave as intended. Show header/nav/main/footer, the navigation list, aria-current, and a single h1 followed by section h2 and article h3 headings. Explain that anchors navigate; the submit button performs a form action. Decorative arrows have aria-hidden. The shared structure repeats across files because there is no framework or template engine.

Demonstrate the skip link with Tab and Enter. Its target is main-content; tabindex=-1 lets that target receive focus without joining the normal tab order.

## 5:00–7:00 — CSS design and gradients

Open css/styles.css. Explain :root custom properties, box-sizing:border-box, system fonts, and the 90%-wide container capped at 1120px. Point out clamp() heading sizes, spacing, borders, and shared card/button classes. Colours are #0c0c10 background, #18181f surface, #f5f5f7 text, #babac6 secondary text, and #b7a1ff violet accent.

Show the hero's 125-degree linear gradient, the inner-page 125-degree gradient, and the invitation's 110-degree gradient. Explain that the angle controls direction, while stops control the transition. These are decorative backgrounds, not an image of a person.

## 7:00–9:00 — Responsive layout

Show the base single-column card grid and the 768px and 1024px media queries. At tablet width, Home cards use two columns and the header becomes horizontal; at desktop, Home cards use three. The later .project-grid rule retains two columns from 768px for the four projects. Explain CSS cascade order rather than suggesting every grid uses the same column count.

Show the form grid: name/email can share a row while phone/message span all columns with grid-column:1 / -1. Layout uses Grid, normal flow, and inline-block; no Flexbox is used. Explain reduced-motion handling. Demonstrate resizing if available; measured checks covered 320, 768, 1440 and boundaries 767, 1023, 1024, not all possible devices.

## 9:00–12:00 — Contact validation and JavaScript

Open contact.html. Connect labels to input IDs. Explain required, type=email, type=tel, maxlength, pattern, and aria-describedby helper text. Name requires a non-space character. Email formatting is native browser validation, not email ownership verification. Phone is optional; if provided, it permits common punctuation and needs at least seven digits. Message must not be whitespace-only.

Open js/contact.js. Explain querySelector references, updateValidation, trim(), digit counting with replace, setCustomValidity, and input/submit listeners. On input, validity is updated and old status cleared. On submit, preventDefault prevents navigation/transmission; reportValidity checks constraints and a live region states that nothing was sent or saved. There is no backend, fetch, storage, or email service. The button is disabled in HTML until handlers are installed; noscript explains that limitation.

Demonstrate invalid input and valid input. Explain the Phase 4 bug: parentheses in the phone pattern were not escaped, causing the browser to ignore it. Browser testing caught acceptance of letters; escaping parentheses fixed it. HTML validation alone had not caught that behavioural issue.

## 12:00–13:00 — Photograph and video

Open about.html and assets/video/README.txt. Explain img alt and intrinsic dimensions; video controls, preload=none, and poster. No source is currently connected, and the visible caption says there is no playable video. Describe the future real filenames: eno-profile.jpg, eno-intro-poster.jpg, eno-introduction.mp4, eno-introduction.en.vtt, and eno-introduction-transcript.txt in the documented folders. Add source and track only when files exist, then replace placeholder text and test playback/captions.

## 13:00–15:00 — Testing and limits

Open TESTING.md. Distinguish source inspection, mocked script tests, browser behaviour, and external validation. Explain that W3C Nu returned no HTML messages for four pages; CSS validation returned zero errors/warnings; live W3C Link Checker reported valid links/anchors. WAVE reported zero errors/contrast errors on every page, with 1/2/2/3 alerts respectively for Home/About/Projects/Contact. Discuss repeated links, the pending video, and intentional noscript content. Automated results are not a complete accessibility certification.

Show the missing tests: other browsers, 200% zoom, screen reader, real media, and some input limits. Do not say every test passed. The form's live submission was verified by keyboard; pointer automation in Phase 5 was inconclusive, with local pointer testing recorded in Phase 4.

## 15:00–17:00 — Git and GitHub Pages

Open https://github.com/eboabasietuk-rgb/eno-portfolio and the actual commit history. Explain that 61dfd40 is the first real snapshot of the already-implemented website; earlier phases were not committed at the time. Later documentation commits describe actual subsequent work. Do not present them as historical implementation stages.

Explain public visibility, main branch, root directory, index.html, relative paths, and .nojekyll. Pages is configured under Settings → Pages for branch deployment, main, / (root). The first build was checked until built, then HTTP and browser checks confirmed the live pages. Future pushes trigger new builds. Explain the GitHub no-reply commit email and that the repository does not include Git internals, credentials, or local QA captures.

## 17:00–18:00 — Attribution and remaining submission work

Open ATTRIBUTION.md. State clearly that Codex generated the HTML, CSS, JavaScript, placeholders, and supporting documentation using the supplied content; lecture examples were unavailable. The assignment's 10% external-code requirement remains unresolved. Understanding the code does not itself establish permission to submit it.

Show the ZIP as a review package. Before submission, add personal media and public contact details, obtain course-policy clarification, complete remaining checks, regenerate the ZIP, and update this presentation to reflect actual results. Practice explaining each selector and listener without reading a script verbatim.


## 18:00–19:00 — Conclusion: what I learned

Adapt this reflection only after you can explain each point yourself:

“Studying this portfolio helped me understand the different jobs of HTML, CSS, and JavaScript. HTML describes the content and its meaning, CSS controls the appearance and responsive layout, and JavaScript adds a small amount of form behaviour. I can explain how the media queries change the Grid layout without Flexbox, and how relative links connect four separate pages on GitHub Pages.

“The phone-pattern bug also showed me why validation services and browser tests are both useful. A document can pass a markup check while a behaviour still needs fixing. I learned to distinguish a successful validation demonstration from sending a message, and an automated accessibility result from complete accessibility testing.

“My next steps are to add my real media and contact details, finish the remaining manual checks, and resolve the course's policy on AI-assisted code before submission.”

Do not claim that a suggested reflection proves you have learned something. Rehearse the code explanations and rewrite the reflection to match your own understanding.

## Technical study appendix — actual code and explanation

Use the filenames and selectors below as reliable search targets. These excerpts describe the current files; future edits may change them.

### A. Page tour and file responsibilities

| File | What to show | Accurate explanation |
| --- | --- | --- |
| index.html | Hero, interest cards, project invitation | Introduces Eno and gives paths to About and Projects. Interest cards describe interests rather than achievements. |
| about.html | Biography and Meet Eno section | Uses the supplied biography, including software, AI, games, entrepreneurship, cars, business, and creative media. Media are clearly labelled placeholders. |
| projects.html | Four article cards | Wevelo explores wishlist management/sharing; O1O explores Unreal Engine, AI, and NPC conversations; Sauga City Rentals focuses on vehicle/rental presentation; Payment Sharing is an early-stage checkout concept. Features described as being explored are not asserted to be finished. |
| contact.html | Form and disclosure | Demonstrates required/optional fields and validation. It does not send or save messages. |
| css/styles.css | Nine numbered comment sections | One shared stylesheet supplies the palette, typography, component styles, and media queries. |
| js/contact.js | 26-line script | Used only by Contact to supplement constraints and prevent delivery. |

The project cards have headings and descriptions but no external project links. There are no supplied project URLs, backend endpoints, framework components, or database. The footer contains a literal 2026 copyright and a Contact link; it does not automatically calculate the year or contain a real email/telephone contact yet.

### B. HTML document anatomy and semantics

All four files start with `<!DOCTYPE html>` and `<html lang="en">`. The doctype selects standards-mode HTML parsing; lang declares the content language. UTF-8 supports punctuation and symbols. The viewport declaration uses `width=device-width, initial-scale=1` so the layout viewport follows the device width. A page-specific title identifies the browser tab; the shared description summarizes the portfolio.

The stylesheet link is relative: `<link rel="stylesheet" href="css/styles.css">`. Only Contact also has `<script src="js/contact.js" defer></script>`. With defer, this external script executes after HTML parsing, so its querySelector calls can find the form elements.

Semantic elements describe purpose:

- `header` contains identity and repeated navigation.
- `nav` identifies the navigation landmark; `ul` and `li` group the four links.
- `main` holds each page's primary content and is the skip-link target.
- `section` groups content around a heading. `aria-labelledby` connects the section to its heading's ID.
- `article` marks each self-contained interest or project card.
- `figure` and `figcaption` associate media with visible explanatory captions.
- `footer` contains copyright and a contact-page link.

A `div` is still appropriate for a layout-only wrapper such as `.card-grid`; not every wrapper needs a semantic landmark. Home has h1 → h2 → h3 because the interest cards sit under an h2 section. Projects uses h1 → h2 for its four project titles. Heading levels express structure, not merely font size.

### C. Navigation and keyboard access

Every page includes these relative destinations: `index.html`, `about.html`, `projects.html`, and `contact.html`. From the published `/eno-portfolio/` directory, `projects.html` resolves inside that same directory. A leading `/projects.html` would instead target the domain root, so the existing relative links are useful for a GitHub project site.

The current page's link has `aria-current="page"`. CSS selects `nav a[aria-current="page"]` to apply a violet underline and light text. The brand also links to Home. Home's visually button-like calls to action are anchors because their action is navigation.

The first link is `<a class="skip-link" href="#main-content">Skip to main content</a>`. Its target is `<main id="main-content" class="container" tabindex="-1">`. The CSS places the link offscreen until focus moves it to `top:1rem`. The target's negative tabindex permits focus without adding main to the ordinary Tab sequence. Links, buttons, inputs, and textarea receive a 3px violet outline through `:focus-visible`. Do not claim that colour alone communicates the active page: the underline also helps.

### D. CSS foundations, gradients, and interactions

The `:root` variables centralize repeated colours. `var(--accent)` reuses violet wherever needed. `color-scheme:dark` lets browser-provided controls use an appropriate dark appearance; it is not a theme toggle. The font stack is Arial, Helvetica, sans-serif, with no web-font download.

`* { box-sizing:border-box; }` means declared widths include padding and borders. `.container` combines 90% width, a 1120px maximum, and automatic inline margins. This creates fluid side space but stops content growing indefinitely on wide screens. `.intro`, `.reading-width`, and `.media-placeholders` add narrower maximum widths for readability.

`font-size:clamp(2.5rem, 6vw, 5.25rem)` gives h1 a lower bound, a viewport-relative preferred size, and an upper bound. `rem` relates to the root font size, while `vw` relates to viewport width. Body line-height is 1.65; headings use 1.15. Avoid saying headings scale without limits.

Actual gradient values:

```css
.hero {
  background: linear-gradient(125deg, #21192f 0%, #0c0c10 65%);
}
.page-intro {
  background: linear-gradient(125deg, #21192f, #0c0c10 75%);
}
.project-invitation {
  background: linear-gradient(110deg, #21192f, #18181f);
}
```

These excerpts isolate background declarations from larger rules. CSS creates the gradients without an image file. The angle sets the direction; positions such as 65% specify where a colour stop falls along the gradient. The hero reaches its final dark colour at 65% and keeps it through the remaining gradient. The underlying page is also dark.

Cards use padding, a border, a radius, and the shared surface colour. Buttons use a 160ms transition on background and border colours. The primary hover becomes #cbbbff; secondary hover uses the surface and accent border. `@media (prefers-reduced-motion:reduce)` removes button transitions. No slide-in animation, JavaScript animation, or smooth-scrolling feature is implemented.

### E. Responsive Grid and the cascade

| Width | Header/navigation | Home cards | Project cards | Form |
| --- | --- | --- | --- | --- |
| Below 768px | Brand above a two-column link list | One column | One column | One column |
| 768–1023px | Header grid `1fr auto`; four navigation columns | Two columns | Two columns | Two columns; phone/message span both |
| 1024px and above | Tablet header structure remains | Three columns | Two columns | Same two-column structure |

The base `.card-grid` uses `display:grid`, `grid-template-columns:1fr`, and `gap:1rem`. The tablet query changes it to `repeat(2, minmax(0, 1fr))`. `repeat` avoids writing duplicate tracks; `1fr` divides available space equally; a zero minimum permits tracks to shrink below their contents' automatic minimum size. Text still needs to wrap appropriately, which is why actual overflow testing matters.

At 1024px, the general `.card-grid` rule changes to three tracks. Near the end of the file, a later 768px query gives `.project-grid` two tracks. Projects has both classes. These selectors have equal specificity, and the later matching declaration wins, so Projects stays at two columns even on desktop. Both min-width queries can match simultaneously; the desktop query does not disable the tablet query.

The form uses `minmax(0,1fr)` tracks and `.field { min-width:0; }`. `.field-wide { grid-column:1 / -1; }` spans from the first to the last grid line. Inputs use width:100%; the textarea resizes vertically. Images/video use width:100% and height:auto. Home actions are inline-block elements that can wrap; ordinary paragraphs stay in document flow. No `display:flex` or `display:inline-flex` is present, including inside media queries.

### F. Contact fields and exact validation flow

| Field ID | HTML constraints | Extra script rule |
| --- | --- | --- |
| name | text, required, maxlength=100, pattern `.*\S.*` | None; the pattern requires a non-space character. |
| email | email, required, maxlength=254 | None; native email syntax checking does not prove the address exists. |
| phone | tel, optional, maxlength=30, pattern `[+0-9\(\) .\-]{7,30}` | If nonempty, at least seven digits. |
| message | textarea, required, maxlength=2000, rows=6 | Trimmed content must be nonempty. |

The phone pattern limits allowed characters and total character count. `type="tel"` alone does not enforce a universal phone format. The custom digit rule prevents seven punctuation characters from satisfying the pattern by themselves. It does not verify a real callable number. Name validation deliberately does not demand first and last names.

Labels use `for` matching each input's `id`. `name` attributes identify form fields but do not create a delivery mechanism. Autocomplete values are supplied for name/email/telephone. `aria-describedby` attaches visible guidance to email, phone, and message; the form also references its demonstration notice.

The actual custom validation function is:

```javascript
function updateValidation() {
  message.setCustomValidity(message.value.trim() ? '' : 'Please enter a message, not just spaces.');
  const digits = phone.value.replace(/\D/g, '');
  phone.setCustomValidity(phone.value && digits.length < 7 ? 'Please include at least seven digits, or leave the phone field empty.' : '');
}
```

`trim()` is used for a check; the code does not overwrite the user's text. `/\D/g` removes every nondigit from a temporary string. A nonempty custom-validity message makes the field invalid. Passing an empty string clears that custom error; native constraints can still make the field invalid.

Execution order to explain:

1. The deferred script selects the form, message, phone, and status elements.
2. It installs an input listener, which updates custom errors and clears an old status message whenever input bubbles to the form.
3. It installs a submit listener. The browser normally checks constraints before dispatching submit, so invalid data can stop the process before this listener runs.
4. For a dispatched submit event, `event.preventDefault()` cancels the form's default submission/navigation. The handler updates custom validity again and calls `form.reportValidity()`. If false, it returns early.
5. If valid, it writes the truthful demonstration response using `textContent` into the existing `role="status" aria-live="polite"` element. Values remain in the fields.
6. During initial setup it calls updateValidation and then enables the initially disabled submit button. A noscript notice explains the no-JavaScript limitation.

There is no network request, email handler, storage API, or server in this script. Validation improves input quality, but is not a security boundary for a future backend; a real service would need its own validation and delivery handling.

Suggested demonstration, with clearly fictional data:

- Submit empty fields: required constraints block submission.
- Enter a name of only spaces: name pattern blocks it.
- Use an invalid email and a whitespace-only message: explain the separate checks.
- Try phone `1234567abc`, then `123`: show invalid characters and too few digits.
- Use a normal name, `visitor@example.com`, a short message, and an empty optional phone; activate Submit with the keyboard.
- Read the exact “not sent or saved” status, then edit a field to show that the old status clears.

Native error wording varies by browser. Rehearse this before recording; do not infer success from a button click alone.

### G. Photo and video: present state versus next steps

Current photo source: `assets/images/profile-placeholder.svg`. Its alt text explicitly says it is a placeholder; width/height are 960×540. The figure caption repeats the visible placeholder status.

The actual video opening tag is:

```html
<video controls preload="none" poster="assets/images/intro-poster-placeholder.svg" width="960" height="540" aria-label="Introduction video placeholder" aria-describedby="video-note">
```

`controls` requests native playback controls. `preload="none"` requests no advance media download. `poster` shows an image before playback. The accessible name identifies the placeholder and the description references its visible caption. The text inside video is fallback content for browsers without video support, not a reliable missing-file error message.

There is currently no `src`, `<source>`, or caption `<track>` in video, because the real assets do not exist. Controls and poster can render without proving that playback works. Do not try to present the SVG poster as an introduction video.

When real files arrive, use the paths in assets/video/README.txt: `assets/images/eno-profile.jpg`, `assets/images/eno-intro-poster.jpg`, `assets/video/eno-introduction.mp4`, `assets/video/eno-introduction.en.vtt`, and `assets/video/eno-introduction-transcript.txt`. Update the HTML references, photo dimensions/alt text, video labels/captions, and add a transcript link. These are future steps, not current features.

### H. Testing evidence and limits

Use TESTING.md's Phase 5 section for current external results. Its earlier localhost failures are historical and were superseded by public-site checks.

| Evidence | Recorded result |
| --- | --- |
| W3C Nu HTML | All four documents returned no messages in Phase 4. |
| W3C CSS | Shared stylesheet returned zero errors and warnings. |
| W3C Link Checker | Public recursive check processed six documents and reported valid links/anchors. |
| WAVE Home | 0 errors, 0 contrast errors, 1 redundant-link alert. |
| WAVE About | 0 errors, 0 contrast errors, redundant-link and media alerts. |
| WAVE Projects | 0 errors, 0 contrast errors, 2 redundant-link alerts. |
| WAVE Contact | 0 errors, 0 contrast errors, 2 redundant-link alerts and 1 noscript alert. |
| Layout | Four pages checked at 320×900, 768×900, 1440×900; additional widths 767, 1023, 1024; no measured horizontal overflow. |
| Source checks | Local paths/fragments, unique IDs, heading order, labels, ARIA targets, and no Flexbox checked. |
| Interaction | Local navigation/keyboard/form tests, 16 public header routes, and live keyboard submission verified. |
| Spelling/grammar | Manual proofreading; no automated language checker was used. |

The media alert remains actionable when real media arrives. Repeated destination alerts were reviewed and retained as conventional navigation. The noscript alert identifies intentional fallback content. Zero WAVE errors does not establish full accessibility; gradients and actual assistive-technology use need manual consideration.

Still unverified: other browsers and physical devices, 200% zoom, screen-reader evaluation, actual video/caption playback, maximum-length typing, and a JavaScript-disabled browser session. Phase 5 pointer automation was inconclusive; keyboard submission worked and local Phase 4 pointer tests were recorded as passing. Network traffic capture was unavailable, so distinguish the source review showing no delivery calls from a full network audit.

### I. GitHub Pages and truthful history

The public repository is [eboabasietuk-rgb/eno-portfolio](https://github.com/eboabasietuk-rgb/eno-portfolio); the live site is [Eno's portfolio](https://eboabasietuk-rgb.github.io/eno-portfolio/).

Pages serves static files from `main`, `/` root, over HTTPS. The browser requests HTML and linked CSS/JS/assets; JavaScript executes in the browser. There is no application server running contact.js. `index.html` supplies the default page for the site directory. `.nojekyll` bypasses Jekyll processing. GitHub Pages hosting does not add email delivery to a form.

The inspected history contains:

- `61dfd40` — Add implemented four-page portfolio with validation and attribution.
- `774b081` — Document live Pages deployment, validation results, and media handoff.

These are real Phase 5 commits. The initial commit contains the implementation that already existed; it is not evidence that each earlier phase had its own commit. Phase 5 confirmed the final build was built and the deployed README matched the local file. Phase 6 edits to these notes are local until separately committed/pushed; the existing ZIP also remains the Phase 5 snapshot until regenerated.

### J. Questions to practise answering

- Why four HTML files? They are four separate documents connected by ordinary links, matching the assignment's structure.
- Why does Projects stay at two columns on desktop? Its later matching grid declaration wins over the earlier generic card rule.
- What does an empty setCustomValidity string do? Clears the custom error without removing native constraints.
- Why does the demo need JavaScript? To add custom input checks and intercept submission with a truthful status message.
- Why did validation services not catch the phone behaviour? Markup conformance and runtime browser behaviour test different things.
- Is the video complete? No; controls/poster are prepared, but real media/captions are absent.
- Are there zero accessibility issues? That is not established; WAVE found zero errors but reported alerts, and manual testing remains.
- Is this assignment compliant with the 10% limit? That remains unresolved because of extensive disclosed AI-generated code and unavailable lecture references.

## Separate personal introduction outline — 45–60 seconds

This is for the short About-page video. Target roughly 100–125 words at a comfortable pace; rehearse and time the actual recording. It is not a shortened technical presentation.

| Time | Cue | Points to express naturally |
| --- | --- | --- |
| 0–10 seconds | Introduce yourself | “Hi, I'm Eno Etuk.” Say you are a student interested in technology and building useful digital products. |
| 10–25 seconds | Technical interests | Software/web development, artificial intelligence, and games. Mention enjoying experiments and creative solutions to everyday problems. |
| 25–40 seconds | Projects and entrepreneurship | Briefly mention developing Wevelo and exploring the O1O game project. Describe an interest in turning ideas into products, without claiming launches or finished features. |
| 40–50 seconds | Personal interests | Cars, gaming, business, and creative media. Choose the interests you can speak about comfortably. |
| 50–60 seconds | Close | Invite visitors to explore your projects and learn more about your interests. Thank them for visiting. |

Record your own face and voice. Use clear audio, a quiet background, and a natural pace. Keep the final recording between 45 and 60 seconds; add reviewed captions and a matching transcript. This outline is AI-assisted, based only on the biography and project information you supplied. Adjust it to your own voice and do not add claims you cannot support.
