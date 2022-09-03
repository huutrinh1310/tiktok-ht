import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';

import 'tippy.js/dist/tippy.css';

import config from '~/config';
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
import { Link } from 'react-router-dom';
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
                    title: '한국어',
                },
                {
                    type: 'language',
                    code: 'ja',
                    title: '日本語（日本）',
                },
                {
                    type: 'language',
                    code: 'sp',
                    title: 'Spain',
                },
                {
                    type: 'language',
                    code: 'Fr',
                    title: 'France',
                },
                {
                    type: 'language',
                    code: 'CH',
                    title: 'Chinese',
                },
                {
                    type: 'language',
                    code: 'ru',
                    title: 'Русский',
                },
                {
                    type: 'language',
                    code: 'it',
                    title: 'Italiano',
                },
                {
                    type: 'language',
                    code: 'de',
                    title: 'Deutsch',
                },
                {
                    type: 'language',
                    code: 'pt',
                    title: 'Português',
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
                <Link to={config.routes.home} className={cx('logo-link')}>
                    <img src={images.logo} alt="Tiktok" />
                </Link>

                <Search />

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
                                src="data:image/jpeg;base64,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"
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
