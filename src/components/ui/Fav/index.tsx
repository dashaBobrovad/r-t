import React from 'react'
import cx from './index.module.scss';
import cls from 'classnames';
import {Button} from '..';
import { EBtnColor } from "../Button";

interface IProps {
    isActive: boolean,
    onClick?: () => void,
    className?: string,
}


export default function Fav({ isActive, onClick = () => { console.log('on fav click') }, className }: IProps) {
    return (
        <Button  onClick={onClick} className={className}  variant="contained" iconName="fav" colorM={EBtnColor.DEFAULT}>
            <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg" className={cls({ [cx.active]: isActive }, cx.svg)}>
                <path d="M20.2898 3.26815C19.8012 2.70759 19.2209 2.26292 18.5823 1.95954C17.9437 1.65615 17.2592 1.5 16.5679 1.5C15.8766 1.5 15.1921 1.65615 14.5535 1.95954C13.9149 2.26292 13.3347 2.70759 12.846 3.26815L11.8318 4.43095L10.8176 3.26815C9.83045 2.1364 8.49164 1.50059 7.09564 1.50059C5.69964 1.50059 4.36082 2.1364 3.37371 3.26815C2.38659 4.39989 1.83203 5.93487 1.83203 7.53541C1.83203 9.13594 2.38659 10.6709 3.37371 11.8027L11.8318 21.5L20.2898 11.8027C20.7788 11.2424 21.1666 10.5771 21.4312 9.84495C21.6958 9.11276 21.832 8.32797 21.832 7.53541C21.832 6.74285 21.6958 5.95806 21.4312 5.22587C21.1666 4.49368 20.7788 3.82844 20.2898 3.26815Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </Button>
    )
}