"use client"
import PageHeader from "@/components/shared/PageHeader";
import {projectActions} from "@/app/actions/ProjectActions";
import {Button, Input} from "@mui/material";
import MultipleSelectChip from "@/components/shared/Form/MultiSelect";
import {startTransition, useActionState} from "react";
import {toast, ToastContainer} from "react-toastify";
import {redirect} from "next/navigation";
import {useFormStatus} from "react-dom";

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

const CreateProjectPage = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [ state,action] = useActionState(projectActions, {});
    const  {pending}= useFormStatus()
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget)
        startTransition(() => {
            action(formData)
        })
            toast.success("Project Created");
            setTimeout(()=>{redirect('/dashboard/projects')}, 3000);
    }
    return (
        <>
            <ToastContainer autoClose={2000} />
            <PageHeader title={'Create New Project'}/>

            <div>
                <form onSubmit={handleSubmit} >
                    <div className="form-group grid lg:grid-cols-2 gap-y-4 ">
                        <div className="mb-4 px-5 py-3 border-r-2 rounded-2xl border-b-2 border-orange-800">
                            <label htmlFor="name">Project Name</label>
                            <Input key={'name'} fullWidth required={true}  name={'name'}></Input>
                        </div>

                        <div className={'mb-4 px-5 py-3 border-r-2 rounded-2xl border-b-2 border-orange-800'}>
                            <label htmlFor="description">Project Description</label>
                            <Input key={'description'} required={true} fullWidth name={'description'}></Input>
                        </div>

                        <div className={'mb-4 px-5 py-3 border-r-2 rounded-2xl border-b-2 border-orange-800'}>
                            <MultipleSelectChip name={'technologies'} values={techStack} id={'technologies'}
                                                label={'Select Technology Stack'}></MultipleSelectChip>

                        </div>

                        <div className='mb-4 px-5 py-3 border-r-2 rounded-2xl border-b-2 border-orange-800'>
                            <label htmlFor="repositoryUrl">Git URL</label>
                            <Input key={'repositoryUrl'} fullWidth name={'repositoryUrl'}></Input>
                        </div>

                        <div className=' mb-4 px-5 py-3 border-r-2 rounded-2xl border-b-2 border-orange-800'>
                            <label htmlFor="liveUrl">Live Server URL</label>
                            <Input key={'liveUrl'} required={true} fullWidth name={'liveUrl'}></Input>
                        </div>
                        <div className='mb-4 px-5 py-3 border-r-2 rounded-2xl border-b-2 border-orange-800'>
                            <label htmlFor="imageUrl">Project Logo URL</label>
                            <Input key={'imageUrl'} fullWidth name={'imageUrl'}></Input>
                        </div>

                    </div>
                    <div className={'grid lg:grid-cols-3 gap-y-4 '}>
                        <div className='mb-4 mx-2  border-r-2 rounded-2xl border-b-2 border-orange-800'>
                            <label htmlFor="category">Platform</label>
                            <MultipleSelectChip name={'category'} values={platform} label={'Select Platform'}  id={'category'}></MultipleSelectChip>

                        </div>
                        <div className='mb-4 mx-2  border-r-2 rounded-2xl border-b-2 border-orange-800'>
                            <label htmlFor="features">Features</label>
                            <MultipleSelectChip name={'features'}  values={features} label={'Select Features'} id={'features'}></MultipleSelectChip>
                        </div>
                        <div className={'mb-4   border-r-2 rounded-2xl border-b-2 border-orange-800'}>
                            <MultipleSelectChip name={'contributors'}  values={features} label={'Select Contributors'}  id={'contributor'}></MultipleSelectChip>
                        </div>
                    </div>
                    <div >
                        <Button type={'submit'} size={'large'} variant={'contained'} fullWidth color={'info'} >{pending ? "Creating Project....":"Create Project"}</Button>
                    </div>
                </form>
            </div>

        </>

    );
};

export default CreateProjectPage;