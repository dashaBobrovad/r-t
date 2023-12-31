import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import cls from 'classnames';
import cx from './index.module.scss';

interface IProps {
    alt?: string;
    src?: string | undefined;
    className?: string;
}

// TODO: we can create trackWindowScroll in Gallery (visible on load)
export default function Image(props: IProps) {
    const {
        alt = 'placeholder',
        src = process.env.VITE_PUBLIC_PLACEHOLDER_IMAGE,
        className,
    } = props;

    return (
        <div className={cls(cx.image, className)}>
            <LazyLoadImage alt={alt} src={src} effect="opacity" />
        </div>
    );
}
