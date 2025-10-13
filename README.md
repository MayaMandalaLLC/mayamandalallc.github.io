
# Maya Mandala LLC — GitHub Pages Site

This repo hosts the website for **www.mayamandalallc.com** on GitHub Pages.

## Files
- `index.html` — Home page with logo and welcome message
- `privacy.html` — Privacy Policy page
- `app-ads.txt` — AdMob app-ads.txt (at domain root)
- `assets/logo.svg` — Placeholder logo (replace with your own)
- `assets/styles.css` — Site styling
- `CNAME` — Custom domain mapping to `www.mayamandalallc.com`

## Quick Start
1. Create a GitHub repository named `<your-username>.github.io` or use any repo and enable Pages.
2. Upload all files from this folder to the repository root (not inside another folder).
3. In repository **Settings → Pages**, set:
   - **Build and deployment**: Deploy from Branch = `main` (or `master`), Folder = `/ (root)`
   - **Custom domain**: `www.mayamandalallc.com` (GitHub creates the `CNAME` file automatically; you can commit this file too)
   - Enable **Enforce HTTPS** once the certificate is issued.
4. In your DNS (Namecheap/other):
   - Create a **CNAME** record: `www` → `<your-username>.github.io`
   - (Optional, for apex) Create **A** records for `@` → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
5. Replace `assets/logo.svg` with your actual logo file and update `index.html` if needed.
6. Edit `app-ads.txt` to insert your AdMob **publisher ID** (format `pub-...`). The file must be reachable at `https://www.mayamandalallc.com/app-ads.txt`.
7. Commit & push. GitHub Pages will publish your site.

## Notes
- If using a project site (not `<username>.github.io`), ensure the Pages source is set correctly and the `CNAME` exists.
- After DNS changes, HTTPS issuance can take some time. Re-check **Enforce HTTPS** later if it’s not immediately available.
