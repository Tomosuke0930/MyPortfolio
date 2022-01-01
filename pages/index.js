import NextLink from 'next/link'
import { 
    Button,
    Container, 
    Box, 
    Heading, 
    Image,
    Link,  
    List,
    ListItem,
    Icon,
    useColorModeValue 
} from "@chakra-ui/react"
import { ChevronRightIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraph from "../components/paragraph"
import { BioSection, BioYear } from '../components/bio'
import {
    IoLogoTwitter, IoLogoGithub
} from 'react-icons/io5'

const Page = () => {
    return(
        <Layout>
            <Container>
                <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500','whiteAlpha.200')} p={3} mb={6} align="center">
                    Hello, I&apos;m a full-stack developer based in Japan!
                </Box>

                <Box display={{ md: 'flex'}}>
                    <Box flexGrow={1}>
                        <Heading as="h2" variant="page-title">
                            Tomosuke Chiba
                        </Heading>
                        <p>Web3 Developer ( React / Solidity / Moralis / DeFi )</p>
                        <p>Now: I &apos;m working JPYC.Inc, 暗号屋</p>
                    </Box>
                    <Box 
                        flexShrink={0} 
                        mt={{base: 4, md: 0}} 
                        ml={{md: 6}}
                        align="center"
                        >
                        <Image 
                            borderColor="whiteAlpha.800" 
                            borderWidth={2} 
                            borderStyle="solid" 
                            maxWidth="100px" 
                            display="inline-block" 
                            borderRadius="full" 
                            src="/images/tomosuke.jpeg" 
                            alt="Profile Image" 
                        />
                    </Box>
                </Box>

            <Section delay={0.1}>
            <Heading as="h3" variant="section-title">
                Work
            </Heading>
            <Paragraph>
            Tomosuke is a full stack developer of web3.0 based in Fukuoka, Japan. 
            He is proficient in React (Next.js), Solidity, and Moralis(Firebase of crypto). 
            He is also good at project management, implementation and programming mentoring.
            His hobbies are work out and writing code for Flash Loan. He is currently working only in Japan,
            but since he is fluent in English, he is planning to apply for international jobs in 2022.<br />
                <NextLink href="works/inkdrop">
                    <Link>Inkdrop</Link>
                </NextLink>
            </Paragraph>
            <Box align="center" my={4}>
                <NextLink href="/works">
                <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                        My portfolio
                    </Button>
                </NextLink>
            </Box>
            </Section>

            <Section delay={0.2}>
                <Heading as="h3" variant="section-title">
                    Bio
                </Heading>
                <BioSection>
                    <BioYear>2001</BioYear>
                    Born in Iwate (岩手), Japan.
                </BioSection>
                <BioSection>
                    <BioYear>2021:8</BioYear>
                    Worked at JPYC.Inc(JPYC株式会社入社)
                </BioSection>
                <BioSection>
                    <BioYear>2021:12</BioYear>
                    Worked at Angoya&apos;project(暗号屋のプロジェクトに参加)
                </BioSection>
            </Section>

            <Section　delay={0.3}>
                <Heading as="h3" variant="section-title">
                    On the web
                </Heading>
                <List>
                    <ListItem>
                        <Link href="https://github.com/tomosuke0930" target="_blank">
                            <Button
                                variant="ghost"
                                colorScheme="teal"
                                leftIcon={<Icon as={IoLogoGithub} />}
                            >
                                @tomosuke0930
                            </Button>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link href="https://twitter.com/tomosuke_20" target="_blank">
                            <Button
                                variant="ghost"
                                colorScheme="teal"
                                leftIcon={<Icon as={IoLogoTwitter} />}
                            >
                                @tomosuke_20
                            </Button>
                        </Link>
                    </ListItem>
                </List>
            </Section>
            </Container>
        </Layout>
    )
}

export default Page