type props = {
    searchParams: Promise<{
        name?: string,
        addres?: string
    }>
}

const HomePage = async (props: props) => {
    const name = (await props.searchParams)?.name || `Unknown`
    const addres = (await props.searchParams)?.addres || `Unknown`
    return (
        <div className="h-screen bg-cyan-600">
            <h1 className="font-bold text-6xl justify-center font-mono">
                my name is {name} and gua live tinggal di {addres}
            </h1>
        </div>
    )
}
export default HomePage
