# Official Resume PDF Directory

To enable direct PDF downloads from the **Download Resume (PDF)** button on the website:

1. Place your official, verified resume PDF in this folder named:
   `Harsh_Singh_Resume.pdf`
   (Full path: `public/resume/Harsh_Singh_Resume.pdf`)
2. Open `src/config/siteConfig.ts` and change:
   ```ts
   resumeFileExists: true,
   ```
3. Commit and push to GitHub.
