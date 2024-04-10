import type {PageLoad } from "./$types";

export const load:PageLoad = async () => {
    return {
        head:{
            title:"Robeck",
            description:"Robeck is a software developer and designer based in Philippines. He is passionate about creating beautiful, functional and user-friendly web applications built in javascript, rust lang, and python.",
        },
        content:{
            projects:[{
                title:"Banana Classroom",
                status:"Ongoing",
                description:"Banana Classroom is a web application that helps teachers to create and manage online quizzes for their students. It is built using sveltekit, tailwindcss, vercel and dynamodb.",
                repository:"https://github.com/MarahuyoDevs/banana-classroom-frontend",
                link:"https://banana-classroom.vercel.app",
            },{
                title:"Pypox",
                status:"Discontinued",
                description:"Pypox is a web application framework in python that helps developers to create web applications using python. It is built using starlette, uvicorn, and python.",
                repository:"https://github.com/MarahuyoDevs/pypox"
            },
                {
                title:"Crab-rs",
                status:"Ongoing",
                description:"A CLI tool that helps developers to automate pipline process in creating web applications using rust lang. It is built using clap-rs.",
                repository:"https://github.com/MarahuyoDevs/crab-rs"
            },
                {
                title:"Bison-ui",
                status:"Planned",
                description:"A frontend UI library that helps developers to create beautiful and user-friendly web applications using sveltekit and tailwindcss. It is built using sveltekit and tailwindcss.",
                repository:"https://github.com/MarahuyoDevs/crab-rs"
            }]
        }
    };
}