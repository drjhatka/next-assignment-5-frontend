"use client";

import { Card, CardContent, CardMedia, Typography, Button, Chip, Box, Stack } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import { FC } from "react";
import Image from "next/image";
import Project  from "@/types/types";
import { motion } from 'motion/react';
import Link from "next/link";
import {OpenInBrowser} from "@mui/icons-material";
import {BiPencil} from "react-icons/bi";
import {IoTrashBin} from "react-icons/io5";

const ProjectCardAdmin: FC<{ project: Project }> = ({ project }) => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    exit={{opacity:0}}
    >
    <Card sx={{  borderRadius: 3, boxShadow: 3, p: 2 }}>
      {/* Project Image */}

      {project.imageUrl && (
        <CardMedia sx={{height:100}} >

          <Image
            src={project.imageUrl}
            alt={project.name}
            width={100}
            height={100}
            style={{ objectFit:'contain', margin:'auto', maxHeight:'150px', borderRadius: "12px" }}
          />
        </CardMedia>
      )}

      <CardContent>
        {/* Project Name */}
        <Typography variant="h6" fontWeight="bold">
          {project.name}
        </Typography>

        {/* Project Category */}
        <Typography variant="body2" color="text.secondary">
          {project.category}
        </Typography>

        {/* Project Status */}
        <Chip
          label={project.status}
          color={
            project.status === "Completed"
              ? "success"
              : project.status === "In Progress"
              ? "warning"
              : "info"
          }
          size="medium"
          sx={{ mt: 1, mb: 1 }}
        />


        {/* Technology Chips */}
        <Stack direction="row" spacing={1} sx={{ flexWrap: "wrap", mb: 2 }}>
          {project.technologies.slice(0,3).map((tech:string, index:number) => (
            <Chip key={index} label={tech} variant="outlined" size="small" />
          ))}
        </Stack>

        {/* Features List (if available) */}
        {project.features && project.features.length > 0 && (
          <Typography variant="body2" sx={{ mb: 1 }}>
            <strong>Key Features:</strong> {project.features.slice(0,3).join(", ")}
          </Typography>
        )}

        {/* Contributors List (if available) */}
        {project.contributors && project.contributors.length > 0 && (
          <Typography variant="body2" sx={{ mb: 1 }}>
            <strong>Contributors:</strong> {project.contributors.join(", ")}
          </Typography>
        )}

        {/* Action Buttons */}
        <Box display="flex" justifyContent="space-around" paddingTop={2} borderTop={4} color={'red'} boxShadow={2} borderRadius={5} paddingY={2} >
          <Link href={'/dashboard/projects/'+project._id}>
          <Button
            variant="contained"
            size="small"
            startIcon={<OpenInBrowser />}
            href={project.repositoryUrl}
            target="_blank"
          >
            View
          </Button>
          </Link>
          <Link href={'/dashboard/projects/update/'+project._id}>
            <Button
                variant="contained"
                size="small"
                startIcon={<BiPencil />}
                href={project.repositoryUrl}
                target="_blank"
            >
              Edit
            </Button>
          </Link>
          <Link href={'/dashboard/projects/'+project._id}>
            <Button
                variant="contained"
                size="small"
                startIcon={<IoTrashBin />}
                href={project.repositoryUrl}
                target="_blank"
            >
              Delete
            </Button>
          </Link>
          {project.liveUrl && (
            <Button
              variant="outlined"
              size="small"
              color="warning"
              startIcon={<LaunchIcon />}
              href={project.liveUrl}
              target="_blank"
            >
              Live Demo
            </Button>
          )}
        </Box>
      </CardContent>
    </Card>
    </motion.div>
  );
};

export default ProjectCardAdmin;
