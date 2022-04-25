import { Card, Image, Text, Badge, Button, Group, useMantineTheme, Box, Overlay } from '@mantine/core';
import { useState } from 'react'

function Demo(props) {
  const theme = useMantineTheme();
  const [visible, setVisible] = useState(false);

  const secondaryColor = theme.colorScheme === 'dark'
    ? theme.colors.dark[1]
    : theme.colors.gray[7];

  return (
    <Box sx={{ height: "100%", position: 'relative' }}>
        <Overlay onMouseEnter={() => setVisible(true)} onMouseLeave={() => setVisible(false)} opacity={visible ? 0.6 : 0} color="#000" zIndex={5} style={{ padding: 25, maxHeight: '100%' }}>
            <Group position="apart" style={{ marginBottom: 5 }}>
                <Text weight={500}>{props.title}</Text>
                <Badge color="pink" variant="light">
                    {props.badge}
                </Badge>
            </Group>
            <Text size="sm" lineClamp={2} style={{ color: secondaryColor, lineHeight: 1.5 }}>
                {props.description}
            </Text>
        </Overlay>
        <div style={{  margin: 'auto' }}>
            <Card shadow="sm" p="lg">
                <Card.Section>
                    <Image src={props.image} alt={props.alt}/>
                </Card.Section>
            </Card>
        </div>
    </Box>
  );
}

export default Demo