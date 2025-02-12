# Brand Color Clone

This project is a clone of the popular BrandColors website, providing a comprehensive collection of official brand color codes.  It allows users to browse, search, and select brand colors, and download them in various formats (CSS, SCSS, LESS).

## Project Structure

The project follows a standard Create React App structure with the following key components:

- **public:** Contains static assets like `index.html`, `favicon.ico`, and other images.
- **src:** Contains the source code.
    - **App.js:** The main application component.
    - **components:** Contains reusable UI components.
        - **Brand.js:** Displays individual brand information and colors.
        - **Collection.js:** Displays a collection of selected brands.
        - **CollectionBar.js:** Navigation bar for collection view.
        - **Content.js:** Main content area for displaying brands.
        - **Copied.js:** Displays a "copied to clipboard" message.
        - **Download.js:** Provides options to download selected colors in CSS, SCSS, or LESS format.
        - **Loader.js:** Loading indicator for lazy-loaded components.
        - **Piece.js:** Displays detailed information for a single brand.
        - **PieceBrandBar.js:** Navigation bar for single brand view.
        - **SearchBar.js:** Search bar for filtering brands.
        - **Sidebar.js:** Sidebar with navigation and about information.
    - **MainContext.js:** Context API for managing application state.
    - **helpers.js:** Utility functions, such as color contrast calculation.
    - **index.js:** Entry point for the application.
    - **index.scss:** Main stylesheet.
- **brands.json:** A large JSON file containing the brand color data.


## Tech Stack & Dependencies

This project uses the following technologies and libraries:

- **React:**  For building the user interface.
- **React Router DOM:** For client-side routing.
- **React Content Loader:** For creating placeholder loaders.
- **React Clipboard.js:** For handling copy-to-clipboard functionality.
- **React Icons:** For including various icons.
- **React Lazyload:** For lazy loading of components to improve performance.
- **SCSS:**  For styling the application.
- **gh-pages:** For deploying to GitHub Pages.


## Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/hasankoman/brandcolor-clone.git
   ```

2. **Navigate to the project directory:**
   ```bash
   cd brandcolor-clone
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Start the development server:**
   ```bash
   npm start
   ```
   This will start the application on `http://localhost:3000`.

## Usage Guide

The application allows users to:

- **Browse brands:** View a list of brands with their color palettes.
- **Search brands:** Search for specific brands using the search bar.
- **Select brands:** Select brands to add them to a collection.
- **Download colors:** Download selected colors in CSS, SCSS, or LESS format.
- **View single brand:** Navigate to a single brand page for a detailed view.


## Deployment

This project is deployed to GitHub Pages.  The `deploy` script in `package.json` handles the deployment process:

```bash
npm run deploy
```

This script uses `gh-pages` to build the application and deploy it to the `gh-pages` branch.


## License

This project is licensed under the [MIT License](LICENSE).  (Note: A LICENSE file is missing from the provided files; please add this if it applies)


## Author Info

This project was created by Hasan Koman.  (Add contact details if desired)
