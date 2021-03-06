import { Image, Text, Title, Button, Group, Center } from '@mantine/core';
import { Link, animateScroll as scroll } from "react-scroll";

const Head = () => {
    return (
        <Center style={{ width: '60vw', marginTop: 300  }} id="home">
            <Group direction="column">
                <Text color="yellow">
                    Hi, my name is
                </Text>
                <Title>
                    Joel Wright.
                </Title>
                <Title order={2}>
                    I build programs to make your life easier.
                </Title>
                <Text>
                    I&apos;m a programmer caught up in blockchain development and web application design. I&apos;m currently working on a system for the community to collaborate on the platforms they&apos;re using. I&apos;m doing this using industry standard frameworks and programming languages. I&apos;m using Next.js, Node.js and blockchain fundamentals to contribute to the web 3 movement.
                </Text>
                <Button variant="outline" size="lg">
                    <Link
                        activeClass="active"
                        to="journey"
                        spy={true}
                        smooth={true}
                        offset={-30}
                        duration={1000}
                    >
                        My Journey
                    </Link>
                </Button>
            </Group>
        </Center>
    )
}

export default Head