"use strict";
console.log("hello Promises!");

function getList() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let potentialFail = Math.round(Math.random() * 100) < 10;
      if (potentialFail) {
        reject({ success: false, message: "Failed to get list of hobbits." });
      } else {
        resolve(["Bilbo", "Frodo", "Sam", "Merry", "Pippin"]);
      }
    }, 10);
  });
}


let feedbackP = document.querySelector("#error");
let ul = document.querySelector("#list");

// TODO: Handle the resolved or rejected states of the promise

let promise = getList(); 


// TODO: If the promise resolves with the list of hobbits
// Render the list of hobbits as list items within the unordered list with id="list" (check the index.html file)
function handleList(list) {
  list.forEach((hobbit) => {
    let li = document.createElement("li");
    li.textContent = hobbit;
    ul.appendChild(li);
  });
}

function handleError(err){
  console.error(err);
  feedbackP.textContent = err.message;
}
// TODO: If the promise rejects with the failure object
// Display the failure message in the paragraph element with id="error" (check index.html file)
async function updateDomList() {
  try {
  let list = await getList();
  list.forEach((hobbit) => {
    let li = document.createElement("li");
    li.textContent = hobbit;
    ul.appendChild(li);
  });
} catch (err) {
  console.error(err);
  feedbackP.textContent = err.message;
}
}

updateDomList();