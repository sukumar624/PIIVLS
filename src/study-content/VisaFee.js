const VisaFee = {
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
                typeOfVisa: "Type of visa",
                duration: "Duration",
                pricing: "Pricing"
            },
            data: [
                {
                    typeOfVisa: "Standard Single Entry Visa",
                    duration: "3 months",
                    pricing: "AUD 145"
                },
                {
                    typeOfVisa: "Multiple Entry Visa",
                    duration: "3 months",
                    pricing: "AUD 365"
                },
                {
                    typeOfVisa: "Multiple Entry Visa",
                    duration: "6 months",
                    pricing: "AUD 555"
                },
                {
                    typeOfVisa: "Multiple Entry Visa",
                    duration: "12 months",
                    pricing: "AUD 1,065"
                }
            ]
        },
        "bangladesh": {
            headers: {
                typeOfVisa: "Category",
                pricing: "Fees"
            },
            data: [
                {
                    typeOfVisa: "Single entry",
                    pricing: "INR 1,500"
                },
                {
                    typeOfVisa: "Double Entry",
                    pricing: "INR 2,000"
                },
                {
                    typeOfVisa: "Multiple entry",
                    pricing: "INR 2,500"
                }
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
        },
        "belgium": {
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

export default VisaFee;
