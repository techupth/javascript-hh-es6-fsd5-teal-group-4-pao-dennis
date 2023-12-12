let studentProfile = {
  name: "John",
  age: 20,
  scores: {
    thai: 40,
  },
};

let studentScores = {
  math: 30,
  english: 70,
  tech: 100,
};

// Start coding here
//Solution 1
// const {
//   scores: { thai },
// } = studentProfile;

// const { math, english, tech } = studentScores;
const { scores } = studentProfile;

const newStudentProfile = {
  ...studentProfile,
  scores: { ...scores, ...studentScores },
};
console.log(newStudentProfile);
