import { styled } from "../stitches.config";

export const Chip = styled('div', {
	padding: '6px 8px',
	fontFamily: 'sfRounded',
	fontStyle: 'normal',
	fontWeight: '500',
	fontSize: '12px',
	bg: 'hsla(0, 0%, 0%, 0.05)',
	br: '$sm',
	display: 'inline-flex',
	flexDirection: 'row',
	alignItems: 'center',
	variants: {
		positive: {
			true: {
				bg: '#E1F2E5',
				color: 'hsla(0, 0%, 0%, 0.6)',
				display: 'flex',

			}
		},
		informative: {
			true: {
				color: 'hsla(0, 0%, 0%, 0.6)',
			}
		}
	}
}) 