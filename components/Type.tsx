import { styled } from "../stitches.config";

export const Type = styled('p', {
	variants: {
		CoverageTitle: {
			true: {
				fontFamily: 'monument',
				fontWeight: '400',
				fontSize: '$md_is20',
				color: '$seed10',
				textTansform: 'capitalize',
			}
		},
		Location: {
			true: {
				fontFamily: 'monument',
				fontWeight: '400',
				fontSize: '$md_is20',
				color: '$seed30',
				textTansform: 'capitalize',
			}
		},
		PricingLg: {
			true: {
				fontFamily: 'monument-bold',
				fontWeight: '600',
				fontSize: '$lg_is24',
				lineHeight: '24px',
				color: '$txtPrimary',
				textTansform: 'capitalize',
				mb: '$sm_2',
			}
		},
		PricingSm: {
			true: {
				fontFamily: 'monument',
				fontWeight: 'lighter',
				fontSize: '$sm_is14',
				color: '$txtSecondary',
			}
		},
		CoverageLabel: {
			true: {
				color: '$txtSecondary',
				my: '2px',
				fontFamily: 'sfRounded',
				fontWeight: '500',
				fontSize: '14px',
			}
		},
		CoverageKind: {
			true: {
				fontFamily: 'monument-medium',
				fontSize: '$md_is18',
				color: '$seed40',

			}
		}
	}
})