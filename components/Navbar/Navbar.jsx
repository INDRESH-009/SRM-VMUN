const Navbar = () => {
  return (
    <div className="flex items-center justify-between">
        <div className="ml-20">
            <img src="event-logo.png" alt="" className="h-20 w-auto"/>
        </div>  
        <div className="">
              <ul className="flex gap-6 tracking-wide ">
                  <li>Home</li>
                  <li>Committees</li>
                  <li>Resources</li>
                  <li>Allotments</li>
              </ul>
        </div>
        <div className="mr-20">
              <img src="mun-logo.png" alt="" className="h-14 w-auto" />
        </div>
    </div>
  )
}

export default Navbar
