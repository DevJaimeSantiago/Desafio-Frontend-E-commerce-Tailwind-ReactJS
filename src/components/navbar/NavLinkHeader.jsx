
export default ({text}) => {
    return (
        <a href="#" className="group py-4 relative md:py-8">
            <span className="group-hover:text-orange-primary"> {text} </span>
            <span className=" absolute bottom-0 block w-full h-2 scale-x-0 group-hover:scale-x-100 group-hover:bg-orange-primary transition-all duration-700"></span>
        </a>
    )
}