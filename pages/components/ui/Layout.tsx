import MainNavigation from "./MainNavigation";


const Layout : React.FC<{children: React.ReactNode}> = (props) => {
    return (
        <>
            <MainNavigation />
            {props.children}
        </>
    )
}

export default Layout;