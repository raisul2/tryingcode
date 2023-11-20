
import { LuUser2 } from "react-icons/lu";
import { TbChartGridDotsFilled } from "react-icons/tb";
import { MdInsertPageBreak } from "react-icons/md";
import { HiOutlineViewGrid } from "react-icons/hi";
import { FiUsers, FiCompass, FiTarget } from "react-icons/fi";
import { AiOutlineSetting, AiOutlineGlobal } from "react-icons/ai";


export const NavbarItems = [
    {
        link: "/",
        label: "Dashboard",
        icon: HiOutlineViewGrid

    }, 
    {
        link: "/catalog",
        label: "Catalog",
        icon: TbChartGridDotsFilled,
        sublink: [
            {
                link: "/products",
                label: "products",
            },
            {
                link: "/categories",
                label: "categories",
            },
            {
                link: "/attributes",
                label: "attributes",
            },
            {
                link: "/coupons",
                label: "coupons",
            },
        ]

    },
    {
        link: "/customers",
        label: "Customers",
        icon: FiUsers

    },
    {
        link: "/orders",
        label: "Orders",
        icon: FiCompass

    },
    {
        link: "/ourStaff",
        label: "Our Staff",
        icon: LuUser2

    },
    {
        link: "/settings",
        label: "Settings",
        icon: AiOutlineSetting

    },
    {
        link: "/international",
        label: "International",
        icon: AiOutlineGlobal,
        sublink: [
            {
                link: "/languages",
                label: "languages",
            },
            {
                link: "/currencies",
                label: "currencies",
            },
        ]

    },
    {
        link: "/onlinestore",
        label: "Online Store",
        icon: FiTarget,
        sublink: [
            {
                link: "/viewstore",
                label: "view store",
            },
            {
                link: "/storecustomization",
                label: "store customization",
            },
        ]

    },
    {
        link: "/pages",
        label: "Pages",
        icon: MdInsertPageBreak,
        sublink: [
            {
                link: "/404",
                label: "404",
            },
            {
                link: "/comingsoon",
                label: "coming soon",
            },
            {
                link: "/login",
                label: "login",
            },
            {
                link: "/signup",
                label: "signup",
            },
        ]

    },

]