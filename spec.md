# Church Website

## Current State
- Leadership array has `name: "Head Pastor Patrick Adu Amankwah"` and `title: "Head Pastor"` as the first member.
- Church Bulletin section renders all BULLETIN items unconditionally (no date-based filtering). Items have free-text date strings, no JS Date objects.
- There is no Past Events section or collapsible.

## Requested Changes (Diff)

### Add
- Each BULLETIN item needs a `expiryDate: Date` field (real JS Date object) so items can be automatically categorised as upcoming or past.
- A "Past Events & Programs" collapsible section rendered directly below the active bulletin announcements grid. Uses the shadcn Collapsible component (already available). Shows all bulletin items whose `expiryDate` is before today's date. Styled consistently with the existing bulletin section (same card style, navy background, gold accents).

### Modify
- BULLETIN item expiry dates:
  - Week of Prayer and Fasting: expired (March 30, 2026)
  - Good Friday Service: expired (April 3, 2026)
  - Witnessing Opportunity: expired (April 5, 2026)
  - Easter Sunday: expired (April 5, 2026)
  - Youth Bible Reading Challenge: ongoing/future (set expiry to Dec 31, 2026)
  - Father's Day: future (June 21, 2026)
- Leadership array first entry: change `name` from `"Head Pastor Patrick Adu Amankwah"` to `"Rev Patrick Adu Amankwah"` and `title` from `"Head Pastor"` to `"Senior Pastor"`. (Keep photo the same.)
- Active bulletin section: only show items where `expiryDate >= today`.

### Remove
- Nothing removed.

## Implementation Plan
1. In `App.tsx`, add `expiryDate: Date` to each BULLETIN item with appropriate dates.
2. Compute `today = new Date()` and split BULLETIN into `upcomingBulletin` (expiryDate >= today) and `pastBulletin` (expiryDate < today).
3. Render the active bulletin grid using `upcomingBulletin`.
4. Below the active bulletin grid, add a collapsible "Past Events & Programs" section using the shadcn Collapsible component. Show a toggle button (chevron icon) to expand/collapse. Render past items in the same card style.
5. Update the LEADERSHIP array first entry: name → `"Rev Patrick Adu Amankwah"`, title → `"Senior Pastor"`.
