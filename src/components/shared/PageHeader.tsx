
const PageHeader = ({title}:{title:string}) => {
    return (
        <div>
            <div className={'bg-[#121434] text-white text-center px-4 py-3 mb-4'}>
                <h1>{title}</h1>
            </div>
        </div>
    );
};

export default PageHeader;