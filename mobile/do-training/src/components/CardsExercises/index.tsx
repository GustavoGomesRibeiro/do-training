import React from 'react';
import { 
    Container, 
    Content,
    Header,
    Description,
    Exercises,
    Card,
    CardExercises,
    Text,
    Label,
    ContainerLabel
} from './styledComponents';

export default function CardsExercises() {
    const items = [
        {
            id: String(Math.random()),
            img: "importar e colocar img aqui",
            label: "exercicio"
        },
        {
            id: String(Math.random()),
            img: "importar e colocar img aqui",
            label: "exercicio"
        },
        {
            id: String(Math.random()),
            img: "importar e colocar img aqui",
            label: "exercicio"
        },
        {
            id: String(Math.random()),
            img: "importar e colocar img aqui",
            label: "exercicio"
        }
    ]

    return(
        <Container>
            <Content>
                <Header>
                    <Description>Selecione os exercícios que deseja adicionar ao treino A.</Description>
                </Header>
                <Card>
                    { items.map((item) => {
                        return (
                            <CardExercises key={item.id}>
                                <Exercises>
                                    <Text> {item.img} </Text>
                                </Exercises>

                                <ContainerLabel> 
                                    <Label> {item.label} </Label> 
                                </ContainerLabel>
                            </CardExercises>
                        )
                        })
                    }
                </Card>    
            </Content>
        </Container>
    )
} 