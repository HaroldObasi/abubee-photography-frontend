import { imgUrlTransform } from "../helpers"

const About = () => {
    var url = 'https://res.cloudinary.com/haroldobasi/image/upload/v1637067551/abubee/IMG_1840_xy34jj.jpg'
    const aboutUrl = imgUrlTransform(285, 285, 'upload', url)
    return(
        <>
        <div className = 'about-body'>
            <p className = 'about-title'>ABOUT ME</p>
            <div className = 'about-details'>
                <img className = 'about-img' 
                    src="/images/about.jpg" 
                    src={aboutUrl}
                    alt="" 
                />
                <div className = 'about-writeup'>
                    My name is Abubee Abubakar, i am a third year student studying Political Science, I love to take pictures of naked women and i also love to lose in call of duty and NBA 2k to Harold, i like to blow my siren on highway so that these ju guys can get away from my front, ive conquered UK and now im here to destroy all the babes in Abuja, Thank you
                </div>

            </div>
        </div>
        </>
    )
}

export default About