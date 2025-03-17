
type SeparatorProps = {
    left:boolean
}

const Separator = ({left}:SeparatorProps) => {

    return (
        <div className={`w-full lg:w-5xl flex flex-row${!left && "-reverse"} mx-auto`}>
            <div className="my-4 border-t border-color-primary w-2/3 " />
        </div>
    )
}

export default Separator