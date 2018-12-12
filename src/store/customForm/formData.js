export const formData = {
    title: "Starfleet Academy",
    description: "Entrance Application",
    fields: [
        {
            id: 2,
            element: "paragraph",
            title: "Instructions",
            text: "Please fill out each section of the form for consideration"
        }, {
            id: 1,
            element: "divider"
        }, {
            id: 3,
            element: "input",
            type: "text",
            name: "firstName",
            value: "",
            label: "First Name",
            placeholder: "",
            error: false,
            required: true
        }, {
            id: 4,
            element: "input",
            type: "text",
            name: "lastName",
            value: "",
            label: "Last Name",
            placeholder: "Enter Your Last Name Here",
            error: false,
            maxLength: 4,
            validationMessage: "TOO MANY LETTERS!",
            required: true
        }, {
            id: 5,
            element: "date",
            name: "birthDate",
            value: null,
            error: false,
            label: "Birth Date"
        }
    ]
};

