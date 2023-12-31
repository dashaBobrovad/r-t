import { useCallback } from 'react';
import cx from './index.module.scss';
import { Select } from '../../../ui';
import { ReactComponent as AddIcon } from '../../../../../static/images/icons/plus.svg';
import { ReactComponent as DeleteIcon } from '../../../../../static/images/icons/close.svg';

interface Props {
    value: string[];
    onChange: any;
    sizes: string[];
}

const SizeSelectSingle = ({ sizes, value, onChange }: Props) => {
    const options = sizes.map((el) => ({ label: el, value: el }));

    const handleChange = useCallback(
        (index: number) => (val: string) => {
            const newVal = [...value];
            newVal[index] = val;
            onChange(newVal);
        },
        [onChange, value]
    );

    const handleAdd = useCallback(() => {
        const newVal = [...value];
        newVal.push('');
        onChange(newVal);
    }, [onChange, value]);

    const handleDelete = useCallback(
        (index: number) => {
            const newVal = [...value];
            newVal.splice(index, 1);
            onChange(newVal);
        },
        [onChange, value]
    );

    return (
        <div className={cx.container}>
            {value.map((el, i) => {
                return (
                    <div key={i} className={cx.sizeBlock}>
                        <div className={cx.iconBox}>
                            <DeleteIcon
                                width={15}
                                height={15}
                                className={i === 0 ? cx.hide : ''}
                                onClick={() => handleDelete(i)}
                            />
                        </div>
                        <div className={cx.select}>
                            <Select
                                options={options}
                                value={el}
                                onChange={handleChange(i)}
                                label="размер"
                            />
                        </div>
                    </div>
                );
            })}
            <div>
                <div
                    className={cx.button}
                    onClick={handleAdd}
                    onKeyDown={handleAdd}
                    role="button"
                    tabIndex={0}
                >
                    <AddIcon width={22} height={22} />
                </div>
            </div>
        </div>
    );
};

export default SizeSelectSingle;
