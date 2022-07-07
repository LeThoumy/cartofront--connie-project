import { styled } from "../stitches.config";

export const Icns = styled('span', {
	fontFamily: 'materialIcon',
	fontSize: '120%',
	fontVariationSettings: `'FILL' 0, 'wght' 400,'GRAD' 0,'opsz' 24`,
	variants: {
		light: {
			true: {
				color: '$green10',
			}
		}
	}
})