const form = document.getElementById("contactForm");

if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const contact = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            phone: document.getElementById("phone").value,
            department: document.getElementById("department").value,
            position: document.getElementById("position").value
        };

        let contacts = JSON.parse(localStorage.getItem("contacts")) || [];
        contacts.push(contact);

        localStorage.setItem("contacts", JSON.stringify(contacts));

        alert("Contact saved!");
        form.reset();
    });
}

// DISPLAY TABLE
const tableBody = document.querySelector("#contactsTable tbody");

if (tableBody) {
    let contacts = JSON.parse(localStorage.getItem("contacts")) || [];

    function displayContacts() {
        tableBody.innerHTML = "";

        contacts.forEach((contact, index) => {
            const row = `
                <tr>
                    <td>${contact.name}</td>
                    <td>${contact.email}</td>
                    <td>${contact.phone}</td>
                    <td>${contact.department}</td>
                    <td>
                        <button onclick="viewDetails(${index})">Details</button>
                        <button onclick="editContact()">Edit</button>
                        <button onclick="deleteContact(${index})">Delete</button>
                    </td>
                </tr>
            `;
            tableBody.innerHTML += row;
        });
    }

    // DETAILS
    window.viewDetails = function(index) {
        const c = contacts[index];
        alert(
            "Name: " + c.name + "\n" +
            "Email: " + c.email + "\n" +
            "Phone: " + c.phone + "\n" +
            "Department: " + c.department + "\n" +
            "Position: " + c.position
        );
    }

    // EDIT (placeholder)
    window.editContact = function() {
        alert("Edit feature coming soon!");
    }

    // DELETE (with confirm)
    window.deleteContact = function(index) {
        if (confirm("Are you sure you want to delete?")) {
            contacts.splice(index, 1);
            localStorage.setItem("contacts", JSON.stringify(contacts));
            displayContacts();
        }
    }

    displayContacts();
}