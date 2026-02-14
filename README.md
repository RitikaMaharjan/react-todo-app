# Advanced React To-Do App 🚀

## Project Description
This is a scalable and maintainable To-Do application built with React. The app allows users to manage tasks efficiently with a clean, minimal, and pastel-themed UI. It demonstrates state management using React hooks, routing with React Router, and data persistence using local storage.  

The app is designed with a consistent frame and modern UX, making it easy to use while keeping the codebase organized for scalability.

---

## Features Implemented

### Core Features
- **Add Tasks**: Users can add tasks with a title, optional priority (Low, Medium, High), and due date.  
- **Edit Tasks**: Update task titles, priority, and due date.  
- **Delete Tasks**: Remove individual tasks.  
- **Mark as Completed**: Toggle tasks between pending and completed.  
- **Filter Tasks**: View All, Active, or Completed tasks.  
- **Search Tasks**: Filter tasks by title with search functionality.  

### State Management
- Uses React’s `useState` for managing tasks.  
- Tasks are stored in **local storage**, ensuring data persistence across page reloads.  

### Routing
- **React Router** is used for page navigation:  
  - `/` → Home / To-Do List  
  - `/add` → Add Task Page  
  - `/edit/:id` → Edit Task Page  

### UI & Styling
- Clean, **minimal pastel theme** with smooth hover effects and subtle shadows.  
- Consistent input and card frames across all pages.  
- Responsive design for mobile devices.

### Optional / Extra Features
- Task priority displayed with colored badges.  
- Subtle hover lift effect on buttons and task cards.  
- Smooth transition animations for interactivity.

---

## Instructions to Run Locally

1. **Clone the repository**

```bash
git clone <your-repo-url>
cd <repo-folder>
