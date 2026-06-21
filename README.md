# Lumen Books - Next.js Assessment Project

A small online bookstore with a seller dashboard, built to demonstrate all major Next.js 16 rendering and data patterns.

## Tech Stack

- **Framework**: Next.js 16.2.9 (App Router)
- **React**: 19.2.4
- **TypeScript**: 5
- **Styling**: Tailwind CSS v4
- **Icons**: @phosphor-icons/react
- **Forms**: react-hook-form

## Getting Started

First, install dependencies:

```bash
npm install
```

Then run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Authentication

For testing the seller dashboard, use these hardcoded credentials:
- **Email**: `mp@lumen.com`
- **Password**: `mp1234`

## Rendering Strategy Table

| Route | Rendering Mode | Justification |
|-------|----------------|---------------|
| `/` | ○ Static (ISR) | Home page with featured books; revalidates every hour to keep content fresh without full rebuild |
| `/components/books` | ƒ Dynamic (SSR) | Catalog reads `searchParams` for filtering/sorting; must render fresh HTML per request for different queries |
| `/components/books/[slug]` | ● SSG (ISR) | Pre-renders all 50 known books via `generateStaticParams()`; ISR fallback for new books; revalidates hourly |
| `/components/login` | ○ Static | Login form is static; authentication happens via Server Action on submit |
| `/dashboard` | ƒ Dynamic (SSR) | Reads auth cookie to show seller-specific listings; must render per-user content at request time |
| `/dashboard/new` | ○ Static | Add book form is static; mutation happens via Server Action |
| `/api/books` | ƒ Dynamic | Route Handler returns JSON; consumed by client components |
| `/components/home` | ○ Static | Homepage components are static content |

**Legend:**
- ○ (Static) - prerendered as static content
- ● (SSG) - prerendered as static HTML (uses generateStaticParams)
- ƒ (Dynamic) - server-rendered on demand

## Next.js Build Output

```
Route (app)                                  Revalidate 
 Expire                                                 ┌ ○ /                                                1h 
     1y                                                 ├ ○ /_not-found
├ ƒ /api/books
├ ƒ /components/books
├ ● /components/books/[slug]                         1h 
     1y                                                 │ ├ /components/books/to-kill-a-mockingbird          1h 
     1y                                                 │ ├ /components/books/1984                           1h 
     1y                                                 │ ├ /components/books/the-great-gatsby               1h 
     1y                                                 │ └ [+47 more paths]
├ ○ /components/home
├ ○ /components/login
├ ƒ /dashboard
└ ○ /dashboard/new


ƒ Proxy (Middleware)

○  (Static)   prerendered as static content
●  (SSG)      prerendered as static HTML (uses generateStaticParams)
ƒ  (Dynamic)  server-rendered on demand
```

**Route Justifications:**
- `/` - Static with ISR: Home page content changes infrequently; 1-hour revalidation balances freshness with performance
- `/components/books` - Dynamic SSR: Different `searchParams` (category, sort) require different HTML; proves request-time rendering
- `/components/books/[slug]` - SSG with ISR: All 50 books known at build time; `generateStaticParams()` pre-renders them; ISR allows updates
- `/components/login` - Static: Form doesn't change; authentication logic in Server Action
- `/dashboard` - Dynamic SSR: Must read cookie at request time to show user-specific data; cannot be static
- `/dashboard/new` - Static: Form is static; mutation handled by Server Action with cache revalidation
- `/api/books` - Dynamic: Route Handler serves JSON on demand; no static caching

## Proving Freshness (SSR Routes)

The `/components/books` route demonstrates true SSR by returning different HTML for different requests:
- `/components/books?sort=price` returns books sorted by price
- `/components/books?sort=newest` returns books sorted by creation date
- `/components/books?category=Fantasy` returns only fantasy books

Since these different queries produce different HTML at request time (not at build time), this proves the route is dynamically rendered on the server.

## Implemented Features

### Core Requirements
- ✅ Static Site Generation with ISR (`/`)
- ✅ Server-Side Rendering with searchParams (`/components/books`)
- ✅ Dynamic routes with generateStaticParams (`/components/books/[slug]`)
- ✅ Dynamic metadata with generateMetadata
- ✅ Streaming with Suspense and skeleton fallbacks
- ✅ Server Actions for login and add-book mutations
- ✅ Cache revalidation after mutations
- ✅ Route Handler (`/api/books`)
- ✅ Middleware for auth gating
- ✅ Loading states (route-level)
- ✅ Error boundary
- ✅ Not-found handling
- ✅ Cookie-based authentication
- ✅ next/image for book covers
- ✅ next/font for typography

#

## Trade-offs



## Data Layer

The application uses a local in-memory data module (`lib/data.ts`) with 50 pre-populated books. Data functions simulate network latency with `setTimeout()` to mimic real API calls. This keeps the focus on Next.js patterns rather than external API integration.


