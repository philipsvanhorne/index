/* Yurki Montero Montero (2023) */


import { Box, Text, Image } from '@chakra-ui/react';


export const RedirectionBox = ({
    title,
    description,
    image,
    link,
}: {
    title: string;
    description: string;
    image: string;
    link: string;
}) => {
    return (
        <Box>
            <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                textAlign="center"
                width="100%"
                height="100%"
                padding="5"
                borderRadius="10"
                boxShadow="lg"
                transition="all 0.25s"
                _hover={{
                    transform: "scale(1.05)",
                    cursor: "pointer",
                }}
                as="a"
                href={link}
                bg="white"
                target="_blank"
                draggable={false}
            >
                <Box
                    position="relative"
                    width="100%"
                    height="100%"
                    borderRadius="7"
                    overflow="hidden"
                    boxShadow="lg"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    bg={ title === "Informatica Actief" ? "#cff703" : "white" }
                    marginBottom="1rem"
                >
                    <Image
                        src={image}
                        alt={title}
                        draggable={false}
                    />
                </Box>


                <Text fontSize="2xl" fontWeight="bold">{title}</Text>
                <Text fontSize="lg">{description}</Text>
            </Box>
        </Box>
    )
}