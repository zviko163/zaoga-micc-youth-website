# ZAOGA MICC Youth Website

A modern, responsive static website built with React for the ZAOGA MICC Youth Ministry.

## About

This website serves as the online presence for ZAOGA MICC Youth, providing information about the ministry, upcoming events, and ways to get involved. The site is built with React and can be deployed as a static website to various hosting platforms.

## Features

- **Home Page**: Welcome section with mission, vision, and service times
- **About Page**: Information about the ministry, core values, and activities
- **Events Page**: Calendar of upcoming events and regular activities
- **Contact Page**: Contact information and ways to get in touch
- **Responsive Design**: Mobile-friendly layout that works on all devices
- **Modern UI**: Clean, professional design with church-appropriate colors

## Tech Stack

- React 19.2.4
- React Router DOM 7.x
- CSS3 for styling
- Create React App build system

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/zviko163/zaoga-micc-youth-website.git
cd zaoga-micc-youth-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The site will open at [http://localhost:3000](http://localhost:3000)

## Available Scripts

### `npm start`

Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser. The page will reload when you make changes.

### `npm test`

Launches the test runner in interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance. The build is minified and ready for deployment.

## Deployment

After running `npm run build`, the `build` folder contains the static files that can be deployed to:

- GitHub Pages
- Netlify
- Vercel
- AWS S3
- Any static hosting service

### Example: Deploy to GitHub Pages

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to package.json:
```json
"homepage": "https://zviko163.github.io/zaoga-micc-youth-website",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

3. Deploy:
```bash
npm run deploy
```

## Customization

To customize the content:

1. **Update church information**: Edit the content in the page components located in `src/pages/`
2. **Change colors**: Modify the CSS files to use your preferred color scheme
3. **Add pages**: Create new page components and add routes in `src/App.js`
4. **Update images**: Replace logo and favicon files in the `public/` folder

## Project Structure

```
zaoga-micc-youth-website/
├── public/
│   ├── index.html
│   ├── favicon.ico
│   └── ...
├── src/
│   ├── components/
│   │   ├── Navigation.js
│   │   └── Navigation.css
│   ├── pages/
│   │   ├── Home.js
│   │   ├── Home.css
│   │   ├── About.js
│   │   ├── About.css
│   │   ├── Events.js
│   │   ├── Events.css
│   │   ├── Contact.js
│   │   └── Contact.css
│   ├── App.js
│   ├── App.css
│   └── index.js
├── package.json
└── README.md
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.

## Contact

For questions or support, please contact the ZAOGA MICC Youth Ministry.

---

Built with ❤️ for ZAOGA MICC Youth
