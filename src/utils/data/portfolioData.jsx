import imageBakesell from '../../assets/img/portfolioBannerBakesell.jpeg';
import imageVirap from '../../assets/img/portfolioBannerVirap.jpg';
import imageRentbuild from '../../assets/img/portfolioBannerRentbuild.jpeg';
import imagePrivanews from '../../assets/img/portfolioBannerPrivaNews.png';
import imageMaingem from '../../assets/img/portfolioBannerMaingem.png';

export const postCategory = {
    uiux: 'UI/UX',
    website: 'Website',
    advertisment: 'Advertisment',
    app: 'APP',
}
export const postPlatform = {
    browser: 'Browser',
    ios: 'iOS',
}
export const postDesigner = {
    redly: 'Redly Team',
}
export const postTools = {
    photoshop: 'Adobe Photoshop',
    illustrator: 'Adobe Illustrator',
    xd: 'Adobe XD',
    afterEffects: 'Adobe After Effects',
    vscode: 'Visual Studio Code',
}
const month = {
    january: 'January', //styczen
    february: 'February', //luty
    march: 'March', //marzec
    april: 'April', //kwiecien
    may: 'May', //maj
    june: 'June', //czerwiec
    july: 'July', //lipiec
    august: 'August', //sierpien
    september: 'September', //wrzesien
    october: 'October', //pazdziernik 
    november: 'November', //listopad
    december: 'December', //grudzien
}

export const postContent = [
    {
        number: '01',
        name: "Bake'sell",
        category: postCategory.advertisment,
        dateOfRelease: `08 ${ month.january } 2021`,
        gradient: 'linear-gradient(90deg, #FC81F5, #9C76F8 )',
        link: '/bakesell',
        image: `url( ${ imageBakesell } )`,
        imagePosition: 'center',
        imageSize: '100%'
    },
    {
        number: '02',
        name: 'Virap',
        category: postCategory.website,
        dateOfRelease: `27 ${ month.april } 2021`,
        gradient: 'linear-gradient(90deg, #404040, #9C9C9C)',
        link: '/virap',
        image: `url( ${ imageVirap } )`,
        imagePosition: 'center bottom',
        imageSize: '100%'
    },
    {
        number: '03',
        name: 'Rentbuild',
        category: postCategory.uiux,
        dateOfRelease: `12 ${ month.may } 2021`,
        gradient: 'linear-gradient(90deg, #4051AD, #57B5F9)',
        link: '/rentbuild',
        image: `url( ${ imageRentbuild } )`,
        imagePosition: 'center',
        imageSize: '100%'
    },
    {
        number: '04',
        name: 'PrivaNews',
        category: postCategory.app,
        dateOfRelease: `25 ${ month.july } 2021`,
        gradient: 'linear-gradient(90deg, #E1803F, #FFC8A2)',
        link: '/privanews',
        image: `url( ${ imagePrivanews } )`,
        imagePosition: 'center',
        imageSize: '135%'
    },
    {
        number: '05',
        name: 'Maingem',
        category: postCategory.website,
        dateOfRelease: `23 ${ month.august } 2021`,
        gradient: 'linear-gradient(90deg, #742E95, #9F59BC)',
        link: '/maingem',
        image: `url( ${ imageMaingem } )`,
        imagePosition: 'center',
        imageSize: '135%'
    },
]