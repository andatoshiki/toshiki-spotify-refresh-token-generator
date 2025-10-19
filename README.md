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