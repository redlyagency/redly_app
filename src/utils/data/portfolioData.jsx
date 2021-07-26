import imageBakesell from '../../assets/img/portfolioBannerBakesell.jpeg';
import imageVirap from '../../assets/img/portfolioBannerVirap.jpg';
import imageRentbuild from '../../assets/img/portfolioBannerRentbuild.jpeg';

export const postCategory = {
    uiux: 'UI/UX',
    website: 'Website',
    advertisment: 'Advertisment',
    app: 'App',
}
export const postPlatform = {
    browser: 'Browser',
}
export const postDesigner = {
    redly: 'Redly Team',
}
export const postTools = {
    photoshop: 'Adobe Photoshop',
    illustrator: 'Adobe Illustrator',
    xd: 'Adobe XD',
    afterEffects: 'Adobe After Effects',
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
        gradient: 'linear-gradient(90deg, #1217CA, #57B1F9)',
        link: '/rentbuild',
        image: `url( ${ imageRentbuild } )`,
        imagePosition: 'center',
        imageSize: '100%'
    },
]