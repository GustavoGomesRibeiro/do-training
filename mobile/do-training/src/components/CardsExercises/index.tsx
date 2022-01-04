import React from 'react';
import { 
    Container, 
    Content,
    Exercises,
    Card,
    Text,
    Label,
    ContainerLabel
} from './styledComponents';

export default function CardsExercises() {
    const items = [
        {
            id: String(Math.random()),
            img: "importar e colocar img aqui",
            label: "nome do exercicio aqui"
        },
        {
            id: String(Math.random()),
            img: "importar e colocar img aqui",
            label: "nome do exercicio aqui"
        },
        {
            id: String(Math.random()),
            img: "importar e colocar img aqui",
            label: "nome do exercicio aqui"
        },
        {
            id: String(Math.random()),
            img: "importar e colocar img aqui",
            label: "nome do exercicio aqui"
        }
    ]

    return(
        <Container>
            <Content>
                <Card>
                    { items.map((item) => {
                        return (
                            <>
                                <Exercises key={item.id}>
                                    <Text> {item.img} </Text>
                                    
                                    <ContainerLabel> 
                                        <Label> {item.label} </Label> 
                                    </ContainerLabel>
                                </Exercises>
                            </>
                        )
                        })
                    }
                </Card>    
            </Content>
        </Container>
    )
} 