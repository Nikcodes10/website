import React from 'react';
import styles from './Footer.module.css';
import sampleImage from '../../public/sample.jpg';

export default function Footer({secondary}) {
    const c1 = "#191826"
    const c2 = "#f1f1f1";
    return(
        <div className={styles.encloser} style={secondary ? { backgroundColor: c2, color: c1 } : { backgroundColor: c1, color: c2 }}>
            <main>
                <section className={styles.social}>
                    <div>
                        <img src={sampleImage.src}></img>
                        <h4>@2021 IETE-SF-MEC</h4>
                    </div>
                    <div>
                    
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.18137 4.99999V3.18193C8.18137 2.68015 8.58861 2.27291 9.0904 2.27291H9.99942V0.000335693H8.18137C6.67511 0.000335693 5.45429 1.22116 5.45429 2.72742V4.99999H3.63623V7.27256H5.45429V14.5448H8.18137V7.27256H9.99942L10.9085 4.99999H8.18137Z" fill={secondary ? c1 : c2}/>
                    </svg>
                    <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M3.99678 1.59116C3.99678 2.46974 3.28456 3.18196 2.40598 3.18196C1.52741 3.18196 0.815186 2.46974 0.815186 1.59116C0.815186 0.712591 1.52741 0.000366211 2.40598 0.000366211C3.28456 0.000366211 3.99678 0.712591 3.99678 1.59116ZM0.815305 4.54547H4.06781V14.5448H0.815305V4.54547ZM12.9144 4.65865C12.9073 4.65632 12.9002 4.65397 12.8931 4.65162C12.8704 4.64415 12.8478 4.63668 12.8236 4.63001C12.7799 4.62001 12.7363 4.61183 12.6918 4.60456C12.519 4.57001 12.33 4.54547 12.1082 4.54547C10.2119 4.54547 9.00928 5.92447 8.61295 6.45716V4.54547H5.36044V14.5448H8.61295V9.09061C8.61295 9.09061 11.071 5.66721 12.1082 8.18158V14.5448H15.3597V7.79706C15.3597 6.28626 14.3244 5.02725 12.9272 4.66273C12.9229 4.66138 12.9187 4.66002 12.9144 4.65865Z" fill={secondary ? c1 : c2}/>
                    </svg>
                    <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.1751 2.61134C14.6342 2.84859 14.0579 3.00585 13.457 3.08221C14.0751 2.71315 14.5469 2.13319 14.7687 1.43414C14.1924 1.77776 13.5561 2.02047 12.8779 2.15591C12.3307 1.57323 11.5508 1.21234 10.6999 1.21234C9.04912 1.21234 7.72012 2.55225 7.72012 4.19486C7.72012 4.43121 7.74012 4.65847 7.78921 4.87481C5.31029 4.75391 3.11681 3.56581 1.64327 1.75594C1.38602 2.20227 1.23512 2.71315 1.23512 3.26311C1.23512 4.29576 1.7669 5.21115 2.55957 5.74112C2.08051 5.73203 1.61055 5.59295 1.21239 5.37387C1.21239 5.38296 1.21239 5.39478 1.21239 5.4066C1.21239 6.85559 2.24596 8.05914 3.60132 8.33639C3.35861 8.40275 3.09408 8.43457 2.81955 8.43457C2.62866 8.43457 2.43594 8.42366 2.25505 8.38366C2.64138 9.56449 3.73767 10.4326 5.04122 10.4608C4.02674 11.2544 2.73865 11.7325 1.3442 11.7325C1.09967 11.7325 0.865144 11.7216 0.630615 11.6916C1.95143 12.5434 3.51678 13.0297 5.20484 13.0297C10.6917 13.0297 13.6915 8.48456 13.6915 4.54484C13.6915 4.41303 13.687 4.28576 13.6806 4.15941C14.2724 3.73944 14.7696 3.21493 15.1751 2.61134Z" fill={secondary ? c1 : c2}/>
                    </svg>
                    <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M5.01096 0.0808105H10.4651C12.975 0.0808105 15.0103 2.11612 15.0103 4.62595V10.0801C15.0103 12.5899 12.975 14.6253 10.4651 14.6253H5.01096C2.50113 14.6253 0.46582 12.5899 0.46582 10.0801V4.62595C0.46582 2.11612 2.50113 0.0808105 5.01096 0.0808105ZM10.4653 13.2617C12.2197 13.2617 13.6469 11.8345 13.6469 10.0801V4.62591C13.6469 2.87149 12.2197 1.44432 10.4653 1.44432H5.01111C3.25669 1.44432 1.82951 2.87149 1.82951 4.62591V10.0801C1.82951 11.8345 3.25669 13.2617 5.01111 13.2617H10.4653ZM4.10208 7.353C4.10208 5.34495 5.73015 3.71689 7.73819 3.71689C9.74624 3.71689 11.3743 5.34495 11.3743 7.353C11.3743 9.36104 9.74624 10.9891 7.73819 10.9891C5.73015 10.9891 4.10208 9.36104 4.10208 7.353ZM5.46566 7.35303C5.46566 8.60567 6.48559 9.6256 7.73823 9.6256C8.99087 9.6256 10.0108 8.60567 10.0108 7.35303C10.0108 6.09948 8.99087 5.08046 7.73823 5.08046C6.48559 5.08046 5.46566 6.09948 5.46566 7.35303ZM12.1316 3.44417C12.1316 3.71176 11.9147 3.92868 11.6471 3.92868C11.3795 3.92868 11.1626 3.71176 11.1626 3.44417C11.1626 3.17658 11.3795 2.95966 11.6471 2.95966C11.9147 2.95966 12.1316 3.17658 12.1316 3.44417Z" fill={secondary ? c1 : c2}/>
                    </svg>

                    </div>
                </section>
                <div style={secondary ? { backgroundColor: c1 } : { backgroundColor: c2 }}></div>
                <section className={styles.details}>
                    <div>
                        <h4>Contact:</h4>
                        <div>
                            <h4>John Doe, Position</h4>
                            <h4>+91 1234567890</h4>
                        </div>
                        <div>
                            <h4>John Doe, Position</h4>
                            <h4>+91 1234567890</h4>
                        </div>
                    </div>
                    <div>
                    <h4>Location:</h4>
                        <div>
                            <h4>Addr.</h4>
                            <h4>MEC</h4>
                        </div>
                    </div>
                    <div>
                    <h4>Email:</h4>
                        <div>
                            <h4>email@gmail.com</h4>
                        </div>
                    </div>
                    <span style={secondary ? { backgroundColor: c1 } : { backgroundColor: c2 }}></span>
                </section>
                
            </main>
        </div>
    )
}