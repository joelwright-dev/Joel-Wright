import { useMantineTheme, Box, Group, Timeline, Text, Grid, Title, Center, Button } from '@mantine/core'
import { Link, animateScroll as scroll } from "react-scroll";
import ImageCard from '../components/ImageCard'
import { motion, useAnimation } from "framer-motion";
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'

const Journey = () => {
    const theme = useMantineTheme();

    const {ref, inView} = useInView({
        threshold: 0.2
    })
    const animation = useAnimation()

    useEffect(() => {
        console.log(inView)
        if(inView) {
            animation.start({
            })
        } else {
            animation.start({
            })
        }
    }, [inView])

    return (
        <Center style={{ width: '60vw', marginTop: 300}} id="awards">
            <Group direction="column">
                <Title order={2}>My Awards</Title>
                <Grid grow>
                    <Grid.Col span={6}>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.9 }}>
                            <ImageCard
                                image=""
                                alt="Grok Learning Beginner Certificate"
                                title="Grok Learning"
                                badge="Beginner"
                                description="Yes"
                            />
                        </motion.div>
                    </Grid.Col>
                    <Grid.Col span={6}>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.9 }}>
                            <ImageCard
                                image=""
                                alt="Grok Learning Intermediate Certificate"
                                title="Grok Learning"
                                badge="Intermediate"
                                description="Yes"
                            />
                        </motion.div>
                    </Grid.Col>
                    <Grid.Col span={6}>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.9 }}>
                            <ImageCard
                                image=""
                                alt="AIO Bronze Certificate"
                                title="Australian Informatics Olympiad"
                                badge="Intermediate"
                                description="Yes"
                            />
                        </motion.div>
                    </Grid.Col>
                    <Grid.Col span={6}>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.9 }}>
                            <ImageCard
                                image=""
                                alt="ICAS Digital Technologies"
                                title="International Competitions and Assessments for Schools"
                                badge="High Distiction"
                                description="Yes"
                            />
                        </motion.div>
                    </Grid.Col>
                </Grid>
                <Button variant="outline" size="lg">
                    <Link
                        activeClass="active"
                        to="projects"
                        spy={true}
                        smooth={true}
                        duration={1000}
                    >
                        My Projects
                    </Link>
                </Button>
            </Group>
        </Center>
    )
}

export default Journey