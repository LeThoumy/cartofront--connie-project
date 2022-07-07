import { styled } from "../stitches.config"

export const LocationIconDef = styled('span', {
	fontFamily: 'materialIcon',
	//Uses CSS 'content' to render text and thus its associated Material Symbol
	fontSize: '22px',
	marginRight: '$sm_4',
	color: '$seed20',
})
export default function LocationIcon() {
	return (<LocationIconDef className='iconFilled'>pin_drop</LocationIconDef>)
}