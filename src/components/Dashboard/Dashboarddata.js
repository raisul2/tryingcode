import { BiLayer, BiCart, BiCreditCard, BiBus, BiCheck } from 'react-icons/bi'
import { RxReload } from "react-icons/rx";
export const dataOne = [
    {
        icon: BiLayer,
        title: "Todays Orders",
        bgcolor: "bg-emerald-600",
        pay: "$0.00",
        pamethod: [
            {
                name: "cash",
                pay: "$0.00",
            },
            {
                name: "card",
                pay: "$0.00",
            },
            {
                name: "credit",
                pay: "$0.00",
            },
        ]
    },
    {
        icon: BiLayer,
        title: "Yesterday Orders",
        bgcolor: "bg-orange-600",
        pay: "$0.00",
        pamethod: [
            {
                name: "cash",
                pay: "$0.00",
            },
            {
                name: "card",
                pay: "$0.00",
            },
            {
                name: "credit",
                pay: "$0.00",
            },
        ]
    },
    {
        icon: BiCart,
        title: "This month",
        bgcolor: "bg-blue-600",
        pay: "$0.00",
    },
    {
        icon: BiCreditCard,
        title: "Last month",
        bgcolor: "bg-cyan-600",
        pay: "$0.00",
    },
    {
        icon: BiCreditCard,
        title: "All-Time Seles ",
        bgcolor: "bg-green-600 ",
        pay: "$0.00",
    },
]


export
    const datatwo = [
        {
            icon: BiCart,
            title: "total order",
            bgcolor: "bg-orange-200",
            color: "text-orange-800",
            point: "515"

        },
        {
            icon: RxReload,
            title: "pending order",
            bgcolor: "bg-blue-200",
            color: "text-blue-800",
            point: "621"

        },
        {
            icon: BiBus,
            title: "processing order",
            bgcolor: "bg-cyan-200",
            color: "text-cyan-800",
            point: "712"

        },
        {
            icon: BiCheck,
            title: "delivered order",
            bgcolor: "bg-green-200 ",
            color: "text-green-800 ",
            point: "212"


        },
    ]


  export  const saelsData = [
    {   
        id:0,
        salesCount: 800,
        date:"23-11-13"
    },
    {   
        id:1,
        salesCount: 100,
        date:"23-11-16"
    }, 
    {   
        id:2,
        salesCount: 200,
        date:"23-11-17"
    },
    {   
        id:3,
        salesCount: 400,
        date:"23-11-18"
    },
  ]
  export  const ordersData = [
    {   
        id:0,
        salesCount: 0,
        date:"23-11-13"
    },
    {   
        id:1,
        salesCount: 0,
        date:"23-11-16"
    },
    {   
        id:2,
        salesCount: 1,
        date:"23-11-17"
    },
    {   
        id:3,
        salesCount: 3,
        date:"23-11-18"
    },
  ]
  export  const bestSellingProductsData = [
    {   
        id:0,
        proeuct:"Green leaf",
        salesCount: 223,
        date:"23-11-13"
    },
    {   
        id:1,
        proeuct:"Green leaf",
        salesCount: 432,
        date:"23-11-16"
    },
    {   
        id:2,
        proeuct:"Green leaf",
        salesCount: 342,
        date:"23-11-17"
    },
    {   
        id:3,
        proeuct:"Green leaf",
        salesCount: 662,
        date:"23-11-18"
    },
  ]