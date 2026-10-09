# Portfolio presentation walkthrough — 18-minute guide

Use these as rehearsal notes, in your own words, while showing the actual files and live website. Explain the AI assistance honestly. Do not claim independent authorship, finished personal media, or compliance with the 10% limit. Timing includes code demonstrations.

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
