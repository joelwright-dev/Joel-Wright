import { useMantineTheme, Box, Group, Timeline, Grid, Text, Title, Center, Button } from '@mantine/core'
import { Link, animateScroll as scroll } from "react-scroll";
import React, { useEffect } from 'react'
import Project from '../components/Project'
import { flipInX, flipOutY } from 'react-animations'
import { motion, useAnimation } from "framer-motion";
import { useInView } from 'react-intersection-observer'

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
        <div ref={ref} id="projects">
            <motion.div
                animate={animation}>
                <Center style={{ width: '60vw', marginTop: 300, marginBottom: 300  }} id="awards">
                    <Group direction="column">
                        <Title order={2}>My Projects</Title>
                        <Grid grow>
                            <Grid.Col span={6}>
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.9 }}>
                                    <Project
                                        image="images/test.png"
                                        alt="serverhostingreviews.com"
                                        badge="Affiliation"
                                        title="Server Hosting Reviews"
                                        description="By creating this site, I learnt about the basics of HTML and CSS, as well as using a CSS framework like Bootstrap to make it look pretty!"
                                    />
                                </motion.div>
                            </Grid.Col>
                            <Grid.Col span={6}>
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.9 }}>
                                    <Project
                                        image="images/test.png"
                                        alt="serverhostingreviews.com"
                                        badge="Affiliation"
                                        title="Server Hosting Reviews"
                                        description="By creating this site, I learnt about the basics of HTML and CSS, as well as using a CSS framework like Bootstrap to make it look pretty!"
                                    />
                                </motion.div>
                            </Grid.Col>
                            <Grid.Col span={6}>
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.9 }}>
                                    <Project
                                        image="images/test.png"
                                        alt="serverhostingreviews.com"
                                        badge="Affiliation"
                                        title="Server Hosting Reviews"
                                        description="By creating this site, I learnt about the basics of HTML and CSS, as well as using a CSS framework like Bootstrap to make it look pretty!"
                                    />
                                </motion.div>
                            </Grid.Col>
                            <Grid.Col span={6}>
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.9 }}>
                                    <Project
                                        image="images/test.png"
                                        alt="serverhostingreviews.com"
                                        badge="Affiliation"
                                        title="Server Hosting Reviews"
                                        description="By creating this site, I learnt about the basics of HTML and CSS, as well as using a CSS framework like Bootstrap to make it look pretty!"
                                    />
                                </motion.div>
                            </Grid.Col>
                        </Grid>
                        <Group>
                        </Group>
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
            </motion.div>
        </div>
    )
}

export default Journey