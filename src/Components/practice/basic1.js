import React, { useState } from 'react'
import { Button, TextField } from '@material-ui/core'

const Basic1 = (context) => {

    const [product, setProducts] = useState({ name: '', price: '' });

    return (
        <div>
            <form>
                <TextField id="standard-basic" label="name" value={product.name}
                    onChange={evt => setProducts({ ...product, name: evt.target.value })} />
                <TextField id="standard-basic" label="price" value={product.price}
                    onChange={evt => setProducts({ ...product, price: evt.target.value })} />

            </form>
            <p>{product.name}</p>
            <p>{product.price}</p>
        </div>
    )
}

export default Basic1
