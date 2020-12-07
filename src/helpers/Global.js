
const carries = (content, asDefault) => {
    return content != undefined ? content : asDefault;
}

 

const goTo = (name, payLoad) => {
    () => {
        props.navigation.navigate(name, payLoad)
            
        } 
}
const PATTERN = {


    PATRIMONY: /^\d{3}[.]?\d{3}$/,
    NAME: /^[A-z]*$/,

}
const palette = {
    //azul da bandeira que na verdade é roxo
    PURPLE: '#2E1A73',
    LPURPLE: '#6F60A6',
    GREEN: '#03A64A',
    YELLOW: '#F2CB05',
    WHITE: '#F2F2F2',
    DGRAY:'#101010',
    RED:'#DC143C'
}

export {
    carries,
    palette,
    PATTERN,
    goTo,
}