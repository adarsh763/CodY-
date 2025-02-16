// Backend logic using only JavaScript (no Node.js or MongoDB)
// User Authentication System using localStorage

const users = JSON.parse(localStorage.getItem("users")) || [];
let currentUser = JSON.parse(localStorage.getItem("currentUser"));

function registerUser(username, password) {
    if (users.some(user => user.username === username)) {
        alert("User already exists!");
        return;
    }
    users.push({ username, password });
    localStorage.setItem("users", JSON.stringify(users));
    alert("Registration successful!");
}

function loginUser(username, password) {
    const user = users.find(user => user.username === username && user.password === password);
    if (user) {
        currentUser = user;
        localStorage.setItem("currentUser", JSON.stringify(currentUser));
        alert("Login successful!");
    } else {
        alert("Invalid credentials!");
    }
}

function logoutUser() {
    currentUser = null;
    localStorage.removeItem("currentUser");
    alert("Logged out successfully!");
}

// Course Management System
const courses = JSON.parse(localStorage.getItem("courses")) || [
    { name: "C++", description: "Learn C++ programming", link: "https://www.geeksforgeeks.org/introduction-to-c-programming-language/" },
    { name: "Python", description: "Learn Python programming", link: "https://www.w3schools.com/python/" }
];

function addCourse(name, description, link) {
    courses.push({ name, description, link });
    localStorage.setItem("courses", JSON.stringify(courses));
    alert("Course added successfully!");
}

function displayCourses() {
    const courseContainer = document.getElementById("courseContainer");
    courseContainer.innerHTML = "";
    courses.forEach(course => {
        courseContainer.innerHTML += `
            <div class="card">
                <h3>${course.name}</h3>
                <p>${course.description}</p>
                <a href="${course.link}" target="_blank">View Course</a>
            </div>`;
    });
}

// Smooth UI Experience
function togglePassword() {
    let passwordField = document.getElementById("password");
    passwordField.type = passwordField.type === "password" ? "text" : "password";
}

document.addEventListener("DOMContentLoaded", displayCourses);
