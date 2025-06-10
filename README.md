# 🎵 JamSpaceKe

**JamSpaceKe** is a React-based platform that helps musicians find music studios with the instruments they need, in the location they want. Studios can register their services, set session pricing, and leave notes for potential clients. Musicians (clients) can register, log in, and book sessions seamlessly through the app.

---

## 🚀 Features

### 🎸 For Musicians
- Browse studios by available instruments and location
- Book sessions and view upcoming sessions
- Simple registration and login experience

### 🏢 For Studios
- Register and list your studio
- Set pricing per session
- Add custom notes for clients
- Manage your listing and attract new talent

---

## 🖥️ Tech Stack

- **Frontend**: React, React Router
- **Styling**: CSS
- **Alerts**: SweetAlert2
- **Backend (Expected)**: RESTful API (currently `http://localhost:5000`)
- **State Management**: React's `useState` and `useEffect`

---

## 📁 Folder Structure (Partial)

JamSpaceKe/
├── src/
│ ├── components/
│ │ ├── Navbar.js
│ │ ├── Footer.js
│ │ ├── LogInForm.js
│ │ └── RegistrationForm.js
│ ├── App.js
│ ├── App.css
│ └── ...

yaml
Copy
Edit

---

## ⚙️ Setup & Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/A-Barongo/JamSpaceKE.git
   cd JamSpaceKE
Install dependencies

bash

npm install
Start the development server

bash

npm start
Ensure the backend API is running on http://localhost:5000

You can modify API URLs in App.js if needed.

📦 Environment Variables
Currently, the API URLs are hardcoded in App.js. You can refactor the project to use an .env file:

ini

REACT_APP_API_BASE_URL=http://localhost:5000
Update fetch URLs like:

js
Copy
Edit
fetch(`${process.env.REACT_APP_API_BASE_URL}/users`)
🧪 Future Enhancements
✅ Search and filter studios by instruments and location

✅ Studio detail pages with session booking

⏳ User dashboards for managing bookings

⏳ Admin panel for studio verification

⏳ Image uploads for studio profiles

⏳ Payment gateway integration

📷 Screenshots
![WhatsApp Image 2025-05-04 at 20 20 38_ea908bde](https://github.com/user-attachments/assets/e4dadc17-247c-4b1b-a898-69ebe20bb43a)
![WhatsApp Image 2025-05-04 at 20 21 31_005d60db](https://github.com/user-attachments/assets/cbe0797c-447d-4c3c-9f18-cebf4a3e63a5)
![WhatsApp Image 2025-05-04 at 20 19 56_14b3fabf](https://github.com/user-attachments/assets/3e2930a4-fd2b-4d8d-959f-f7fbf051903f)





🛠️ Known Issues
Re-fetching of users/studios on every render (improvement pending on useEffect dependency optimization).

No persistent login/auth system implemented yet (e.g., JWT, session storage).

Hardcoded API endpoint.

🤝 Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

📝 License
This project is licensed under the MIT License.

🙌 Acknowledgments
Powered by @A-Barongo
