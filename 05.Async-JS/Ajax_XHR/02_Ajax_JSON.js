// For customer
document.getElementById("button1").addEventListener("click", loadCustomer);
function loadCustomer(e) {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "../dataFiles/customer.json", true);
  xhr.onload = function () {
    if (this.status === 200) {
      // console.log(JSON.parse(this.responseText));
      const customer = JSON.parse(this.responseText);
      const table = `
      <table>
        <tbody>
          <tr>
            <td>${customer.id}</td>
            <td>${customer.name}</td>
            <td>${customer.company}</td>
            <td>${customer.phone}</td>
          </tr>
        </tbody>
      </table>
      `;
      document.getElementById("customer").innerHTML = table;
    }
  };

  xhr.send();
  e.preventDefault();
}
// For customers
document.getElementById("button2").addEventListener("click", loadCustomers);
function loadCustomers(e) {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "../dataFiles/customers.json", true);
  xhr.onload = function () {
    if (this.status === 200) {
      // console.log(JSON.parse(this.responseText));
      const customers = JSON.parse(this.responseText);
      let table = `<table><tbody>`;
      customers.forEach((customer) => {
        table += `
        <tr>
          <td>${customer.id}</td>
          <td>${customer.name}</td>
          <td>${customer.company}</td>
          <td>${customer.phone}</td>
        </tr>`;
      });

      table += `</tbody></table>`;
      document.getElementById("customers").innerHTML = table;
    }
  };

  xhr.send();
  e.preventDefault();
}
