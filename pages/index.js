import { Title, Text, Button, Group, Image, Box, Container, Grid, useMantineTheme } from '@mantine/core'
import CodeCard from '../components/CodeCard';
import Head from '../components/Head';
import Journey from '../components/Journey';
import Awards from '../components/Awards';
import Projects from '../components/Projects'
import ImageCard from '../components/ImageCard';

const demoCode = `import { Button } from '@mantine/core';

function Demo() {
  return <Button>Hello</Button>
}`;

const Home = () => {
    const theme = useMantineTheme();

    return (
        <>
            <Box sx={{ maxWidth: '75vw' }} mx="auto">
                <Group position="center" direction="column">
                    <Head/>
                    <Journey/>
                    <Awards/>
                    <Projects/>
                </Group>
            </Box>
        </>
    )
}

export default Home