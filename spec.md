# Church Website

## Current State
- TV Ministry section has a countdown timer using `getNextFridayTimeLeft()` which always counts to the next Friday 4pm GMT. It shows the timer but never shows a 'Now Broadcasting' state — it just stops at zero or shows zeros.
- Latest Sermons section has 2 sermons: Pastor Solomon ('Knowing The Truth') and Rev. Patrick ('What Can I Do for the Lord?').
- No Church Bulletin section exists.

## Requested Changes (Diff)

### Add
- **TV Ministry timer: Now Broadcasting state** — between Friday 4:00pm–5:00pm GMT, hide the countdown and show 'Now Broadcasting' message with a clickable link to https://www.faithworldtv.com/. After 5:15pm GMT, restart the countdown to the following Friday 4pm.
- **Pastor Samuel sermon card** — title: 'THE HARVEST IS PLENTY, BUT LABORERS ARE FEW', preached 6/04/25, scriptures: Luke 10:1-5, Luke 10:17, Acts 1:8. Summary: need for more workers, accurate preaching, authority and power from God (full text as provided).
- **Palm Sunday sermon card by Rev. Patrick** — title: 'The Lord is in need of you', Mark 10:17, Matthew 21. Key takeaways: God seeks commitment, authentic living in Christ, focus on the right things, 'Go and untie' for the Lord has need.
- **Church Bulletin section** — static section below TV Ministry (or above footer). Two items: Easter Sunday 5th April 2026 with celebratory message, Father's Day 21st June 2026 with honoring message.

### Modify
- `getNextFridayTimeLeft()` / timer hook: add logic to detect if currently in the 4pm–5pm GMT Friday window (isBroadcasting) and after 5:15pm (to target next Friday).
- The countdown display in TV Ministry: conditionally show 'Now Broadcasting' panel or the countdown tiles based on isBroadcasting state.

### Remove
- Nothing removed.

## Implementation Plan
1. Refactor `getNextFridayTimeLeft` into a richer hook `useTVBroadcastState` that returns `{ isBroadcasting, timeLeft }`. isBroadcasting = true when UTC time is Friday and hour is 16 (4pm–4:59pm). After 5:15pm GMT (hour >= 17 and minute >= 15), target becomes next Friday.
2. In the TV Ministry section countdown block, conditionally render 'Now Broadcasting' with Faithworld TV link when isBroadcasting, otherwise show countdown tiles.
3. Add Pastor Samuel sermon to SERMONS array with appropriate generated image.
4. Add Palm Sunday sermon (Rev. Patrick) to SERMONS array with appropriate image.
5. Add BULLETIN array with 2 items (Easter Sunday, Father's Day).
6. Add Church Bulletin section to the page (styled with navy/gold theme, card layout).
