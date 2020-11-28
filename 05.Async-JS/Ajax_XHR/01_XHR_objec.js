const output = document.getElementById("output");
document.querySelector("#button1").addEventListener("click", loadData);

function loadData(e) {
  // Create XHR Object
  const xhr = new XMLHttpRequest();

  // Open (type of request, file path (URL), Async or not)
  xhr.open("GET", "../dataFiles/data.txt", true);
  console.log("Ready State", xhr.readyState);

  // Optional - used for spinners/loaders
  xhr.onprogress = function () {
    console.log("Ready State", xhr.readyState);
  };

  // Onload
  xhr.onload = function () {
    console.log("Ready State", xhr.readyState);
    if (this.status == 200) {
      // console.log(this.responseText);
      output.innerHTML = `<h1>${this.responseText}</h1>`;
    }
  };

  // Older method of onload
  // xhr.onreadystatechange = function () {
  //   console.log("READYSTATE", xhr.readyState);
  //   if (this.status === 200 && this.readyState === 4) {
  //     console.log(this.responseText);
  //   }
  // };

  // This will run if there will be error
  xhr.onerror = function () {
    console.log("Request Error");
  };

  // need to send to request
  xhr.send();

  // readyState Values
  // 0: request not initialized
  // 1: server connection established
  // 2: request received
  // 3: processing request
  // 4: request finished and response is ready

  // HTTP Statuses
  // 200: "Ok"
  // 403: "Forbidden"
  // 404: "NOt Found"
}
