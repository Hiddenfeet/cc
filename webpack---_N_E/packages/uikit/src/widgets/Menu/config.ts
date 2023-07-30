import noop from "lodash/noop";
import { DropdownMenuItemType } from "../../components/DropdownMenu/types";
import { SwapIcon, SwapFillIcon, EarnFillIcon, EarnIcon, TrophyIcon, TrophyFillIcon, MoreIcon } from "../../components/Svg";
export var status = {
    LIVE: {
        text: "LIVE",
        color: "failure"
    },
    SOON: {
        text: "SOON",
        color: "warning"
    },
    NEW: {
        text: "NEW",
        color: "success"
    }
};
export var links = [
    {
        label: "Trade",
        href: "/swap",
        icon: SwapIcon,
        fillIcon: SwapFillIcon,
        items: [
            {
                label: "Exchange",
                href: "/swap"
            },
            {
                label: "Liquidity",
                href: "/liquidity"
            },
            {
                label: "Charts",
                href: "/charts",
                iconName: "Chart",
                isMobileOnly: true
            }, 
        ]
    },
    {
        label: "Earn",
        href: "/earn",
        icon: EarnIcon,
        fillIcon: EarnFillIcon,
        items: [
            {
                label: "Earn",
                href: "/earn"
            },
            {
                label: "Yield Farms",
                href: "/farms"
            },
            {
                label: "Syrup pools",
                href: "/pools"
            }, 
        ]
    },
    {
        label: "Win",
        href: "/",
        icon: TrophyIcon,
        fillIcon: TrophyFillIcon,
        items: [
            {
                label: "Win",
                href: "/"
            },
            {
                label: "Predictions",
                href: "/",
                status: status.LIVE
            },
            {
                label: "Lottery",
                href: "/"
            }, 
        ]
    },
    {
        label: "",
        href: "/",
        icon: MoreIcon,
        items: [
            {
                label: "Info & Analytics",
                href: "/"
            },
            {
                label: "IFO Token Sales",
                href: "/",
                status: status.SOON
            },
            {
                type: DropdownMenuItemType.DIVIDER
            },
            {
                label: "NFT Collectibles",
                href: "/"
            },
            {
                label: "Team Leaderboard",
                href: "/"
            },
            {
                type: DropdownMenuItemType.DIVIDER
            },
            {
                label: "Blog",
                href: "/"
            },
            {
                label: "Docs & Guides",
                href: "/",
                type: DropdownMenuItemType.EXTERNAL_LINK
            }, 
        ]
    }, 
];
export var userMenulinks = [
    {
        label: "Wallet",
        onClick: noop,
        type: DropdownMenuItemType.BUTTON
    },
    {
        label: "Transactions",
        type: DropdownMenuItemType.BUTTON
    },
    {
        type: DropdownMenuItemType.DIVIDER
    },
    {
        type: DropdownMenuItemType.BUTTON,
        disabled: true,
        label: "Dashboard"
    },
    {
        type: DropdownMenuItemType.BUTTON,
        disabled: true,
        label: "Portfolio"
    },
    {
        label: "Profile",
        href: "/profile"
    },
    {
        type: DropdownMenuItemType.EXTERNAL_LINK,
        href: "https://pancakeswap.finance",
        label: "Link"
    },
    {
        type: DropdownMenuItemType.DIVIDER
    },
    {
        type: DropdownMenuItemType.BUTTON,
        onClick: noop,
        label: "Disconnect"
    }, 
];
export var MENU_HEIGHT = 56;
export var MENU_ENTRY_HEIGHT = 48;
export var MOBILE_MENU_HEIGHT = 44;
export var SIDEBAR_WIDTH_FULL = 240;
export var SIDEBAR_WIDTH_REDUCED = 56;
export var TOP_BANNER_HEIGHT = 70;
export var TOP_BANNER_HEIGHT_MOBILE = 84;
