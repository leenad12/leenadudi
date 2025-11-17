# Personal Portfolio Website

A sleek and modern personal portfolio website built with Next.js, React, TypeScript, and Tailwind CSS.

## Features

- **About Me**: Personal introduction and background
- **Experience**: Professional work history and achievements
- **Projects**: Showcase of personal and professional projects
- **Research**: Academic and research work
- **Hobbies**: Personal interests and activities

## Tech Stack

- **Next.js 14**: React framework for production
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Smooth animations and transitions

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Customization

- Edit component files in `/components` to update content
- Modify `app/globals.css` for global styles
- Update `tailwind.config.js` for theme customization
- Change metadata in `app/layout.tsx`

## Project Structure

```
website/
├── app/
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Main page with navigation
│   └── globals.css     # Global styles
├── components/
│   ├── Navigation.tsx  # Navigation component
│   ├── AboutMe.tsx     # About section
│   ├── Experience.tsx  # Experience section
│   ├── Projects.tsx    # Projects section
│   ├── Research.tsx    # Research section
│   └── Hobbies.tsx    # Hobbies section
└── public/             # Static assets
```

## License

MIT
