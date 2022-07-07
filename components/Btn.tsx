import { keyframes, styled } from '../stitches.config';

/* -------------------------------- Animation ------------------------------- */
const hoverInShadow = keyframes({
	'from': {
		boxShadow: '$sm',
	},
	'to': {
		boxShadow: '$lg',
	}
})
const hoverInColor = keyframes({
	'0%': {
		color: 'hsl($seedHue, $seedSaturation, $seedLightness)',
		bg: 'hsl($seed / 0)',
	},
	'50': {
		color: 'hsl($seedHue, $seedSaturation, 60% )',
	},
	'100%': {
		color: 'hsl($seedHue, $seedSaturation, 95% )',
		bg: 'hsl($seed / 0.9)',
	}
})
const ClickedShadow = keyframes({
	'from': { boxShadow: '$lg' },
	'to': { background: '$surface3' }
})

/* --------------------------------- Syling --------------------------------- */
export const Btn = styled('button', {
	//Font
	fontStyle: 'normal',
	fontFamily: 'monument',
	fontWeight: '400',
	//Box Model
	display: 'flex',
	flexDirection: 'row',
	placeContent: 'center',
	placeItems: 'center',
	'&:hover': { cursor: 'pointer', },
	//Variants
	variants: {
		secondary: {
			true: {
				fontSize: '20px',
				bdr: '$md',
				boxShadow: '$sm',
				p: '12px 16px 12px 12px',
				background: '$surface5',
				color: '$seed10',
				'&:hover': {
					animation: `${hoverInShadow} forwards 400ms cubic-bezier(.45, .434, .355, 1)`,

				},
				'&:active': {
					animation: `${ClickedShadow} forwards 50ms`,

				},
			},
		},

		outlined: {
			true: {
				bg: 'hsl($seed / 0)',
				fontSize: '14px',
				color: 'hsl($seedHue, $seedSaturation, $seedLightness)',
				py: '8px',
				border: '2px solid $txtColored',
				bdr: '$sm',
				fontFamily: 'sfRounded',
				fontWeight: '500',
				'&:hover': {
					animation: `${hoverInColor} forwards 150ms ease-in`,
				},
			}
		}
	},
})