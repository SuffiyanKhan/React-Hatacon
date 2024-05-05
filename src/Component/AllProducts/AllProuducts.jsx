import React, { useEffect, useState } from 'react';
import { AllProducts } from '../../Services/allProducts';
import { SearchBar } from '../../Services/search';
import { useGlobalState } from '../../Context/Context';
import ProductList from '../ProductList/ProductList';
import SearchProductList from '../SearchProductList/SearchProductList';

function RenderAllProducts() {
    const { serachInput, setSearchProductData } = useGlobalState();
    const [products, setProducts] = useState([]);
    const [searchedProducts, setSearchedProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const fetchedProducts = await AllProducts();
                if (fetchedProducts) {
                    setProducts(fetchedProducts.products);
                }
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    useEffect(() => {
        const fetchSearchResults = async () => {
            try {
                const searchProduct = await SearchBar(serachInput);
                if (searchProduct) {
                    setSearchProductData(searchProduct);
                    setSearchedProducts(searchProduct.products);
                }
            } catch (error) {
                console.error('Error fetching search results:', error);
            }
        };

        if (serachInput) {
            fetchSearchResults();
        } else {
            setSearchedProducts([]);
        }
    }, [serachInput, setSearchProductData]);

    return (
        <>
            {serachInput ? (
                <SearchProductList search={searchedProducts} />
            ) : (
                <ProductList product={products} />
            )}
        </>
    );
}

export default RenderAllProducts;
