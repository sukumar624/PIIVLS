const CountryTable = {
    belgium: {
        title: "Belgium Visit Visa Cost",
        fees: [
            {
                type: "Adult",
                cost: 80,
                currency: "EUR"
            },
            {
                type: "Children aged 6 to 12",
                cost: 40,
                currency: "EUR"
            },
            {
                type: "Children under age 6",
                cost: 0,
                currency: "EUR"
            }
        ]
    },
    canada: {
        processingTime: {
            title: "Canada Tourist Visa Processing time",
            visaTypes: [
                {
                    type: "Single Entry Visa",
                    processingTime: "8 to 40 days"
                },
                {
                    type: "Multiple Entry Visa",
                    processingTime: "8 to 40 days"
                }
            ]
        },
        fees: {
            title: "Canada Visit Visa Fee",
            description: "The Canada Visit Visa fee per person is listed below:",
            feeStructure: [
                {
                    type: "Visitor visa (including super visa) - per person",
                    cost: 100,
                    currency: "CAD"
                },
                {
                    type: "Visitor visa – per family (1 fee per family of 5 or more people)",
                    cost: 500,
                    currency: "CAD"
                },
                {
                    type: "Extend your stay as a visitor – per person",
                    cost: 100,
                    currency: "CAD"
                },
                {
                    type: "Visa fee not needed",
                    cost: 229,
                    currency: "CAD"
                }
            ]
        }
    }
};


export default CountryTable;