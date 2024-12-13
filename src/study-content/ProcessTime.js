const ProcessTime = {
    "country": {
        "canada": {
            headers: {
                typeOfVisa: "Type of visa",
                duration: "Duration",
                pricing: "Pricing"
            },
            data: [
                {
                    typeOfVisa: "Visitor visa (including super visa) - per person",
                    pricing: "100"
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
                typeOfVisa: "Visa Type",
                duration: "Processing Time",
            },
            data: [
                {
                    typeOfVisa: "Tourist visitor",
                    duration: "2 to 4 weeks",
                },
                {
                    typeOfVisa: "Business visitor",
                    duration: "2 to 4 weeks",
                },
                {
                    typeOfVisa: "Sponsored family visitor",
                    duration: "2 to 4 weeks",
                },

            ]
        },
        "denmark": {
            headers: {
                typeOfVisa: "Type",
                pricing: "Cost"
            },
            data: [
                {
                    typeOfVisa: "Adult",
                    pricing: "80"
                },
                {
                    typeOfVisa: "Children age 6 to 12",
                    pricing: "40"
                },
            ]
        }
    }
};

export default ProcessTime;
