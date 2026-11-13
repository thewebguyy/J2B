# Bundled fonts

These WOFF2 files are the Latin subsets previously served by Google Fonts for
Journey2Better and are now bundled locally so production builds do not depend
on `fonts.googleapis.com` or `fonts.gstatic.com`.

| File | Family | Source | License |
| --- | --- | --- | --- |
| `playfair-display-latin.woff2` | Playfair Display (normal variable) | Google Fonts | SIL Open Font License 1.1 |
| `playfair-display-latin-italic.woff2` | Playfair Display (italic variable) | Google Fonts | SIL Open Font License 1.1 |
| `plus-jakarta-sans-latin.woff2` | Plus Jakarta Sans (normal variable) | Google Fonts | SIL Open Font License 1.1 |

Playfair Display is designed by Claus Eggers Sørensen; Plus Jakarta Sans is
designed by Tokotype. Both families are distributed under the SIL Open Font
License 1.1 (see `OFL.txt`). The files were the exact web subsets used by the
previous `next/font/google` configuration, so the visual design is unchanged.

The variable-weight files cover every weight the site uses:

- Playfair Display: 400–700, normal and italic
- Plus Jakarta Sans: 300–700, normal
