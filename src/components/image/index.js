import classNames from 'classnames';
import { forwardRef, useState } from 'react';
import images from '~/assets/images';
import styles from './Image.module.scss';
// forwardRef xu li khi ma chuyen the image vao thanh component de cho tippy hoat dong
const Image = forwardRef(({ src, alt, className, ...props }, ref) => {
    const [fallback, setFallback] = useState('');

    const handleImage = () => {
        setFallback(images.avatar);
    };

    return (
        <img
            className={classNames(styles.wrapper, className)}
            {...props}
            ref={ref}
            src={fallback || src}
            alt={alt}
        />
    );
});

export default Image;
