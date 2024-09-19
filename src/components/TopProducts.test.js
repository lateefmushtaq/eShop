import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TopProducts from '../components/TopProducts';
import { ProductContext } from '../context/ProductsProvider';
import { handleClick } from '../utils/helper';

jest.mock('../utils/helper', () => ({
    handleClick: jest.fn(),
}));

const mockProducts = [
    {
        id: 1,
        title: 'Headphone A',
        category: 'Headphones',
        images: ['image1.jpg'],
        ratings: 4.5,
        finalPrice: 100,
    },
    {
        id: 2,
        title: 'Earbud B',
        category: 'Earbuds',
        images: ['image2.jpg'],
        ratings: 4.5,
        finalPrice: 80,
    },
];

const mockContextValue = {
    Products: mockProducts,
    setCartData: jest.fn(),
    setNotify: jest.fn(),
    setMessage: jest.fn(),
    setType: jest.fn(),
    setFavourite: jest.fn(),
    favourite: [],
};

describe('TopProducts Component', () => {
    it('renders Top Products heading', () => {
        render(
            <ProductContext.Provider value={mockContextValue}>
                <TopProducts />
            </ProductContext.Provider>
        );

        expect(screen.getByText('Top Products')).toBeInTheDocument();
    });

    it('renders product categories and highlights active category', () => {
        render(
            <ProductContext.Provider value={mockContextValue}>
                <TopProducts />
            </ProductContext.Provider>
        );

        const headphoneTab = screen.getByText('Headphones');
        const earbudTab = screen.getByText('Earbuds');

        expect(headphoneTab).toBeInTheDocument();
        expect(earbudTab).toBeInTheDocument();
        expect(headphoneTab).toHaveClass('active');
    });

    it('filters products by active category', () => {
        render(
            <ProductContext.Provider value={mockContextValue}>
                <TopProducts />
            </ProductContext.Provider>
        );

        expect(screen.getByText('Headphone A')).toBeInTheDocument();
        expect(screen.queryByText('Earbud B')).not.toBeInTheDocument();
    });

    it('changes active product type when a different tab is clicked', () => {
        render(
            <ProductContext.Provider value={mockContextValue}>
                <TopProducts />
            </ProductContext.Provider>
        );

        const earbudTab = screen.getByText('Earbuds');
        fireEvent.click(earbudTab);

        expect(earbudTab).toHaveClass('active');
        expect(screen.getByText('Earbud B')).toBeInTheDocument();
        expect(screen.queryByText('Headphone A')).not.toBeInTheDocument();
    });

    it('calls handleClick when cart icon is clicked', () => {
        render(
            <ProductContext.Provider value={mockContextValue}>
                <TopProducts />
            </ProductContext.Provider>
        );

        const cartIcon = screen.getByTestId('cart-icon-1'); // Add data-testid="cart-icon-{product.id}" to BiCartAdd in the component
        fireEvent.click(cartIcon);

        expect(handleClick).toHaveBeenCalledWith(
            1,
            mockContextValue.setCartData,
            mockContextValue.setNotify,
            mockContextValue.setMessage,
            mockContextValue.setType,
            mockContextValue.Products
        );
    });

    it('adds product to favorites when heart icon is clicked', () => {
        render(
            <ProductContext.Provider value={mockContextValue}>
                <TopProducts />
            </ProductContext.Provider>
        );

        const heartIcon = screen.getByTestId('heart-icon-1'); // Add data-testid="heart-icon-{product.id}" to FaRegHeart and VscHeartFilled in the component
        fireEvent.click(heartIcon);

        expect(mockContextValue.setFavourite).toHaveBeenCalledWith([
            mockProducts[0],
        ]);
        expect(mockContextValue.setNotify).toHaveBeenCalledWith(true);
        expect(mockContextValue.setMessage).toHaveBeenCalledWith('Added to favourites');
        expect(mockContextValue.setType).toHaveBeenCalledWith('success');
    });

    it('removes product from favorites when heart icon is clicked again', () => {
        const mockContextValueWithFav = {
            ...mockContextValue,
            favourite: [mockProducts[0]],
        };

        render(
            <ProductContext.Provider value={mockContextValueWithFav}>
                <TopProducts />
            </ProductContext.Provider>
        );

        const heartIcon = screen.getByTestId('heart-icon-1');
        fireEvent.click(heartIcon);

        expect(mockContextValueWithFav.setFavourite).toHaveBeenCalledWith([]);
    });
});
