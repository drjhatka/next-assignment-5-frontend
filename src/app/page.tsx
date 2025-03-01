import PublicHome from '@/components/home/PublicHome'

const HomePage = async () => {
  const res = await fetch(
    (process.env.NEXT_BACKEND_URL as string) + '/projects'
  )
  const projects = await res.json()

  return (
    <div className='mt-10'>
      <PublicHome projects={projects.data.slice(0, 6)}></PublicHome>
    </div>
  )
}

export default HomePage
