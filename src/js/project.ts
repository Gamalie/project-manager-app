export interface IProject {
    id?: number
    title: string
    assignedUser?: number
    status: ('Not Started' | 'In Progress' | 'Completed')
    assignedDate?:string
    completedDate?:string
    dueDate?: string
}



// export default IProject
export class Project {
    // url = http://localhost:3000/projects
    static async addProject(project:IProject) {
        //fetch method POST
        // url
        await fetch("http://localhost:3000/projects", {
            method: "POST",
            body: JSON.stringify(project),
            headers: {
                "Content-Type": 'application/json'
            }
        }
        )
    }
        static async getProject(id:number){
            //fetches project with the id 
            //fetch method GET
            // url/id 
            const response =await fetch(`http://localhost:3000/projects/${id}`)
            const project = await response.json()
            return project

        }
        static async getProjects(){
            //fetches all project 
            //fetch method GET
            // url
            const response = await fetch("http://localhost:3000/projects")
            const allProjects = await response.json()
            return allProjects

        }
        static async getUserProjects(userId:number){
            //fetch method GET 
            // url?userid=userid
            const response = await fetch(`http://localhost:3000/projects?assignedUser=${userId}`)
            const userprojects = await response.json()
            return  userprojects

        }
        static async deleteProject(id:number){
            //fetch method DELETE
            // url/id
            await fetch(`http://localhost:3000/projects/${id}`,{
                method:"DELETE",
                
            })
        

        }
        static async updateProject(id:number, project:Partial<IProject>){
            //fetch method PATCH
            //url/id
             await fetch(`http://localhost:3000/projects/${id}`,{
                method:"PATCH",
                body: JSON.stringify(project),
                    headers: {
                        "Content-Type": 'application/json'
                    }
                }

            )
            


        }



}


