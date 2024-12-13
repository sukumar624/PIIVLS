const ProcessTime = {
    "country": {
        "canada": {
            headers: {
                typeOfVisa: "Single Entry Visa",
                pricing: "$CAN"
            },
            data: [
                {
                    typeOfVisa: "Single Entry Visa",
                    pricing: "8 to 40 days",
                },
                {
                    typeOfVisa: "Visitor visa – per family (1 fee per family of 5 or more people)",
                    pricing: "500"
                },
                {
                    typeOfVisa: "Extend your stay as a visitor – per person",
                    pricing: "100"
                },
                {
                    typeOfVisa: "Visa fee not needed",
                    pricing: "229"
                }
            ]
        },
        "australia": {
            headers: {
                typeOfVisa: "Single Entry Visa",
                duration: '',
                pricing: "",

            },
            data: [
                {
                    typeOfVisa: "Tourist visitor",
                    duration: "2 to 4 weeks",
                },
                {
                    typeOfVisa: "Business visitor",
                    duration: "2 to 4 weeks"
                },
                {
                    typeOfVisa: "Sponsored family visitor",
                    duration: "2 to 4 weeks"
                },

            ]
        },
    }
};

export default ProcessTime;
