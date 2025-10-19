# toshiki-spotify-refresh-token-generator
A modern, open-source web app to generate Spotify refresh tokens using your own Spotify Developer credentials. Built with Next.js, shadcn/ui, Tailwind CSS, and Sonner for a beautiful, responsive, and dark-mode-friendly experience.

## Features
- Multi-step, user-friendly flow
- Modern UI with shadcn/ui and Tailwind CSS
- Dark mode support
- Copy-to-clipboard with toast feedback
- Select all/individual Spotify OAuth scopes
- Secure: your credentials are never stored

## Getting Started

1. **Clone the repository:**
	```sh
	git clone https://github.com/limhenry/spotify-refresh-token-generator.git
	cd spotify-refresh-token-generator/shadcn/spotify-refresh-token-generator-shadcn
	```

2. **Install dependencies:**
	```sh
	pnpm install
	# or
	npm install
	```

3. **Create a `.env` file:**
	Add your Spotify app credentials:
	```env
	SPOTIFY_CLIENT_ID=your_client_id
	SPOTIFY_CLIENT_SECRET=your_client_secret
	```

4. **Run the development server:**
	```sh
	pnpm dev
	# or
	npm run dev
	```

5. **Open the app:**
	Visit [http://localhost:3000](http://localhost:3000) in your browser.

## Usage
- Follow the steps in the UI to enter your Spotify credentials and select the desired scopes.
- The app will guide you through the OAuth flow and display your refresh token in a modal.
- Use the copy button to copy your token, with instant toast feedback.

## Tech Stack
- [Next.js](https://nextjs.org/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Sonner](https://sonner.emilkowal.ski/) (toast notifications)

## License

[GPLv3](./LICENSE)

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
