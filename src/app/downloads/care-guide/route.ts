import { createTextDownload } from "@/lib/downloads";

const careGuide = `
Hira Industries
Care Guide

Cleaning
- Use a soft sponge and mild dish soap.
- Avoid abrasive pads or harsh cleaning powders.

Storage
- Stack carefully with a soft separator where possible.
- Keep heavier pieces below lighter pieces.

Handling
- Allow hot items to cool before washing.
- Avoid sudden temperature shock where possible.

Presentation
- Wipe dry before display for a polished finish.
- Handle gold rim and decorative surfaces with care.
`.trim();

export function GET() {
  return createTextDownload("Hira-Care-Guide.txt", careGuide);
}
