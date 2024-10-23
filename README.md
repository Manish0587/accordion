
# Accordion FAQ App

This project is a simple **Accordion FAQ Application** built using React. It provides a user-friendly interface for frequently asked questions (FAQ), with smooth content visibility toggling.

## Features

- **Accordion Toggle**: Expand and collapse content for each question.
- **Dynamic Button Icons**: Button changes between `+` and `-` based on the state.
- **Responsive Design**: Adaptable across screen sizes.
- **Modular Code**: Components are structured for maintainability.

## Project Structure

```
/src
│
├── App.jsx            # Main application component
├── App.css            # Styling for the application
├── App.test.js        # Test cases for the application
├── Question.jsx       # Component for individual questions
├── data.js            # Sample FAQ data for the application
├── index.js           # Entry point for React DOM rendering
├── index.css          # Global styles and variables
```

## Prerequisites

Ensure the following tools are installed on your system:

- **Node.js** (v14+)
- **npm** (v6+)

## Getting Started

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd <project-directory>
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the application:**
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view the app in the browser.

## Components

### 1. **App.jsx**
The main component that renders the list of questions using the `Question` component.

### 2. **Question.jsx**
A reusable component managing the toggle state for each question.

### 3. **data.js**
Contains an array of FAQ data, with each object containing:
- `id`: Unique identifier.
- `title`: Question title.
- `info`: Content to display upon expansion.

## Styling

- **App.css**: Handles the layout and appearance.
- **index.css**: Global CSS variables and additional styling for responsiveness.

## Testing

- Run tests with:
  ```bash
  npm test
  ```

## Scripts

- **`npm start`**: Start the app in development mode.
- **`npm test`**: Run tests interactively.
- **`npm run build`**: Build the app for production.

## Future Enhancements

- Add animations for smoother transitions.
- Fetch FAQ data from an API for dynamic content.
- Improve accessibility by adding `aria-*` attributes.

## Output
<img width="1464" alt="Screenshot 2024-10-23 at 4 36 36 PM" src="https://github.com/user-attachments/assets/4c8bdaf8-21ec-4913-adbf-fa8ebe036932">
<img width="1464" alt="Screenshot 2024-10-23 at 4 37 24 PM" src="https://github.com/user-attachments/assets/c9fc578a-60ca-4fd5-80e6-308e9fdce663">

