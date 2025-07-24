# Contact Form Migration to Cloudflare Functions - Context & Task

## Project Overview
This is a Next.js website for a German healthcare practice (`heilpraxis-jordan.de`) built with:
- **Framework**: Next.js with React and TypeScript
- **UI**: ShadCN UI components with Tailwind CSS
- **Email Service**: Resend API for contact form emails
- **Current Hosting**: Cloudflare Pages (with custom domain from Hostinger)
- **Development**: Originally built in Google Studio Firebase

## Current Problem
The contact form is not working because:
1. The site is deployed as a static build on Cloudflare Pages
2. The Next.js API routes (`/api/contact`) don't work in static deployments
3. Need to migrate the contact form handler to use Cloudflare Functions instead

## Current Setup Analysis
- Domain: `heilpraxis-jordan.de` (purchased via Hostinger)
- DNS: Configured to point to Cloudflare Pages
- Environment Variables: `RESEND_API_KEY` is already configured in Cloudflare Pages
- Build Command: `npx next build`
- Output Directory: `/out`

## Required Changes

### 1. Create Cloudflare Function
- Create a new file: `functions/api/contact.js`
- This will handle POST requests to `/api/contact`
- Must use Cloudflare's function format (not Next.js API route format)
- Should handle form validation and send emails via Resend API

### 2. Update Contact Form Component
- Ensure the form submits to `/api/contact` endpoint
- Handle loading states and error messages properly
- Validate required fields: name, email, phone, message

### 3. Remove Old API Route (if exists)
- Delete any existing `pages/api/contact.js` or `app/api/contact/route.ts` files
- These won't work in the static build anyway

## Technical Requirements

### Cloudflare Function Specifications:
- Export `onRequestPost` function for handling POST requests
- Export `onRequestOptions` function for CORS preflight
- Access environment variables via `context.env.RESEND_API_KEY`
- Return proper JSON responses with appropriate status codes
- Include CORS headers for cross-origin requests

### Email Configuration:
- Send emails TO: `info@heilpraxis-jordan.de`
- Send emails FROM: `kontakt@heilpraxis-jordan.de` (or similar domain-verified address)
- Subject: German language appropriate for healthcare contact
- HTML email template with all form fields formatted nicely

### Form Validation:
- Required fields: name, email, phone, message
- Email format validation
- Phone number should be mandatory (as requested)
- Proper error handling and user feedback

## Current File Structure Context
```
/
├── functions/           # Cloudflare Functions directory
├── src/
│   ├── app/            # Next.js app directory
│   ├── components/     # React components
│   └── lib/            # Utility functions
├── public/
├── next.config.ts
├── package.json
└── apphosting.yaml     # Firebase hosting config (may not be needed)
```

## Success Criteria
1. Contact form successfully sends emails via Cloudflare Functions
2. Form validation works properly with user feedback
3. Emails are delivered to `info@heilpraxis-jordan.de`
4. No console errors or deployment issues
5. Function appears in Cloudflare Pages dashboard after deployment

## Questions to Address
1. Where is the current contact form component located?
2. Is there an existing API route that needs to be removed?
3. Are there any custom validation or styling requirements for the form?
4. Should we implement any rate limiting or spam protection?

Please analyze the current codebase and implement the necessary changes to migrate the contact form from Next.js API routes to Cloudflare Functions, ensuring it works properly with the static deployment on Cloudflare Pages.