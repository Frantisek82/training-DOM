document.addEventListener("DOMContentLoaded", () => {
    let icon = document.querySelector(".fa-solid");
    // console.log(icon);
    let header = document.querySelector("h1");
    icon.addEventListener("click", () => {
      document.body.classList.toggle("light");
      document.body.classList.toggle("dark");
      document.body.classList.toggle("turn");
      icon.classList.toggle("fa-sun");
      icon.classList.toggle("fa-moon");
      icon.classList.toggle("spin");
      icon.classList.toggle("spin");
      icon.classList.toggle("buzz-out");
      header.classList.toggle("smack");
      header.classList.toggle("buzz-out");
      header.classList.toggle("buzz-out");
      if (header.textContent == "Good Morning!") {
        // if (header.textContent.includes("Good Morning!")){ // alternative version of the code
        //   header.textContent = "Good Night!"; // alternative version of the code
        header.textContent = header.innerHTML.replace(
          "Good Morning!",
          "Good Night!"
        );
        console.log(header.textContent);
      } else {
        //   header.textContent = "Good Morning!"; // alternative version of the code
        header.textContent = header.innerHTML.replace(
          "Good Night!",
          "Good Morning!"
        );
        console.log(header.textContent);
      }
    });
  });
  