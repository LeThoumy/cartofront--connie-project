import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { styled } from '../stitches.config'
import { blueTheme } from '../stitches.config';
import { Btn } from '../components/Btn'
import { Icns } from '../components/icons'
import { Type } from '../components/Type'
import { Chip } from '../components/Chip'
import LocationIcon from '../components/LocationIcon'
import SearchBar from '../components/SearchInput'
import { getCssText } from '../stitches.config'
import { useTheme } from 'next-themes'
import Header from '../components/Header'


const Container = styled('main', {
	display: 'grid',
	justifyItems: 'center',
	maxWidth: '100vw',
	minHeight: '100vh',
	background: '$surface1',
	alignSelf: 'baseline',
	pb: '10vh'
})
const StackCard = styled('section', {
	display: "Flex",
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center',
	border: '1px solid #D8DBDF',
	borderRadius: '$lg'
})
/* ---------------------------------- Utils --------------------------------- */
const Stack = styled('section', {
	width: '100%',
	display: "Flex",
	flexDirection: 'column',
	justifyContent: 'space-between',
})

const InlineBox = styled('div', {
	width: '100%',
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'space-between',
})
const InlineFlex = styled('div', {
	width: '100%',
	display: 'flex',
	flexDirection: 'row',
	alignContent: 'flex-start',
	justifyContent: 'space-between',
})
const Inline = styled('div', {
	display: 'inline-flex',
	flexDirection: 'row',
	alignItems: 'center',

})


const InlineTitle = styled('div', {
	width: '100%',
	textAlign: 'center',
	py: '$md_16',
	borderBottom: '1px solid #D8DBDF',
	textTransform: 'uppercase',

})

const InsurerImage = styled('img', {
	width: '100px',
	mr: '$lg_32'
})

const HeroImage = styled('img', {
	minHeight: '20vw',
	width: '100%',
	objectFit: 'cover',
	position: 'relative',
	zIndex: '1',

})

const HeroImageContainer = styled('div', {
	w: '100%',
	height: '30vw',
	overflow: 'hidden'
})
const HeroImageOverlay = styled('div', {
	w: '100%',
	minHeight: '30vw',
	marginBottom: '-30vw',
	background: 'linear-gradient(hsla($Bg / 1) 0%, hsla($Bg / 0.0) 40%)',
	position: 'relative',
	zIndex: '2',
})

const InlineIsLocation = styled('div', {
	display: 'grid',
	gridAutoFlow: 'column',
	placeItems: 'center',
	justifyContent: 'center',
	py: '16px',
	width: '100%',
	bdr: '0px 0px 16px 16px',
	border: '1px solid #D8DBDF'
})

const ThemeButton = styled('button', {
	fontFamily: 'sfRounded',
	backgroundColor: '$seed90',
	p: '15px',
	color: '$seed40',
	fontSize: '$md_is20',
	bdr: '$pill',
	border: '2px solid $colors$seed90',
	transition: 'border 200ms ease-out',
	'&:hover': {
		cursor: 'pointer',
		transition: 'border 100ms ease-in',
		border: '2px solid $colors$seed40'
	}
})

const LightFont = styled('span', {
	fontFamily: 'monument',
	fontWeight: 'lighter',
})

const Home: NextPage = () => {

	const { theme, setTheme } = useTheme();
	const toggleTheme = () =>
		setTheme(theme === 'blue' ? 'green' : 'blue');

	return (
		<Container>
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header />
			{/* Search Bar */}
			{/* <Inline css={{ mb: '$lg_32', position: 'sticky', top: '3vh', zIndex: '3' }}> */}<SearchBar />{/* </Inline> */}

			<StackCard css={{ width: '80vw', mx: '10vw', backgroundColor: '$seedBg', border: 'none', mb: '16px' }}>
				<HeroImageContainer><HeroImageOverlay></HeroImageOverlay><HeroImage src='https://bit.ly/hero-img--green' alt='House image'></HeroImage></HeroImageContainer>
				<InlineIsLocation><LocationIcon /><Type Location>425 Mulholland Drive, Florida 33416</Type></InlineIsLocation>
			</StackCard>

			<StackCard css={{ width: '80vw', mx: '10vw', backgroundColor: '$seedBg' }}>
				<InlineTitle> <Type CoverageKind>Standard home coverage</Type></InlineTitle>
				{/* Listing 1 */}
				<Stack css={{ padding: '20px 32px 32px', borderBottom: '1px solid #D8DBDF', }}>
					<InlineBox css={{ mb: '24px' }}>
						<Inline>
							<Type css={{ mr: '$sm_8', textTransform: 'capitalize' }} CoverageTitle>Home coverage from nationwide</Type> <Chip informative>Private</Chip>
						</Inline>
						<Chip positive ><Icns css={{ mr: '$sm_4' }}>price_check</Icns>Lowest Price</Chip>
					</InlineBox>

					<InlineBox>
						<Stack css={{ width: 'fit-content' }}>
							<InlineBox css={{ mb: '16px' }}>
								<InsurerImage src='https://bit.ly/n-wide-logo' alt='Isurer company logo'></InsurerImage>
								<Stack css={{ color: 'hsla(0, 0%, 0%, 0.7)' }}>
									<Inline><Icns css={{ mr: '$sm_4' }}>home</Icns><Type CoverageLabel>$250,000 Building</Type></Inline>
									<Inline><Icns css={{ mr: '$sm_4' }}>chair</Icns><Type CoverageLabel>$104,000  Proprety</Type></Inline>
									<Inline><Icns css={{ mr: '$sm_4' }}>wallet</Icns><Type CoverageLabel>$12,660 Deductible</Type></Inline>
									<Inline><Icns css={{ mr: '$sm_4' }}>gavel</Icns><Type CoverageLabel>$7,570 Liability</Type></Inline>
								</Stack>
							</InlineBox>
							<Btn outlined>Contact Agent</Btn>
						</Stack>
						<div className="alignEnd"><Type PricingLg>$87<LightFont>/Mo.</LightFont></Type><Type PricingSm>$1044 /Yr. </Type></div>
					</InlineBox>
				</Stack>
				{/* Listing 2 */}
				<Stack css={{ padding: '20px 32px 32px', borderBottom: '1px solid #D8DBDF' }}>
					<InlineBox css={{ mb: '24px' }}>
						<Inline>
							<Type css={{ mr: '$sm_8', textTransform: 'capitalize' }} CoverageTitle>Home coverage from MassMutual</Type> <Chip informative>Private</Chip>
						</Inline>
					</InlineBox>
					<InlineBox>
						<Stack css={{ width: 'fit-content' }}>
							<InlineBox css={{ mb: '16px' }}>
								<InsurerImage src='https://bit.ly/m-mutual--logo' alt='Isurer company logo' css={{ objectFit: 'contain', mr: '$lg_32' }}></InsurerImage>
								<Stack css={{ color: 'hsla(0, 0%, 0%, 0.7)' }}>
									<Inline><Icns css={{ mr: '$sm_4' }}>home</Icns><Type CoverageLabel>$167,000 Building</Type></Inline>
									<Inline><Icns css={{ mr: '$sm_4' }}>chair</Icns><Type CoverageLabel>$77,000  Proprety</Type></Inline>
									<Inline><Icns css={{ mr: '$sm_4' }}>wallet</Icns><Type CoverageLabel>$12,250 Deductible</Type></Inline>
									<Inline><Icns css={{ mr: '$sm_4' }}>gavel</Icns><Type CoverageLabel>$7,100 Liability</Type></Inline>
								</Stack>
							</InlineBox>
							<Btn outlined>Contact Agent</Btn>
						</Stack>
						<div className="alignEnd"><Type PricingLg>$91<LightFont>/Mo.</LightFont></Type><Type PricingSm>$1092 /Yr. </Type></div>
					</InlineBox>
				</Stack>
				{/* Listing 3 */}
				<Stack css={{ padding: '20px 32px 32px', borderBottom: '1px solid #D8DBDF' }}>
					<InlineBox css={{ mb: '24px' }}>
						<Inline>
							<Type css={{ mr: '$sm_8', textTransform: 'capitalize' }} CoverageTitle>Home coverage from State Farm</Type> <Chip informative>Private</Chip>
						</Inline>
					</InlineBox>
					<InlineBox>
						<Stack css={{ width: 'fit-content' }}>
							<InlineBox css={{ mb: '16px' }}>
								<InsurerImage src='https://bit.ly/statefarm-logo' alt='Isurer company logo' css={{ objectFit: 'contain', mr: '$lg_32' }}></InsurerImage>
								<Stack css={{ color: 'hsla(0, 0%, 0%, 0.7)' }}>
									<Inline><Icns css={{ mr: '$sm_4' }}>home</Icns><Type CoverageLabel>$167,000 Building</Type></Inline>
									<Inline><Icns css={{ mr: '$sm_4' }}>chair</Icns><Type CoverageLabel>$77,000  Proprety</Type></Inline>
									<Inline><Icns css={{ mr: '$sm_4' }}>wallet</Icns><Type CoverageLabel>$12,250 Deductible</Type></Inline>
									<Inline><Icns css={{ mr: '$sm_4' }}>gavel</Icns><Type CoverageLabel>$7,100 Liability</Type></Inline>
								</Stack>
							</InlineBox>
							<Btn outlined>Contact Agent</Btn>
						</Stack>
						<div className="alignEnd"><Type PricingLg>$94<LightFont>/Mo.</LightFont></Type><Type PricingSm>$1128 /Yr. </Type></div>
					</InlineBox>
				</Stack>

			</StackCard>

			<Inline css={{ position: 'fixed', right: '0px', bottom: '0px', padding: '4px 20px 20px 4px', gap: '10px' }}>
				<ThemeButton onClick={toggleTheme}> Toggle Theme </ThemeButton>
				<Btn secondary><Icns className='materialFont' css={{ marginRight: '2px', fontSize: '100%', }}>send</Icns>Share</Btn>
				<Btn secondary><Icns className='materialFont' css={{ marginRight: '2px', fontSize: '100%', }}>search</Icns>Search</Btn>
			</Inline>

		</Container >
	)
}
export default Home
