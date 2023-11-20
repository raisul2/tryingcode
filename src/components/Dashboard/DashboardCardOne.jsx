


 
export const DashboardCardOne = ({ item }) => {
    const { icon: Icon, title, bgcolor, pay, pamethod } = item
    return (
      <div className={`p-6 text-white rounded-md ${bgcolor} flex flex-col  text-center justify-start gap-2`}>
        <div className='flex items-center flex-col gap-1'>
          <Icon size={30} />
          <span className='text-base'>{title}</span>
        </div>
        <h2 className='text-2xl font-bold leading-none text-gray-50 dark:text-gray-50'>{pay}</h2>
        <div className="flex justify-center gap-1">
          {
            pamethod && (
              pamethod.map((item, index) => (
                <div className='px-1 text-center  text-sm'>
                  <span>
                    {item.name}
                  </span>: <br />
                  <span>
                    {item.pay}
                  </span>
                </div>
              ))
  
            )
          }
        </div>
      </div>
    )
  }
  