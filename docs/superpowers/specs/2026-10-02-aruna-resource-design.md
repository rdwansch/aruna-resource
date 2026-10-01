# ARUNA Resource demo website

## Accepted scope

Build a fictional B2B resource management company profile. The audience is operations, procurement, and sustainability teams assessing service scope before a conversation. The user approved implementation on October 2, 2026 after agreeing to a minimal React SPA with TanStack Router. Photography initially used gray div placeholders. The approved October 2 follow-up replaces every photo slot with locally stored, free licensed stock photography from Unsplash and Pexels. Photo sources and licenses are recorded in docs/image-sources.md. No image generation, backend, CMS, PDF, or PPT in this phase.

## Architecture

React, TypeScript, Vite, TanStack Start in SPA mode, TanStack Router with file-based routes, Tailwind CSS, Lucide icons, Bun, React Compiler, Oxlint, and Oxfmt. Following the added `.agents/AGENTS.md`, UI belongs to domain features, shared components to `shared`, shell to `layout`, and dummy data to `constants`. Interactive logic lives in management hooks. The user's latest instruction keeps this phase static and defers Query, authentication, global state managers, and API infrastructure. Native dialog for gallery; native form validation plus whitespace validation for the contact demo. No messages are transmitted or persisted.

Routes: `/`, `/perusahaan`, `/layanan`, `/layanan/$slug`, `/galeri`, `/insight`, `/insight/$slug`, `/kontak`. Unknown paths and unknown content slugs show an accessible not-found page. Route transitions restore scroll, update titles, and close mobile navigation.

## Visual system

- Navy: `#112c40`; green: `#217453`; white: `#ffffff`; cloud: `#f3f6f6`; slate: `#586875`; line: `#dce4e7`.
- Display: locally bundled Manrope 500/600/700. Default body: Helvetica Neue, Helvetica, Arial, per the added project baseline.
- Corporate proportions: max-width 1240px, wide whitespace, 6px corners, restrained green CTAs, large upright headlines. No italic, no decorative pill or badge above headings, no fabricated impact statistics.
- Signature: the operational handover strip between hero and services, continued in a five-stage resource process diagram. It gives the material journey a concrete place in the layout.
- Desktop home: header; split headline/photo hero; navy handover strip; company introduction; service grid; five-stage process; gallery; fictional partner wordmarks; articles; green contact panel; footer.
- Mobile: stacked hero, two-column handover strip, single-column services, vertical process, keyboard-accessible collapsible menu.

```
HEADER   logo / navigation / contact
HERO     headline + actions | gray facility photo
FLOW     electronics | industry | assets | documentation
ABOUT    photo | company introduction
SERVICES card | card | card
PROCESS  assessment / collection / sorting / handling / documentation
GALLERY  wide photo | photo | photo
PARTNERS fictional wordmarks
INSIGHT  article | article | article
CONTACT  project prompt + CTA
FOOTER   company / links / demo notice
```

The first visual draft considered a large decorative circular graphic. It was removed: the process diagram conveys real sequence, while the gray facility photograph keeps the hero corporate and ready for eventual licensed imagery. Numbering is reserved for the actual process. No external client logos or badges imply accreditation.

## Content

Original Indonesian demo copy. Four service areas: electronic waste, B3/non-B3 industrial material, asset and rejected-product disposal, and material recovery. No claims about operating permits, actual facilities, customers, capacity, or results. Partners are visibly fictional. Articles have full content and primary reference links for technical statements. A persistent footer explains the demo status; service and gallery pages explain the relevant illustrative scope.

Data contract: `Service` has slug, title, shortTitle, category, summary, description, items, deliverables, imageLabel, icon. `Article` has slug, title, category, excerpt, date, readTime, imageLabel, sections (heading, paragraphs, optional bullets), sources (title, url). `GalleryItem` has id, title, category, description, imageLabel. `ProcessStep` has title, description, icon. All icon identifiers are strings mapped to Lucide components by shared UI. Partners are a list of fictional names.

## Implementation sequence

1. Check destination and instructions; establish this specification and content contract.
2. Install dependencies; implement tokens, shared UI, and shell.
3. Complete Home; extend the same system to company, service, gallery, insight, and contact pages.
4. Connect all routes, filters, native gallery dialog, contact validation, motion, and not-found states.
5. Run TypeScript, production build, small native Bun content/validation checks, and desktop/mobile browser checks. Check keyboard focus, route reloads, overflow, reduced motion, gallery and contact interactions.

## Acceptance

The demo must run locally with Bun, support distinct SPA routes, have no broken links, be usable at 360px and desktop widths, and clearly state that the contact form sends nothing. Motion is subtle and respects reduced motion. There are no photos, AI imagery, italic headings, decorative pills, or fabricated credentials.
