import React from "react";
import Grid from "@material-ui/core/Grid";

import Product from "./Product/Product";
import useStyles from './styles';

// const products = [
//     { id: 1, name: 'Shoes', description: 'Running shoes.', price: '$10', image: 'https://product.hstatic.net/1000003969/product/xanh-bac-ha_tt05005_1_385e8278277743ebbde316c3ea143b73_master.jpg' },
//     { id: 2, name: 'Macbook', description: 'Apple macbook.', price: '$990', image: 'https://www.hnmac.vn/media/data/DSC6580-compressed.jpg' },
// ];

const Products = ({ products, onAddToCart }) => {
    const classes = useStyles();

    return (
        <main className={classes.content}>
            <div className={classes.toolbar} />
            <Grid container justify="center" spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} onAddToCart={onAddToCart} />
                    </Grid>
                ))}

            </Grid>
        </main>
    );
}

export default Products