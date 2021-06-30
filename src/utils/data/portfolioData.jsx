import imageBakesell from '../../assets/img/portfolioBannerBakesell.jpeg';
import imageVirap from '../../assets/img/portfolioBannerVirap.jpg';
import imageRentbuild from '../../assets/img/portfolioBannerRentbuild.jpeg';

const postCategory = {
    uiux: 'UI/UX',
    website: 'Website',
    advertisment: 'Advertisment',
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
        link: '/works',
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
        link: '/works',
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
        link: '/works',
        image: `url( ${ imageRentbuild } )`,
        imagePosition: 'center',
        imageSize: '100%'
    },
    {
        number: '04',
        name: "Bake'sell",
        category: postCategory.advertisment,
        dateOfRelease: `08 ${ month.january } 2021`,
        gradient: 'linear-gradient(90deg, #FC81F5, #9C76F8 )',
        link: '/works',
        image: `url( ${ imageBakesell } )`,
        imagePosition: 'center',
        imageSize: '100%'
    },
    {
        number: '05',
        name: 'Virap',
        category: postCategory.website,
        dateOfRelease: `27 ${ month.april } 2021`,
        gradient: 'linear-gradient(90deg, #404040, #9C9C9C)',
        link: '/works',
        image: `url( ${ imageVirap } )`,
        imagePosition: 'center bottom',
        imageSize: '100%'
    },
    {
        number: '06',
        name: 'Rentbuild',
        category: postCategory.uiux,
        dateOfRelease: `12 ${ month.may } 2021`,
        gradient: 'linear-gradient(90deg, #4051AD, #57B5F9)',
        link: '/works',
        image: `url( ${ imageRentbuild } )`,
        imagePosition: 'center',
        imageSize: '100%'
    },
]

export default postContent;