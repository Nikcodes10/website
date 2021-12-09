import React, { useRef } from 'react';
import styles from './Tile.module.css';

export default function Tile({info, id}) {

    const el = useRef()

    const handleScroll = () => {
        el.current.scrollBy({
            top: 243,
            left: 0,
            behavior: 'smooth'
          })
    }

    return (
        <section>
            <h1>{info.title}</h1>
            <div ref={el} dangerouslySetInnerHTML={{__html: info.content}}></div>
            {
            info.type === 1 ? 
                (<button onClick={handleScroll}>Read More!</button>)
            :
            (<span onClick={handleScroll}>
                { id%2 === 0 ?
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.50011 0.394714L9.18397 5.84984H14.633L10.2247 9.2213L11.9085 14.6764L7.50011 11.305L3.09173 14.6764L4.77554 9.2213L0.367188 5.84984H5.81626L7.50011 0.394714Z" fill="white"/>
                </svg> :
                
                <svg width="14" height="20" viewBox="0 0 14 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.34311 18.7226C9.08846 19.1308 8.73779 19.4492 8.33702 19.666C7.98009 19.8613 7.58141 19.9726 7.18273 19.9961C6.77779 20.0195 6.36868 19.9472 5.99505 19.7793C5.7404 19.6621 5.50244 19.5 5.29162 19.289L9.34311 18.7226ZM9.9046 14.7168L9.7731 15.2929L9.7397 15.7031L4.45252 16.4394C4.43373 16.1445 4.38364 15.8261 4.30432 15.4961L9.9046 14.7168ZM9.72926 16.6015L9.73344 16.8496L9.7397 16.9355C9.75431 17.0976 9.7564 17.2617 9.74597 17.4238L9.66664 17.7812L4.75727 18.4648L4.67169 18.2812L4.47966 17.5468L4.47548 17.334L9.72926 16.6015Z" fill="#f5f5f5"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M10.705 1.47458C11.9178 2.14646 12.9155 3.14255 13.4645 4.40037C13.7609 5.08201 13.9612 5.84177 13.9863 6.6738C14.0113 7.50388 13.859 8.39841 13.4498 9.34373C12.8237 10.7949 11.3604 12.3496 10.4024 13.7773C10.3502 13.7676 10.2959 13.7656 10.2416 13.7734C8.17728 14.0605 6.11292 14.3476 4.04856 14.6347C3.70832 13.6875 3.18649 12.7422 2.59161 12.1054C1.99046 11.4629 1.36844 10.7949 0.875832 9.81248C0.393661 8.84373 0.126484 7.84373 0.134834 6.80466C0.14527 5.7656 0.427058 4.69529 1.04073 3.58982C1.04491 3.58201 1.04908 3.57615 1.05325 3.56833C1.85687 2.2949 2.98194 1.44333 4.23433 0.966772C5.28425 0.564428 6.42602 0.427709 7.54482 0.523412C8.65945 0.619116 9.75112 0.947241 10.705 1.47458ZM6.4782 7.75193L4.02142 7.53513L6.05865 3.3613H8.84313L7.26512 5.75584L10.106 6.05076L4.88975 11.9082L6.4782 7.75193Z" fill="#F5F5F5"/>
                </svg>
                }
            </span>)}
        </section>
    )
}