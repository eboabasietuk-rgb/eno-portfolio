# Enoabasi Etuk — Developer & Entrepreneur

## Phase 7 current media status (supersedes earlier placeholder notes)

The real photograph is assets/images/eno-profile.jpg. The supplied 56.26-second introduction is now assets/video/eno-introduction.mp4 (H.264/AAC, 1620×1080, about 8.9 MB), with a real still at assets/images/eno-intro-poster.jpg. About uses controls, playsinline, preload="metadata", and a source of type video/mp4. CSS preserves the 3:2 video aspect ratio. Both obsolete SVG placeholders were removed; no website page references placeholder media. The separate assignment presentation recording is not hosted or included in the website ZIP.

Captions and a reviewed transcript remain missing, as do public contact details and resolution of the assignment’s 10% external-code restriction. Earlier sections describing missing photographs/video are historical. Do not claim the package is fully submission-ready. The Phase 7 source ZIP includes these updated notes.

A personal HTML5/CSS3 portfolio for INFR3120 Assignment 1.

## Phase 5 status

All four pages now contain their planned text and layouts. About uses the supplied biography and real portrait; the introduction video remains a labelled placeholder. Projects presents all four supplied projects with conservative status labels; no prototype, launch, or completed feature is asserted without evidence. Contact is a validation demonstration and does not deliver or save messages.

The introduction video, real public contact details, and academic-integrity review remain incomplete. Git history starts with the real Phase 5 snapshot; no earlier development commits were fabricated. See TESTING.md for deployment and external validation results. No lecture examples or separate marking-rubric file were available: the supplied assignment requirements serve as the acceptance checklist. Academic-integrity compliance with the 10% limit remains unestablished. See ATTRIBUTION.md.

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

Implemented: semantic landmarks, heading hierarchy, skip link, visible keyboard focus, active-page indication, descriptive links, responsive media, and reduced-motion support. Placeholder media is explicitly identified. Future real video needs reviewed captions and a transcript. Browser skip-link and form-focus checks passed. WAVE reported zero errors and zero contrast errors on all four live pages; reviewed alerts are recorded in TESTING.md. Zoom and screen-reader tests remain pending.

Contact fields have explicit labels and required/optional instructions. Name uses required, maxlength=100, and a pattern requiring a non-space character. Email uses type=email, required, and maxlength=254. Optional phone uses type=tel, maxlength=30, and a pattern allowing common telephone punctuation with escaped parentheses (fixed after browser testing); JavaScript also requires at least seven digits when a value is supplied. This checks basic format, not ownership or whether a phone number exists. Message uses required and maxlength=2000; JavaScript rejects whitespace-only messages. Native browser validation provides localized messages, supplemented by visible help and custom messages for the extra checks.

js/contact.js installs input and submit listeners. Input updates custom validity and clears old status text. Submit calls preventDefault(), rechecks validity, and announces that nothing was sent or saved through a live status element. There is no fetch, email service, storage, or backend. The submit button starts disabled and is enabled only after handlers are installed; noscript explains the limitation when scripting is disabled. Values remain in the current fields for review after a valid demo submission.

About uses an HTML5 video element with controls, preload="none", and a poster. It intentionally has no source until real media is provided; the caption makes this explicit. The placeholder photo's width/height now match its SVG aspect ratio.

## GitHub repository and Pages

- Public repository: https://github.com/eboabasietuk-rgb/eno-portfolio
- Pages address: https://eboabasietuk-rgb.github.io/eno-portfolio/
- Configuration: Deploy from a branch, main, / (root); HTTPS enabled.
- index.html is at the repository root; relative links support the /eno-portfolio/ base path. .nojekyll makes this a plain static deployment.

Git was initialized in this existing project during Phase 5. Initial commit 61dfd40 records the completed implementation snapshot, not fictitious earlier phases. The public repository was created using the already-authorized GitHub CLI account. A repository-local GitHub no-reply commit email protects the configured personal email. Only this repository was changed.

For future updates, review git diff, stage the intended files, commit with an accurate message, and push main. In GitHub Settings → Pages, verify main and / (root). Wait for the Pages build to succeed, then check the live pages. A successful push alone does not prove deployment. See TESTING.md for actual observed results.

## Replace personal media

Place your own files at these paths relative to the project root:

- assets/images/eno-profile.jpg
- assets/images/eno-intro-poster.jpg
- assets/video/eno-introduction.mp4 (45–60 seconds)
- assets/video/eno-introduction.en.vtt (reviewed captions)
- assets/video/eno-introduction-transcript.txt

Follow assets/video/README.txt to update about.html. Existing placeholders remain intentionally connected until real assets exist. No synthetic photograph or video represents Eno.

## ZIP package

INFR3120_Assignment_1.zip is generated from the final tracked source snapshot, excluding .git, .gitignore, ignored qa evidence, temporary files, and local scripts. It contains the four pages, shared CSS, JavaScript, placeholder assets, media instructions, .nojekyll, and the four documentation files. It is a review package, not submission-ready while personal media and academic-integrity review are outstanding.

## Attribution and testing

Read ATTRIBUTION.md before using this work for assessment. Read TESTING.md for actual checks and outstanding verification. Understanding or rewriting generated code does not automatically establish compliance with course policy.

## Phase 4 validation and readiness

W3C Nu HTML validation returned no messages for all four pages, and W3C CSS validation reported zero errors and warnings. Navigation, responsive layout measurements, and browser contact-form checks passed after correcting the phone pattern. TESTING.md records exact scope and limitations. The ignored local qa/ folder retains diagnostic evidence and is excluded from publication and the ZIP.

Phase 4 external link/accessibility checks were blocked by localhost; Phase 5 live-site results supersede those limitations where stated in TESTING.md. Manual proofreading found no clear spelling/grammar errors. The assignment remains incomplete pending personal media, public contact details, any outstanding checks, and academic-integrity review.

## Live validation summary

The public site returned HTTP 200 for all pages and assets tested. W3C Link Checker reported valid links/anchors. WAVE reported zero errors and zero contrast errors on every page, with reviewed redundant-link, media, and noscript alerts. All 16 live header routes and keyboard demo submission were verified. The implementation is published, but the ZIP remains a review package pending the missing personal items and academic review.

## Real portrait update

The user-supplied photograph is assets/images/eno-profile.jpg (250×312). The .profile-photo wrapper caps its width at 250px and the image uses height:auto to preserve proportions. Its alt text is Portrait of Enoabasi Etuk. The real photograph is now complete; references to pending personal media apply to the video, poster, captions, and transcript.

## Phase 7 Canvas handoff

Upload INFR3120_Assignment_1.zip as the website source package and your separate 15–20-minute webcam presentation recording in the Canvas upload fields required by the assignment. Provide the live website and public repository URLs in the designated fields or submission comments. The 56-second introduction is already inside the website ZIP and hosted on About; it is not the long assignment presentation. The long presentation file was not provided to Codex and is not included or publicly hosted. Exact Canvas upload types, size limits, and any additional rubric items must be checked against the actual submission page, which has not been provided. This package is not certified submission-ready while captions/transcript, public contact details, manual checks, and academic-integrity review remain outstanding.
