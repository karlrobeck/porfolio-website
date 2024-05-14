interface Blog {
    name: string,
    markdownLink: string
    summary: string,
    date: string
}

interface Project {
    title: string
    description: string
    status: string
    repository: string
    link: string
    markdownLink: string
}

interface Manifest {
    blogs: Blog[]
    projects: Project[]
}