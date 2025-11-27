# 📚 Complete Code Explanation - Personal Website

This document explains all the code we built together for your personal website. It's written for beginners to help you understand every part.

---

## 🎯 Overview: What We Built

We created a **single-page application (SPA)** using React with multiple routes. Instead of having separate HTML files, we have one React app that shows different content based on the URL.

**Key Technologies:**
- **React**: JavaScript library for building user interfaces
- **React Router**: Library for navigation between different "pages" (routes)
- **Vite**: Build tool that makes development fast

---

## 📁 Project Structure

```
my-website/
├── src/
│   ├── App.jsx              # Main component with layout and routing
│   ├── AboutPage.jsx        # Home page with About & Expertise
│   ├── ExperiencePage.jsx   # Working Experience page
│   ├── EducationPage.jsx    # Education page
│   ├── ProjectsPage.jsx     # Projects page
│   ├── PublicationsPage.jsx # Publications page
│   ├── ContactPage.jsx      # Contact page
│   ├── SkillPage.jsx        # Individual skill pages (Python, Java, etc.)
│   ├── main.jsx             # Entry point - starts the app
│   └── App.css              # Styles
└── public/                  # Static files (images, PDFs)
```

---

## 🚀 Part 1: Setting Up React Router

### main.jsx - The Entry Point

```javascript
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'  // ← Router wrapper
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>      {/* ← Wraps entire app to enable routing */}
      <App />
    </BrowserRouter>
  </StrictMode>,
)
```

**What this does:**
- `BrowserRouter` is a component that enables routing in your app
- It watches the browser's URL and tells React which component to show
- Think of it as a "traffic director" for your website

**Why wrap the entire app?**
- So ALL components can use routing features (like `Link`, `useNavigate`, etc.)

---

## 🏗️ Part 2: The Main App Component

### App.jsx - Layout and Navigation

```javascript
import { useLocation, Link, Routes, Route } from 'react-router-dom';

function App() {
  const location = useLocation();  // ← Gets current URL path
  // ... rest of code
}
```

**Key Concepts:**

#### 1. `useLocation()` Hook
```javascript
const location = useLocation();
```
- **What it does**: Gets information about the current URL
- **Why we need it**: To highlight which menu item is active
- **Example**: If URL is `/education`, `location.pathname` = `"/education"`

#### 2. Active Menu Styling Function
```javascript
const menuItemStyle = (path) => {
  const isActive = location.pathname === path || 
                   (path === '/' && (location.pathname === '/' || 
                                     location.pathname.startsWith('/skill')));
  return {
    backgroundColor: isActive ? "#00857A" : "transparent",
    color: isActive ? "white" : "#00F5C4",
    // ... other styles
  };
};
```

**How it works:**
1. Takes a `path` parameter (like `"/education"`)
2. Compares it to the current URL (`location.pathname`)
3. If they match → `isActive = true` → button gets highlighted
4. Special case: Home page (`/`) is also active when on skill pages (`/skill/...`)

#### 3. Navigation Links
```javascript
<Link to="/workingexperience" style={menuItemStyle('/workingexperience')}>
  Working Experience
</Link>
```

**What `Link` does:**
- Creates a clickable link that changes the URL
- **Doesn't reload the page** (unlike regular `<a>` tags)
- Updates the URL in the browser
- React Router sees the URL change and shows the matching component

**Difference from regular links:**
- Regular `<a href="/page">` → Reloads entire page (slow)
- `<Link to="/page">` → Only changes content (fast, smooth)

#### 4. Routes - Defining Your Pages
```javascript
<Routes>
  <Route path="/skill/:skillName" element={<SkillPage />} />
  <Route path="/workingexperience" element={<ExperiencePage />} />
  <Route path="/education" element={<EducationPage />} />
  <Route path="/projects" element={<ProjectsPage />} />
  <Route path="/publications" element={<PublicationsPage />} />
  <Route path="/contact" element={<ContactPage />} />
  <Route path="/" element={<AboutPage />} />
</Routes>
```

**How Routes Work:**
- `<Routes>` is a container that holds all your route definitions
- Each `<Route>` says: "When URL matches this path, show this component"
- Routes are checked **top to bottom** - first match wins!

**Special Route: `/skill/:skillName`**
- The `:skillName` is a **parameter** (dynamic part)
- `/skill/Python` → `skillName = "Python"`
- `/skill/Java%20%26%20Spring%20Boot` → `skillName = "Java & Spring Boot"`
- The `%20` and `%26` are URL encoding (spaces and special characters)

---

## 📄 Part 3: Page Components

### AboutPage.jsx - Home Page

```javascript
import { Link } from 'react-router-dom';

function AboutPage() {
  return (
    <div>
      {/* About Me section */}
      <h2>About Me</h2>
      {/* ... profile picture and text ... */}
      
      {/* Expertise section */}
      <h2>Expertise</h2>
      <div>
        {['Python', 'Java & Spring Boot', ...].map((skill) => {
          const skillUrl = `/skill/${encodeURIComponent(skill)}`;
          return (
            <Link to={skillUrl}>
              {skill}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
```

**Key Concepts:**

#### 1. Array `.map()` Method
```javascript
['Python', 'Java & Spring Boot'].map((skill) => { ... })
```
- **What it does**: Creates a new array by transforming each item
- **In our case**: Takes array of skill names, creates a `<Link>` for each
- **Result**: 6 skill buttons from 1 array

#### 2. `encodeURIComponent()`
```javascript
const skillUrl = `/skill/${encodeURIComponent(skill)}`;
```
- **Why needed**: URLs can't have spaces or special characters
- **What it does**: Converts "Java & Spring Boot" → "Java%20%26%20Spring%20Boot"
- **Example**:
  - Input: `"Java & Spring Boot"`
  - Output: `"Java%20%26%20Spring%20Boot"`
  - URL: `/skill/Java%20%26%20Spring%20Boot`

**Without encoding**: URL would break or be invalid
**With encoding**: URL is safe and works correctly

---

## 🎓 Part 4: Skill Pages (Dynamic Routes)

### SkillPage.jsx - Individual Skill Pages

```javascript
import { useParams, useNavigate } from 'react-router-dom';

const skillNotes = {
  'Python': null,
  'Java & Spring Boot': null,
  // ... other skills
};

function SkillPage() {
  const { skillName } = useParams();  // ← Gets URL parameter
  const navigate = useNavigate();     // ← For navigation
  
  const decodedSkillName = decodeURIComponent(skillName);
  const pdfPath = skillNotes[decodedSkillName];
  
  return (
    <div>
      <button onClick={() => navigate('/')}>← Back to Home</button>
      <h2>{decodedSkillName}</h2>
      {pdfPath ? (
        <iframe src={pdfPath} />  // Show PDF if available
      ) : (
        <p>No notes available</p>  // Show message if no PDF
      )}
    </div>
  );
}
```

**Key Concepts:**

#### 1. `useParams()` Hook
```javascript
const { skillName } = useParams();
```
- **What it does**: Extracts parameters from the URL
- **Example**: 
  - URL: `/skill/Python`
  - Route: `/skill/:skillName`
  - Result: `skillName = "Python"`

**How it works:**
- The `:skillName` in the route definition creates a parameter
- `useParams()` gives you access to that parameter
- You can use it to show different content based on the URL

#### 2. `decodeURIComponent()`
```javascript
const decodedSkillName = decodeURIComponent(skillName);
```
- **Opposite of `encodeURIComponent()`**
- Converts URL-encoded text back to normal
- Example: `"Java%20%26%20Spring%20Boot"` → `"Java & Spring Boot"`

#### 3. `useNavigate()` Hook
```javascript
const navigate = useNavigate();
// Later...
<button onClick={() => navigate('/')}>Back</button>
```
- **What it does**: Programmatically changes the URL
- **Use case**: When you want to navigate from code (button clicks, form submissions, etc.)
- **Difference from `Link`**: 
  - `Link` = User clicks a link
  - `navigate()` = Code decides to navigate

#### 4. Conditional Rendering
```javascript
{pdfPath ? (
  <iframe src={pdfPath} />
) : (
  <p>No notes available</p>
)}
```
- **What it does**: Shows different content based on a condition
- **How it works**:
  - If `pdfPath` exists (not `null`) → Show PDF in iframe
  - If `pdfPath` is `null` → Show "No notes available" message
- **Syntax**: `condition ? valueIfTrue : valueIfFalse` (ternary operator)

#### 5. `skillNotes` Object
```javascript
const skillNotes = {
  'Python': null,
  'Java & Spring Boot': '/notes/java-notes.pdf',
  // ...
};
```
- **What it is**: A JavaScript object (key-value pairs)
- **Purpose**: Maps skill names to their PDF file paths
- **How to use**: 
  - `skillNotes['Python']` → Gets the PDF path for Python
  - `skillNotes['Java & Spring Boot']` → Gets the PDF path for Java

**To add a PDF:**
1. Put PDF file in `public/notes/` folder
2. Update the object: `'Python': '/notes/python-notes.pdf'`

---

## 📋 Part 5: Simple Page Components

### ExperiencePage.jsx, EducationPage.jsx, etc.

These are simple components that just return JSX (HTML-like code):

```javascript
function ExperiencePage() {
  return (
    <>
      <h2>Working Experience</h2>
      <ul>
        <li>Job 1</li>
        <li>Job 2</li>
      </ul>
    </>
  );
}
```

**Key Points:**
- Each page is a **function component**
- Returns JSX (what to display)
- No complex logic - just content
- React Router shows this component when URL matches

**Fragment (`<>...</>`)**
- Wraps multiple elements without adding extra HTML
- Needed because React components must return ONE element
- Fragment = invisible wrapper

---

## 🔄 Part 6: How Everything Connects

### The Flow of Navigation

1. **User clicks "Python" button** on About page
   ```javascript
   <Link to="/skill/Python">Python</Link>
   ```

2. **URL changes** to `/skill/Python`

3. **React Router checks routes:**
   ```javascript
   <Route path="/skill/:skillName" element={<SkillPage />} />
   ```
   - Matches! `skillName = "Python"`

4. **SkillPage component renders:**
   - `useParams()` gets `skillName = "Python"`
   - Looks up PDF: `skillNotes['Python']`
   - Shows PDF or "No notes" message

5. **User clicks "Back" button:**
   ```javascript
   navigate('/')
   ```
   - URL changes to `/`
   - React Router shows `<AboutPage />`

### The Flow of Menu Navigation

1. **User clicks "Education" in menu:**
   ```javascript
   <Link to="/education">Education</Link>
   ```

2. **URL changes** to `/education`

3. **React Router shows:**
   ```javascript
   <Route path="/education" element={<EducationPage />} />
   ```

4. **Menu highlights "Education":**
   ```javascript
   menuItemStyle('/education')
   // Checks: location.pathname === '/education' → true
   // Result: Button gets highlighted style
   ```

---

## 🎨 Part 7: Styling Concepts

### Inline Styles
```javascript
style={{
  color: "#00F5C4",
  padding: "12px 24px",
  backgroundColor: "rgba(0, 245, 196, 0.1)"
}}
```

**Key Points:**
- Double curly braces: `{{ }}`
  - Outer `{}` = JavaScript expression
  - Inner `{}` = JavaScript object
- CSS properties in **camelCase**: `backgroundColor` not `background-color`
- Colors: Can use hex (`#00F5C4`), rgb, rgba, or color names

### Dynamic Styles
```javascript
onMouseEnter={(e) => {
  e.target.style.backgroundColor = "rgba(0, 245, 196, 0.2)";
}}
```

**What this does:**
- When mouse enters the element → Change background color
- `e` = event object
- `e.target` = the element that triggered the event
- Directly modifies the element's style

---

## 🧩 Part 8: React Concepts Used

### 1. Components
- **What**: Reusable pieces of UI
- **Example**: `<AboutPage />`, `<SkillPage />`
- **Benefit**: Write once, use anywhere

### 2. Props (Not used much here, but good to know)
- **What**: Data passed to components
- **Example**: `<SkillPage skillName="Python" />` (if we did it this way)
- **In our code**: We use URL parameters instead

### 3. Hooks
- **What**: Functions that let you "hook into" React features
- **Examples we used**:
  - `useLocation()` - Get current URL
  - `useParams()` - Get URL parameters
  - `useNavigate()` - Navigate programmatically

### 4. JSX
- **What**: HTML-like syntax in JavaScript
- **Example**: `<div>Hello</div>`
- **Rules**:
  - Must return ONE root element (or use Fragment `<>`)
  - Use `className` instead of `class`
  - Use `htmlFor` instead of `for`

---

## 📝 Summary: Key Takeaways

1. **React Router** enables navigation without page reloads
2. **Routes** map URLs to components
3. **Link** components create navigation links
4. **useParams()** gets data from URL
5. **useNavigate()** changes URL from code
6. **Components** are reusable UI pieces
7. **JSX** is HTML-like syntax in JavaScript

---

## 🚀 Next Steps to Learn More

1. **Add more features:**
   - Add PDFs to skill pages
   - Add more content to Projects page
   - Add animations/transitions

2. **Learn more React:**
   - State management (`useState`)
   - Effects (`useEffect`)
   - Forms and user input

3. **Learn more React Router:**
   - Nested routes
   - Protected routes (authentication)
   - Route guards

---

## ❓ Common Questions

**Q: Why use React Router instead of separate HTML files?**
A: Faster navigation, better user experience, easier to manage shared components (like the sidebar).

**Q: What's the difference between `Link` and `navigate()`?**
A: `Link` is for user clicks, `navigate()` is for programmatic navigation (from code).

**Q: Why encode URLs?**
A: URLs have restrictions on characters. Encoding makes special characters safe for URLs.

**Q: How does React know which component to show?**
A: React Router matches the URL to route definitions and renders the matching component.

---

## 🎓 Practice Exercises

1. **Add a new skill**: Add "JavaScript" to the skills array
2. **Add a new route**: Create a `/blog` page
3. **Add PDF support**: Add a PDF to one of the skills
4. **Modify styling**: Change the color scheme
5. **Add animations**: Make page transitions smoother

---

**Remember**: The best way to learn is by experimenting! Try changing things and see what happens. Don't be afraid to break things - that's how you learn! 🚀

