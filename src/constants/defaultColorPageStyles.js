import colors from '../constants/colors';

const defaultColorPageStyles = {
    container: {
        width: '100vw',
        height: '100vh',
        display: 'grid',
        gridTemplateColumns: '5% 20% 35% 35% 5%',
        gridTemplateRows: '10% 20% 60% 10%'
    },
    backButtonContainer: {
        gridColumnStart: 2,
        gridColumnEnd: 3,
        gridRowStart: 1,
        gridRowEnd: 2,
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    backButton: {
        textDecoration: 'none',
        fontFamily: 'Arial Black',
        fontSize: '3em',
        color: colors.black
    },
    titleContainer: {
        gridColumnStart: 2,
        gridColumnEnd: 4,
        gridRowStart: 2,
        gridRowEnd: 3,
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-end'
    },
    title: {
        fontFamily: 'Arial Black',
        fontSize: '4em',
        color: colors.black
    },
    descriptionContainer: {
        paddingRight: '20px',
        gridColumnStart: 2,
        gridColumnEnd: 4,
        gridRowStart: 3,
        gridRowEnd: 4,
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },
    description: {
        fontFamily: 'Arial Black',
        fontSize: '2em',
        color: colors.black,
        whiteSpace: 'pre-line',
        lineHeight: '1.5em'
    },
    artContainer: {
        gridColumnStart: 4,
        gridColumnEnd: 5,
        gridRowStart: 2,
        gridRowEnd: 4,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    art: {
        width: '80%',
        height: 'auto',
        margin: '0',
        flex: '0 1 auto',
    },
    footerContainer: {
        gridColumnStart: 4,
        gridColumnEnd: 5,
        gridRowStart: 4,
        gridRowEnd: 5,
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    footer: {
        fontFamily: 'Arial',
        fontSize: '0.8em'
    }
};

export default defaultColorPageStyles;
