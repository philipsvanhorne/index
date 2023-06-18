/* Yurki Montero Montero (2023) */


import { Box, Heading, SimpleGrid, Image } from '@chakra-ui/react'
import { RedirectionBox } from '../../components/RedirectionBox'


type BoxItem = {
    title: string;
    description: string;
    image: string;
    link: string;
}


const BoxItems: BoxItem[] = [
    {
        title: "Moodle",
        description: "Planning, opdrachten en meer! Alles wat je nodig hebt voor informatica!",
        image: "https://informatica.lvo-weert.nl/afbeeldingen/informatica_logo.jpg",
        link: "https://wrt-lnx01.lvo-weert.nl/~moodle/moodle/"
    },
    {
        title: "Teams",
        description: "Huiswerkschrift, uitgewerkte huiswerkopgaven en meer! Een handige plek om alles te vinden!",
        image: "https://informatica.lvo-weert.nl/afbeeldingen/teams_logo.png",
        link: "https://www.microsoft.com/en-us/microsoft-teams/log-in"
    },
    {
        title: "Informatica Actief",
        description: "De theorie van informatica, ideaal om te leren voor toetsen en praktische opdrachten!",
        image: "https://informatica.lvo-weert.nl/afbeeldingen/IA_logo.png",
        link: "https://moodle.informatica-actief.nl/login/index.php"
    }
]


export default function Homepage() {
    return (
        <div>
            <Box
                position="fixed"
                top="0"
                left="2.5%"
                width="95%"
                height="100%"
                zIndex={-10}
            >
                <Image
                    src="https://lvo-weert.nl/_theme/lvo/images/frontend/lvo-logo.svg"
                    width="100%"
                    height="100%"
                    filter="blur(10px)"
                    draggable={false}
                />
            </Box>



            <Box
                marginX="10%"
                marginTop="8%"
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                textAlign="center"
            >
                <Heading marginBottom="4rem">Informatica - PvH</Heading>



                <SimpleGrid
                    spacing="40px"
                    columns={[1, null, null, 3]}
                    marginBottom="8%"
                >
                    {
                        BoxItems.map((item, index) => (
                            <RedirectionBox
                                key={index}
                                title={item.title}
                                description={item.description}
                                image={item.image}
                                link={item.link}
                            />
                        ))
                    }
                </SimpleGrid>
            </Box>
        </div>
    )
}