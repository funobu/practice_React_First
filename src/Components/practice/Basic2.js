import React, { useState } from 'react'
import { Container, Divider, Button, List, ListItem, ListItemText, makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
}));

const Basic2 = () => {

    const classes = useStyles();

    const [products, setProducts] = useState([])

    const newProducts = () => {
        setProducts([...products, {
            id: products.length,
            name: "Hello React"
        }])
    }
    return (
        <div>
            <Container maxWidth="sm">
                <Button variant="contained" onClick={newProducts} >a</Button>
                <List className={classes.root}>
                    {products.map(product => (
                        <div>
                            <ListItem>
                                <ListItemText key={product.id} primary={product.name} secondary={product.id} />
                            </ListItem>
                            <Divider />
                        </div>

                    ))}

                </List>

            </Container>
        </div >
    )
}

export default Basic2
