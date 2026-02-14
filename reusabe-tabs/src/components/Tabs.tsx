const Tabs = ({ children, setActiveTab }) => {
    console.log(children);

    return (
        <>
            <div className="tabs-container">
                {children.map(child =>
                    <>
                        <div onClick={() => setActiveTab(child.props.title)} className={`tab ${child.props.active ? "tab-active" : ""}`}>
                            {child.props.title}
                        </div>
                    </>
                )}


            </div>
            {children.map(child =>
                <>
                    {child.props.active && <div className="tab-body">
                        {child.props.children}
                    </div>}
                </>
            )}
        </>

    )
}

export default Tabs