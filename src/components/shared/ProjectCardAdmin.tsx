"use client";

import { Card, CardContent, CardMedia, Typography, Button, Chip, Box, Stack } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import { FC } from "react";
import Image from "next/image";
import Project  from "@/types/types";
import { motion } from 'motion/react';

const ProjectCard: FC<{ project: Project }> = ({ project }) => {
  // const myAnimation = {
  //   hover: { borderColor: 'transparent', scale: 1.1 },
  //   tap: { borderColor: 'transparent', scale: 0.95 },
  //   focus: { borderColor: 'white', 
  //            scale: 1.1, 
  //            transition: { duration: 0.15 } 
  //          },
  //  };
  return (
    <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    exit={{opacity:0}}
    >
    <Card sx={{  borderRadius: 3, boxShadow: 3, p: 2 }}>
      {/* Project Image */}
      {project.imageUrl && (
        <CardMedia>
          <Image
            src={project.imageUrl}
            alt={project.name}
            width={150}
            height={150}
            style={{ objectFit: "cover", margin:'auto', borderRadius: "12px" }}
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

        {/* Project Description */}
        <Typography variant="body2" sx={{ mb: 1.5 }}>
          {project.description}
        </Typography>

        {/* Technology Chips */}
        <Stack direction="row" spacing={1} sx={{ flexWrap: "wrap", mb: 2 }}>
          {project.technologies.map((tech:string, index:number) => (
            <Chip key={index} label={tech} variant="outlined" size="small" />
          ))}
        </Stack>

        {/* Features List (if available) */}
        {project.features && project.features.length > 0 && (
          <Typography variant="body2" sx={{ mb: 1 }}>
            <strong>Key Features:</strong> {project.features.join(", ")}
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
          <Button
            variant="contained"
            size="small"
            startIcon={<GitHubIcon />}
            href={project.repositoryUrl}
            target="_blank"
          >
            GitHub
          </Button>
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

export default ProjectCard;
