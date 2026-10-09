# Code review and presentation preparation

These notes explain the current implementation. The final 15–20-minute walkthrough should be completed after actual browser testing, media replacement, commits, and deployment.

1. Open index.html. Explain the HTML5 declaration, language, metadata, viewport, page title, and external stylesheet link.
2. Find comment 1. Explain why the header and navigation repeat across four separate pages. Demonstrate aria-current and the skip link after browser testing.
3. Find comment 2. Read the main heading and explain how the introduction reflects the supplied background. Explain section labels, h1/h2/h3 hierarchy, and the three articles.
4. Explain that the calls to action are anchors because they navigate. The projects invitation describes areas of interest without claiming completed products.
5. Find comment 3. Explain the copyright and the link to Contact. State that actual contact details are still pending.
6. Open styles.css. Walk through palette variables, the fluid container, clamp typography, spacing, borders, and the two angled linear gradients.
7. Explain CSS Grid in the card-grid selector. Base styling has one column; 768px has two; 1024px has three. No Flexbox is used.
8. Explain hover, focus-visible, and the reduced-motion media query. Demonstrate actual keyboard and responsive behaviour only after testing it.
9. Open about.html. Identify the placeholder image and video poster. Explain controls and preload="none". There is no source yet, so this is not a working introduction video.
10. Open Projects. Explain the four articles, their h2 headings, and the conservative status labels. Describe why Projects keeps two columns on desktop while the three Home interest cards use three columns.
11. Open Contact. Explain label/for relationships, required fields, email type, phone pattern, maxlength, and help connected through aria-describedby.
12. Open js/contact.js. Explain setCustomValidity, whitespace trimming, phone digit counting, input events, and preventDefault. The script prevents submission and announces that nothing was sent; the disabled-by-default button prevents submission before handlers load.
13. Finish with actual verification: local source checks and mocked JavaScript checks passed. Phase 4 additionally tested browser validation, navigation, keyboard focus, and responsive widths, and obtained clean W3C HTML/CSS results. Explain the phone-pattern bug and fix. WAVE and W3C Link Checker remain blocked on the local URL; real video and deployment are pending.

Practice questions: Why use a link instead of a button? What does border-box change? How do min-width queries build on mobile rules? Why does the form validate without sending a message? What is needed before claiming the video or email submission works?
