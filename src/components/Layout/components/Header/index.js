import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faEllipsisVertical,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';

import 'tippy.js/dist/tippy.css';


import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import {
    CoinIcon,
    FeedbackIcon,
    InboxIcon,
    KeyboardIcon,
    LanguageIcon,
    LogOutIcon,
    MessageIcon,
    SettingIcon,
    UploadIcon,
    UserIcon,
} from '~/components/Icons';
import Image from '~/components/image';
import Search from '../Search';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <LanguageIcon />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    type: 'language',
                    code: 'rok',
                    title: '한국거',
                },
                {
                    type: 'language',
                    code: 'ja',
                    title: '日本語（日本）',
                },
            ],
        },
    },
    {
        icon: <FeedbackIcon />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <KeyboardIcon />,
        title: 'Keyboard shortcuts',
    },
];

function Header() {

    // Handle logic
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                // Handle change language
                break;
            default:
        }
    };

    const userMenu = [
        {
            icon: <UserIcon />,
            title: 'View profile',
            to: '/@hoa',
        },
        {
            icon: <CoinIcon />,
            title: 'Get Coins',
            to: '/coin',
        },
        {
            icon: <SettingIcon />,
            title: 'Settings',
            to: '/setting',
        },
        ...MENU_ITEMS,
        {
            icon: <LogOutIcon />,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },
    ];



    const currentUser = true; //Check user authorized.

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <img src={images.logo} alt="Tiktok" />

                <Search/>

                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy content="Upload Video" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <UploadIcon />
                                </button>
                            </Tippy>
                            <Tippy content="Message" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <MessageIcon
                                        className={cx('header-icon')}
                                    />
                                </button>
                            </Tippy>
                            <Tippy content="Inbox" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <InboxIcon />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary>Log in</Button>
                        </>
                    )}

                    <Menu
                        items={currentUser ? userMenu : MENU_ITEMS}
                        onChange={handleMenuChange}
                    >
                        {currentUser ? (
                            <Image
                                className={cx('user-avatar')}
                                src="https://ml1.nude3x.com/images/2022/04/anh-sex-0422-23042257-004.jpg"
                                alt="Huu Trinh"
                            />
                        ) : (
                            <>
                                <button className={cx('more-btn')}>
                                    <FontAwesomeIcon
                                        icon={faEllipsisVertical}
                                    />
                                </button>
                            </>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
