import { useContext, useState, useEffect } from 'react';
import { ReactComponent as LogoIcon } from 'S#/images/icons/logo.svg';
import { ReactComponent as SearchIcon } from 'S#/images/icons/loype.svg';
import { ReactComponent as HeartIcon } from 'S#/images/icons/heart.svg';
import { ReactComponent as UserIcon } from 'S#/images/icons/user.svg';
import { ReactComponent as BasketIcon } from 'S#/images/icons/basket.svg';
import { ReactComponent as CRMIcon } from 'S#/images/icons/crm.svg';
import { ReactComponent as MarketIcon } from 'S#/images/icons/market.svg';
import { ReactComponent as BurgerIcon } from 'S#/images/icons/burger.svg';
import { ReactComponent as CloseIcon } from 'S#/images/icons/close.svg';
import cx from './index.module.scss';
import cls from 'classnames';
import { uid } from 'react-uid';
import { confReturner } from "@/router/config";
import { ERoles, ERoutes } from "@/router/types";
import { Link } from "react-router-dom";
import { NavLinkIcon, NavLink } from "..";
import MobileToolbar from "./MobileToolbar";
import { DropDown } from "./components";
import { strokeColorReturner } from "../../../helpers";
import { lkTabsList } from "../../../const";
import { AuthContext } from "../../../app/auth";
import { useBodyStyle, useWindowWidth } from "@/hooks";

interface IProps {
    type: ERoles;
}

function Header({ type }: IProps) {
    const authContextValue = useContext(AuthContext);
    const windowWidth = useWindowWidth();

    const config = confReturner(type || null);

    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [isBurgerOpen, setIsBurgerOpen] = useState(false);

    const bodyStyle = useBodyStyle();

    const onDropdownClick = () => {
        setDropdownVisible((state) => !state);
    };

    const onBurgerClick = () => {
        setIsBurgerOpen((state) => !state);
    };

    useEffect(() => {
        if (!windowWidth) return;
        setDropdownVisible(false);
        setIsBurgerOpen(false);
    }, [windowWidth]);

    useEffect(() => {
        if (isBurgerOpen) {
            setDropdownVisible(false)
            bodyStyle({ overflow: "hidden" });
            return;
        }
        bodyStyle({ overflow: "auto" });
        /* eslint-disable-next-line react-hooks/exhaustive-deps */
    }, [isBurgerOpen])

    useEffect(() => {
        if (dropdownVisible) {
            setIsBurgerOpen(false)
        }
    }, [dropdownVisible])



    // TODO: очищаем данные о юзере в сторе
    const onExitCLick = () => {
        console.log('выход');
    };

    const dropDownList = [
        ...lkTabsList,
        {
            label: authContextValue?.isAuth ? (
                <button onClick={onExitCLick}>выход</button>
            ) : (
                <button onClick={() => authContextValue?.onPopupOpen(0)}>
                    войти
                </button>
            ),
            className: cx.exit,
            id: 'exit',
        },
    ];
    return (
        <div className={cx.header}>
            <div className={cx.container}>
                <Link to={ERoutes.Default} className={cx.logo}>
                    <LogoIcon />
                </Link>
                <div className={cx.main}>
                    <ul className={cls('as-desktop', cx.linksList)}>
                        {config?.list.map((item) => (
                            <li key={uid(item.name)}>
                                <NavLink to={item.link}>{item.name}</NavLink>
                            </li>
                        ))}
                    </ul>
                    {config?.isSearch && (
                        <SearchIcon className={cls(cx.icon, cx.search)} />
                    )}
                    {
                        // TODO: открываем другой лаер (список того, что в шапке), а тот, что по человечку еще поверх
                        isBurgerOpen ? <CloseIcon className={cls('as-mobile', cx.icon)}
                            stroke={strokeColorReturner(false)}
                            onClick={onBurgerClick}
                        /> : <BurgerIcon className={cls('as-mobile', cx.icon)}
                            stroke={strokeColorReturner(false)}
                            onClick={onBurgerClick}
                        />

                    }
                </div>
                {config?.isActions && (
                    <ul className={cls('as-desktop', cx.actions)}>
                        <li>
                            <NavLinkIcon to="/" isFill={false}>
                                <HeartIcon className={cx.icon} />
                            </NavLinkIcon>
                        </li>
                        <li>
                            <button onClick={onDropdownClick}>
                                <UserIcon
                                    className={cx.icon}
                                    stroke={strokeColorReturner(
                                        dropdownVisible
                                    )}
                                />
                            </button>
                        </li>
                        <li>
                            <NavLinkIcon to="/" isFill={false}>
                                <BasketIcon className={cx.icon} />
                            </NavLinkIcon>
                        </li>
                    </ul>
                )}
                {config?.typeBtn && config?.typeBtn === 'CRM' ? (
                    <NavLinkIcon
                        to="/crm"
                        className={cls('as-desktop', cx.typeBtn)}
                    >
                        <CRMIcon className={cx.icon} />
                    </NavLinkIcon>
                ) : config?.typeBtn === 'market' ? (
                    <NavLinkIcon
                        to="/"
                        className={cls('as-desktop', cx.typeBtn)}
                    >
                        <MarketIcon className={cx.icon} />
                    </NavLinkIcon>
                ) : null}

                <DropDown visible={dropdownVisible} overlay={dropDownList} type="lk" />

                <DropDown visible={isBurgerOpen} overlay={config?.list || []} type="default" />
            </div>
        </div>
    );
}

export { MobileToolbar, Header };
