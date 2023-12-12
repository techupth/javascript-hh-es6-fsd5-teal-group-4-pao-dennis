let studentProfile = {
  name: "John",
  age: 20,
  scores: {
    thai: 40,
  },
  hobbies: ["Football", "Coding"],
};

let additionalHobbies = ["Painting", "Yoga"];

// Start coding here
const { hobbies } = studentProfile;
const newStudentProfile = {
  ...studentProfile,
  hobbies: [...hobbies, ...additionalHobbies],
};
console.log(newStudentProfile);
