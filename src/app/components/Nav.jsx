 import { Avatar } from "@mui/material";

 const Nav = ({}) => {
    return (
        <>
        <div className="w-full bg-orange-500 shadow h-16 p-2">
            <div className="flex flex-row place-items-center h-full justify-items-stretch">
                <div className="basis-1/4">
                    <img className="w-12" src="https://www.reg.kmitl.ac.th/index/new_index_assets/img/logo/main.png"/>
                </div>
                <div className="flex basis-3/4 flex-row-reverse">
                    <Avatar className="ring-offset-1 ring-offset-transparent ring-2 ring-white" alt="Unsplash img" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>

                </div>
            </div>
        </div>
        </>
    )
}

export default Nav;