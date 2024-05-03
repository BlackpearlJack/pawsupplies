import React from 'react';
import { TextField, Button, Select, MenuItem, FormControl, InputLabel, FormHelperText } from '@mui/material';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import images from '../../data/images';

const AddProduct = () => {
    const initialValues = {
        name: '',
        image: '',
        category: 'Cat',
        description: '',
        new_price: '',
        old_price: '',
    };

    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Product Title is required'),
        image: Yup.mixed().required('Image is required'),
        category: Yup.string().required('Product Category is required'),
        description: Yup.string().required('Product Description is required'),
        new_price: Yup.number().required('Offer Price is required'),
        old_price: Yup.number().required('Price is required'),
    });

    const handleSubmit = async (values, actions) => {
        console.log(values);
        // Handle form submission

        let responseData;
        let product = values;

        let formData = new FormData();
        formData.append('product', values.image);

        await fetch('http://localhost:4000/upload', {
            method: 'POST',
            headers: {
              Accept: 'application/json',
            },
            body: formData,
        }).then((resp) => resp.json()).then((data) => {responseData = data});

        if (responseData.success) {
            product.image = responseData.image_url;
            await fetch('http://localhost:4000/addproduct', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(product),
            }).then((resp) => resp.json()).then((data) => {
                data.success?alert('Product added successfully'): alert('Failed to add product');
            });
        }
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {({ values, errors, touched, handleChange, setFieldValue }) => (
                <Form className='add-product'>
                    <Field
                        as={TextField}
                        name="name"
                        label="Product Title"
                        fullWidth
                        margin="normal"
                        helperText={touched.name && errors.name}
                        error={touched.name && Boolean(errors.name)}
                    />
                    <FormControl fullWidth margin="normal" error={touched.category && Boolean(errors.category)}>
                        <InputLabel id="category-label">Product Category</InputLabel>
                        <Field
                            as={Select}
                            name="category"
                            labelId="category-label"
                            value={values.category}
                            onChange={handleChange}
                        >
                            <MenuItem value="Cat">Cat</MenuItem>
                            <MenuItem value="Dog">Dog</MenuItem>
                        </Field>
                        <FormHelperText>{touched.category && errors.category}</FormHelperText>
                    </FormControl>
                    <Field
                        as={TextField}
                        name="description"
                        label="Product Description"
                        fullWidth
                        multiline
                        rows={4}
                        margin="normal"
                        helperText={touched.description && errors.description}
                        error={touched.description && Boolean(errors.description)}
                    />
                    <div style={{ display: 'flex', gap: '40px' }}>
                        <Field
                            as={TextField}
                            name="old_price"
                            label="Price"
                            type="number"
                            fullWidth
                            margin="normal"
                            helperText={touched.old_price && errors.old_price}
                            error={touched.old_price && Boolean(errors.old_price)}
                        />
                        <Field
                            as={TextField}
                            name="new_price"
                            label="Offer Price"
                            type="number"
                            fullWidth
                            margin="normal"
                            helperText={touched.new_price && errors.new_price}
                            error={touched.new_price && Boolean(errors.new_price)}
                        />
                    </div>
                    <div className="addproduct-itemfield">
                        <label htmlFor="file-input">
                            <img src={values.image ? URL.createObjectURL(values.image) : images.upload_area} style={{ height: '120px', width: '120px', borderRadius: '10px', objectFit: 'contain', margin: '10px 0px' }} alt="" />
                        </label>
                        <input
                            id="file-input"
                            name="image"
                            type="file"
                            onChange={(event) => {
                                setFieldValue("image", event.currentTarget.files[0]);
                            }}
                            hidden
                        />
                        {touched.image && errors.image && <div className="error">{errors.image}</div>}
                    </div>
                    <Button type="submit" variant="contained" color="secondary" style={{ marginTop: '20px', width: '160px', height: '50px', borderRadius: '6px' }}>
                        ADD
                    </Button>
                </Form>
            )}
        </Formik>
    );
};

export default AddProduct;
