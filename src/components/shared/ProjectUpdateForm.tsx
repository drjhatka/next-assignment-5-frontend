"use client"
import { updateProject} from "@/app/actions/ProjectActions";
import {Button, Input} from "@mui/material";
import MultipleSelectChip from "@/components/shared/Form/MultiSelect";
import {FormEvent, startTransition, useActionState} from "react";
import {toast, ToastContainer} from "react-toastify";
//import {redirect} from "next/navigation";
import {useFormStatus} from "react-dom";
import Project from "@/types/types";
import {redirect} from "next/navigation";

const techStack = [
    'Next JS',
    'React',
    'TypeScript',
    'MongoDB',
    'Express',
    'Prisma',
    'AWS Cloud',
    'Redux',
    'Javascript',
];
const platform :string[]=['android','web','macos'];
const features: string[] = [
    'Stripe Integration',
    'Order Management',
    'Shipping Tracking',
    'Cart Management',
    'App Optimization',
];
const contributors :string[]=[
    'user1',
    'user2',
    'user3',
    'user4',
    'user5',
    'user6',



];

const ProjectUpdateForm = ({project}:{project:Project}) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [state, action] = useActionState(updateProject, undefined);
    const  {pending}= useFormStatus()

    const handleSubmit = async(e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget)
        startTransition(() => {
            action(formData)
        })
        toast.success("Project Updated Successfully");
        setTimeout(()=>{redirect('/dashboard/projects')}, 3000);
    }

    return (
        <div>
            <>
                <ToastContainer autoClose={2000} />
                <div>
                    <form onSubmit={handleSubmit} >
                        <div className="form-group grid lg:grid-cols-2 gap-y-4 ">
                            <div className="mb-4 px-5 py-3 border-r-2 rounded-2xl border-b-2 border-orange-800">
                                <label htmlFor="name">Project Name</label>
                                <Input key={'name'} fullWidth required={true} defaultValue={project?.name}  name={'name'}></Input>
                            </div>

                            <div className={'mb-4 px-5 py-3 border-r-2 rounded-2xl border-b-2 border-orange-800'}>
                                <label htmlFor="description">Project Description</label>
                                <Input key={'description'} required={true} defaultValue={project?.description}  fullWidth name={'description'}></Input>
                            </div>

                            <div className={'mb-4 px-5 py-3 border-r-2 rounded-2xl border-b-2 border-orange-800'}>
                                <MultipleSelectChip selected={project?.technologies} name={'technologies'} values={techStack} id={'technologies'}
                                                    label={'Select Technology Stack'}></MultipleSelectChip>

                            </div>

                            <div className='mb-4 px-5 py-3 border-r-2 rounded-2xl border-b-2 border-orange-800'>
                                <label htmlFor="repositoryUrl">Git URL</label>
                                <Input key={'repositoryUrl'}  defaultValue={project?.repositoryUrl} fullWidth name={'repositoryUrl'}></Input>
                            </div>

                            <div className=' mb-4 px-5 py-3 border-r-2 rounded-2xl border-b-2 border-orange-800'>
                                <label htmlFor="liveUrl">Live Server URL</label>
                                <Input key={'liveUrl'} required={true} defaultValue={project?.liveUrl} fullWidth name={'liveUrl'}></Input>
                            </div>
                            <div className='mb-4 px-5 py-3 border-r-2 rounded-2xl border-b-2 border-orange-800'>
                                <label htmlFor="imageUrl">Project Logo URL</label>
                                <Input key={'imageUrl'} defaultValue={project?.imageUrl} fullWidth name={'imageUrl'}></Input>
                            </div>

                        </div>
                        <div className={'grid lg:grid-cols-3 gap-y-4 '}>
                            <div className='mb-4 mx-2  border-r-2 rounded-2xl border-b-2 border-orange-800'>
                                <label htmlFor="category">Platform</label>
                                <MultipleSelectChip  name={'category'} values={platform} label={'Select Platform'}  id={'category'} selected={project?.category}></MultipleSelectChip>

                            </div>
                            <div className='mb-4 mx-2  border-r-2 rounded-2xl border-b-2 border-orange-800'>
                                <label htmlFor="features">Features</label>
                                <MultipleSelectChip name={'features'}  selected={project?.features} values={features} label={'Select Features'} id={'features'}></MultipleSelectChip>
                            </div>
                            <div className={'mb-4   border-r-2 rounded-2xl border-b-2 border-orange-800'}>
                                <MultipleSelectChip name={'contributors'} selected={contributors}  values={contributors} label={'Select Contributors'}  id={'contributor'}></MultipleSelectChip>
                            </div>
                        </div>
                        <div className={'hidden'}>
                            <div className=' mb-4 px-5 py-3 border-r-2 rounded-2xl border-b-2 border-orange-800'>
                                <label htmlFor="projectId">ID</label>
                                <Input key={'projectId'} required={true} defaultValue={project?._id} fullWidth name={'projectId'}></Input>
                            </div>
                        </div>
                        <div >
                            <Button type={'submit'} size={'large'} variant={'contained'} fullWidth color={'info'} >{pending ? "Creating Project....":"Update Project"}</Button>
                        </div>
                    </form>
                </div>

            </>

        </div>
    );
};

export default ProjectUpdateForm;
