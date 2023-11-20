export const DashboardCardTwo = ({ item }) => {
    const { icon: Icon, bgcolor, title, point,color } = item
    return (
        <div className='flex gap-3 p-6 justify-start items-center rounded-md bg-base-200 '>

            <div className={`rounded-full w-[48px] h-[48px] ${bgcolor} flex items-center justify-center text-white `}>
                <Icon size={18} className={color} />
            </div>
            <div className="flex flex-col  gap-1 justify-center items-start">
                <h3 className='capitalize'>{title}</h3>
                <h1 className='text-2xl font-bold leading-none'>{point}</h1>
            </div>
        </div>
    )
}