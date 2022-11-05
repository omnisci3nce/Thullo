import { useEffect, useState } from 'react';
import { MantineProvider, Title, Text, List, Card, Group } from '@mantine/core';

type Board = {
  id: string;
  name: string;
  description: string;
  lists: { name: string }[]
}

export default function App() {
  const [boards, setBoards] = useState<Board[]>([])
  useEffect(() => {
    fetch('http://localhost:3000/boards')
      .then(res => res.json())
      .then(boards => setBoards(boards))
  }, [])

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Title size='h3' mb='xl'>Thullo</Title>
      <Group>
        {boards && boards.map(b => (
          <Card shadow="sm" p="lg" radius="md" withBorder>
            <Text mb='sm' sx={{ fontWeight: 600 }}>{b.name}</Text>
            <Text>Lists: {b.lists.length}</Text>
            <List withPadding listStyleType="disc">
            
            {b.lists.map(l => <List.Item>{l.name}</List.Item>)}
            </List>
          </Card>
          
          ))}
          </Group>
    </MantineProvider>
  );
}