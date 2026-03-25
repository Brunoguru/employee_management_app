const form = document.getElementById("contactForm");

if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;

        const contact = { name, email, phone };

        let contacts = JSON.parse(localStorage.getItem("contacts")) || [];

        contacts.push(contact);

        localStorage.setItem("contacts", JSON.stringify(contacts));

        alert("Contact saved successfully!");

        form.reset();
    });
}
const tableBody = document.querySelector("#contactsTable tbody");

if (tableBody) {
    const contacts = JSON.parse(localStorage.getItem("contacts")) || [];

    contacts.forEach(contact => {
        const row = `
            <tr>
                <td>${contact.name}</td>
                <td>${contact.email}</td>
                <td>${contact.phone}</td>
            </tr>
        `;
        tableBody.innerHTML += row;
    });
}