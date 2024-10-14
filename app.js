// // DOM - Document Object Model
// // How to select element on a page (class, id, tag, combination)

// // Get element by the ID ;
// //const text = document.getElementById("text");
// //console.log(text);


// // get an element by the CLASS
// const message = document.getElementsByClassName("message");
// console.log(message);


// // querySelector, querySelectorAll- they use CSS selectors for picking elements (., #, div)
// const paragraph = document.querySelector("#text")
// console.log(paragraph);
// const paragraphs = document.querySelectorAll(".message")
// console.log(paragraphs);
// //Nodelist- array methods can be performed on them. 

// const heading6 = document.querySelector("div > h6")
// console.log(heading6);

// // textContent, innerText, innerHTML 

// // textContent 
//  const heading = document.querySelector("h1")
// // console.log(heading.textContent);
// // heading.textContent += "JS IS FUN"

// // innerText 
// console.log(heading.innerText);
// heading.innerText = "JS IS GOOD";

//  const div = document.querySelector("div")
//  console.log(div.innerHTML);
//  div.innerHTML += "<p>okay<p/>";
//  const name = "John";
//  div.innerHTML = `<h1>Welcome ${name}<h1/>`;

//  // change attributes 

//  const beginPara = document.querySelector(".begin");
//  console.log(beginPara);
// beginPara.className = "okay";
// beginPara.id = "good";
// beginPara.style.color = "red";
// beginPara.style.backgroundColor = "green";

// // interact with CSS classnames 
// const h1 = document.querySelector("h1");
// h1.classname = "success";
 
//  // classlist - add or remove 

//  const msg = document.querySelector("h3.message");
//  // console.log (msg.classList)
//  msg.classList.add("error");
//  msg.classList.remove("example");
//  console.log(msg.classList.contains("good"));
 
//  console.log(msg);

//  // create elements 
//  const section = document.createElement("section");
//  section.innerHTML = "<h1>Created from JS</h1>";

// // append it 
// const body = document.querySelector("body");
// body.appendChild(section);

// // remove element (removeChild);
// //body.removeChild(section);

// //replace child
// const link = document.createElement("a");
// link.innerText = "visit google";
// link.href = "https://google.com";
// link.setAttribute("href", "https://google.com");

// body.replaceChild(link, section);

// // responding to users interactions
//  // event (click), event handler 
// // addEventListener - handle
//  const btn = document.querySelector("button")

// btn.addEventListener("click", () => {
//     console.log("button clicked");
//     body.style.backgroundColor = "aqua"
// })

// // form handling

const form = document.querySelector ("form")
// submit
form.addEventListener('submit', (event) => {
    // default of forms when submitted is to refresh the page
    event.preventDefault();

    //select the input feilds 
    const username = document.querySelector(".username");
     const password = document.querySelector(".password");
     
     const usernameValue = username.value.trim();
     const passwordValue = password.value;
     const small = document.querySelector("small");
    // console.log(usernameValue, passwordValue);
    // validate the password field (password must not include password)
     if (!usernameValue || !passwordValue) {
        // display error message 
       small.textContent = "please fill all fields"
     }
     else if (usernameValue.length < 5) {
        small.textContent = "minimum username length is 5";
     }
     else if (passwordValue.toLowerCase().includes('password')) {
        small.innerText = "password must not include password"
     }
     else {
        //SUBMIT THE FORM
        small.textContent = "Form Submitted"
     }
})