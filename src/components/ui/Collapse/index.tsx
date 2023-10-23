import { ReactNode, useEffect, useRef, useState } from 'react';

import {ReactComponent as MinusIcon} from '../../../../static/images/icons/minus.svg';
import cx from './index.module.scss';
import cls from 'classnames';
import {Typography, Image} from '../../ui'

interface IProps {
  title: string | JSX.Element;
  content: ReactNode;
  hideCollapseIcon?: boolean;
  moreText?: string | JSX.Element;
  lessText?: string | JSX.Element;
  className?: string;
}

const Collapse = ({
  title,
  content,
  moreText,
  lessText,
  hideCollapseIcon,
  className,
}: IProps) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [isClose, setIsClose] = useState(true);
  const [heightContent, setHeightContent] = useState(0);

  const toggleOpen = () => {
    setIsClose((state) => !state);
  };

  useEffect(() => {
    if (contentRef.current) {
      if (isClose) {
        const height = contentRef.current.getBoundingClientRect().height;
        const minHeight = moreText || lessText ? '32px' : '0px';
        if (height !== 0) {
          setHeightContent(height);
        }
        contentRef.current.style.height = minHeight;
        return;
      }
      contentRef.current.style.height = `${heightContent}px`;
    }
  }, [isClose]);

  return (
    <div className={cls(cx.wrapper, {[cx.active]: !isClose}, className)}>
      {!hideCollapseIcon && (
        <div className={cx.collapseIcon} onClick={toggleOpen}>
          <MinusIcon className={cx.minus} />
          <MinusIcon className={cls(cx.minus, { [cx.rotate]: isClose })} />
        </div>
      )}
      <p className={cx.title} onClick={toggleOpen}>
        {title}
      </p>

      <div className={cx.content} ref={contentRef}>
        {content}
      </div>
      {moreText && (
        <div>
          <p
            className={cx.moreText}
            onClick={toggleOpen}
          >
            {isClose ? moreText : lessText || moreText}
          </p>
        </div>
      )}
    </div>
  );
};

export default Collapse;
