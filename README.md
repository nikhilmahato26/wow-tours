# WOW SELF DRIVE CARS

Premium self-drive car rental website for Hyderabad. Next.js 15 (App Router) + TypeScript + Tailwind CSS v4 + Framer Motion + Lenis.

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

## Where the content lives

All business content is in `src/data/` so it can be edited without touching components:

| File | Contents |
| --- | --- |
| `src/data/business.ts` | Name, proprietor, phone, email, city, Google Maps link, WhatsApp number |
| `src/data/vehicles.ts` | Fleet list, categories, transmission, rate tiers, image URLs |
| `src/data/pricing.ts` | Price list (12 hr / 24 hr slots), rental options, form dropdown options |
| `src/data/gallery.ts` | Gallery images grouped by category |

### Replacing photos

Every image is a URL in a data file. Swap the `image` / `src` value for a real photo
(a `/public/...` path or a hosted URL). If a URL fails to load, the UI shows a branded
black + gold fallback panel, so the layout never breaks.

## Booking form

The form (`src/components/BookingForm.tsx`) validates with Zod and opens WhatsApp with a
pre-filled enquiry containing the customer name, vehicle, duration, pickup date, rental
type and message. To connect a backend, POST the `values` object inside `onSubmit` to an
API route before the WhatsApp step.

## SEO

- Metadata + Open Graph in `src/app/layout.tsx` and each route
- `LocalBusiness` (AutoRental) and `Service` JSON-LD in `src/lib/seo.ts`
- `sitemap.xml` and `robots.txt` generated from `src/app/sitemap.ts` / `robots.ts`
- Update `SITE_URL` in `src/lib/seo.ts` to the live domain before launch.
