# Brand Color Clone

## Project Description

This project is a clone of the BrandColors website, a comprehensive collection of official brand color codes.  It allows users to browse and search for brand colors, select colors to create a custom palette, and download the palette in CSS, SCSS, or LESS format.  This clone provides a user-friendly interface for accessing and managing brand color information.


## Technologies Used

* **Frontend:** React, React Router DOM, React Modal, React Clipboard.js, React Content Loader, React LazyLoad, Sass, Font Awesome
* **Styling:** SCSS
* **Others:** JSON (for brand data), GitHub Pages (for deployment)


## Installation

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

Node.js and npm version requirements are defined in the `package.json` file.


## Project Structure

The project follows a standard React application structure:

* **`public/`:** Contains static assets like `index.html`, `favicon.ico`, and other images used by the application.
* **`src/`:** Contains the source code of the application.

    * **`src/App.js`:** The main application component.  This is the root component and handles routing.
    * **`src/MainContext.js`:** Provides a context API for sharing state across components.
    * **`src/brands.json`:** A large JSON file containing data for different brands and their colors.
    * **`src/components/`:** Contains various UI components:
        * **`Brand.js`:** A component representing a single brand with its colors.
        * **`Collection.js`:** Displays a collection of selected brands.
        * **`CollectionBar.js`:**  The top bar in the collection view, allowing downloads and navigation.
        * **`Content.js`:** The main content area, displaying brands based on search or all brands.
        * **`Copied.js`:** A message indicating the copied color.
        * **`Download.js`:**  Handles the download functionality for selected brands (CSS, SCSS, LESS).
        * **`Loader.js`:** A loading component for lazy-loading.
        * **`Piece.js`:** Displays individual brand details.
        * **`PieceBrandBar.js`:** Navigation bar for individual brand pages.
        * **`SearchBar.js`:** The search bar for filtering brands.
        * **`Sidebar.js`:** The sidebar with the logo, description, and "About" link.
    * **`src/helpers.js`:** Contains utility functions such as `getContrastYIQ`.
    * **`src/index.js`:** The entry point for the React application.
    * **`src/index.scss`:** Contains the global styling for the application.



## Running the Application

1. **Start the development server:**

```bash
npm run dev
```

This command starts a development server and runs the app in the development mode. Open `http://localhost:3000` to view it in the browser. The page will reload if you make edits.


2. **Build for production:**

```bash
npm run build
```

This command builds the application for production. The build artifacts will be stored in the `build` folder.  The `homepage` field in `package.json` should be configured correctly for GitHub Pages deployment.


## Contributing

Contributions are welcome!  Please follow these guidelines:

1. Fork the repository and create a new branch for your changes.
2. Make your changes and ensure they are well-tested.
3. Commit your changes with clear and concise messages.
4. Create a pull request describing your changes and the reasoning behind them.


Code style and formatting should follow the existing conventions within the project.  Tests can be added using Jest and React Testing Library.


## License

[Specify the license here, e.g., MIT License]
