import { Card, CardContent, CardMedia, Typography, Chip, Button, Box } from "@mui/material";
import { GitHub, OpenInNew } from "@mui/icons-material";
import { notFound } from "next/navigation";
import {getAProject} from "@/app/actions/ProjectActions";
import Image from "next/image";

interface ProjectViewProps {
    params: { projectId: string };
}

export default async function ProjectView({ params }: ProjectViewProps) {
    const projectId = await params.projectId;
    const response = await getAProject(projectId);
    // @ts-expect-error thats how the server sends data
    const project = response?.data;

    if (!project) {
        return notFound(); // Show 404 if project not found
    }

    return (
        <Box maxWidth={800} mx="auto" my={5}>
            <Card>
                {project.imageUrl && (
                    <Image style={{margin:'auto'}} src={project.imageUrl} alt={project.title} width={100} height={100}/>
                )}

                <CardContent>
                    <Typography variant="h4" fontWeight="bold">
                        {project.name}
                    </Typography>

                    <Box mt={1} display="flex" gap={1} flexWrap="wrap">
                        {project.tags?.map((tag: string, idx: number) => (
                            <Chip key={idx} label={tag} color="primary" variant="outlined" />
                        ))}
                    </Box>

                    <Typography variant="body1" mt={2}>
                        {project.description}
                    </Typography>

                    <Box mt={2}>
                        <Typography variant="subtitle1" fontWeight="bold">
                            Status:
                        </Typography>
                        <Chip
                            label={project.status}
                            color={
                                project.status === "Completed"
                                    ? "success"
                                    : project.status === "Maintenance"
                                        ? "warning"
                                        : "info"
                            }
                        />
                    </Box>

                    <Box mt={3}>
                        <Typography variant="h6">Technologies Used</Typography>
                        <Box mt={1} display="flex" flexWrap="wrap" gap={1}>
                            {project.technologies.map((tech: string, idx: number) => (
                                <Chip key={idx} label={tech} variant="outlined" />
                            ))}
                        </Box>
                    </Box>

                    {project.features && project.features.length > 0 && (
                        <Box mt={3}>
                            <Typography variant="h6">Features</Typography>
                            <ul>
                                {project.features.map((feature: string, idx: number) => (
                                    <li key={idx}>
                                        <Typography variant="body2">{feature}</Typography>
                                    </li>
                                ))}
                            </ul>
                        </Box>
                    )}

                    {project.contributors && project.contributors.length > 0 && (
                        <Box mt={3}>
                            <Typography variant="h6">Contributors</Typography>
                            <ul>
                                {project.contributors.map((contributor: string, idx: number) => (
                                    <li key={idx}>
                                        <Typography variant="body2">{contributor}</Typography>
                                    </li>
                                ))}
                            </ul>
                        </Box>
                    )}

                    <Box mt={4} display="flex" gap={2}>
                        <Button
                            variant="contained"
                            color="primary"
                            href={project.repositoryUrl}
                            target="_blank"
                            startIcon={<GitHub />}
                        >
                            View Code
                        </Button>

                        {project.liveUrl && (
                            <Button
                                variant="outlined"
                                color="primary"
                                href={project.liveUrl}
                                target="_blank"
                                startIcon={<OpenInNew />}
                            >
                                Live Demo
                            </Button>
                        )}
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );
}
