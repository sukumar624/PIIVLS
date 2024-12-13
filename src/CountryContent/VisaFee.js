const VisaFee = {
    "country": {
        "canada": {
            headers: {
                typeOfVisa: "Type of visa",
                pricing: "$CAN"
            },
            data: [
                {
                    typeOfVisa: "Visitor visa (including super visa) - per person",
                    pricing: "100",
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
        "uk": {
            headers: {
                typeOfVisa: "Type of Visa",
                pricing: "Visa Fee in Pounds",
                duration: "Maximum length of stay"
            },
            data: [
                {
                    typeOfVisa: "Standard Visitor visa",
                    pricing: "£115",
                    duration: '6 months'
                },
                {
                    typeOfVisa: "Standard Visitor visa for medical reasons",
                    pricing: "£200",
                    duration: '11 months'
                },
                {
                    typeOfVisa: "Standard Visitor visa for academics",
                    pricing: "£200",
                    duration: '12 months'
                },
                {
                    typeOfVisa: "2 year long-term Standard Visitor visa",
                    pricing: "£400",
                    duration: '6 months per visit'
                },
                {
                    typeOfVisa: "5-year long-term Standard Visitor visa",
                    pricing: "£771",
                    duration: '6 months per visit'
                },
                {
                    typeOfVisa: "10-year long-term Standard Visitor visa",
                    pricing: "£963",
                    duration: '6 months per visit'
                },
                {
                    typeOfVisa: "Transit Visa",
                    pricing: "£64",
                    duration: '24-48 hours'
                },

            ]
        },
        "us": {
            headers: {
                typeOfVisa: "Visa Type",
                pricing: "Cost",
                duration: ""
            },
            data: [
                {
                    typeOfVisa: "Non-immigrant visa types such as tourist, business, student, and exchange visas",
                    pricing: "US$185",

                },
                {
                    typeOfVisa: "Petition-based visas",
                    pricing: "US$205",
                },


            ]
        },
        "schengen": {
            headers: {
                typeOfVisa: "Type",
                pricing: "Cost",
                duration: ""
            },
            data: [
                {
                    typeOfVisa: "Adult",
                    pricing: "€80",

                },
                {
                    typeOfVisa: "Children aged 6 to 12",
                    pricing: "€60",
                },
                {
                    typeOfVisa: "Children under age 6",
                    pricing: "Free",
                },


            ]
        },
        "belgium": {
            headers: {
                typeOfVisa: "Type",
                pricing: "Cost",
                duration: ""
            },
            data: [
                {
                    typeOfVisa: "Adult",
                    pricing: "€80",

                },
                {
                    typeOfVisa: "Children aged 6 to 12",
                    pricing: "€60",
                },
                {
                    typeOfVisa: "Children under age 6",
                    pricing: "Free",
                },


            ]
        },
        "austria": {
            headers: {
                typeOfVisa: "Type",
                pricing: "Cost",
                duration: ""
            },
            data: [
                {
                    typeOfVisa: "Type A visa: airport transit visa",
                    pricing: "€72.83",

                },
                {
                    typeOfVisa: "Type C visa: short-stay visa",
                    pricing: "€72.83",
                },
            ]
        },
        "denmark": {
            headers: {
                typeOfVisa: "Type",
                pricing: "Cost",
                duration: ""
            },
            data: [
                {
                    typeOfVisa: "Type A visa: airport transit visa",
                    pricing: "€80",

                },
                {
                    typeOfVisa: "Children age 6 to 12",
                    pricing: "€40",
                },
            ]
        },
        "finland": {
            headers: {
                typeOfVisa: "Type",
                pricing: "Cost",
                duration: ""
            },
            data: [
                {
                    typeOfVisa: "Single-entry visa",
                    pricing: "€87",

                },
                {
                    typeOfVisa: "Double-entry visa",
                    pricing: "€87",
                },
                {
                    typeOfVisa: "Multiple-entry visa",
                    pricing: "€170",
                },
            ]
        },
        "hungary": {
            headers: {
                typeOfVisa: "Type",
                pricing: "Cost",
                duration: ""
            },
            data: [
                {
                    typeOfVisa: "Single-entry visa",
                    pricing: "€87",

                },
                {
                    typeOfVisa: "Double-entry visa",
                    pricing: "€87",
                },
                {
                    typeOfVisa: "Multiple-entry visa",
                    pricing: "€170",
                },
            ]
        },
        "malta": {
            headers: {
                typeOfVisa: "Type",
                pricing: "Cost",
                duration: ""
            },
            data: [
                {
                    typeOfVisa: "Adult",
                    pricing: "€80",

                },
                {
                    typeOfVisa: "Children aged 6 to 12",
                    pricing: "€40",
                },
                {
                    typeOfVisa: "Armenia, Azerbaijan, and Russian Citizens",
                    pricing: "€35",
                },
            ]
        },
        "netherlands": {
            headers: {
                typeOfVisa: "Type",
                pricing: "Cost",
                duration: ""
            },
            data: [
                {
                    typeOfVisa: "Adult",
                    pricing: "€80",

                },
                {
                    typeOfVisa: "Children aged 6 to 12",
                    pricing: "€40",
                },
                {
                    typeOfVisa: "Children under age 6",
                    pricing: "Free",
                },
            ]
        },
        "luxembourg": {
            headers: {
                typeOfVisa: "Type",
                pricing: "Cost",
                duration: ""
            },
            data: [
                {
                    typeOfVisa: "Adult",
                    pricing: "€80",

                },
                {
                    typeOfVisa: "Children aged 6 to 12",
                    pricing: "€40",
                },
                {
                    typeOfVisa: "Children under age 6",
                    pricing: "Free",
                },
            ]
        },
        "italy": {
            headers: {
                typeOfVisa: "Type",
                pricing: "Cost",
                duration: ""
            },
            data: [
                {
                    typeOfVisa: "Adult",
                    pricing: "€80",

                },
                {
                    typeOfVisa: "Children aged 6 to 12",
                    pricing: "€40",
                },
                {
                    typeOfVisa: "Children under age 6",
                    pricing: "Free",
                },
            ]
        },
        "usa": {
            headers: {
                typeOfVisa: "Type",
                pricing: "Cost",
                duration: ""
            },
            data: [
                {
                    typeOfVisa: "Non-immigrant visa types such as tourist, business, student, and exchange visas",
                    pricing: "US$185",

                },
                {
                    typeOfVisa: "Petition-based visas2",
                    pricing: "US$205",
                },
            ]
        },
        "china": {
            headers: {
                typeOfVisa: "Entry",
                duration: "Stay Duration",
                validity: "Validity",
                fees: "Fees",

            },
            data: [
                {
                    typeOfVisa: "Single Entry Normal",
                    duration: '30 days',
                    validity: "3 months",
                    fees: 'INR 6,500'

                },
                {
                    typeOfVisa: "Double Entry Normal",
                    duration: '30 days',
                    validity: "3 months",
                    fees: 'INR 9,200'

                },
                {
                    typeOfVisa: "Multiple Entry Normal",
                    duration: '30 days',
                    validity: "6 months to one year",
                    fees: 'INR 10,200'

                },

            ],


        },
        "colombia": {
            headers: {
                typeOfVisa: "Category",
                fees: "Fees",

            },
            data: [
                {
                    typeOfVisa: "Single entry",
                    fees: 'INR 6500'

                },

            ],


        },
        "cyprus": {
            headers: {
                typeOfVisa: "Category",
                fees: "Fees",

            },
            data: [
                {
                    typeOfVisa: "Single entry",
                    fees: 'INR 9673.82'

                },

            ],


        },


    }
};

export default VisaFee;
