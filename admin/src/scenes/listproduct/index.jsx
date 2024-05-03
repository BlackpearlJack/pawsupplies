import {Box, Typography, useTheme} from "@mui/material";
import { DataGrid} from "@mui/x-data-grid";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import Header from "../../components/Header";
import {useEffect, useState} from "react";
import {tokens} from "../../theme.js";

const ListProduct = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [allproducts, setAllProducts] = useState([]);

    const columns = [
        { field: 'id', headerName: 'ID'},
        { field: 'name', headerName: 'Name', flex: 1},
        { field: 'category', headerName: 'Category', flex: 1},
        { field: 'old_price', headerName: 'Price', flex: 1},
        { field: 'new_price', headerName: 'New_Price', flex: 1},
        { field: 'description', headerName: 'Description', flex: 1},
        {
            field: 'image',
            headerName: 'Image',
            flex: 1,
            renderCell: (params) => (
                <img src={params.value} alt="Product" style={{width: '50px', height: '50px'}}/>
            ),
        },
        { field: 'remove', headerName: 'Remove', flex: 1, renderCell: ({row}) => {
            return (
                <DeleteOutlineOutlinedIcon
                    style={{cursor: 'pointer', color: colors.redAccent[500]}}
                    onClick={() => remove_product(row.id)}
                />
            )
        }}
    ];

    const fetchInfo = async () => {
        await fetch('http://localhost:4000/allproducts')
            .then((res) => res.json())
            .then((data) => {setAllProducts(data)});
    }

    useEffect(() => {
        fetchInfo().then(r => console.log('done'));

    },[]);

    const remove_product = async (id) => {
        await fetch('http://localhost:4000/removeproduct', {
            method: 'POST',
            headers: {
                Accept : 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: id
            })
        })
        await fetchInfo();

    }

    return (
        <Box m="20px">
            <Header title="Team" subtitle="Manage your team" />
            <Box
                m="40px 0 0"
                height = "75vh"
                sx={{
                    "& .MuiDataGrid-root": {
                        border: "none",
                    },
                    "& .MuiDataGrid-cell": {
                        borderBottom: "none",
                    },
                    "& .name-column--cell": {
                        color: colors.greenAccent[300],
                    },
                    "& .MuiDataGrid-columnHeader": {
                        backgroundColor: colors.blueAccent[700],
                        borderBottom: "none",
                    },
                    "& .MuiDataGrid-virtualScroller": {
                        backgroundColor: colors.primary[400],
                    },
                    "& .MuiDataGrid-footerContainer": {
                        borderTop: "none",
                        backgroundColor: colors.blueAccent[700],
                    },
                    "& .MuiCheckbox-root": {
                        color: `${colors.greenAccent[200]} !important`,
                    },
                }}
            >
                <DataGrid rows={allproducts} columns={columns} />
            </Box>
        </Box>
    )
}
export default ListProduct
