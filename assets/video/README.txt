PERSONAL MEDIA REPLACEMENT — real files still required

Place these files in the existing portfolio folders:
- assets/images/eno-profile.jpg: your real photograph.
- assets/images/eno-intro-poster.jpg: your own video poster/still.
- assets/video/eno-introduction.mp4: your real 45–60-second introduction.
- assets/video/eno-introduction.en.vtt: reviewed English captions.
- assets/video/eno-introduction-transcript.txt: matching transcript.

Then update about.html: change the photograph src and its alt text/width/height,
change video poster, and add these elements inside video:
<source src="assets/video/eno-introduction.mp4" type="video/mp4">
<track kind="captions" src="assets/video/eno-introduction.en.vtt" srclang="en" label="English" default>
Add a visible link to the transcript and replace the placeholder captions/labels.
Do not add the source/track until the files exist. Test playback, controls,
captions, and relative URLs before committing. The current SVG images are
labelled placeholders, not a fabricated photograph or video of Eno.
