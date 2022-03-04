import { Box } from '@mui/material';

interface ItemListProps<T> {
    items: T[],
    renderItem: (item: T) => React.ReactNode,
}

function ItemList<T>(props: ItemListProps<T>) {
    return (
        <Box>
            {props.items.map(props.renderItem)}
        </Box>
    );
};

export default ItemList

