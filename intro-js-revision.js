// Intro to JavaScript — Revision Practice
// ----------------------------------------------------
// Instructions:
// 1) Open this file in VS Code (or any editor).
// 2) Work through the tasks in order. Replace the TODOs with code.
// 3) Run the file using:  node intro-js-revision.js
// 4) You should see outputs in your terminal for each console.log.
//
// NOTE: Try to predict the output BEFORE running, then confirm.
// ----------------------------------------------------

'use strict';

// ---------- Shared Dataset (reuse across tasks) ----------
const student = {
  name: "Amina",
  age: 19,
  contact: {
    email: "amina@example.com",
    phones: ["+201100000000", "+201122233344"]
  },
  favorites: {
    colors: ["red", "green", "blue"],
    books: [
      { title: "Eloquent JavaScript", authors: ["Marijn Haverbeke"] },
      { title: "You Don't Know JS", authors: ["Kyle Simpson"] }
    ]
  }
};

const classroom = {
  courseName: "Intro to JavaScript",
  batches: [
    {
      id: "AUG",
      students: [
        { id: "s1", name: "Amina", scores: [10, 15, 20] },
        { id: "s2", name: "Omar", scores: [12, 18, 17] }
      ]
    },
    {
      id: "SEP",
      students: [
        { id: "s3", name: "Sara", scores: [20, 19, 18] }
      ]
    }
  ],
  materials: ["console", "strings", "arrays", "objects"]
};

// Helper for visual separation of outputs
function hr(title) {
  console.log("\\n----- " + title + " -----");
}

// ========================================================
// A) Console basics
// ========================================================
hr("A) Console basics");

// 1) Log the course name from `classroom`.


// 3) Log the entire `student` object, then log only `student.contact`.
console.log();
console.log();

// 4) How many phone numbers does Amina have? (use phones array length from student object)
console.log(student.contact.phones.length);

// 5) Log the third course material from classroom materials (use materials array from classroom object)
console.log();

// ========================================================
// B) Strings vs. numbers (the `+` operator)
// ========================================================
hr("B) Strings vs. numbers");

// 6) Predict the outputs, then log them:
console.log(2 + 3);
console.log("2" + 3);
console.log(2 + "3");
console.log("2" + "3");
console.log(2 + 3 + "5");
console.log("5" + 2 + 3);

// 7) a="10", b=5. Log numeric sum (15) and string concatenation ("105").
const a = "10";
const b = 5;
// TODO: console.log(/* numeric sum */);
// TODO: console.log(/* string concatenation */);

// ========================================================
// C) Arrays & objects (direct access)
// ========================================================
hr("C) Arrays & objects");

// 9) Log Amina’s first phone number.
console.log();

// 10) Log the LAST favorite color (no hardcoded index).
console.log();

// 11) Log the title of the second favorite book.
console.log();

// 12) From classroom.batches[0], log the name of the second student.
console.log(/* TODO */);

// 13) Add "purple" to favorite colors, then log the updated array.
/* TODO: push to student.favorites.colors */
console.log();

// ========================================================
// D) Deeply nested access (no loops required)
// ========================================================
hr("D) Deeply nested access");

// 14) Log the first author of the first favorite book.
console.log();

// 15) Log the second score for Omar.
console.log();

// ========================================================
// E) String methods practice
// ========================================================
hr("E) String methods");

const phrase = "  JavaScript is Fun and Powerful!  ";

// 19) Trim spaces from the phrase and log the result. (use phrase variable)
console.log();

// 20) Log the phrase in UPPERCASE, then in lowercase. (use phrase variable)
console.log();
console.log();

// 22) Replace "Fun" with "Awesome" and log the new phrase. (use phrase variable)
console.log();


const csv = "Amina,19,amina@example.com";
/* TODO: split and log csv variable */
console.log();

// ========================================================
// F) Small challenge (no loops; indexing only)
// ========================================================
hr("F) Small challenge (Bounes 50 points)");

// 26) For each student in AUG, log: "Name — last score: X — contains 'a'? true/false"
// Use only console logs and indexing (no loops yet).
console.log();
console.log();

// ----------------------------------------------------
// End of practice. Great job!
// ----------------------------------------------------
