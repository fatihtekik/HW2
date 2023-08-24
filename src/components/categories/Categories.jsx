import styles from './Categories.module.css'
import Container from '../Container/Container'
import worktable from '../../images/Solid-Wood-Vanity-Table-URDT26BR-2-removebg-preview 1.png'
import table from '../../images/31-removebg-preview 1.png'
import bookshielf from '../../images/30_2-removebg-preview 1.png'
import window from '../../images/190239-17138287-removebg-preview 1.png'

function Categories() {
    return (
        <Container>
            <section className={styles.Categories}>
                <h3 className={styles.title}>TRENDING CATEGORIES</h3>
                <div className={styles.line}>
                    <svg className={styles.LeftArrow} xmlns="http://www.w3.org/2000/svg" width="21" height="40" viewBox="0 0 21 40" fill="none">
                        <path d="M0.00634539 20.1082C0.0282131 20.3116 0.11822 20.5015 0.261784 20.6476L19.3337 39.7178C19.5019 39.8944 19.7339 39.9961 19.978 39.9999C20.222 40.0037 20.4571 39.9089 20.6305 39.7375C20.8039 39.566 20.9012 39.3318 20.9002 39.0881C20.8993 38.8441 20.8001 38.6108 20.6251 38.4406L2.19096 20.0089L20.6251 1.57716L20.6251 1.57684C20.8001 1.40697 20.8993 1.17371 20.9002 0.92968C20.9012 0.68565 20.8039 0.451763 20.6305 0.280304C20.4571 0.108532 20.222 0.0140917 19.978 0.0178874C19.7339 0.0216906 19.5019 0.123108 19.3337 0.299954L0.260972 19.3702C0.0692311 19.5651 -0.0245738 19.8361 0.00553451 20.108L0.00634539 20.1082Z" fill="#797979" />
                    </svg>
                    <div className={styles.cardOne}>
                        <svg className={styles.cardImg} xmlns="http://www.w3.org/2000/svg" width="66" height="76" viewBox="0 0 66 76" fill="none">
                            <path d="M65.9987 45.3673C65.9987 44.2731 65.5642 43.2244 64.7911 42.4508C64.0175 41.6772 62.9683 41.2427 61.8746 41.2427H30.6474V33.984C36.1739 31.3208 40.0745 25.0165 40.0745 17.6753C40.0745 7.92978 33.2042 0 24.756 0C16.3071 0 9.4375 7.93034 9.4375 17.6753C9.28669 23.9721 12.4077 29.8984 17.6857 33.3354V41.2424H4.13464C2.87549 41.2359 1.68257 41.8061 0.897478 42.7906C0.112486 43.7747 -0.178843 45.0648 0.108139 46.2908C0.394579 47.5169 1.22678 48.5445 2.36716 49.0787V71.8801C2.36716 73.143 3.04095 74.3099 4.13469 74.9414C5.22843 75.5729 6.57593 75.5729 7.66961 74.9414C8.76383 74.3099 9.43755 73.143 9.43755 71.8801V49.4912H40.0759V71.8801C40.0759 72.8175 40.4481 73.7165 41.111 74.3794C41.7739 75.0423 42.6734 75.415 43.6108 75.415H60.1084C61.0459 75.415 61.9448 75.0423 62.6083 74.3794C63.2712 73.7164 63.6433 72.8175 63.6433 71.8801V49.0787C64.3464 48.7451 64.9405 48.2199 65.3577 47.563C65.7749 46.906 65.9973 46.1449 66 45.367L65.9987 45.3673ZM11.7938 17.676C11.7938 9.22709 17.6029 2.35752 24.7557 2.35752C31.9086 2.35752 37.7177 9.22778 37.7177 17.676C37.7177 26.1249 31.9086 32.9945 24.7557 32.9945C17.6029 32.9945 11.7938 26.1242 11.7938 17.676ZM20.0426 34.4916C21.5491 35.0591 23.1457 35.3504 24.7559 35.352C25.9516 35.3493 27.1407 35.1827 28.2914 34.8567V41.2435H20.0426V34.4916ZM7.08005 71.8823C7.08005 72.5328 6.55274 73.0606 5.90173 73.0606C5.25128 73.0606 4.72342 72.5328 4.72342 71.8823V49.4934H7.08008L7.08005 71.8823ZM50.6801 49.4934V50.6718C50.6801 51.3228 51.2074 51.8501 51.8584 51.8501C52.5094 51.8501 53.0367 51.3228 53.0367 50.6718V49.4934H61.2855V54.4427H52.5301C52.1379 54.1275 51.5791 54.1275 51.1869 54.4427H42.4314V49.4934H50.6801ZM42.4313 61.2771V56.7994H50.6801V57.7422C50.6801 58.3932 51.2074 58.9206 51.8584 58.9206C52.5094 58.9206 53.0367 58.3932 53.0367 57.7422V56.7994H61.2855V61.2771H42.4313ZM60.1066 73.0614H43.609C42.958 73.0614 42.4307 72.5336 42.4307 71.8831V63.6343H50.6795V64.8126C50.6795 65.4631 51.2068 65.9909 51.8578 65.9909C52.5088 65.9909 53.0361 65.4631 53.0361 64.8126V63.6343H61.2849V71.8831C61.2849 72.1956 61.1607 72.495 60.9399 72.7158C60.7185 72.9372 60.4191 73.0614 60.1066 73.0614ZM61.8741 47.1367H4.13329C3.15734 47.1367 2.36576 46.3451 2.36576 45.3691C2.36576 44.3926 3.15727 43.6016 4.13329 43.6016H61.8741C62.8501 43.6016 63.6416 44.3926 63.6416 45.3691C63.6416 46.3451 62.8501 47.1367 61.8741 47.1367Z" fill="#4F4E4E" />
                            <path d="M34.1826 53.0266H15.3283C14.3908 53.0266 13.4913 53.3987 12.8284 54.0617C12.1655 54.7246 11.7933 55.6241 11.7933 56.5615V74.2368C11.7933 74.5493 11.9176 74.8487 12.1384 75.0701C12.3592 75.2909 12.6592 75.4151 12.9716 75.4151H36.5396C36.8521 75.4151 37.1521 75.2909 37.3729 75.0701C37.5942 74.8487 37.7179 74.5493 37.7179 74.2368V56.5615C37.7179 55.6241 37.3458 54.7245 36.6828 54.0617C36.0199 53.3987 35.1204 53.0266 34.183 53.0266H34.1826ZM15.3283 55.3832H34.1826C34.4951 55.3832 34.7951 55.5075 35.0159 55.7283C35.2367 55.9491 35.3609 56.2491 35.3609 56.5616V57.7399H14.1498V56.5616C14.1498 55.9106 14.6776 55.3832 15.3281 55.3832H15.3283ZM14.1499 73.0585V60.096H35.3611V73.0585H14.1499Z" fill="#4F4E4E" />
                        </svg>
                        <p className={styles.card__title}>DRESSING TABLE</p>
                    </div>
                    <div className={styles.cardTwo}>
                        <svg className={styles.cardImg} xmlns="http://www.w3.org/2000/svg" width="46" height="74" viewBox="0 0 46 74" fill="none">
                            <path d="M44.7981 71.2711H38.4872V69.1098C38.4872 66.5002 36.3719 64.3855 33.7629 64.3855H32.3376C32.5906 63.8568 32.7398 63.2821 32.7398 62.6612C32.7398 60.7068 31.349 59.0863 29.5094 58.7185L32.1302 44.3142C32.6244 41.5898 31.8888 38.8082 30.1185 36.6929C29.2564 35.6583 28.1874 34.8306 27.0036 34.2675V29.1404C27.3486 28.9107 27.7164 28.761 28.3023 28.761C29.1988 28.761 29.601 29.106 30.2107 29.6347C30.9463 30.2671 31.8661 31.06 33.6246 31.06C35.3832 31.06 36.2914 30.2667 37.0269 29.6347C37.625 29.0827 38.0272 28.7377 38.9237 28.7377C39.8202 28.7377 40.2224 29.0827 40.832 29.6114C41.5677 30.2438 42.4758 31.0367 44.2344 31.0367C44.8668 31.0367 45.3838 30.5196 45.3838 29.8872C45.3838 29.784 45.3494 29.6919 45.3261 29.5998C45.3261 29.5771 45.3378 29.5538 45.3378 29.5422L36.9464 3.33349C36.314 1.33353 34.475 0 32.394 0H13.5419C11.45 0 9.62194 1.33364 8.98952 3.32198L0.598138 29.5306C0.586495 29.5767 0.586495 29.6227 0.586495 29.6688C0.574853 29.7376 0.540453 29.8069 0.540453 29.8757C0.540453 30.5081 1.04639 31.0135 1.67827 31.0251H1.68991C3.44845 31.0251 4.35671 30.2318 5.09223 29.5999C5.713 29.0828 6.11574 28.7378 7.02391 28.7378C7.92041 28.7378 8.32261 29.0828 8.93228 29.6115C9.6679 30.244 10.5877 31.0368 12.3462 31.0368C14.1048 31.0368 15.013 30.2435 15.7486 29.6115C16.3577 29.0828 16.7604 28.7378 17.6686 28.7378C18.2433 28.7378 18.6111 28.887 18.9445 29.1056V34.2438C17.7607 34.8069 16.6916 35.6347 15.8296 36.6692C14.0594 38.7955 13.3237 41.5776 13.818 44.2905L16.4387 58.6948C14.5997 59.0626 13.2083 60.6947 13.2083 62.6375C13.2083 63.2583 13.3576 63.833 13.6105 64.3618H12.1853C9.57565 64.3618 7.46094 66.477 7.46094 69.0861L7.46041 71.2712H1.14947C0.517048 71.2712 0 71.7883 0 72.4207C0 73.0531 0.517048 73.5702 1.14947 73.5702H44.808C45.4404 73.5702 45.9575 73.0531 45.9575 72.4207C45.9575 71.7883 45.4288 71.2712 44.7969 71.2712L44.7981 71.2711ZM14.2541 27.8768C13.645 28.3944 13.2428 28.7389 12.3463 28.7389C11.4381 28.7389 11.0359 28.3938 10.4268 27.8652C9.69064 27.2333 8.78247 26.4399 7.02393 26.4399C5.2654 26.4399 4.34549 27.2332 3.60997 27.8652C3.58721 27.8879 3.56392 27.9112 3.52952 27.934L11.1852 4.0244C11.507 3.00141 12.4612 2.30014 13.5419 2.30014H32.394C33.4747 2.30014 34.4289 2.98971 34.7622 4.0244L42.4179 27.934C42.3952 27.9112 42.3719 27.8996 42.3375 27.8763C41.6013 27.2333 40.6815 26.4399 38.923 26.4399C37.1644 26.4399 36.2562 27.2332 35.5206 27.8652C34.911 28.3944 34.5088 28.7389 33.6123 28.7389C32.7041 28.7389 32.3019 28.3938 31.6928 27.8652C30.9566 27.2333 30.0485 26.4399 28.2899 26.4399C26.7727 26.4399 25.8646 27.0379 25.0945 27.6815L24.8759 27.8767C24.2663 28.3943 23.8757 28.7388 22.9792 28.7388C22.0711 28.7388 21.6805 28.3938 21.0708 27.8651L20.8411 27.6698C20.0822 27.0263 19.1857 26.4399 17.6685 26.4399C15.9094 26.4399 14.9896 27.2332 14.254 27.8767L14.2541 27.8768ZM21.2435 30.7161C21.7151 30.9113 22.2782 31.0378 22.9793 31.0378C23.6689 31.0378 24.2209 30.9113 24.6919 30.7277V33.5098C24.1288 33.4061 23.5541 33.3373 22.9677 33.3373C22.3812 33.3373 21.8066 33.4061 21.2434 33.5098L21.2435 30.7161ZM17.5877 38.1537C18.9214 36.5559 20.887 35.6362 22.9678 35.6362C25.0486 35.6362 27.0142 36.556 28.3479 38.1537C29.6815 39.7514 30.2329 41.8439 29.8651 43.9015L27.1866 58.6269H18.7605L16.0705 43.9015C15.7027 41.8439 16.2547 39.7519 17.5877 38.1542V38.1537ZM15.4958 62.6498C15.4958 61.6957 16.2658 60.9256 17.22 60.9256H28.7158C29.67 60.9256 30.4401 61.6956 30.4401 62.6498C30.4401 63.604 29.6695 64.3741 28.7158 64.3741H17.22C16.2664 64.3741 15.4958 63.6041 15.4958 62.6498ZM9.74844 69.0984C9.74844 67.7648 10.8408 66.6731 12.1738 66.6731H33.7612C35.0949 66.6731 36.1866 67.7654 36.1866 69.0984V71.2714H9.74763L9.74844 69.0984Z" fill="#757575" />
                        </svg>
                        <p className={styles.card__title}>LAMP</p>
                    </div>
                    <div className={styles.cardThree}>
                        <svg className={styles.cardImg} xmlns="http://www.w3.org/2000/svg" width="52" height="66" viewBox="0 0 52 66" fill="none">
                            <path d="M5.10534 0.0069707C5.05871 0.0142249 5.01207 0.0204425 4.96647 0.0297705H1.56055H1.42167C0.642871 0.0624143 -0.0348256 0.804421 0.00138788 1.5843C0.0376597 2.36362 0.78226 3.03881 1.56056 2.99888H3.78457V63.8614C3.77214 64.6465 4.48305 65.3693 5.2676 65.3693C6.05159 65.3693 6.76257 64.6464 6.75063 63.8614V62.3769H45.3041V63.8614C45.2927 64.6454 46.0036 65.3668 46.7871 65.3668C47.5706 65.3668 48.281 64.6455 48.2701 63.8614V2.99888H50.4947C51.2787 3.0108 52 2.29936 52 1.51439C52 0.729885 51.2787 0.0184951 50.4947 0.029903H47.0654C46.9208 0.000367139 46.7721 -0.00740468 46.625 0.00710327C46.5783 0.0143575 46.5317 0.0205751 46.4861 0.029903H5.54627C5.40171 0.000367139 5.253 -0.00740468 5.10583 0.00710327L5.10534 0.0069707ZM6.75047 2.9989H45.3039V5.968H6.75047V2.9989ZM6.75047 8.93658H45.3039V23.7815H6.75047V8.93658ZM6.75047 26.7502H45.3039V41.5951H6.75047V26.7502ZM23.6634 29.7193C22.8846 29.7519 22.2069 30.4939 22.2431 31.2738C22.2794 32.0531 23.024 32.7283 23.8023 32.6884H28.2507C29.0347 32.7003 29.756 31.9889 29.756 31.2039C29.756 30.4194 29.0347 29.708 28.2507 29.7194H23.8023H23.6634L23.6634 29.7193ZM6.75047 44.5642H45.3039V59.409H6.75047V44.5642ZM23.6634 47.5333C22.8882 47.5711 22.2172 48.311 22.2534 49.0873C22.2897 49.8635 23.027 50.5371 23.8023 50.5024H28.2507C29.0336 50.5127 29.7528 49.8018 29.7528 49.0179C29.7528 48.234 29.0331 47.5229 28.2507 47.5334H23.8023H23.6634L23.6634 47.5333Z" fill="#757575" />
                        </svg>
                        <p className={styles.card__title}>CABINET</p>
                    </div>
                    <div className={styles.cardFour}>
                        <svg className={styles.cardImg} xmlns="http://www.w3.org/2000/svg" width="73" height="69" viewBox="0 0 73 69" fill="none">
                            <path d="M63.4731 20.6287V12.0085C63.4692 8.82516 62.203 5.77256 59.9514 3.52167C57.7005 1.27012 54.6479 0.00392113 51.4646 0H20.5857C17.4024 0.00382931 14.3498 1.27002 12.0989 3.52167C9.84732 5.77256 8.58113 8.82516 8.5772 12.0085V20.6287C6.08059 20.8559 3.77725 22.0673 2.1753 23.9952C0.574042 25.9239 -0.193714 28.4109 0.0417172 30.9064C0.277214 33.4023 1.49618 35.7013 3.43055 37.296V53.1804C3.43311 54.8473 3.92133 56.4774 4.83525 57.8712C5.74917 59.2657 7.04988 60.3634 8.57699 61.0303V65.1888C8.57827 66.0983 8.94014 66.9706 9.58345 67.6134C10.2261 68.2567 11.0985 68.6186 12.008 68.6198H15.439C16.3484 68.6186 17.2208 68.2567 17.8636 67.6134C18.5069 66.9707 18.8687 66.0983 18.87 65.1888V61.7578H53.1799V65.1888C53.1812 66.0983 53.5431 66.9706 54.1864 67.6134C54.8291 68.2567 55.7015 68.6186 56.611 68.6198H60.042C60.9514 68.6186 61.8238 68.2567 62.4665 67.6134C63.1098 66.9707 63.4717 66.0983 63.473 65.1888V61.0303C65.0002 60.3634 66.3009 59.2656 67.2147 57.8712C68.1286 56.4773 68.6169 54.8473 68.6194 53.1804V37.296C70.5538 35.7011 71.7728 33.4023 72.0083 30.9064C72.2438 28.4111 71.476 25.9239 69.8747 23.9952C68.2728 22.0672 65.9696 20.8558 63.4728 20.6287H63.4731ZM20.5857 3.43132H51.4646C53.7385 3.43387 55.9187 4.33885 57.5268 5.94656C59.1345 7.55484 60.0395 9.73503 60.0421 12.0088V20.9519C58.0681 21.5135 56.3309 22.7025 55.0928 24.3388C53.8553 25.9752 53.1832 27.9703 53.1801 30.022V40.8433C47.5059 39.9403 41.7709 39.4763 36.0251 39.4565C30.2794 39.4763 24.5444 39.9403 18.8702 40.8433V30.022C18.867 27.9701 18.195 25.975 16.9575 24.3388C15.7194 22.7024 13.9822 21.5135 12.0082 20.9519V12.0088C12.0107 9.73486 12.9157 7.55471 14.5234 5.94656C16.1317 4.33893 18.3119 3.43393 20.5857 3.43132ZM15.4392 65.1891H12.0082V61.7582H15.4392V65.1891ZM60.0421 65.1891H56.6111V61.7582H60.0421V65.1891ZM65.9486 35.0128C65.4738 35.3312 65.1885 35.8654 65.1885 36.4373V53.1805C65.1872 54.545 64.6441 55.8532 63.6798 56.8183C62.7148 57.7826 61.4065 58.3258 60.042 58.327H12.0081C10.6436 58.3258 9.33534 57.7826 8.37025 56.8183C7.40593 55.8534 6.8628 54.545 6.86153 53.1805V36.4373C6.86153 35.8654 6.57625 35.3312 6.10144 35.0128C4.3464 33.841 3.3354 31.8339 3.43882 29.7259C3.54157 27.6187 4.74396 25.7198 6.60497 24.725C8.46604 23.7301 10.7132 23.7856 12.5225 24.8712C14.3324 25.9561 15.4396 27.9115 15.4391 30.0221V42.8876C15.4398 43.4014 15.6702 43.8877 16.0678 44.2138C16.4654 44.5393 16.9874 44.6695 17.4916 44.5693C23.6087 43.471 29.8102 42.9081 36.0255 42.8876C42.2403 42.9081 48.4417 43.471 54.5594 44.5693C55.0635 44.6695 55.5856 44.5393 55.9832 44.2138C56.3808 43.8877 56.6112 43.4014 56.6118 42.8876V30.0221C56.6106 27.9109 57.7178 25.9547 59.5278 24.8686C61.3378 23.783 63.5856 23.7274 65.4471 24.7224C67.3087 25.7174 68.5112 27.6167 68.6139 29.7253C68.7173 31.8332 67.7051 33.841 65.9494 35.0128H65.9486Z" fill="#757575" />
                        </svg>
                        <p className={styles.card__title}>SOFA</p>
                    </div>
                    <div className={styles.cardFive}>
                        <svg className={styles.cardImg} xmlns="http://www.w3.org/2000/svg" width="59" height="74" viewBox="0 0 59 74" fill="none">
                            <path d="M54.8785 43.3792H3.84398C3.13941 43.3792 2.56812 42.8079 2.56812 42.1033V34.4481C2.56812 33.7436 3.13941 33.1723 3.84398 33.1723H54.8785C55.2168 33.1723 55.5415 33.3067 55.7807 33.5459C56.0199 33.7851 56.1543 34.1098 56.1543 34.4481V42.1033C56.1543 42.4416 56.0199 42.7663 55.7807 43.0055C55.5415 43.2447 55.2168 43.3792 54.8785 43.3792ZM5.11984 40.8274H53.6026V35.724H5.11984V40.8274Z" fill="#757575" />
                            <path d="M8.94753 73.9999H1.29236C0.915301 74.005 0.555887 73.8427 0.309828 73.5573C0.0631999 73.272 -0.0438856 72.892 0.0164955 72.5201L5.11995 41.8994C5.22076 41.2752 5.76358 40.8195 6.39581 40.8274H14.051C14.428 40.8223 14.7875 40.9846 15.0335 41.27C15.2801 41.5554 15.3872 41.9353 15.3268 42.3072L10.2234 72.9279C10.1226 73.5522 9.57976 74.0079 8.94753 73.9999ZM2.79773 71.4482H7.90118L12.5837 43.3792H7.48022L2.79773 71.4482Z" fill="#757575" />
                            <path d="M21.7062 35.724H16.6028C15.8982 35.724 15.3269 35.1527 15.3269 34.4481V14.0343C15.3269 13.3298 15.8982 12.7585 16.6028 12.7585H21.7062C22.0445 12.7585 22.3692 12.8929 22.6084 13.1321C22.8477 13.3714 22.9821 13.696 22.9821 14.0343V34.4481C22.9821 34.7865 22.8477 35.1111 22.6084 35.3504C22.3692 35.5896 22.0445 35.724 21.7062 35.724ZM17.8786 33.1723H20.4304V15.3102H17.8786V33.1723Z" fill="#757575" />
                            <path d="M42.12 35.724H37.0166C36.312 35.724 35.7407 35.1527 35.7407 34.4481V14.0343C35.7407 13.3298 36.312 12.7585 37.0166 12.7585H42.12C42.4584 12.7585 42.783 12.8929 43.0223 13.1321C43.2615 13.3714 43.3959 13.696 43.3959 14.0343V34.4481C43.3959 34.7865 43.2615 35.1111 43.0223 35.3504C42.783 35.5896 42.4584 35.724 42.12 35.724ZM38.2924 33.1723H40.8442V15.3102H38.2924V33.1723Z" fill="#757575" />
                            <path d="M57.4304 73.9999H49.7752C49.143 74.0079 48.6002 73.5522 48.4993 72.9279L43.3959 42.3072C43.3355 41.9353 43.4426 41.5554 43.6892 41.27C43.9353 40.9847 44.2947 40.8223 44.6718 40.8274H52.3269C52.9592 40.8195 53.502 41.2751 53.6028 41.8994L58.7062 72.5201C58.7666 72.892 58.6595 73.2719 58.4129 73.5573C58.1668 73.8427 57.8074 74.005 57.4304 73.9999ZM50.8598 71.4482H55.9632L51.2425 43.3792H46.1391L50.8598 71.4482Z" fill="#757575" />
                            <path d="M47.2233 15.3102H11.4991C10.4842 15.3102 9.51011 14.9069 8.79257 14.1893C8.07502 13.4716 7.67163 12.4975 7.67163 11.4827V3.82751C7.67163 2.81253 8.07489 1.83848 8.79257 1.12094C9.51024 0.403391 10.4843 0 11.4991 0H47.2233C48.2383 0 49.2123 0.40326 49.9299 1.12094C50.6474 1.83861 51.0508 2.81266 51.0508 3.82751V11.4827C51.0508 12.4977 50.6476 13.4717 49.9299 14.1893C49.2122 14.9068 48.2382 15.3102 47.2233 15.3102ZM11.4991 2.55158C10.7946 2.55158 10.2233 3.12287 10.2233 3.82744V11.4826C10.2233 11.8209 10.3577 12.1456 10.5969 12.3848C10.8362 12.6241 11.1608 12.7585 11.4991 12.7585H47.2233C47.5616 12.7585 47.8863 12.6241 48.1255 12.3848C48.3647 12.1456 48.4992 11.8209 48.4992 11.4826V3.82744C48.4992 3.48911 48.3647 3.16445 48.1255 2.92522C47.8863 2.686 47.5616 2.55158 47.2233 2.55158H11.4991Z" fill="#757575" />
                        </svg>
                        <p className={styles.card__title}>CHAIR</p>
                    </div>
                    <div className={styles.cardSix}>
                        <svg className={styles.cardImg} xmlns="http://www.w3.org/2000/svg" width="73" height="54" viewBox="0 0 73 54" fill="none">
                            <path d="M68.1325 24.2014V11.8516C68.1289 8.70924 66.9135 5.69692 64.7521 3.47498C62.5906 1.25304 59.6602 0.00367939 56.6034 0H16.3471C13.2913 0.00532312 10.3629 1.25628 8.20302 3.4777C6.04313 5.69964 4.82829 8.71088 4.82524 11.8516V24.2296C3.38823 24.9109 2.17087 25.9995 1.31582 27.3686C0.460879 28.7372 0.00414931 30.3284 0 31.9551V45.9667C0.00103561 46.9595 0.385794 47.9117 1.06881 48.614C1.75235 49.3155 2.67883 49.7105 3.6451 49.7111H7.87687V52.0922C7.87687 53.1456 8.70748 54 9.73228 54C10.7576 54 11.5882 53.1456 11.5882 52.0922V49.7111H61.4144V52.0922C61.4144 53.1456 62.245 54 63.2704 54C64.2952 54 65.1263 53.1456 65.1263 52.0922V49.7111H69.3581C70.3238 49.7095 71.2493 49.3145 71.9317 48.6129C72.6147 47.9108 72.999 46.9595 73 45.9667V31.9551C72.9964 30.3193 72.536 28.7186 71.6728 27.3441C70.81 25.9697 69.5809 24.8789 68.1325 24.2014ZM8.53749 11.8516C8.53956 9.7223 9.36292 7.68092 10.8269 6.17442C12.2908 4.66791 14.2763 3.82002 16.3476 3.81566H56.6039C58.6763 3.81779 60.6637 4.66524 62.1293 6.17169C63.5948 7.6782 64.4191 9.72121 64.4212 11.8516V23.4077L58.4645 23.4082V18.0659C58.4634 16.3087 57.784 14.6239 56.5754 13.381C55.3668 12.138 53.7279 11.4391 52.0185 11.4369H44.7409C43.031 11.439 41.392 12.1379 40.1828 13.381C38.9742 14.6234 38.2943 16.3087 38.2922 18.0659V23.4077L34.6865 23.4082V18.0659C34.6844 16.3086 34.0045 14.6234 32.7959 13.3809C31.5867 12.138 29.9478 11.439 28.2379 11.4369H20.9576C19.2508 11.4427 17.6155 12.1438 16.4094 13.3863C15.2039 14.6287 14.5255 16.3114 14.5239 18.0659V23.4077L8.53775 23.4082L8.53749 11.8516ZM54.7606 23.4077L42.0042 23.4082V18.0659C42.0047 17.3201 42.2931 16.6046 42.8063 16.0777C43.3195 15.5501 44.0154 15.2531 44.741 15.2526H52.0186C52.7441 15.2531 53.4395 15.5501 53.9522 16.0777C54.4648 16.6052 54.7528 17.3201 54.7528 18.0659L54.7606 23.4077ZM30.9822 23.4077L18.2233 23.4082V18.0659C18.2238 17.3228 18.5102 16.61 19.0202 16.083C19.5303 15.556 20.2221 15.2574 20.9451 15.2526H28.2254C28.9508 15.2531 29.6469 15.5501 30.16 16.0777C30.6732 16.6047 30.9616 17.3201 30.9621 18.0659L30.9822 23.4077ZM63.3005 45.9024H63.2389L10.0362 45.9583C9.93778 45.9285 9.83628 45.9072 9.73376 45.8949C9.63019 45.9072 9.52714 45.9285 9.4272 45.9583H3.71334V31.9548C3.71437 30.7001 4.19959 29.4977 5.06286 28.6108C5.92557 27.7234 7.09536 27.2246 8.3159 27.2235H64.6869C65.9075 27.2246 67.0772 27.7234 67.94 28.6108C68.8032 29.4976 69.2884 30.7001 69.2895 31.9548L69.3589 45.8942L63.3005 45.9024Z" fill="#757575" />
                        </svg>
                        <p className={styles.card__title}>BED</p>
                    </div>
                    <svg className={styles.rightArrow} xmlns="http://www.w3.org/2000/svg" width="21" height="40" viewBox="0 0 21 40" fill="none">
                        <path d="M20.9937 19.8913C20.9718 19.6879 20.8818 19.498 20.7382 19.3519L1.66635 0.281687C1.49806 0.105159 1.26608 0.00342619 1.02205 -0.000378944C0.778013 -0.00418197 0.542858 0.0905787 0.369493 0.262036C0.196138 0.433494 0.0988407 0.6677 0.0997905 0.911414C0.10074 1.15545 0.199942 1.3887 0.37488 1.55889L18.809 19.9906L0.374878 38.4224L0.374878 38.4227C0.19994 38.5925 0.100737 38.8258 0.0997889 39.0698C0.0988371 39.3139 0.196137 39.5477 0.369492 39.7192C0.542849 39.891 0.778011 39.9854 1.02204 39.9816C1.26607 39.9778 1.49806 39.8764 1.66635 39.6996L20.739 20.6293C20.9308 20.4344 21.0246 20.1634 20.9945 19.8915L20.9937 19.8913Z" fill="#797979" />
                    </svg>
                </div>
                <div className={styles.lineItems}>
                    <div className={styles.Box_cardOne}>
                        <img className={styles.cardOne_img} src={worktable} alt="" />
                        <p className={styles.cardOne_title}>Vasagle Vanity Table</p>
                        <p className={styles.cardOne_description}> $1,200.00</p>
                    </div>
                    <div className={styles.Box_cardOne}>
                        <img className={styles.cardOne_img} src={table} alt="" />
                        <p className={styles.cardOne_title}>Adkins Dressing Table</p>
                        <p className={styles.cardOne_description}> $899.00</p>
                    </div>
                    <div className={styles.Box_cardOne}>
                        <img className={styles.cardOne_img} src={bookshielf} alt="" />
                        <p className={styles.cardOne_title}>Hironpal Dressing Table</p>
                        <p className={styles.cardOne_description}> $350.00</p>
                    </div>
                    <div className={styles.Box_cardOne}>
                        <img className={styles.cardOne_img} src={window} alt="" />
                        <p className={styles.cardOne_title}>Deco Dressing Table</p>
                        <p className={styles.cardOne_description}>$800.00</p>
                    </div>
                </div>
            </section>
        </Container>
    )
}

export default Categories