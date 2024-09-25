import React from 'react'
import { Box } from '@mui/material'
import BodyParts from './BodyParts'
import { ScrollMenu } from 'react-horizontal-scrolling-menu'


const HorizontalScrollbar = ({ data, bodyPart, setbodyPart }) => {
    return (
        <ScrollMenu>
            {
                data.map((item) => (
                    <Box
                        key={item.id || item}

                        itemID={item.id || item}
                        title={item.id || item}
                        m='0 40px'
                    >
                        <BodyParts
                            item={item}
                            bodyPart={bodyPart}
                            setbodyPart={setbodyPart}
                        >


                        </BodyParts>

                    </Box>
                ))



            }
        </ScrollMenu>
    )
}

export default HorizontalScrollbar