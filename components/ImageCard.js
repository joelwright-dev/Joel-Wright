import { Card, Image, Text, Badge, Button, Group, useMantineTheme } from '@mantine/core';

function Demo(props) {
  const theme = useMantineTheme();

  const secondaryColor = theme.colorScheme === 'dark'
    ? theme.colors.dark[1]
    : theme.colors.gray[7];

  return (
    <div style={{ margin: 'auto' }}>
      <Card shadow="sm" p="lg">
        <Card.Section>
          <Image src={props.image} alt={props.alt}/>
        </Card.Section>
        <Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
          <Text weight={500}>{props.title}</Text>
          <Badge color="pink" variant="light">
            {props.badge}
          </Badge>
        </Group>
        <Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>
          {props.description}
        </Text>
      </Card>
    </div>
  );
}

export default Demo