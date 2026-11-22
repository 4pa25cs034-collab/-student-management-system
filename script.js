const form = document.getElementById('studentForm');
const studentList = document.getElementById('studentList');

let students = JSON.parse(localStorage.getItem('students')) || [];

function renderStudents() {
  studentList.innerHTML = '';
  students.forEach((student, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${student.name}</td>
      <td>${student.usn}</td>
      <td>${student.course}</td>
      <td>${student.email}</td>
      <td><button class="delete-btn" onclick="deleteStudent(${index})">Delete</button></td>
    `;
    studentList.appendChild(row);
  });
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const newStudent = {
    name: document.getElementById('name').value,
    usn: document.getElementById('usn').value,
    course: document.getElementById('course').value,
    email: document.getElementById('email').value
  };
  students.push(newStudent);
  localStorage.setItem('students', JSON.stringify(students));
  form.reset();
  renderStudents();
});

function deleteStudent(index) {
  students.splice(index, 1);
  localStorage.setItem('students', JSON.stringify(students));
  renderStudents();
}

renderStudents();
