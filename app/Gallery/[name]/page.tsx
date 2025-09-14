type Props = {
    params: Promise<{
        name?: string
    }>
}
const GalleryPage = async (props: Props) => {
    const name = (await props.params)?.name || `unknown`
    return (
        <div className=" h-screen bg-cyan-600">
            <div className="justify-center items-center text-9xl text-shadow-teal-400 font-serif font-bold">
                gua {name}
            </div>
        </div>
    )
}
export default GalleryPage