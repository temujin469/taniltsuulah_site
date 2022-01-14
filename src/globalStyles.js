import styled,{ createGlobalStyle } from "styled-components"
export const primaryClr = "#01cc92";
export const btnPrimaryClr = "linear-gradient(to right, #00c9ff, #92fe9d)";
export const whiteClr = "#eeeeee";
export const navClr = 'linear-gradient(to right, #ef32d9, #89fffd)';
export const lightGrad = 'linear-gradient(to right, #aaffa9, #11ffbd)'
export const lightGrad2 = 'linear-gradient(158deg, rgba(255,255,255,1) 0%, rgba(255,203,255,1) 0%, rgba(238,255,255,1) 74%, rgba(222,255,254,1) 83%, rgba(207,255,254,1) 90%, rgba(186,255,254,1) 100%, rgba(172,255,254,1) 100%)'

const GlobalStyle = createGlobalStyle`
*{
    box-sizing:border-box;
    margin:0;
    padding:0;
    font-family:'Source Sans Pro',sans-serif;
}
`;
export const Container = styled.div`
z-index:1;
width:100%;
max-width:1300px;
margin:0 auto;
padding:0 50px;

@media screen and (max-width:900px){
    padding:0 30px;
}
`;

export const Button = styled.button`
border-radius:5px;
white-space: nowrap;
background:${({primary})=>primary ? btnPrimaryClr : lightGrad};
padding:${({big})=>(big ? '12px 64px' : '10px 20px')};
font-size:${({fontBig})=> fontBig ? '20px' : '16px'};
color:${whiteClr};
outline:none;
border:none;
cursor: pointer;

&:hover{
    transition:all 0.3s ease-out;
    background:#fff;
    background:${({primary})=>primary ? lightGrad : btnPrimaryClr};
    color:white;
}
`;

export const Button1 = styled(Button)`
background-color:${navClr};
color:${whiteClr};
transition: all 0.3s ease;
background:${({primary})=>primary ? btnPrimaryClr : navClr};
padding:${({big})=>(big ? '12px 64px' : '10px 20px')};
font-size:${({fontBig})=> fontBig ? '20px' : '16px'};

&:hover{
    background:${({primary})=>primary ? lightGrad : btnPrimaryClr};
}
`;


export default GlobalStyle;