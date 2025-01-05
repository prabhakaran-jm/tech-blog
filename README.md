# Tech Blog Platform

A full-stack web application for technical blogging built with MERN stack (MongoDB, Express.js, React, Node.js).

## Features
- User authentication (Register/Login)
- Create and manage blog posts 
- Markdown support for content
- Code syntax highlighting
- Responsive design
- JWT-based authentication

## Prerequisites
- Node.js (v14 or higher)
- MongoDB
- npm or yarn

## Project Structure   
  
```
tech-blog/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── context/      # Context providers
│   │   ├── services/     # API services
│   │   └── App.js        # Main application component
│   └── package.json
│
└── server/                # Backend Node.js application
    ├── config/           # Configuration files
    ├── controllers/      # Route controllers
    ├── middleware/       # Custom middleware
    ├── models/          # Database models
    ├── routes/          # API routes
    ├── .env             # Environment variables
    └── package.json
```

## Installation

1. Clone the repository
```
git clone https://github.com/your-username/tech-blog.git
``` 
2. Navigate to the project directory
```
cd tech-blog
```
3. Install dependencies for both client and server
```
npm install
```
4. Set up MongoDB and create a `.env` file with your database connection string


5. Start the development server

```
cd server
npm run dev
```

```
cd client
npm start
```

The application will be available at:  
Frontend: http://localhost:3000  
Backend API: http://localhost:5000  

## API Endpoints:

### Authentication
- POST /api/auth/register - Register new user
- POST /api/auth/login - Login user
- GET /api/auth/me - Get current user

### Posts
- GET /api/posts - Get all posts
- GET /api/posts/:id - Get single post
- POST /api/posts - Create new post
- PUT /api/posts/:id - Update post
- DELETE /api/posts/:id - Delete post


## Technologies Used
- Frontend: React.js, React Router, Axios
- Backend: Node.js, Express, MongoDB, Mongoose
- Authentication: JWT
- Styling: Material-UI
- Markdown Rendering: React Markdown
- Syntax Highlighting: highlight.js

## Development

### Environment Variables
Create a .env file in the server directory with the following variables:
```
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

### Database
Make sure MongoDB is running locally or update the MONGODB_URI in .env to point to your database.   

### Security Features
- Password hashing
- JWT authentication
- Protected routes
- Input validation
- Error handling

### Contributing
Fork the repository
Create your feature branch (git checkout -b feature/AmazingFeature)
Commit your changes (git commit -m 'Add some AmazingFeature')
Push to the branch (git push origin feature/AmazingFeature)
Open a Pull Request

### Future Enhancements
- Comment system
- User profiles
- Tags and categories
- Search functionality
- Rich text editor
- Image upload
- Social sharing

### License
This project is licensed under the MIT License - see the LICENSE file for details.

### Acknowledgments
- Material-UI for the UI components
- MongoDB for the database
- Express.js for the backend framework
- React for the frontend library  