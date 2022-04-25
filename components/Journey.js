import { useMantineTheme, Box, Group, Timeline, Text, Title, Center, Button } from '@mantine/core'
import { Link, animateScroll as scroll } from "react-scroll";

const Journey = () => {
    const theme = useMantineTheme();

    return (
        <Center style={{ width: '60vw', height: '95vh' }} id="journey">
            <Group direction="column">
                <Title order={2}>My Journey So Far...</Title>
                <Timeline active={4}>
                    <Timeline.Item title="Grade 7">
                        <Text color="dimmed" size="sm">Became interested in programming through Python and libraries such as Pygame and Turtle</Text>
                        <Text size="xs" mt={4}>Age 12</Text>
                    </Timeline.Item>
                    <Timeline.Item title="Grade 8">
                        <Text color="dimmed" size="sm">Participated in Grok Beginner and Intermediate Challenges, adding fuel to the fire of my passion for programming</Text>
                        <Text size="xs" mt={4}>Age 13</Text>
                    </Timeline.Item>
                    <Timeline.Item title="Grade 9">
                        <Text color="dimmed" size="sm">Discovered web design and the underlying technologies of the web such as HTML, CSS, JavaScript, PHP and MySQL</Text>
                        <Text size="xs" mt={4}>Age 14</Text>
                    </Timeline.Item>
                    <Timeline.Item title="Grade 10">
                        <Text color="dimmed" size="sm">Found myself in awe of all the possibilities of web 3.0 and learnt stack frameworks such as Node.js and React.js</Text>
                        <Text size="xs" mt={4}>Age 15</Text>
                    </Timeline.Item>
                    <Timeline.Item title="Grade 11">
                        <Text color="dimmed" size="sm">Founded my very own blockchain based service where users can vote on their needs and wants in the programs they're using by learning Next.js, API development in Express.js and blockchain fundamentals.</Text>
                        <Text size="xs" mt={4}>Age 16/17</Text>
                    </Timeline.Item>
                    <Timeline.Item title="Grade 12">
                        <Text color="dimmed" size="sm">Looking out in to the great unknown with many ideas on where I want to go.</Text>
                        <Text size="xs" mt={4}>Age 17/18</Text>
                    </Timeline.Item>
                    <Timeline.Item title="...">
                        <Text color="dimmed" size="sm">What's next?</Text>
                    </Timeline.Item>
                </Timeline>
                <Button variant="outline" size="lg">
                    <Link
                        activeClass="active"
                        to="awards"
                        spy={true}
                        smooth={true}
                        duration={1000}
                    >
                        My Awards
                    </Link>
                </Button>
            </Group>
        </Center>
    )
}

export default Journey