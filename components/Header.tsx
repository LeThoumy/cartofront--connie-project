import { styled } from '../stitches.config'
import { Btn } from './Btn'
import Logo from './Logo'

const NavWrapper = styled('div', {
	width: 'calc(100vw - 15px)',
	display: 'flex',
	position: 'relative',
	alignItems: 'center',
	justifySelf: 'left',
	p: '$md_16 $md_24',
	zIndex: '40',
	bdb: '1px solid hsla($seed / 0.12)',
	fontFamily: 'monument-medium',
	fontSize: '$md_is16',
	backgroundColor: 'white',
	color: 'hsl($seed)',
})

const WrapperL = styled('div', {
	alignItems: 'flex-start',
	flexGrow: '1',
	flexShrink: '1',
	flexBasis: '0%',
	textTransform: 'uppercase',
})

const WrapperR = styled('div', {
	display: 'flex',
	flexGrow: '1',
	flexShrink: '1',
	flexBasis: '0%',
	justifyContent: 'flex-end',
})

const ExpandIcon = styled('span', {
	color: 'hsl($seed)',
	fontWeight: 'bold',
	lineHeight: '0px',
	fontSize: '$md_is18',
	fontFamily: 'materialIcon',
	//Uses CSS 'content' to render text and thus its associated Material Symbol
	content: 'expand_more',
})

export default function Header() {
	return (
		<NavWrapper>
			<WrapperL>Support</WrapperL>
			<Logo />
			<WrapperR>
				<Btn secondary css={{
					fontSize: 'inherit',
					fontFamily: 'inherit',
					background: 'transparent',
					border: '2px solid hsl($seed)',
					color: 'hsl($seed)',
					sh: 'none',
					p: '12px  12px 12px 16px',
				}}>English <ExpandIcon>expand_more</ExpandIcon></Btn>
			</WrapperR>

		</NavWrapper>
	)
}