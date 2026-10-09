# Eno Etuk — Developer & Entrepreneur

A personal HTML5/CSS3 portfolio for INFR3120 Assignment 1.

## Phase 4 status

All four pages now contain their planned text and layouts. About uses the supplied biography and labelled photo/video placeholders. Projects presents all four supplied projects with conservative status labels; no prototype, launch, or completed feature is asserted without evidence. Contact is a validation demonstration and does not deliver or save messages.

Personal media, real public contact details, remaining accessibility/link validation, GitHub commits, GitHub Pages deployment, and the final submission package remain incomplete. No lecture examples or separate marking-rubric file were available: the supplied assignment requirements serve as the acceptance checklist. Academic-integrity compliance with the 10% limit remains unestablished. See ATTRIBUTION.md.

## Structure and preview

Open index.html in a browser. All links use relative paths to support a future GitHub Pages project site. The four HTML files share css/styles.css. Contact also loads the small deferred js/contact.js file; there are no libraries or frameworks. Images live in assets/images and instructions for the future video are in assets/video/README.txt. ATTRIBUTION.md records assistance; TESTING.md records verification; PRESENTATION.md explains this stage.

## HTML walkthrough

1. The document declares HTML5, English, UTF-8, a responsive viewport, a description, and a page title. The stylesheet is linked externally.
2. The header contains a home link and a nav element. A list groups the four navigation links. aria-current="page" identifies the current page.
3. The skip link targets main-content so keyboard users can bypass repeated navigation. tabindex="-1" allows the main element to receive focus without adding it to the normal tab sequence.
4. The Home main element contains three labelled sections: introduction, interests, and a projects invitation. There is one h1, followed by h2 section headings and h3 card headings. Each interest card uses article because it is a self-contained topic.
5. Calls to action use links, not buttons, because they navigate to other pages. Decorative arrows and card numbers are hidden from assistive technology.
6. The footer provides copyright and a contact-page link. Real public contact information is still required; none has been invented.

## CSS walkthrough

Numbered comments divide styles.css into nine reviewable sections. Variables in :root centralize the palette. border-box includes padding and borders in declared widths. A 90% container with a 1120px maximum keeps margins fluid and text readable. clamp() scales headings within minimum and maximum sizes. Normal flow handles the main text, inline-block handles call-to-action links, and CSS Grid handles navigation and cards. No Flexbox or frameworks are used. System fonts avoid external font dependencies.

## Breakpoints

- Mobile: base rules below 768px. Two navigation links per row, stacked cards, and stacked footer content.
- Tablet: min-width 768px. Horizontal header and navigation, two card columns, two footer columns, and paired name/email fields. Phone and message span the full form width.
- Desktop: min-width 1024px. Three Home interest-card columns, larger hero spacing, and a two-column project invitation. Projects retains two columns so four cards form two balanced rows. The later .project-grid rule overrides the generic card grid.

These are content-oriented breakpoints, not device guarantees. All four pages were checked in the in-app browser at widths 320, 768, and 1440, plus boundary widths 767, 1023, and 1024. No horizontal overflow was measured. Other browsers and 200% zoom remain untested.

## Colours and gradients

| Role | Colour |
| --- | --- |
| Background | #0c0c10 |
| Card surface | #18181f |
| Main text | #f5f5f7 |
| Secondary text | #babac6 |
| Violet accent | #b7a1ff |
| Borders | #363640 |

The hero uses linear-gradient(125deg, #21192f 0%, #0c0c10 65%). Inner-page introductions use linear-gradient(125deg, #21192f, #0c0c10 75%). The project invitation uses linear-gradient(110deg, #21192f, #18181f). Angles control gradient direction. Solid text remains readable independently of the decorative backgrounds.

## Accessibility and contact form

Implemented: semantic landmarks, heading hierarchy, skip link, visible keyboard focus, active-page indication, descriptive links, responsive media, and reduced-motion support. Placeholder media is explicitly identified. Future real video needs reviewed captions and a transcript. Browser skip-link and form-focus checks passed. Zoom, screen-reader, and WAVE testing remain pending.

Contact fields have explicit labels and required/optional instructions. Name uses required, maxlength=100, and a pattern requiring a non-space character. Email uses type=email, required, and maxlength=254. Optional phone uses type=tel, maxlength=30, and a pattern allowing common telephone punctuation with escaped parentheses (fixed after browser testing); JavaScript also requires at least seven digits when a value is supplied. This checks basic format, not ownership or whether a phone number exists. Message uses required and maxlength=2000; JavaScript rejects whitespace-only messages. Native browser validation provides localized messages, supplemented by visible help and custom messages for the extra checks.

js/contact.js installs input and submit listeners. Input updates custom validity and clears old status text. Submit calls preventDefault(), rechecks validity, and announces that nothing was sent or saved through a live status element. There is no fetch, email service, storage, or backend. The submit button starts disabled and is enabled only after handlers are installed; noscript explains the limitation when scripting is disabled. Values remain in the current fields for review after a valid demo submission.

About uses an HTML5 video element with controls, preload="none", and a poster. It intentionally has no source until real media is provided; the caption makes this explicit. The placeholder photo's width/height now match its SVG aspect ratio.

## GitHub Pages plan

Deployment has not occurred. After reviewing implementation, create a public repository, commit genuine completed stages, push the project files, and configure GitHub Pages to publish the appropriate branch and folder. Check all four live pages and relative asset paths, then record the verified URL here. Do not invent earlier commits. Prepare the Canvas ZIP only after remaining requirements and tests are complete.

## Attribution and testing

Read ATTRIBUTION.md before using this work for assessment. Read TESTING.md for actual checks and outstanding verification. Understanding or rewriting generated code does not automatically establish compliance with course policy.

## Phase 4 validation and readiness

W3C Nu HTML validation returned no messages for all four pages, and W3C CSS validation reported zero errors and warnings. Navigation, responsive layout measurements, and browser contact-form checks passed after correcting the phone pattern. TESTING.md records exact scope and limitations; qa/ retains raw validator responses and a mobile form screenshot.

W3C Link Checker rejects localhost and WAVE could not analyze the local URL, so both remain pending. Manual proofreading found no clear spelling/grammar errors. No publishing occurred. Files are technically deployable to GitHub Pages, but the assignment remains incomplete pending personal media, public contact details, remaining checks, and academic-integrity review.
