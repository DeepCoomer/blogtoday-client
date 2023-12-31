import { Box } from '@mui/system'
import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/styles'
import { categories } from '../utils/data'
import { Grid, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import Post from '../posts/Post'
import { recentPosts } from '../../Services/api'
import { useViewportSize } from '@mantine/hooks'

const Categories = () => {

    const { width } = useViewportSize();

    const useStyles = makeStyles({
        root: {
            display: 'inline-block',
            position: 'relative',
            top: width>768 ? 60: "3vh",
            left: width>768? 7 : "-8vw"
        },
        grid: {
            display: 'inline-block',
            position: 'relative',
            padding: 14,
        },
        category: {
            backgroundColor: '#f2f2f2',
            borderRadius: 5,
            border: '1 solid #f2f2f2',
            padding: 5,
            textDecoration: 'none',
            color: 'inherit',
            marginTop: 12,
            marginLeft: 40
        },
        heading: {
            display: 'inline-block',
            position: 'relative',
            left: width > 768 ? 54: "12vw",
            top: width> 768? 15: "0.5vh",
            borderBottom: '2px solid grey',
            width: 354
        },
        post: {
            display: 'inline-block',
            position: 'relative',
            maxWidth: width > 768 ? "90vw": "100vw",
            left: width > 768 ? 43: "7vw"
        },
        link: {
            textDecoration: 'none',
            color: 'inherit'
        }
    })

    const classes = useStyles();

    // let recentposts = [1, 2]

    const [posts, setposts] = useState([])

    const fetchData = async () => {
        let data = await recentPosts();
        setposts(data);
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <>
            {width > 768 ?
             <Box className={classes.root}>
                {
                    categories.map((category, i) => {
                        return (
                            <Grid className={classes.grid} key={i} item lg={8} sm={12} xs={12}>
                                <Link to={`/posts/category/${category}`} className={classes.category} >{category}</Link><br />
                            </Grid>
                        )
                    })
                }
                {/* <Typography variant="h4" className={classes.heading}>RECENT POSTS</Typography><br /><br />
                {
                    posts.map((post) => {
                        let description = post.description;
                        let title = post.title;
                        let titledata
                        let data
                        if (description.length > 100) {
                            data = description.slice(0, 100)
                        }
                        else {
                            data = description
                        }
                        if (title.length > 20) {
                            titledata = title.slice(0, 20)
                        }
                        else {
                            titledata = title;
                        }
                        return (
                            <Box key={post._id} className={classes.post}>
                                <Link to={`/postdetail/${post._id}`} className={classes.link} >
                                    <Post key={post._id} post={post} title={titledata} description={data} picture={post.picture ? post.picture : "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg"} categories={post.categories} author={post.author} createdAt={post.createdAt} />
                                </Link>
                            </Box>
                        )
                    })
                } */}
            </Box>: 
            <>
             <Box className={classes.root}>
                {
                    categories.map((category, i) => {
                        return (
                            <Grid className={classes.grid} key={i} item lg={8} sm={12} xs={12}>
                                <Link to={`/posts/category/${category}`} className={classes.category} >{category}</Link><br />
                            </Grid>
                        )
                    })
                }
                {/* <Typography variant="h4" className={classes.heading}>RECENT POSTS</Typography><br /><br />
                {
                    posts.map((post) => {
                        let description = post.description;
                        let title = post.title;
                        let titledata
                        let data
                        if (description.length > 100) {
                            data = description.slice(0, 100)
                        }
                        else {
                            data = description
                        }
                        if (title.length > 20) {
                            titledata = title.slice(0, 20)
                        }
                        else {
                            titledata = title;
                        }
                        return (
                            <Box key={post._id} className={classes.post}>
                                <Link to={`/postdetail/${post._id}`} className={classes.link} >
                                    <Post key={post._id} post={post} title={titledata} description={data} picture={post.picture ? post.picture : "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg"} categories={post.categories} author={post.author} createdAt={post.createdAt} />
                                </Link>
                            </Box>
                        )
                    })
                } */}
            </Box>
            </>}
        </>
    )
}

export default Categories
