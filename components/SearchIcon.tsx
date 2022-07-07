import { styled } from "../stitches.config"

const SearchIconDef = styled('span', {
	'&::before': {
		fontFamily: 'materialIcon',
		//Uses CSS 'content' to render text and thus its associated Material Symbol
		content: 'search',
	}
})
export default function SearchIcon() {
	return (<SearchIconDef></SearchIconDef>)
}