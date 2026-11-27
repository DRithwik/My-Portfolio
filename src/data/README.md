# Site content

Everything shown on the portfolio comes from the files in this folder. Edit
these, not the components.

| To change | Edit |
|---|---|
| Name, tagline, email, phone, GitHub/LinkedIn, About text, resume link and its "Last updated", contact text | `profile.ts` |
| Jobs (durations and the total are calculated monthly) | `experience.ts` |
| Education | `education.ts` |
| Project cards, and detail pages at `/projects/<slug>` | `projects.ts` |
| Technical skills cards, and their pages at `/skills/<slug>` | `skills.ts` |
| Coding platform cards, the stats used in the About card, and "Last updated" | `codingPlatforms.ts` |

Dates are written as `YYYY-MM` (for example `2026-05`) and are formatted for you.
Numbers in `codingPlatforms.ts` (`stats`) feed both the Coding Platforms cards
and the About card highlights, so they always match.
