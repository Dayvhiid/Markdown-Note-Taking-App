# Markdown Note Taking App with Grammar Check

A web application that allows users to upload markdown files, automatically checks grammar using LanguageTool API, and displays the rendered markdown with highlighted grammar mistakes.

## Features

- 📝 **File Upload**: Upload markdown files through a simple web interface
- 🔍 **Grammar Checking**: Automatic grammar and spell checking using LanguageTool API
- 🎨 **Markdown Rendering**: Convert markdown to HTML with syntax highlighting
- ✨ **Visual Feedback**: Grammar mistakes are highlighted with red wavy underlines
- 📋 **Mistake Summary**: Display list of detected grammar issues with suggestions

## Technology Stack

- **Backend**: Node.js with Express.js
- **View Engine**: EJS for server-side rendering
- **File Processing**: Multer for file uploads
- **Markdown Parser**: Marked library for markdown to HTML conversion
- **Grammar API**: LanguageTool API for grammar checking
- **HTTP Client**: Axios for API requests

## Project Structure

```
markdownNoteTakingApp/
├── controllers/
│   └── fileController.js      # Handles file upload and processing logic
├── routes/
│   └── fileRoutes.js         # Express routes configuration
├── services/
│   ├── fileService.js        # File reading utilities
│   └── grammarService.js     # Grammar checking API integration
├── views/
│   ├── upload.ejs           # File upload form
│   └── result.ejs           # Results display with highlighted text
├── uploads/                 # Temporary file storage
├── index.js                # Main application entry point
└── package.json            # Project dependencies and scripts
```

## Installation

1. **Clone the repository** (or download the project files)

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Create environment file** (optional):
   Create a `.env` file in the root directory:
   ```env
   PORT=5000
   ```

4. **Start the application**:
   ```bash
   # Production
   npm start
   
   # Development (with auto-restart)
   npm run dev
   ```

5. **Access the application**:
   Open your browser and navigate to `http://localhost:5000`

## Usage

1. **Upload a File**:
   - Navigate to the home page
   - Click "Choose File" and select a markdown file
   - Click "Upload" to process the file

2. **View Results**:
   - The app will display the rendered markdown content
   - Grammar mistakes are highlighted with red wavy underlines
   - A summary of detected mistakes with suggestions appears below

3. **File Support**:
   - Currently supports text-based files (primarily markdown)
   - Files are temporarily stored in the `uploads/` directory

## API Integration

The application uses the **LanguageTool API** for grammar checking:
- **Endpoint**: `https://api.languagetool.org/v2/check`
- **Language**: English (US)
- **Method**: POST request with text content
- **Response**: Returns grammar mistakes with context and suggestions

## Dependencies

### Production Dependencies
- `express` - Web framework for Node.js
- `ejs` - Embedded JavaScript templating engine
- `multer` - Middleware for handling file uploads
- `marked` - Markdown parser and compiler
- `axios` - HTTP client for API requests
- `dotenv` - Environment variable loader
- `body-parser` - Express middleware for parsing request bodies

### Development Dependencies
- `nodemon` - Auto-restart server during development

## Key Features Explained

### Grammar Checking Process
1. File is uploaded and read as text
2. Content is sent to LanguageTool API
3. API returns grammar mistakes with positions
4. Mistakes are highlighted by inserting HTML spans
5. Content is rendered as markdown with highlights

### Error Handling
- File reading errors are caught and handled
- API failures return appropriate error messages
- Invalid file uploads are handled gracefully

### Visual Highlighting
Grammar mistakes are wrapped in `<span class="highlight">` elements with CSS styling:
```css
.highlight {
  background-color: #ffcccc;
  text-decoration: underline red wavy;
}
```

## Development

### Running in Development Mode
```bash
npm run dev
```
This uses nodemon to automatically restart the server when files change.

### File Structure Explanation
- **Controllers**: Handle request/response logic
- **Routes**: Define API endpoints and routing
- **Services**: Contain business logic and external API integration
- **Views**: EJS templates for rendering HTML pages

## Future Enhancements

- Support for additional file formats (PDF, DOCX)
- User authentication and file management
- Custom grammar rules and preferences
- Real-time grammar checking as you type
- Export functionality for corrected content
- Integration with other grammar checking services

## License

ISC License

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

---

For questions or issues, please create an issue in the repository or contact the development team.
