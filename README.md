[# WhatsApp Web Clone

A modern, responsive WhatsApp Web clone built with React, TypeScript, and Node.js. This project replicates the core functionality and UI of WhatsApp Web with a clean, intuitive interface.

## Features

- **Real-time Messaging**: Instant message delivery and status updates
- **Conversation Management**: Create and manage multiple conversations
- **Modern UI**: Clean, responsive design that works on all devices
- **TypeScript**: Full type safety and better development experience
- **Real-time Updates**: Live status updates and message notifications
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices

## Tech Stack

### Frontend
- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Type-safe JavaScript development
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework for styling

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **Socket.io** - Real-time bidirectional communication
- **Webhooks** - For external integrations

## Project Structure

```
WhatsApp Web Clone/
├── frontend/                 # React frontend application
│   ├── data/components/     # React components
│   ├── data/               # Mock data and types
│   ├── public/             # Static assets
│   └── package.json        # Frontend dependencies
├── backend/                # Node.js backend server
│   ├── Sample_data/        # Sample webhook data
│   ├── server.js           # Express server
│   └── package.json        # Backend dependencies
└── README.md              # Project documentation
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/whatsapp-web-clone.git
   cd whatsapp-web-clone
   ```

2. **Install Frontend Dependencies**
   ```bash
   cd frontend
   npm install
   ```

3. **Install Backend Dependencies**
   ```bash
   cd ../backend
   npm install
   ```

### Running the Application

1. **Start the Backend Server**
   ```bash
   cd backend
   npm start
   ```
   The backend server will start on `http://localhost:5000`

2. **Start the Frontend Development Server**
   ```bash
   cd frontend
   npm run dev
   ```
   The frontend will be available at `http://localhost:5173`

3. **Open your browser** and navigate to `http://localhost:5173`

## Development

### Frontend Development
- The frontend uses Vite for fast development and building
- TypeScript provides type safety
- Components are organized in the `data/components/` directory
- Mock data is stored in `data/mockData.ts`

### Backend Development
- Express.js server handles API requests
- Socket.io manages real-time communication
- Webhook support for external integrations
- Sample data available in `Sample_data/` directory

## Building for Production

### Frontend Build
```bash
cd frontend
npm run build
```

### Backend Build
```bash
cd backend
npm start
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Inspired by WhatsApp Web
- Built with modern web technologies
- Designed for learning and development purposes

## LiveDemo

(https://whatsapp-web-clone-chi.vercel.app/)
