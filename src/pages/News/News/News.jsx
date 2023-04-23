import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap'
import { FaArrowLeft } from 'react-icons/fa'
import EditorsInsites from '../EditorsInsites/EditorsInsites';
const News = () => {
    const news = useLoaderData();
    const { _id, title, details, image_url, category_id } = news;

    return (
        <div>
            <Card>
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>
                    <Link to={`/category/${category_id}`}>
                        <Button variant="danger">
                            <FaArrowLeft />
                            All News</Button> </Link>

                </Card.Body>
            </Card>
            <EditorsInsites></EditorsInsites>
        </div>
    );
};

export default News;