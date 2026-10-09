# Phase 4 testing record

Tested 2026-10-09 against the existing site served locally at http://127.0.0.1:8765. Nothing was deployed or published. Browser checks used the Codex in-app browser, not a cross-browser or physical-device lab. Supplied assignment requirements were the checklist; no separate rubric or lecture files were provided.

## Standards and required external checks

| Check | Actual result |
| --- | --- |
| W3C Nu HTML Validator | All four HTML files submitted directly to https://validator.w3.org/nu/?out=json; each returned messages: []. Contact revalidated after the phone-pattern fix. Raw responses saved in qa/*.json. |
| W3C CSS Validator | Shared stylesheet submitted to https://jigsaw.w3.org/css-validator/validator with CSS3 profile; validity=true, 0 errors, 0 warnings. Raw response: qa/css.xml. Initial POST failed with a service exception; the GET text-input request succeeded. |
| W3C Link Checker | Attempted against localhost. Service returned: “403 Checking non-public IP address disallowed by link checker configuration.” PENDING until an authorized publicly reachable URL exists. Local checks below are supplementary, not a W3C pass. |
| WAVE | Opened https://wave.webaim.org/report#/http://127.0.0.1:8765/ in browser. Report: “The URL provided is not valid or cannot be analyzed by WAVE.” PENDING. No WAVE success is claimed. A local browser extension or later authorized deployment is needed. |
| Spelling and grammar | Manual proofreading of visible text across all four pages completed. No clear spelling/grammar errors found; names and supplied biography retained. No automated language checker used. |

## Browser layout and navigation

All four pages were opened at 320×900 (mobile), 768×900 (tablet), and 1440×900 (desktop). DOM measurements reported document scrollWidth equal to viewport width on every page, no main-content elements crossing the right viewport edge, and zero elements using computed flex/inline-flex. Visual viewport inspections showed legible wrapping and consistent dark colours/navigation, with no observed overlapping content. Full-page screenshot stitching produced duplicated regions, so those captures were not treated as layout evidence; normal viewport captures were used.

Additional widths 767, 1023, and 1024 were checked on all four pages: no horizontal overflow and no intersecting card rectangles. These are bounded checks, not proof for every device or zoom level.

Home cards use one column below 768, two from 768, and three from 1024. Projects uses one column below 768 and two thereafter. The form uses one column below 768, paired name/email fields from 768, and full-width phone/message fields.

All 16 header navigation routes were clicked and their settled URLs verified. All four footer Contact links were clicked successfully. The brand home link, all three Home calls to action, and About's project link were clicked and verified. Project cards are descriptive articles, not external links: no live project/repository URLs were provided and none were invented.

## Contact form

Browser tests performed:

- Empty required fields invalid; optional empty phone valid.
- Malformed email invalid.
- Whitespace-only name rejected by its pattern; whitespace-only message rejected by custom validation.
- Phone containing letters rejected after the fix. A three-digit phone was invalid with both patternMismatch and customError.
- A formatted phone (+1 (416) 555-0123) accepted with valid required fields.
- Valid form with an empty phone accepted on desktop and mobile.
- Submit displayed: “Validation complete. This is a demonstration: your message was not sent or saved.”
- Editing cleared the prior status. Keyboard Tab moved from name to email, with a solid 3px focus outline; keyboard activation of Submit also worked.

Source review confirms the submit handler calls preventDefault and contains no fetch, storage, email, or backend operation. The button starts disabled and is enabled after handlers install. Actual network traffic capture was unavailable; no network-audit claim is made. Native validation wording may vary by browser, and not all message text was exposed through browser inspection. Length limits were checked in source; maximum-length typing and a JavaScript-disabled browser session remain untested.

JavaScript syntax and mock-DOM tests were rerun successfully for custom validation, optional phone, submit prevention, button enabling, truthful status, and status reset. These supplement, rather than replace, the browser checks.

## Accessibility and source checks

- Four separate HTML documents, one h1 each, header/nav/main/footer, non-skipping heading levels, and four project articles verified.
- Local href/src/poster paths, fragment targets, unique IDs, current-page navigation, ARIA references, and field label associations passed automated source checks.
- Browser keyboard test: first Tab exposed the skip link with solid outline; Enter focused main-content and updated the fragment.
- Alt text identifies the placeholder photograph. Video controls and poster render; currentSrc is empty and readyState is 0 as expected. Playback, seeking, captions, and transcript cannot be tested until real media exists.
- CSS source search (including every media query), HTML, and JavaScript contain no Flexbox implementation. Computed layouts across the primary viewports also reported no flex elements.
- All pages reference the same CSS palette and navigation structure. Angled linear gradients remain in the hero, inner-page introductions, and project invitation.
- Calculated contrast ratios for key specified colours: secondary text on #21192f 8.78:1; violet on #21192f 7.68:1; white on #21192f 15.49:1; dark button text on violet 8.88:1; input border on input background 5.36:1. This is a source-colour calculation, not a full accessibility certification or a WAVE result.

## Problem found and fixed

The phone input pattern used unescaped parentheses inside its character class. Browser testing showed that 1234567abc was incorrectly accepted because the pattern was ignored. Escaping the parentheses fixed it. Retesting showed patternMismatch=true and valid=false for that input, while the formatted phone and optional empty phone remained valid. W3C HTML validation alone had not exposed this behavioural issue.

## Remaining work and readiness

The static files are technically suitable for a future GitHub Pages deployment, but the assignment is NOT submission-ready. Replace the photograph/video placeholders, add reviewed captions/transcript and actual public footer contact details, complete WAVE and W3C Link Checker checks, and establish the instructor's policy on the attributed AI-generated code. No compliance with the 10% external-code limit is claimed.

Also pending: other browsers, physical devices, 200% zoom, full screen-reader evaluation, real-video control testing, maximum-length input behaviour, JavaScript-disabled browser testing, and post-deployment live URL verification. The final ZIP and presentation should reflect those actual results when available. No publication or deployment was performed in Phase 4.
