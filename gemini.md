# Portfolio Landing Page

## Project Overview
This project is a modern, responsive portfolio landing page built using the latest web technologies:
- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **UI Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Components**: [Radix UI](https://www.radix-ui.com/) and `shadcn/ui` style patterns
- **Language**: TypeScript

## Project Structure
- `app/`: Next.js App Router pages and layouts.
- `components/`: Reusable React UI components (including Radix UI primitives).
- `lib/`: Utility functions and shared helpers.
- `public/`: Static assets.

## Local Development

1. **Install Dependencies**
   Ensure you have Node.js 22+ installed, then run:
   ```bash
   npm install
   ```

2. **Run the Development Server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment to Railway

This project is configured for easy deployment on [Railway](https://railway.app/). 

1. **Create a Railway Project**: Create a new project from your GitHub repository on the Railway dashboard.
2. **Dockerfile**: A custom `Dockerfile` has been provided to build and serve the Next.js application optimally using Docker. Railway will automatically detect this `Dockerfile` and build your application.
3. **Environment Variables**: Make sure to set any necessary environment variables in the Railway dashboard.
4. **Port Configuration**: The Docker image exposes port `3000`. Railway will automatically map this to the public URL.

For optimized Docker builds, you can optionally enable the standalone output feature in Next.js by adding `output: 'standalone'` to your `next.config.mjs`. (The current Dockerfile works out of the box regardless).
