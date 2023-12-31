import { useCallback } from 'react';
import cx from './index.module.scss';
import classNames from 'classnames';
import { ISelectOption } from '../Select/interface';

interface Props {
    value: string;
    onChange: any;
    leftOption: ISelectOption;
    rightOption: ISelectOption;
    additional?: boolean;
}

const Switcher = ({
    value,
    onChange,
    leftOption,
    rightOption,
    additional,
}: Props) => {
    const handleClick = useCallback(
        (newValue: string) => onChange(newValue),
        [onChange]
    );

    return (
        <div
            className={classNames(
                cx.container,
                additional ? cx.additional : ''
            )}
        >
            <div
                className={classNames(
                    cx.switch,
                    cx.leftSwitch,
                    value === leftOption.value ? cx.active : ''
                )}
                onClick={() => handleClick(leftOption.value)}
                onKeyDown={() => handleClick(leftOption.value)}
                role="button"
                tabIndex={0}
            >
                {leftOption.label}
            </div>
            <div
                className={classNames(
                    cx.switch,
                    cx.rightSwitch,
                    value === rightOption.value ? cx.active : ''
                )}
                onClick={() => handleClick(rightOption.value)}
                onKeyDown={() => handleClick(rightOption.value)}
                role="button"
                tabIndex={0}
            >
                {rightOption.label}
            </div>
        </div>
    );
};

export default Switcher;
