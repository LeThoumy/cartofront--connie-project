import { styled } from '../stitches.config';


const SearchContainer = styled('form', {
	display: 'inline-flex',
	alignItems: 'center',
	w: '40vw',
	mt: '10vh',
	mb: '$lg_32', position: 'sticky', top: '3vh', zIndex: '3'
})
const SearchInput = styled('input', {
	w: '80%',
	fontFamily: 'monument',
	fontSize: '$md_is16',
	flexBasis: 'stretch',
	padding: '12px 12px 12px 38px',
	bdr: '8px 4px 4px 8px',
	color: 'hsl($seed)',
	boxShadow: '$lg',
	border: '2px solid transparent',
	mr: '0.25vw',
	'&:focus': {
		outline: 'none',
		border: '2px solid $seed40'
	},
})

const SearchIcon = styled('span', {
	'&::before': {
		position: 'absolute',
		fontFamily: 'materialIcon',
		//Uses CSS 'content' to render text and thus its associated Material Symbol
		content: 'search',
		fontSize: '24px',
		color: '$seed40',
		mt: '-14px',
		ml: '8px',
		pointerEvents: 'none !important'
	}
})

const SearchBtn = styled('button', {
	fontFamily: 'monument-medium',
	whiteSpace: 'pre',
	inwidth: '20vw',
	fontSize: '$md_is18',
	flexBasis: 'content',
	bg: '$seed40',
	color: '$seed99',
	padding: '13px 16px 12px 14px',
	bdr: '4px 8px 8px 4px',
	border: '1px solid $seed40',
	boxShadow: '$lg',
	'&:hover': {
		cursor: 'pointer',
		bg: '$seed30',
	}
})
/* const XIcon = styled('span', {
	'&::before': {
		alignSelf: 'flex-end',
		position: 'absolute',
		fontFamily: 'materialIcon',
		//Uses CSS 'content' to render text and thus its associated Material Symbol
		content: 'close',
		fontSize: '20px',
		bg: '$seedBg',
		color: '$seed40',
		mt: '-12px',
		ml: '-32px'
	}
}) */

export default function SearchBar() {
	return (<SearchContainer>
		<SearchIcon></SearchIcon>
		<SearchInput placeholder={'425 Mulholland Drive, Coral Gables, Florida 33416'} type={'search'}></SearchInput>
		<SearchBtn>Get Quote</SearchBtn>
	</SearchContainer>)
}