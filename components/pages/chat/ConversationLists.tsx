import Badge from "@/components/badge"
import SearchBar from "@/components/searchBar"
import styled from "@emotion/styled"
import { Avatar, Card, Typography } from "@mui/material"
import { blue } from "@mui/material/colors"
import { Box } from "@mui/system"
import { Fragment, useCallback } from "react"

const ConservationCard = styled('div')((props: any) => ({
    border: `1px solid ${blue[500]}`,
    borderRadius: '10px',
    padding: "10px",
    display: 'flex',
    justifyContent: 'space-between',
    cursor: 'pointer',
}))

const messages = ({ conversations, chatConversation }: any) => {
    const handleSearchUser = useCallback((e: any) => {

    }, [])

    return (
        <Card sx={{ padding: '15px' }}>
            <Box sx={{ display: 'flex', justifyContent: 'between', alignItems: 'center' }}>
                <Typography variant='h5' component='h5' sx={{ flex: 1 }}>
                    Messages
                </Typography>
                <SearchBar placeholder='Search User' onKeyDown={handleSearchUser} />
            </Box>
            <Box sx={{ mt:2 }}>
                {conversations?.map((conversation: any) => {
                    return <Fragment key={conversation._id}>
                        <Box onClick={chatConversation} id={conversation._id}>
                            <ConservationCard sx={{ mt: 2 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <Avatar
                                        sx={{ bgcolor: blue[500], cursor: 'pointer', }}
                                    >
                                    </Avatar>
                                    <Typography component="span" sx={{ mx: 2 }}>
                                        {conversation.friend.name}
                                    </Typography>
                                    <Typography sx={{ fontSize: '0.7rem' }}>
                                        {conversation.message.content.body.length > 20 ?
                                            conversation.message.content.body.substr(0, 15) + '.....' :
                                            conversation.message.content.body
                                        }
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography component='span' sx={{ fontSize: '0.7rem', mx: 2 }}>
                                        2min ago
                                    </Typography>
                                    <Badge>5</Badge>
                                </Box>
                            </ConservationCard>
                        </Box>
                    </Fragment>
                }
                )}
            </Box>
        </Card>
    )
}

export default messages