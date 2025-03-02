"use client"
import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton   from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import  { Blog } from '@/types/types';
import {Camera, Delete, Edit,} from "@mui/icons-material";



export default function BlogCardAdmin({blog}:{blog: Blog}) {
  return (
      <>
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        /*avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="blog">
            {blog?.user?.name.charAt(0).toUpperCase() || 'B'}
          </Avatar>
        }*/
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={blog.title}
        subheader={ new Date(blog.createdAt).toString()}

      />
      <CardMedia
          className={'max-h-44'}
        component="img"
        height="50"
        image={blog.imageUrl}
        alt="Blog"
      />
      <CardContent>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {blog.body}
        </Typography>
      </CardContent>
      <CardActions >
        <IconButton sx={{  color:'red', paddingRight:'10',  borderRadius:'0',boxShadow:'10px', '&:hover': { textTransform:'capitalize' } }} aria-label="View" title={'View'}>
          <Camera color={'success'}></Camera>
          <label>View</label>
        </IconButton>
        <IconButton  aria-label="Edit" title={'Update'} >
          <Edit color={'info'}  />
          <label>Edit</label>

        </IconButton>

        <IconButton   aria-label="delete">
          <Delete color={'warning'}  />
          <label>Delete</label>

        </IconButton>
      </CardActions>
    </Card>
      </>
  );
}