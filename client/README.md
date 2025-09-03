# Resume Worded - React Frontend

This is the frontend React application for the Resume Worded project, a service designed to help users optimize their resumes for job applications.

## Features

- **Responsive Design**: Fully responsive UI that works on all devices
- **Modern UI**: Clean, professional design matching the Resume Worded brand
- **Interactive Components**: Dropdown menus, hover effects, and smooth transitions
- **ATS Optimization**: Tools to help users get past Applicant Tracking Systems
- **Keyword Analysis**: Identify missing skills and keywords in resumes

## Tech Stack

- **React 19**: Latest version of React with modern features
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **Vite**: Fast build tool and development server
- **JavaScript**: Modern ES6+ syntax

## Project Structure

```
src/
├── components/          # React components
│   ├── Header.jsx      # Navigation header with dropdown
│   ├── HeroSection.jsx # Main hero section with laptop mockup
│   ├── ImportanceSection.jsx # Keywords importance section
│   ├── ATSSection.jsx  # ATS optimization section
│   ├── CompareSection.jsx # Resume comparison section
│   ├── ProvenSection.jsx # Features and benefits section
│   ├── TargetSection.jsx # Resume targeting process section
│   ├── RelatedResources.jsx # Additional tools and resources
│   ├── Footer.jsx      # Footer with navigation
│   └── Layout.jsx      # Main layout wrapper
├── App.jsx             # Main application component
├── main.jsx            # Application entry point
└── index.css           # Global styles and Tailwind imports
```

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn package manager

### Installation

1. Navigate to the client directory:
   ```bash
   cd client
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

## Design System

### Colors

- **Primary Purple**: `#2D1B69` (Dark purple for main elements)
- **Secondary Purple**: `#8B5CF6` (Lighter purple for accents)
- **Success Green**: `#10B981` (Green for positive actions)
- **Warning Orange**: `#F59E0B` (Orange for warnings)
- **Error Red**: `#EF4444` (Red for errors)

### Typography

- **Font Family**: Inter (with system font fallbacks)
- **Headings**: Bold, large text for section titles
- **Body Text**: Medium weight, readable text for content
- **Buttons**: Bold, prominent text for call-to-actions

### Components

- **Buttons**: Consistent styling with hover effects
- **Cards**: Clean, bordered containers for content
- **Navigation**: Dropdown menus and responsive navigation
- **Illustrations**: Custom SVG-based graphics for visual appeal

## Responsive Design

The application is fully responsive and includes:

- **Mobile First**: Designed for mobile devices first
- **Breakpoints**: Responsive breakpoints for tablet and desktop
- **Flexible Layouts**: Grid and flexbox layouts that adapt to screen size
- **Touch Friendly**: Optimized for touch devices

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Development

### Adding New Components

1. Create a new component file in `src/components/`
2. Import and use it in `App.jsx`
3. Follow the existing component structure and naming conventions

### Styling

- Use Tailwind CSS utility classes for styling
- Custom styles can be added to `index.css` using `@layer` directives
- Follow the established color scheme and design patterns

### State Management

- Use React hooks for local component state
- Keep components focused and maintainable
- Follow React best practices for performance

## Contributing

1. Follow the existing code style and structure
2. Test your changes on different screen sizes
3. Ensure all interactive elements are accessible
4. Update documentation as needed

## License

This project is part of the Resume Worded internship project.

## Support

For questions or issues, please refer to the project documentation or contact the development team.
